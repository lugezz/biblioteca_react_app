
import { BookDetails } from "./pages/BookDetails";
import { BooksMain } from "./pages/BooksMain";
import { BorrowedBooks } from "./pages/BorrowedBooks";
import BorrowBook from "./components/BorrowBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./components/CreateBook";
import DeleteBook from "./components/DeleteBook";
import EditBook from "./components/EditBook";
import { LandingPage } from "./pages/LandingPage";
import LoginForm from "./components/LoginForm";
import LogoutForm from "./components/LogoutForm";
import { Navbar } from "./components/Navbar"
import ProtectedRoute from '../utils/protectedRoute';
import ReturnBook from "./components/ReturnBook";
import { SidebarAdmin } from "./pages/SidebarAdmin";
import SignupForm from "./components/SignupForm";

import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/logout" element={<LogoutForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/> */
          <Route path="/admin" element={<SidebarAdmin/>}/> */
          
          <Route path="/book" element={
            <ProtectedRoute>
              <BooksMain/>
            </ProtectedRoute>
          }/>
          <Route path="/book/:bookId" element={
            <ProtectedRoute>
              <BookDetails/>
            </ProtectedRoute>
          }/>
          <Route path="/book/:bookId/edit" element={
            <ProtectedRoute>
              <EditBook/>
            </ProtectedRoute>
          }/>
          <Route path="/book/:bookId/delete" element={
            <ProtectedRoute>
              <DeleteBook/>
            </ProtectedRoute>
          }/> 
          <Route path="/book/create" element={
            <ProtectedRoute>
              <CreateBook/>
            </ProtectedRoute>
          }/> 
          <Route path="/book/orders" element={
            <ProtectedRoute>
              <BorrowedBooks/>
            </ProtectedRoute>
          }/>
          <Route path="/book/orders/:bookId" element={
            <ProtectedRoute>
              <ReturnBook/>
            </ProtectedRoute>
          }/>
          <Route path="/book/:bookId/borrow" element={
            <ProtectedRoute>
              <BorrowBook/>
            </ProtectedRoute>
          }/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
