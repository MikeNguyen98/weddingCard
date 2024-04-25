import DefaultLayout from '@/layout/DefaultLayout'

const PublicRoute = ({children}: {children: React.ReactNode}) => {
  return (
    <DefaultLayout>{children}</DefaultLayout>
  )
}

export default PublicRoute