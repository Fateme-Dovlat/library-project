import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom"
import { getBooks } from "./data/data"

const Books = () => {
    let bookList = getBooks()
    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation()

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <Outlet />
                </div>

                <div className="col-md-4 d-flex flex-column pe-md-4 text-end">
                    <h4 className="fw-bold mb-3">کتاب ها</h4>
                    <input type="text" className="form-control mb-3"
                        value={searchParams.get("text") || ""}
                        onChange={(event) => {
                            let inputValue = event.target.value;
                            if (inputValue) {
                                setSearchParams({ text: inputValue })
                            } else {
                                setSearchParams({})
                            }
                        }} />
                    {
                        bookList
                            .filter((bookfiltered) => {
                                let filter = searchParams.get("text")

                                if (!filter) return true

                                let name = bookfiltered.name.toLowerCase();
                                return name.startsWith(filter.toLowerCase())
                            })

                            .map((book) => (
                                <NavLink
                                    to={`${book.id}${location.search}`}
                                    key={book.id} className="list-group-item 
                                    list-group-item-action mb-2 rounded"
                                    style={({ isActive }) => {
                                        return { color: isActive ? "red" : "" }
                                    }}
                                >{book.name}
                                </NavLink>
                            ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Books