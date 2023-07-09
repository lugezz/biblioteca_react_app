import axios from "axios";
import { useNavigate,useParams } from "react-router-dom"

const BorrowBook = () => {
  const { bookId } = useParams()
  const userId = localStorage.getItem("userId")
  const url = `https://team5.com.ar/api/v1/libraries/borrow/${bookId}`

  const borrowB = async (error) => {
    await axios.post(url, {userId});
    if (error) {
      return <div>Ocurrió un error: {error.message}</div>;
    } else {
      window.location.href = "/#/book/orders";
    }
  };

  borrowB();
}


export default BorrowBook;