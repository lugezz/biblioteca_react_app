import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

const ReturnBook = () => {
  const { bookId } = useParams()
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId")
  const url = `https://team5.com.ar/api/v1/libraries/return/${bookId}`
  let [returned, setReturned] = React.useState(false)

  const returnB = async (error) => {
    await axios.post(url, {userId});
    if (error) {
      return <div>Ocurrió un error: {error.message}</div>;
    } else {
      setReturned(true);
    }
  };

  useEffect(() => {
    if (returned) {
      navigate('/book/orders')
    }
  }, [returned])

  returnB();

  return null
}


export default ReturnBook;