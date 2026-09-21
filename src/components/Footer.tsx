import React from 'react';
import {Phone, Mail, MapPin} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-20 w-full bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl px-6 gap-12 items-start text-left">

                <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 shadow-sm">
                            <img src="./Logo.png" alt="logo" className="h-10 w-auto object-contain"/>
                        </div>
                        <span className="font-extrabold text-xl tracking-tight text-white uppercase">
                          Tecnoserrature <span
                            className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Sesto</span>
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Bloccati fuori casa? Chiave spezzata o serratura bloccata? Interventi rapidi a Sesto San
                        Giovanni e comuni limitrofi. Massima trasparenza e prezzi onesti.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs tracking-widest text-amber-500">
                        Legale
                    </h4>
                    <ul className="text-slate-400 text-sm space-y-3">
                        <li>
                            <a href="/cookie-policy"
                               className="hover:text-white transition-colors flex items-center gap-2 group">
                                <span
                                    className="h-1 w-1 rounded-full bg-amber-500 group-hover:scale-125 transition-transform"></span>
                                Cookie Policy
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy"
                               className="hover:text-white transition-colors flex items-center gap-2 group">
                                <span
                                    className="h-1 w-1 rounded-full bg-amber-500 group-hover:scale-125 transition-transform"></span>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms-of-service"
                               className="hover:text-white transition-colors flex items-center gap-2 group">
                                <span
                                    className="h-1 w-1 rounded-full bg-amber-500 group-hover:scale-125 transition-transform"></span>
                                Termini e condizioni
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-4">
                    <h4 className="text-white font-bold uppercase tracking-wider text-xs tracking-widest text-amber-500">
                        Contatti & Sede
                    </h4>

                    <a
                        className="text-sm hover:text-white transition-colors flex items-center gap-3 text-slate-300 group"
                        href="tel:+393299370481"
                    >
                        <div
                            className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                            <Phone className="w-4 h-4 shrink-0"/>
                        </div>
                        <span className="font-medium">+39 329 937 0481</span>
                    </a>

                    <a
                        className="text-sm hover:text-white transition-colors flex items-center gap-3 text-slate-300 group break-all"
                        href="mailto:info@tecnoserraturesesto.it"
                    >
                        <div
                            className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                            <Mail className="w-4 h-4 shrink-0"/>
                        </div>
                        <span className="font-medium">info@tecnoserraturesesto.it</span>
                    </a>

                    <div className="text-sm flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                            <MapPin className="w-4 h-4"/>
                        </div>
                        <span
                            className="leading-tight pt-1">Sede legale: Via Gran Paradiso, 4, Brugherio, MB, 20861</span>
                    </div>

                    <div className="pt-2">
                        <span
                            className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                            P.IVA: 09082580961
                        </span>
                    </div>
                </div>

            </div>

            <div
                className="mt-16 pt-8 border-t border-slate-800/80 text-center flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-4 text-xs text-slate-500">
                <p>
                    © {new Date().getFullYear()} Tecnoserrature Sesto. All rights reserved.
                </p>
                <p>
                    Developed by <a href="https://cirostrazzullo.it" target="_blank" rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-amber-400 transition-colors font-medium underline underline-offset-4 decoration-amber-500/50">cirostrazzullo.it</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;