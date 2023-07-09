import backgroundImage from "../assets/books.jpeg";
import { Link } from "react-router-dom";

export const LandingPage = () => {

  const isSmallScreen = window.innerWidth < 640;

  return (
    <div className={`flex items-center justify-center min-h-screen ${isSmallScreen ? 'px-4' : ''}`} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: isSmallScreen ? 'cover' : 'contain', backgroundPosition: 'center' }}>
      <div className={`max-w-md md:mb-8 p-8 ${isSmallScreen ? 'w-full' : 'w-1/2'}`}>
        <div className="text-center">
          <h1 className={`text-6xl ${isSmallScreen ? 'text-4xl' : ''} font-bold mb-4`}>¿Ya pediste tus libros?</h1>
          <p className={`text-gray-700 ${isSmallScreen ? 'text-lg' : 'text-2xl'} mb-6`}>Leer ... es soñar despierto</p>
        </div>
        <div className="flex justify-center">
          <button className={`bg-turquesa hover:bg-blue-black text-white ${isSmallScreen ? 'px-2 py-1' : 'px-4 py-2'} font-bold rounded`}>
            <Link to="/signup">
              <p className='sm:text-sm'>¡Quiero registrarme!</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};








