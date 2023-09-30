import Header from '@/components/header'

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}
