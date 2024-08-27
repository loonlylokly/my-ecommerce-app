'use client';

import { store } from '@/shared/lib/store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
