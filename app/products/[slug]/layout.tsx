

export const metadata = {
  title: 'Product Page',
  description: 'Product description',
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
