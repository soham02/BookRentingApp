import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import Addbook from "./pages/Addbook"
import {Toaster} from "react-hot-toast"
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import RedirectAuthenticatedUser from "./providers/RedirectAuthenticatedUsers";
import RedirectUnauthenticatedUser from "./providers/RedirectUnauthenticatedUsers";
import Footer from "./components/Footer";
import Searchpage from "./pages/SearchPage"
import UpdateBook from "./pages/UpdateBook";
import Bookpage from "./pages/Bookpage";
function App() {

  const { fetchUser, fetchingUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchingUser) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <Toaster />
    <Navbar />
    <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route 
            path={"/add-book"} 
            element={
              <RedirectUnauthenticatedUser>
                <Addbook />
              </RedirectUnauthenticatedUser>
              } />
          <Route 
            path={"/login"} 
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            } 
          />
          <Route 
            path={"/signup"} 
            element={
              <RedirectAuthenticatedUser>
                <SignupPage />
              </RedirectAuthenticatedUser>
            } 
          />
          <Route path="/book/:id" element={<Bookpage />} />
          <Route
          path="/book/:id/update"
          element={
            <RedirectUnauthenticatedUser>
              <UpdateBook />
            </RedirectUnauthenticatedUser>
          }
        />
          <Route path="/search" element={<Searchpage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
