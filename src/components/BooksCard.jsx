import "./BooksCard.css"
import {Link} from "react-router-dom"
export const BooksCard = ({book}) => {

const imgURL= `${book.image}`

  return (
       
    <li className="booksCard">
          <Link to={`${book.id}`}>
                      <div className="card">
                                    <div className="card-body">
                                        <div className="card-img-actions">
                                        <img className="bookImage card-img img-fluid" height="50%" width="100%" src={imgURL} alt={book.title} />                                              
                                        </div>
                                    </div>

                                    <div className="card-body bg-light text-center">
                                        <h6 className="items-center mb-2 font-weight-semibold">$250.99</h6>
                                         <div className="items-center text-muted mb-3">34 reviews</div>
                                        <button
                                            type="button"
                                            className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-grey bg-grey-700 rounded-lg hover:bg-grey-800 focus:ring-none focus:outline-none focus:ring-grey-300 dark:bg-grey-600 dark:hover:bg-grey-700 dark:focus:ring-grey-800"
                                        >
                                            VER LIBRO
                                        </button>
                                    </div>
                                </div>
          </Link>

    </li>
  );
};
