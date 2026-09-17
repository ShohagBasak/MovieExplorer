

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-slate-800 border border-t border-slate-700 footer-center text-base-content p-4">
            <aside>
                <p className="text-base-200">Copyright © {new Date().getFullYear()} - All right reserved by MovieExplorer</p>
            </aside>
        </footer>
    );
};

export default Footer;