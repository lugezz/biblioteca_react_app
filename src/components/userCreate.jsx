import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginForm.css'

export function UserCreate(){
    return (
     <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>   
      <div className='login'>
        <h2 className='mb-3'>Alta Usuario</h2>
      <form className='needs-validation'>
      <div className='form-group was-validated mb-2'>
            <label htmlFor='nombre' className='form-label'>Nombre</label>
            <input type="nombre" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu nombre           
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor='apellido' className='form-label'>Apellido</label>
            <input type="apellido" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu apellido            
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor='direccion' className='form-label'>Dirección</label>
            <input type="direccion" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu dirección          
            </div>
        </div>
        <div className='form-group was-validated mb-2'>
            <label htmlFor='telefono' className='form-label'>Teléfono</label>
            <input type="telefono" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu teléfono            
            </div>
        </div>    
        <div className='form-group was-validated mb-2'>
            <label htmlFor='email' className='form-label'>Usuario</label>
            <input type="email" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu email            
            </div>      
        </div> 
        <div className='form-group was-validated mb-2'>
            <label htmlFor='password' className='form-label'>Contraseña</label>
            <input type="password" className='form-control' required></input>
            <div className="invalid-feedback">
              Ingresá tu contraseña            
            </div>
        </div>     
        <button type='submit' className='btn btn-succes w-100 mt-2'>Aceptar</button>
       </form>       
      </div>  
     </div> 
    )
}