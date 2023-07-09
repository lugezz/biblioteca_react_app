import { useState } from "react"
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const username = localStorage.getItem('username')

export const Navbar = () => {

    let Links = [
       {name: 'Home', link:"/", key: 'home'},
       {name: 'Libros', link:"/book", key: 'libros'}
    ]

    if (username) {
        Links.push({name: 'Cerrar sesión', link:"/logout", key: 'logout'})
        Links.push({name: 'Libros prestados', link:"/book/orders", key: 'pedidos'})
    } else {
        Links.push({name: 'Iniciar sesión', link:"/login", key: 'login'})
    }

    let [open, setOpen] = useState (false);
    return (
        <div className='shadow-md w-full top-0 left-0 fixed z-[100]'>
            <div className='md:px-10 py-3 px-7 md:flex justify-between items-center bg-white'>
                <Link to="/" className='no-underline'>
                    <div className='flex md:text-2xl sm:text-small cursor-pointer items-center gap-2'>
                        <ImBooks className='h-7 w-7 text-black'/>
                        <span className='font-bold text-black'>LOS NEUTRONES | Libros Online</span>
                    </div>
                </Link>
                <ul className={`md:flex md:items-center md:pb-0 mb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.key}>
                        <Link to={link.link} className='text-black hover:underline hover:underline-offset-8 duration-500 no-underline'>{link.name}</Link>
                    </li>))
                    }
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <p className='text-black hover:underline hover:underline-offset-8 duration-500 no-underline'>Bienvenido {username}</p>
                    </li>
                </ul>
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-4 px-5 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open? <HiOutlineX className='text-black font-bold w-6 h-6'/> : <HiOutlineMenuAlt3 className='text-black font-bold w-6 h-6'/> 
                    }
                </div>
            </div>
        </div>
    );
};