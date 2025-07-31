// import '../styles/globals.css'
// import { Poppins } from 'next/font/google'

// const poppins = Poppins({
//   weight: ['400', '500', '600', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })

// export const metadata = {
//   title: 'Travel Website',
//   description: 'Explore new worlds with exotic natural scenery',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={poppins.className}>{children}</body>
//     </html>
//   )
// }


// The below code is  

import '../styles/globals.css'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Travel Website',
  description: 'Explore new worlds with exotic natural scenery',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Hero Section */}


        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  )
}
