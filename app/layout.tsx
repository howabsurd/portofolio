import React from "react"

export const metadata = {
  title: 'KRISH POPTANI',
  description: 'Krish Poptani official portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
