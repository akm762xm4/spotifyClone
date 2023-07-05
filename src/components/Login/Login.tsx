import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useGetTokenMutation } from "../../features/auth/api/authApi"
import { setUser } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [getToken, { data: token, isSuccess, error }] = useGetTokenMutation()
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", token.access_token)
      dispatch(setUser(token?.access_token))
      console.log("Token::", token)
      navigate("/songs")
    } else if (error) {
      console.log("Error", error)
    }
  }, [isSuccess])

  return <button onClick={() => getToken()}>Login</button>
}
