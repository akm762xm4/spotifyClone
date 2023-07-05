import { Navigate } from "react-router-dom"
import { useAuth } from "../features/auth/hooks/useAuth"
export const Public = () => {
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/songs" />
  }
  return <Navigate to="/login" />
}
