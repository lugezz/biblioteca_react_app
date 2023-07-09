import axios from "axios"
import {useState,useEffect} from  "react"
import {useNavigate,useParams} from "react-router-dom"

const url = "http://team5.com.ar/api/v1/libraries/book/";


const EditBook = () =>{

    const [title, setTitulo] = useState("");
    const [description, setDescripcion] = useState("");
    const [author, setAutor] = useState("");
    const [genre, setGenero] = useState("");
    const [image, setImagen] = useState("");
  
    const navigate = useNavigate();

    const {bookId} = useParams()

    // procedimiento para editar un libro
    const editar = async (e) => {
        e.preventDefault();
        await axios.patch(url+bookId, {
          title,
          description,
          author,
          genre,
          image,
        });
        navigate("/book/"+bookId);
      };

      useEffect(()=>{
        //metodo para traer un libro por su id
        getBookById()
              },[])

              const getBookById = async()=>{
                const res = await axios.get(url+bookId)
                setTitulo(res.data.data.book.title)
                setDescripcion(res.data.data.book.description)
                setAutor(res.data.data.book.authorId)
                setGenero(res.data.data.book.genreId)
                setImagen(res.data.data.book.image)
              }
            
            const thisTitle = !title ? "" : title
            const thisDescription = !description ? "" : description
            const thisAuthor = !author ? "" : author
            const thisGenre = !genre ? "" : genre
            const thisImage = !image ? "" : image

            return(
              <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
              <div className="w-full pt-12 shadow-xl p-10 bg-white max-w-xl rounded">
                <form onSubmit={editar} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="flex block justify-center text-4xl font-black mb-4"><strong>Crear Libro</strong></h1>
                  <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input
                      className="form-control"
                      value={thisTitle}
                      onChange={(e) => setTitulo(e.target.value)}
                      type="text"
                    />
                  </div>
          
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input
                      className="form-control"
                      value={thisDescription}
                      onChange={(e) => setDescripcion(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el autor de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Autor</label>
                    <input
                      className="form-control"
                      value={thisAuthor}
                      onChange={(e) => setAutor(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el género de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Genero</label>
                    <input
                      className="form-control"
                      value={thisGenre}
                      onChange={(e) => setGenero(e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">url de la imagen</label>
                    <input
                      className="form-control"
                      value={thisImage}
                      onChange={(e) => setImagen(e.target.value)}
                      type="text"
                    />
                  </div>

                  <button type="submit" className=" btn bg-turquesa hover:bg-blue-black text-white transition-colors duration-150 bg-turquesa hover:bg-black">
                  EDITAR
                  </button>
                </form>
              </div>
              </section>
            )
        }
    

export default EditBook;