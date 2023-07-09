import axios from "axios";
import "./BooksCard.css"
import {Link} from "react-router-dom"
import {useState,useEffect} from  "react"

const url = "http://team5.com.ar/api/v1/libraries/book/";

export const BorrowedBooksCard = ({book}) => {
    const [title, setTitulo] = useState("");
    const [image, setImagen] = useState("");
    const [borrowedOn, setPrestadoFecha] = useState("");
  
    useEffect(()=>{
        //metodo para traer un libro por su id
        getBookById()
              },[])

              const getBookById = async()=>{
                const res = await axios.get(url+book.id)
                setTitulo(res.data.data.book.title)
                setImagen(res.data.data.book.image)
                setPrestadoFecha(book.borrowedOn)
              }

  return (
       
    <li className="booksCard">
          <Link to={`${book.id}`}>
                      <div className="card">
                                    <div className="card-body">
                                        <div className="card-img-actions">
                                        <img className="bookImage card-img img-fluid" height="50%" width="100%" src={image} alt={title} />                                              
                                        </div>
                                    </div>

                                    <div className="card-body bg-light text-center">
                                        <div className="items-center">{title}</div>
                                        <small className="text-muted">
                                            Prestado el {borrowedOn}
                                        </small>
                                        <button
                                            type="button"
                                            className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-grey bg-grey-700 rounded-lg hover:bg-grey-800 focus:ring-none focus:outline-none focus:ring-grey-300 dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-grey-800"
                                        >
                                            Devolver
                                        </button>
                                    </div>
                                </div>
          </Link>

    </li>
  );
};
