import React from 'react';
import {Phone, MapPin, Clock} from 'lucide-react';

const Contact = () => {
    return (
        <section
            id="contatti"
            className="relative mx-auto my-4 max-w-7xl px-4"
        >
            <div className="relative z-10 py-10 md:py-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                        Conta<span
                        className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">ttaci</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div
                            className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative group">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400/80 to-orange-600/90 rounded-full flex items-center justify-center shadow-lg border-2 ">
                                    <Phone className="h-5 w-5 text-white drop-shadow"/>
                                </div>
                                <div>
                                    <h3 className="text-md font-bold text-slate-900 dark:text-white mb-2 uppercase">Telefono</h3>
                                    <p className="text-slate-700 dark:text-slate-200 text-sm">+39 329 937 0481</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative group">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400/80 to-orange-600/90 rounded-full flex items-center justify-center shadow-lg border-2 ">
                                    <MapPin className="h-5 w-5 text-white drop-shadow"/>
                                </div>
                                <div>
                                    <h3 className="text-md uppercase font-bold text-slate-900 dark:text-white mb-2">Zona
                                        di
                                        Intervento</h3>
                                    <p className="text-slate-700 dark:text-slate-200 text-sm">Sesto San Giovanni</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg rounded-2xl p-7 border border-amber-200/30 dark:border-slate-700/40 shadow-2xl relative group">
                            <div className="flex items-center space-x-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400/80 to-orange-600/90 rounded-full flex items-center justify-center shadow-lg border-2 ">
                                    <Clock className="h-5 w-5 text-white drop-shadow"/>
                                </div>
                                <div>
                                    <h3 className="text-md uppercase font-bold text-slate-900 dark:text-white mb-2">Orari</h3>
                                    <div className="space-y-1 text-sm">
                                        <p className="text-slate-700 dark:text-slate-200">Lun-Ven: 7:00 - 20:00</p>
                                        <p className="text-slate-700 dark:text-slate-200">Sabato: 9:00 - 14:00</p>
                                        <p className="text-slate-700 dark:text-slate-200">Domenica: 9:00 - 20:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-br from-amber-50/80 via-white/70 to-slate-100/80 dark:from-amber-900/20 dark:via-slate-900/60 dark:to-slate-800/80 border-2 border-amber-200/40 dark:border-amber-800/30 rounded-3xl p-10 shadow-2xl flex flex-col justify-center items-center relative">

                        <h3 className="text-xl uppercase font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight bg-gradient-to-r from-slate-900 via-amber-700 to-slate-700 dark:from-white dark:via-amber-300 dark:to-slate-300 bg-clip-text text-transparent">
                            Perché sceglierci?
                        </h3>
                        <div className="space-y-5 w-full">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                <p className="text-slate-700 dark:text-slate-300 text-md font-medium">Oltre 25 anni di
                                    esperienza nel settore</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                <p className="text-slate-700 dark:text-slate-300 text-md font-medium">Lavori garantiti e
                                    certificati</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                <p className="text-slate-700 dark:text-slate-300 text-md font-medium">Puntualità e
                                    professionalità</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                <p className="text-slate-700 dark:text-slate-300 text-md font-medium">Materiali di prima
                                    qualità</p>
                            </div>
                        </div>
                        <div
                            className="mt-6 pt-6 border-t border-amber-200 dark:border-amber-800/30 w-full text-center">
                            <p className="text-sm uppercase italic font-semibold text-slate-900 dark:text-white mb-2">Chiamaci
                                subito!</p>
                            <a
                                href="tel:3299370481"
                                className="inline-flex mt-4 items-center space-x-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600  text-white px-7 py-3 rounded-2xl font-bold shadow-2xl hover:shadow-amber-300/40 transition-all duration-300 border-2 border-amber-300/40 ring-2 ring-amber-200/30 hover:scale-105 text-lg"
                            >
                                <Phone className="h-5 w-5 drop-shadow"/>
                                <span>+39 329 937 0481</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;