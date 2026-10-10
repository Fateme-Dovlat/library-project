import { Link, Outlet } from "react-router-dom"
const Navbar = () => {

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
           <div className="container d-flex justify-content-end">
                <div className="navbar-nav gap-3">
                    <Link className="nav-link" to="/books">کتابها</Link>
                    <Link className="nav-link" to="/stationery">لوازم تحریر</Link>
                    <Link className="nav-link" to="/entertainment">فرهنگی و سرگرمی</Link>
                    <Link className="nav-link" to="/magazines">مجله30بوک</Link>
                </div>
            </div>
        </nav>

        <Outlet />
    </>
)
}

export default Navbar