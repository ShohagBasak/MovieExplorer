import { useEffect, useState } from "react";
import { getMovies, searchMovies } from "../../services/get-movies";
import MoviesCard from "../MoviesCard/MoviesCard";
import Loading from "../Loading/Loading";
import { Clapperboard } from "lucide-react";
import MovieDetails from "../MovieDetails/MovieDetails";


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const data = await getMovies();
                // console.log(data);
                setMovies(data);
            } catch (error) {
                setError("Something went wrong!");
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fetchMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        const query = e.target.value;
        if (!query.trim()) {
            getMovies();
            return;
        };
        try {
            const searchContent = await searchMovies(query);
            setMovies(searchContent);
        } catch (error) {
            setError("search faild");
            console.log(error);
        };
    };

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <div className="text-center py-20 text-red-500">{error}</div>
    }
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="mb-10 flex justify-center">
                <label className="input input-bordered flex items-center gap-3 w-full max-w-xl h-14 bg-slate-900 border-slate-700 text-white rounded-2xl shadow-lg focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 px-5">
                    <svg
                        className="h-6 w-6 text-cyan-400 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <input
                        type="search"
                        onChange={handleSearch}
                        placeholder="Search for a movie..."
                        className="grow bg-transparent text-base md:text-lg placeholder:text-slate-500 focus:outline-none"
                    />
                </label>
            </div>
            {movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <MoviesCard key={movie.id} movie={movie} onSelectMovie={(data) => setSelectedMovie(data)}/>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 space-y-4">
                    <h3 className="text-2xl font-bold text-white inline-flex gap-2 items-center justify-center"><Clapperboard /> No Movies Found!</h3>
                    <p className="text-slate-400">
                        We couldn't find any movie matching your search. Please check the spelling or try searching with another keyword.
                    </p>
                </div>
            )}

            <MovieDetails movie={selectedMovie} onClose={()=>setSelectedMovie(null)}/>

            {error && <p className="text-center text-red-500 mt-6">{error}</p>}
        </div>
    );
};

export default Movies;