import { Layout } from "../components/Layout/Layout"
import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../features/auth/hooks/useAuth"
export const Protected = () => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
