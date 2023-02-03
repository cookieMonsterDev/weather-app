import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';

export const useCustomDispatch = () => useDispatch<AppDispatch>();
