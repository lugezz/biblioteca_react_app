import { useEffect, useState } from 'react'
import { logout } from '../../utils/httpClient'
import { useNavigate } from 'react-router-dom'

const LogoutForm = () => {
  const navigate = useNavigate()
  let [isLoggedIn, setUserIsLogged] = useState(true)
  
  const checkLogin = () => {
    const username = localStorage.getItem('username');
    if (!username || username === 'undefined') {
      setUserIsLogged(false)
      return navigate('/login')
    } else {
      setUserIsLogged(true)
    }
  }

  const handleLogout = async (e) => {
    const respLogout = await logout()
    setUserIsLogged(false)
    if (respLogout.status != 'success') {
      alert("Error al cerrar sesión, intente nuevamente." + respLogout)
      return
    } else {
      setUserIsLogged(false)
    }
  }

  handleLogout();

  // Use effect y useNavigate si está logueado
  useEffect(() => {
    checkLogin();
  }, [isLoggedIn])
  
  return null
}

export default LogoutForm;