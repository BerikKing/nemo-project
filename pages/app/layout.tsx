import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400','700'],
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}