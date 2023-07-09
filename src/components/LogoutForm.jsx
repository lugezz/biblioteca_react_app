import { useEffect, useState } from 'react'
import { logout } from '../../utils/httpClient'
import { useNavigate } from 'react-router-dom'

const LogoutForm = () => {
  const navigate = useNavigate()

  let [userIsLogged, setUserIsLogged] = useState(true)
  if (!localStorage.getItem('username')) {
    setUserIsLogged(false)
  }

  const respLogout = logout()

  if (respLogout.status != 'success') {
    alert("Error al cerrar sesión, intente nuevamente.")
    return
  } else {
    setUserIsLogged(false)
  }

  // Use effect y useNavigate si está logueado
  useEffect(() => {
    if (userIsLogged) {
      navigate('/login')
    }
  }, [userIsLogged])
  
  return null
}

export default LogoutForm;