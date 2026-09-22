import {ArrowLeft, Home} from "lucide-react";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

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

            <Header/>

            <div className="py-14 container mx-auto px-4">
                <div className="text-center mb-20">

                    <span className="text-6xl text-white font-bold">404 Error</span>
                    <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">

                        Pagina{" "}
                        <span
                            className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">								Non Trovata
							</span>
                    </h1>
                    <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
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

            <Footer/>
        </div>
    );
};

export default NotFound;
