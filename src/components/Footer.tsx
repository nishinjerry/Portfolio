const Footer = () => {
    return (
        <footer className="bg-dark py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-500 font-mono text-sm">
                    Designed & Built by Nishin Jerry Xi
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
