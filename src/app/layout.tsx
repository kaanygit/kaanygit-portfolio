import { ProviderStore } from '@/redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'
import { FooterComponent, LoadingComponent, Navbar } from '@/components/export.components'
import { Suspense } from 'react'

const gothicA1 = Gothic_A1({ subsets: ['latin'],weight:"500" })

export const metadata: Metadata = {
  title: 'Kaanygit',
  description: 'Kaanygit Portfolio Page',
  icons:{
    icon:'../assets/icon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gothicA1.className}>
        <ProviderStore>
          <Navbar/>
            <Suspense fallback={<LoadingComponent/>}>{children}</Suspense> 
          <FooterComponent/>
        </ProviderStore>
      </body>
    </html>
  )
}
