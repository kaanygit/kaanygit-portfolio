import { ProviderStore } from '@/redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import { Gothic_A1 } from 'next/font/google'
import { FooterComponent, Navbar } from '@/components/export.components'

const gothicA1 = Gothic_A1({ subsets: ['latin'],weight:"500" })

export const metadata: Metadata = {
  title: 'Kaanygit',
  description: 'Kaanygit Portfolio Page',
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
          {children}  
          <FooterComponent/>
        </ProviderStore>
      </body>
    </html>
  )
}
