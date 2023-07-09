import { Link } from "react-router-dom";
import { get } from "../../utils/httpClient"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiArrowCircleLeft, HiPencilAlt, HiTrash } from "react-icons/hi";

export const BookDetails = () => {

  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [genre, setGenre] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    get(`/libraries/book/${bookId}`).then((data) => {
        setBook(data.data.book)
        get(`/libraries/genre/${data.data.book.genreId}`).then((data) => {
          setGenre(data.data.genre);
        });
        get(`/libraries/author/${data.data.book.authorId}`).then((data) => {
          setAuthor(data.data.author);
        });
      });
  }, [bookId]);

  if (!book || !genre || !author) {
    return null;
  }
  const description = !book.description ? book.title : book.description;

  return (
  <>
    <section key={book.id}
    className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 place-items-center pt-10 sm:pt-20 sm:mt-5 sm:z-50 gap-4 md:gap-0
    ${
      book? "overflow-hidden" : ""
    } mt-[4rem] sm:mt-0`}
  >
    {/* seccion imagen  */}
    <div className="h-[20rem] md:h-[28rem] md:mt-6 md:mx-3 md:w-[25rem]">
    <img
        src={
          book.image
            ? book.image
            : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        }
        alt={book.title}
        className="rounded-xl object-conntain w-full h-full"
      />
    </div>

    {/* seccion resumen  */}
    
    <div className="lg:col-span-2 space-y-5 max-w-[50rem]">
      <Link
        to="/book" className="no-underline text-para_text transition duration-200 ease-in hover:text-blue hover:tracking-wider">
      <HiArrowCircleLeft className="text-3xl"></HiArrowCircleLeft></Link>
      <h1 className="md:max-w-[700px] md:text-3xl sm:text-2xl md:mt-2.5 font-bold text-center px-3 py-2">{book.title}</h1>
      <div className="flex justify-between items-center gap-4">
        <span className="border border-black rounded-lg px-3 py-1 mr-3 sm:text-sm">
          {genre.name}
        </span>
      </div>
      <div className="px-2">
        <h1 className="font-bold md:text-2xl sm:text-sm mb-1">RESUMEN:</h1>
        <p>{ description }</p>
      </div>
      <div className="text-para_text px-2 pb-10">
        <p><strong>Autor:</strong> {author.name || "Desconocido"}</p>
      </div>
      <div className="px-5 flex flex-col sm:flex-row md:justify-start sm:justify-center sm:items-center">
        <button className="h-10 px-5 m-2 font-bold text-white sm:text-sm transition-colors duration-150 bg-turquesa rounded-full focus:shadow-outline hover:bg-black flex items-center justify-center">
          <Link to={`/book/${book.id}/borrow`}>
            Pedir Libro
          </Link>
        </button>
        <button className="h-10 md:px-5 sm:w-auto m-2 text-white sm:text-sm transition-colors duration-150 bg-blue rounded-lg focus:shadow-outline hover:bg-blue_black flex items-center justify-center">
          <Link to={`/book/${book.id}/edit`}>
            <HiPencilAlt className="text-md" />
          </Link>
        </button>
        <button className="h-10 md:px-5 sm:w-auto m-2 text-white sm:text-sm transition-colors duration-150 bg-red rounded-lg focus:shadow-outline hover:bg-red_black flex items-center justify-center">
          <Link to={`/book/${book.id}/delete`}>
            <HiTrash className="text-md" />
          </Link>
        </button>
        <button className="h-10 px-5 m-2 font-bold text-white sm:text-sm transition-colors duration-150 bg-turquesa rounded-full focus:shadow-outline hover:bg-black flex items-center justify-center">
          <Link to={`/book/${Math.max(1, book.id - 1)}`}>
            Anterior
          </Link>
        </button>
        <button className="h-10 px-5 m-2 font-bold text-white sm:text-sm transition-colors duration-150 bg-turquesa rounded-full focus:shadow-outline hover:bg-black flex items-center justify-center">
          <Link to={`/book/${book.id + 1}`}>
            Próximo
          </Link>
        </button>
      </div>
    </div>

  </section>
    </>
  );
};

