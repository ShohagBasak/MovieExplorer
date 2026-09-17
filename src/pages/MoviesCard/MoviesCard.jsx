import { CalendarDays, Star } from "lucide-react";


const MoviesCard = ({ movie,onSelectMovie }) => {
    const { image, name, rating, premiered } = movie;
    return (
        <div>
            <div className="card w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition duration-300">
                <figure className="w-full h-80 overflow-hidden bg-slate-950">
                    <img
                        src={image?.medium || movie?.image?.original}
                        alt={name || "Movie Poster"}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
                    <h2 className="text-lg font-bold text-white truncate" title={movie?.name}>
                        {movie?.name}
                    </h2>

                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="flex gap-1 items-center font-semibold text-amber-400">
                            <Star/> {rating?.average ?? "None"}
                        </span>
                        <span className="text-slate-500">•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                            <CalendarDays /> {premiered ? movie.premiered.slice(0, 4) : "None"}
                        </span>
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={() => onSelectMovie(movie)}
                            className="btn btn-primary w-full bg-cyan-500 hover:bg-cyan-600 border-none text-slate-950 font-bold tracking-wide"
                        >
                            See Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;