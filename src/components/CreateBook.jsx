import axios from "axios"
import {useState,useEffect} from  "react"
import {useNavigate,useParams} from "react-router-dom"

const url = "https://team5.com.ar/api/v1/libraries/book/";


const CreateBook = () =>{

    const [title, setTitulo] = useState("");
    const [description, setDescripcion] = useState("");
    const [authorId, setAutor] = useState("");
    const [genreId, setGenero] = useState("");
    const [image, setImagen] = useState("");
  
    const navigate = useNavigate();

    // procedimiento para editar un post
    const create = async (e) => {
        e.preventDefault();
        const thisBook = await axios.post(url, {
          title,
          description,
          authorId,
          genreId,
          image,
        });
        const thisBookId = thisBook.data.data.book.id
        
        navigate("/#/book/"+thisBookId);
      };

      useEffect(()=>{},[])

            return(
              <section className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
              <div className="w-full pt-12 shadow-xl p-10 bg-white max-w-xl rounded">
                <form onSubmit={create} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="flex block justify-center text-4xl font-black mb-4"><strong>Crear Libro</strong></h1>
                  <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={title}
                      onChange={(e) => setTitulo(e.target.value)}
                      type="text"
                    />
                  </div>
          
                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={description}
                      onChange={(e) => setDescripcion(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el autor de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3 block text-gray-700 text-sm font-bold mb-2">
                    <label className="form-label">Id Autor</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={authorId}
                      onChange={(e) => setAutor(e.target.value)}
                      type="text"
                    />
                  </div>

                  {/* TODO:Tomar el género de una lista desplegable y de ahi tomar el id */}
                  <div className="mb-3">
                    <label className="form-label">Id Genero</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={genreId}
                      onChange={(e) => setGenero(e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">URL de la imagen</label>
                    <input
                      className="form-control block text-gray-700 text-sm font-bold mb-2"
                      value={image}
                      onChange={(e) => setImagen(e.target.value)}
                      type="text"
                    />
                  </div>

                  <button type="submit" className=" btn bg-turquesa hover:bg-blue-black text-white transition-colors duration-150 bg-turquesa hover:bg-black">
                    CREAR
                  </button>
                </form>
              </div>
              </section>
            )
        }
    

export default CreateBook;