import DefaultLayout from '@/components/layout/DefaultLayout'

const PublicRoute = ({children}: {children: React.ReactNode}) => {
  return (
    <DefaultLayout>{children}</DefaultLayout>
  )
}

export default PublicRoute