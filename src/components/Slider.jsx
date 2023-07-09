import {get} from "../../utils/httpClient.js"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

let nroPagina = 1

export const Slider = () => {

    const [books,setBooks] = useState([])
    useEffect(()=>{
    get(`/libraries/book/?page=${nroPagina}`).then((data)=>{
    setBooks(data.data.books);
    })
    },[nroPagina])

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        {books.map((book) => (
        <SwiperSlide key={book.id} className="mt-[4rem] sm:mt-0">
          <img src={book.image} alt={book.title}/>
          <div className="text underline-offset-8" data-swiper-parallax="-100">
            <Link to={`/book/${book.id}`}><p>Ver Libro</p></Link>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      {/* Botones "Anterior" y "Siguiente" */}
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded"
          onClick={() => {
            nroPagina = Math.max(1, nroPagina - 1);
            get(`/libraries/book/?page=${nroPagina}`).then((data) => {
              setBooks(data.data.books);
            });
          }}
        >
          Anterior
        </button>
        {/* Botón Crear */}
        <button
          className="bg-green-500 hover:bg-green-700 text-blue font-bold py-2 px-4 rounded"
          onClick={() => {
            window.location.href = "/book/create";
          }}
        >
          Crear Libro
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-blue font-bold py-2 px-4 rounded"
          onClick={() => {
            nroPagina = nroPagina + 1;
            get(`/libraries/book/?page=${nroPagina}`).then((data) => {
              setBooks(data.data.books);
            });
          }}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
