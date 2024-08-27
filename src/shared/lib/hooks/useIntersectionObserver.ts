import type { RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

import { getElement } from '@/shared/lib/helpers/getElement';

/** The intersection observer target element type */
export type UseIntersectionObserverTarget =
  | RefObject<Element | null | undefined>
  | (() => Element)
  | Element;

/** The intersection observer options type */
export interface UseIntersectionObserverOptions extends Omit<IntersectionObserverInit, 'root'> {
  enabled?: boolean;
  onChange?: (entry: IntersectionObserverEntry) => void;
  root?: IntersectionObserverInit['root'] | RefObject<Element | null | undefined>;
}

/** The intersection observer return type */
export interface UseIntersectionObserverReturn {
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export interface UseIntersectionObserver {
  <Target extends UseIntersectionObserverTarget>(
    target: Target,
    options?: UseIntersectionObserverOptions
  ): UseIntersectionObserverReturn;

  <Target extends UseIntersectionObserverTarget>(
    options?: UseIntersectionObserverOptions,
    target?: never
  ): UseIntersectionObserverReturn & { ref: (node: Target) => void };
}

export const useIntersectionObserver = ((...params: any[]) => {
  const target = (
    typeof params[0] === 'object' && !('current' in params[0]) ? undefined : params[0]
  ) as UseIntersectionObserverTarget | undefined;
  const options = (target ? params[1] : params[0]) as UseIntersectionObserverOptions | undefined;
  const enabled = options?.enabled ?? true;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const [internalRef, setInternalRef] = useState<Element>();
  const internalOnChangeRef = useRef<UseIntersectionObserverOptions['onChange']>();
  internalOnChangeRef.current = options?.onChange;

  useEffect(() => {
    if (!enabled || !internalRef) return;
    const element = target ? getElement(target) : internalRef;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        internalOnChangeRef.current?.(entry);
      },
      {
        ...options,
        root: options?.root ? (getElement(options?.root) as Element | Document) : document
      }
    );

    observer.observe(element as Element);

    return () => {
      observer.disconnect();
    };
  }, [target, internalRef, options?.rootMargin, options?.threshold, options?.root, enabled]);

  if (target) return { entry, inView: !!entry?.isIntersecting };
  return {
    ref: setInternalRef,
    entry,
    inView: !!entry?.isIntersecting
  };
}) as UseIntersectionObserver;