import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginForm.css'
import { login } from '../../utils/httpClient'
import { Link, useNavigate } from 'react-router-dom'


const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    const username = localStorage.getItem('username');
    if (username) {
      return navigate('/book')
    }
  }

  // Inicio Sesión
  const handleLogin = async (e) => {
    e.preventDefault()
    const {username, password} = e.target.elements
    const result = await login(username.value, password.value, "/book")

    if (result.status != 'success') {
      alert("Error al iniciar sesión, intente nuevamente.")
      return
    } else {
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    checkLogin();
    }, [isLoggedIn]);

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>   
    <div className='login'>
      <h2 className='mb-3'>Login</h2>
    <form className='needs-validation' onSubmit={handleLogin} noValidate>
      <div className='form-group was-validated mb-2'>
          <label htmlFor='text' className='form-label'>Usuario</label>
          <input type="text" className='form-control' name="username" required></input>
          <div className="invalid-feedback">
            Ingresá tu nombre de usuario            
          </div>      
      </div> 
      <div className='form-group was-validated mb-2'>
          <label htmlFor='password' className='form-label'>Contraseña</label>
          <input type="password" className='form-control' name="password" required></input>
          <div className="invalid-feedback">
            Ingresá tu contraseña            
          </div>
      </div> 
      <div className='form-group form-check mb-2'>
          <input type="checkbox" className='form-check-input'></input>
          <label htmlFor='check' className='form-check-label'>Recordarme</label>
      </div>    
      <button type='submit' className='btn btn-succes w-100 mt-2'>
        Iniciar Sesión
      </button>
      <p className='titulo' >No estás registrado? - 
        <Link to="/signup">
            Registrarme
        </Link>
      </p>
      </form>       
    </div>  
    </div> 
  )
}

export default LoginForm;