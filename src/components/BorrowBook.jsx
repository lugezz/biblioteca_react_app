import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const BorrowBook = () => {
  const navigate = useNavigate()
  const { bookId } = useParams()
  const userId = localStorage.getItem("userId")
  const url = `https://team5.com.ar/api/v1/libraries/borrow/${bookId}`
  let [borrowed, setBorrowed] = useState(false)

  const borrowB = async (error) => {
    await axios.post(url, {userId});
    if (error) {
      return <div>Ocurrió un error: {error.message}</div>;
    } else {
      setBorrowed(true);
      return navigate('/book/orders')
    }
  };



  useEffect(() => {
    borrowB();
  }, [borrowed])

  
}


export default BorrowBook;