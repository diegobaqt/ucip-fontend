// Libraries
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

// Reducers combiner
import reducer from './redux/reducers';

export const store = configureStore({
  reducer,
});

export const useAppDispatch = useDispatch;