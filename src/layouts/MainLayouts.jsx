import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-slate-950 text-slate-100'>
            <header>
                <Navbar />
            </header>

            <main >
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayouts;