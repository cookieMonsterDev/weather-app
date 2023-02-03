import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {  store } from '@/store/store';
import { Provider } from 'react-redux';
import Navbar from '../components/NavBar/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}
