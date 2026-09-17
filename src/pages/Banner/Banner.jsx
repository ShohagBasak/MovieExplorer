import { Link } from "react-router";

const Banner = () => {
    return (
        <div
            className="hero min-h-[90vh]"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop')",
            }}
        >
            <div className="hero-overlay bg-slate-950/75 backdrop-blur-[1px]"></div>

            <div className="hero-content text-neutral-content text-center py-16">
                <div className="max-w-xl">
                    <h1 className="mb-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
                        DISCOVER MOVIES
                    </h1>

                    <p className="mb-8 text-base md:text-lg text-slate-200 leading-relaxed">
                        Explore and discover your favorite movies and shows from around the world.
                    </p>

                    <Link
                        to="/movies"
                        className="btn btn-outline btn-info hover:text-white px-8 text-lg font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all"
                    >
                     Explore Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;