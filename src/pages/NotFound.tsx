import {ArrowLeft, Hammer, Home} from "lucide-react";
import {useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";

const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname,
        );
    }, [location.pathname]);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-500">
            <header
                className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white sticky top-0 z-50 shadow-lg border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div
                                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
                                <Hammer className="h-6 w-6 text-white"/>
                            </div>
                            <div>
								<span
                                    className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
									Tecnoserrature Sesto
								</span>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main
                className="py-24 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 flex-1">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <div
                            className="mx-auto w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8">
                            <span className="text-6xl text-white font-bold">404</span>
                        </div>
                        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Pagina{" "}
                            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
								Non Trovata
							</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Spiacenti, la pagina che stai cercando non esiste o è stata
                            spostata.
                        </p>
                        <div className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                            URL richiesto:{" "}
                            <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                                {location.pathname}
                            </code>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-gradient-to-r from-slate-500 to-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
                            >
                                <ArrowLeft className="h-5 w-5"/>
                                <span>Torna Indietro</span>
                            </button>
                            <a
                                href="/"
                                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
                            >
                                <Home className="h-5 w-5"/>
                                <span>Vai alla Home</span>
                            </a>
                        </div>
                    </div>

                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default NotFound;
