import type { AppDispatch } from '@/shared/lib/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();