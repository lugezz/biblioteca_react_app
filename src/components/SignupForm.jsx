import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginForm.css'
import { signup } from '../../utils/httpClient'


// Inicio Sesión
const handleSignup = async (e) => {
  e.preventDefault()
  const {username, password, password2, fullName, address} = e.target.elements

  if (password.value != password2.value) {
    alert("Las contraseñas observadas no coinciden")
    return
  }

  const result = await signup(
    username.value,
    password.value,
    fullName.value,
    address.value,
    "/book")

  if (result.status != 'success') {
    alert("Error al realizar el registro, intente nuevamente.")
    return
  }

  return result
}


const SignupForm = () => {
    // Enviar a página principal si está logueado
    if (localStorage.getItem('username')) {
      window.location.href = "/book"
    }

    return (
     <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>   
      <div className='login'>
        <h2 className='mb-3'>Registro</h2>
      <form className='needs-validation' onSubmit={handleSignup} noValidate>
        <div className='form-group was-validated mb-1'>
            <label htmlFor='text' className='form-label'>Usuario</label>
            <input type="text" className='form-control' name="username" required></input>
            <div className="invalid-feedback">
              Ingresá tu nombre de usuario            
            </div>      
        </div> 
        <div className='form-group was-validated mb-1'>
            <label htmlFor='password' className='form-label'>Contraseña</label>
            <input type="password" className='form-control' name="password" required></input>
            <div className="invalid-feedback">
              Ingresá tu contraseña            
            </div>
        </div>
        <div className='form-group was-validated mb-1'>
            <label htmlFor='password' className='form-label'>Contraseña</label>
            <input type="password" className='form-control' name="password2" required></input>
            <div className="invalid-feedback">
              Reingresá tu contraseña            
            </div>
        </div>
        <div className='form-group was-validated mb-1'>
            <label htmlFor='text' className='form-label'>Nombre Completo</label>
            <input type="text" className='form-control' name="fullName"></input>
            <div className="invalid-feedback">
              Nombre Completo
            </div>      
        </div> 
        <div className='form-group was-validated mb-1'>
            <label htmlFor='text' className='form-label'>Dirección</label>
            <input type="text" className='form-control' name="address"></input>
            <div className="invalid-feedback">
              Dirección
            </div>      
        </div>    
        <button type='submit' className='btn btn-succes w-100 mt-2'>
          Registrarse
        </button>
       </form>       
      </div>  
     </div> 
    )
}

export default SignupForm;