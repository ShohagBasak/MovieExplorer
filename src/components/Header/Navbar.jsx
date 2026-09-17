import { Clapperboard } from "lucide-react";
import { Link } from "react-router";


const Navbar = () => {
    return (
        <header className="bg-slate-800 border-b border-slate-700 ">
            <div className="navbar max-w-7xl mx-auto px-4">
                <div className="navbar-start">
                    <Link
                        to="/"
                        className="btn bg-transparent border-none shadow-none text-2xl font-bold p-0 text-sky-500"
                    >
                        <Clapperboard /> MovieExplorer
                    </Link>
                </div>
                <div className="navbar-end">
                    <Link
                        to="/movies"
                        className="btn btn-info text-base-100 rounded-full"
                    >
                        Movies
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;