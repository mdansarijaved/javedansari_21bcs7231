'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { store, persistor } from '../store/index'
import { Provider } from 'react-redux'
import Nav from '@/components/nav-bar'
import { usePathname } from 'next/navigation'

import { PersistGate } from 'redux-persist/integration/react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname();


  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <main className={"main"}>
              <section className="hero-section">
                {pathname != '/login' && <Nav />}
                {children}
              </section>
            </main>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
