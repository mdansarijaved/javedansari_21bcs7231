'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { store, persistor } from '../store/index'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
