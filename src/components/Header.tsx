import {Phone} from "lucide-react";
import React from "react";

const Header = () => {

    return (
        <header
            className="p-4 bg-gradient-to-b from-amber-100 via-white to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 sticky top-0 z-50 shadow-md border-b border-amber-200 dark:border-slate-700">
            <div className="max-w-full px-4 sm:px-6 mx-auto">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <div
                            className="flex items-center justify-center w-14 h-14 bg-slate-900 rounded-xl shadow border border-slate-800">
                            <img
                                src="/Logo.png"
                                alt="Logo"
                                className="h-14 w-14 object-contain filter grayscale"
                            />
                        </div>
                        <div>
							<span
                                className="text-lg font-extrabold bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-300 bg-clip-text text-transparent tracking-tight">
								Tecnoserrature Sesto
							</span>
                            <div className="text-xs text-slate-500 dark:text-slate-300 font-medium">
                                Fabbro
                            </div>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <a
                            href="tel:3299370481"
                            className="bg-amber-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-bold shadow transition-all flex items-center space-x-2 border border-amber-300 dark:border-amber-700"
                        >
                            <Phone className="h-4 w-4"/>
                            <span>329 937 0481</span>
                        </a>
                    </nav>
                </div>

            </div>
        </header>
    );
};

export default Header;
