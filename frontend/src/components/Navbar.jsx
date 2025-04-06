import { Link } from "react-router"
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logout } = useAuthStore();

    console.log("User:", user)

    const handleLogout = async () => {
        const { message } = await logout();
        toast.success(message);
      };

    return (
        <nav className="bg-[#252422] flex justify-between items-center text-[#FFFCF2] 
        px-4 md:px-12 py-4 md:py-6">
            <Link to="/" >
                <label className="font-semibold tracking-wider 
                md:text-lg lg:text-xl cursor-pointer">♟️BookRent♟️
                </label>
            </Link>
            {user ? (
                    <div className="flex items-center space-x-5 md:text-lg">
                        <Link to={"/add-book"} className="text-sm font-medium hover:underline">
                            <span>Add book</span>
                        </Link>
                        <p onClick={handleLogout}>Logout({user.username})</p>
                    </div>
                ):( 
                <div className="flex-1 flex justify-center space-x-4">
                    <Link to={"/login"} className="text-sm font-medium hover:underline"><p>Add book</p></Link>
                    <Link to={"/login"} className="text-sm font-medium hover:underline"><p>Log in</p></Link>
                    <Link to={"/signup"} className="text-sm font-medium hover:underline"><p>Sign up</p></Link>
                </div>
            )} 
        </nav>
    )
}

export default Navbar
