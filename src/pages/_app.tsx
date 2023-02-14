import '../styles/globalStyle.css';
import type { AppProps } from 'next/app'
import {  store, persistor } from '@/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Navbar from '../components/NavBar/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Navbar />
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
