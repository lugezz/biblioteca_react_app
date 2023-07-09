/* import peliculas from "./peliculas.json" */
import { get } from "../../utils/httpClient";
import { useState, useEffect } from "react";
import { BorrowedBooksCard } from "../components/BorrowedBooksCard";
import { Spinner } from "../components/Spinner";
import "./BorrowedBooks.css";

export const BorrowedBooks = () => {

const [cargando,setCargando]= useState(true);
const [books,setBooks] = useState([])
   
useEffect(()=>{
    const thisUrl = "/libraries/order"

    setCargando(true)
    get(thisUrl).then((data)=>{
        const orders = data.data.orders
        const userId = localStorage.getItem("userId")

        let tempBooks = []

        orders.map((order)=>{
            if(order.userId == userId){
                const borrowedOn = order.createdAt
                const borrowedDate = borrowedOn.slice(8,10) + "/" + borrowedOn.slice(5,7) + "/" + borrowedOn.slice(0,4)

                tempBooks.push({
                    "id": order.bookId,
                    "borrowedOn": borrowedDate,
                    "orderId": order.id
                })
            }
        })

        setBooks(tempBooks);
        setCargando(false)
    })
},[])

if(cargando){
    return <Spinner/>
  }

return(
    <ul className="booksGrid">
        {books.map((book)=>(
        <BorrowedBooksCard key={book.orderId} book={book}/>
        ))}
    </ul>
)
}