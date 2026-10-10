import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getBook, deleteBook } from "./data/data"
const Book = () => {
    const params = useParams()
    const book = getBook(params.bookId)
    let location = useLocation()
    let navigate = useNavigate()

    if (book) {
        return (
            <div className="container mt-5">
                <div className="card shadow rounded">
                    <div className="card-body text-end">

                        <p className="card-text">
                            <h2 className="card-title mb-4 fw-bold text-center">{book.name}</h2>
                        </p>

                        <p className="card-text text-success">
                            <strong>قیمت:</strong>{" "}
                            <span className="fs-5 fw-bold">{book.price}</span>
                        </p>

                        <p className="card-text">
                            <strong>نویسنده:</strong>{" "}
                            {book.author}
                        </p>

                        <p className="card-text">
                            <strong>توضیحات:</strong>{" "}
                            {book.description}
                        </p>

                        <button className="btn btn-danger mt-3 d-block mx-auto"
                            onClick={() => {
                                deleteBook(book.id)
                                navigate("/books" + location.search)
                            }}
                        >حذف کتاب</button>

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container mt-5">
                <div className="alert alert-warning text-center">
                    کتاب موجود نیست
                </div>
            </div>
        )
    }
}

export default Book