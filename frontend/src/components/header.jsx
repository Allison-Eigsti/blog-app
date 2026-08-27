import { Link } from "react-router-dom";

function Header({ handleLogout }) {
    const token = localStorage.getItem("token");

    return (
        <nav className="bg-slate-900 text-white shadow-md">
            <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">

            <Link className="flex items-center gap-8" to="/">Home</Link>

            {token && (
                <Link className="flex items-center gap-8" to="/posts">Posts</Link>
            )}

            {!token && (
                <>
                    <Link className="flex items-center gap-8" to="/login">Login</Link>
                    <Link className="flex items-center gap-8" to="/register">Register</Link>
                </>
            )}

            {token && (
                <button onClick={handleLogout}>
                    Logout
                </button>
            )}
            </div>
        </nav>
    );
}

export default Header;