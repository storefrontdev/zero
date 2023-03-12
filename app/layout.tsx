import './globals.css'

import { StorefrontProvider } from '@/provider/storefront-provider'
import Navigation from '@/app/components/navigation'
import Cart from '@/app/components/cart/cart'
export const metadata = {
  title: 'Zero',
  description: 'Basic headless e-commerce setup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StorefrontProvider>
          <Navigation />
          <Cart />
          {children}
        </StorefrontProvider>
      </body>
    </html>
  )
}
