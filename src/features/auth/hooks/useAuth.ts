import { useMemo } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"

export const useAuth = () => {
  const token = useSelector((state: any) => state.auth.token)
  const isAuthenticated = useMemo(() => token !== null, [token])
  return { isAuthenticated }
}
