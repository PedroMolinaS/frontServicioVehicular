import { useContext } from "react"
import AuthContext from "../../context/auth/authContext"

const useAuth = () => {

    const { globalAuthenticate } = useContext(AuthContext)

    return {globalAuthenticate}
}



export default useAuth