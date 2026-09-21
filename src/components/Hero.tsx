import React from 'react';
import {Phone, Star, MoveDown} from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative mx-auto my-14 max-w-6xl px-4 sm:px-6"
        >
            <div className="text-center md:text-left mb-4">
                <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm">
                    <Star className="w-4 h-4 text-amber-500"/>
                    <span>Oltre 25 anni di esperienza sul campo</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                        <span
                            className="bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-200 bg-clip-text text-transparent">
                            Tecnoserrature Sesto
                        </span>
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl mx-auto md:mx-0">
                        Bloccati fuori casa? Chiave spezzata o serratura bloccata? Interventi rapidi a Sesto San
                        Giovanni e comuni limitrofi. Massima trasparenza e prezzi onesti.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-3.5 sm:max-w-md mx-auto">
                    <a href="tel:3299370481" className="w-full group">
                        <button
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-3 text-base sm:text-lg"
                        >
                            <Phone className="h-5 w-5 transition-transform group-hover:rotate-12"/>
                            <span>Chiama Ora: 329 937 0481</span>
                        </button>
                    </a>

                    <button
                        onClick={() => document.getElementById('servizi')?.scrollIntoView({behavior: 'smooth'})}
                        className="w-full border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400/60 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 font-semibold py-4 px-6 rounded-2xl transition-all duration-200 shadow-sm bg-white/60 dark:bg-slate-900/40 backdrop-blur-md text-base sm:text-lg"
                    >
                        Scopri i Servizi
                    </button>
                </div>
            </div>

             <div className="flex justify-center mt-14 sm:mt-16">
                <MoveDown className="h-6 w-6 text-amber-500 animate-bounce"/>
            </div>
        </section>
    );
};

export default Hero;