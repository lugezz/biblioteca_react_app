import axios from "axios"
import {useState,useEffect} from  "react"
import {useNavigate,useParams} from "react-router-dom"

const url = "http://team5.com.ar/api/v1/libraries/book/";


const DeleteBook = () =>{

    const [title, setTitulo] = useState("");
  
    const navigate = useNavigate();

    const {bookId} = useParams()

    // procedimiento para eliminar un post
    const deleteBook = async (e) => {
        e.preventDefault();
        await axios.delete(url+bookId);
        navigate("/book");
      };

      useEffect(()=>{
        //metodo para traer un post por su id
        getBookById()
              },[])

              const getBookById = async()=>{
                const res = await axios.get(url+bookId)
                setTitulo(res.data.data.book.title)
              }
            
            const thisTitle = !title ? "" : title
            
            // Formulario para eliminar un libro
            return(
              <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
              <div className="w-full pt-12 shadow-xl p-10 bg-white max-w-xl rounded">
                <form onSubmit={deleteBook} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="flex block justify-center text-4xl font-black mb-4"><strong>Eliminar Libro</strong></h1>
                  <div className="mb-3">
                    <p className="form-label">
                      Está a punto de eliminar el libro <strong>{thisTitle}</strong>. ¿Está seguro?
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Eliminar
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => navigate("/book/"+bookId)} type="button">
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </section>
            )
        }
    

export default DeleteBook;