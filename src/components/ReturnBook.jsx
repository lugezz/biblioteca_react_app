import axios from "axios";
import { useNavigate,useParams } from "react-router-dom"

const ReturnBook = () => {
  const { bookId } = useParams()
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId")
  const url = `http://team5.com.ar/api/v1/libraries/return/${bookId}`

  const returnB = async (error) => {
    await axios.post(url, {userId});
    if (error) {
      return <div>Ocurrió un error: {error.message}</div>;
    } else {
      window.location.href = "/book/orders";
    }
  };

  returnB();

  return null
}


export default ReturnBook;