import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-stone-900 my-3 flex flex-col md:flex-row justify-between items-center py-5 px-10 rounded-lg w-full">
            <Link to={
                isAuthenticated ? "/" : "/"
            }>
                <h1 className="text-2xl font-bold my-2 text-center md:text-left">
                    Home
                </h1>
            </Link>
            <ul className="flex flex-col md:flex-row gap-x-2 gap-y-2 md:items-center">
                {isAuthenticated ? (
                    <>
                        <li className="hidden md:block my-2">Welcome {user.username}</li>
                        <li>
                            <Link to="/categories" className="bg-slate-100 px-4 py-1 rounded-sm text-black">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-category" className="bg-slate-100 px-4 py-1 rounded-sm text-black">
                                Add Category
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" className="bg-slate-100 px-4 py-1 rounded-sm text-black">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-product" className="bg-slate-100 px-4 py-1 rounded-sm text-black">
                                Add Product
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                onClick={() => {
                                    logout();
                                }}
                                className="bg-slate-100 px-4 py-1 rounded-sm text-black"
                            >
                                Logout
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link
                                to="/login"
                                className="bg-slate-100 px-4 py-1 rounded-sm text-black"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="bg-slate-100 px-4 py-1 rounded-sm text-black"
                            >
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;
