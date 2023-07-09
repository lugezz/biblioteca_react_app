import {get} from "../../utils/httpClient"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"; // 11 importamos useLocation
import { BooksCard } from "./BooksCard"
import { Spinner } from "./Spinner.jsx";
import "./BooksGrid.css"

export const BooksGrid=()=>{

const useQuery = ()=>{
  return  new URLSearchParams(useLocation().search)
}

const query = useQuery()
const search = query.get("search")
const [cargando,setCargando]= useState(true);
const [books,setBooks] = useState([])
   
useEffect(()=>{
    const searchUrl = search 
    ? "/libraries/search/book?query="+search 
    :"/libraries/book"

    setCargando(true)
    get(searchUrl).then((data)=>{  // 16 agrego searchUrl
        setBooks(data.data.books);
        setCargando(false)
    })
},[search]) 

if(cargando){
    return <Spinner/>
  }

return(
    <ul className="booksGrid">
        {books.map((book)=>(
        <BooksCard key={book.id} book={book}/>
        ))}
    </ul>
)
}