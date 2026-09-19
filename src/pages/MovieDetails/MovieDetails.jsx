import { CalendarDays, Star, X } from 'lucide-react';

const MovieDetails = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white my-8"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-950/70 hover:bg-slate-800 p-2 rounded-full transition"
        >
          <X className="w-5 h-5 text-slate-300" />
        </button>

        <div className="w-full h-64 sm:h-72 bg-slate-950 overflow-hidden relative">
          <img 
            src={movie.image?.original || movie.image?.medium || "https://via.placeholder.com/600x400?text=No+Image"} 
            alt={movie.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">{movie.name}</h2>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 border-b border-slate-800 pb-3">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-4 h-4 fill-amber-400" /> {movie.rating?.average ?? "N/A"}
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4 text-slate-400" /> {movie.premiered || "N/A"}
            </span>
            {movie.genres?.length > 0 && (
              <>
                <span>|</span>
                <span className="text-cyan-400">{movie.genres.join(", ")}</span>
              </>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-slate-200 mb-1">Overview:</h3>
            <div 
              className="text-slate-400 text-sm leading-relaxed max-h-40 overflow-y-auto pr-2"
              dangerouslySetInnerHTML={{ __html: movie.summary || "No overview available." }}
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              onClick={onClose}
              className="btn btn-outline border-slate-700 hover:bg-slate-800 text-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MovieDetails;