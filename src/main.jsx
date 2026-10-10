import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar.jsx'
import Entertainment from './Entertainment.jsx'
import Books from './Books.jsx'
import Book from './Book.jsx'
import Magazines from './Magazines.jsx'
import Stationery from './Stationery.jsx'
import Notfound from './Notfound.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route path='/books' element={<Books />}>
                        <Route path=':bookId' element={<Book />} />
                    </Route>
                    <Route path='/stationery' element={<Stationery />} />
                    <Route path='/entertainment' element={<Entertainment />} />
                    <Route path='/magazines' element={<Magazines />} />

                    <Route path='*' element={<Notfound />} />
                </Route>



            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
