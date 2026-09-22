"use client";

import {Building, Cookie, FileText, Server, AlertTriangle, MoveLeft, HelpCircle} from "lucide-react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {GoToUp} from "@/components/go-to-up";
import {Button} from "@/components/ui/button";

const CookiePolicy = () => {
    const handleBackClick = () => {
        history.back();
    };

    return (
        <div
            className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <GoToUp/>
            <Header/>

            <main className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <Button
                    variant="outline"
                    className="mb-8 rounded-xl"
                    onClick={handleBackClick}
                >
                    <MoveLeft className="w-4 h-4"/>
                    Indietro
                </Button>

                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-950/50 rounded-2xl text-amber-600 dark:text-amber-400 mb-4 shadow-sm">
                        <Cookie className="w-8 h-8"/>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                        Cookie <span
                        className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
                        Informazioni sui cookie e sugli strumenti di tracciamento utilizzati sul nostro sito web.
                    </p>
                    <div
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-200/60 dark:bg-slate-800/60 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400">
                        <span>Ultimo aggiornamento: 22 settembre 2026</span>
                    </div>
                </div>

                <div className="space-y-12 p-4">
                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl text-blue-600 dark:text-blue-400">
                                <FileText className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">1. Cosa sono i Cookie</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando
                                visiti un sito web. Permettono al sito di ricordare le tue preferenze e migliorare la
                                tua esperienza di navigazione.
                            </p>
                            <p>
                                Il presente sito utilizza esclusivamente cookie tecnici necessari al funzionamento e
                                strumenti statistici anonimi (Google Search Console), senza ricorrere a cookie di
                                profilazione o tracciamento commerciale.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-green-50 dark:bg-green-950/40 rounded-xl text-green-600 dark:text-green-400">
                                <Cookie className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">2. Tipologie di Cookie e Tecnologie</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div
                                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">🔧 Cookie Tecnici e
                                        di Sessione</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Essenziali per la navigazione e per memorizzare le preferenze tecniche
                                        dell'utente (es. preferenza banner cookie tramite localStorage). Non richiedono
                                        consenso preventivo.
                                    </p>
                                </div>
                                <div
                                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">📊 Google Search
                                        Console</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Strumento di analisi tecnica e statistica aggregata per monitorare il rendimento
                                        del sito sui motori di ricerca senza tracciare i singoli utenti in modo
                                        profilato.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl text-purple-600 dark:text-purple-400">
                                <Server className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">3. Gestione dei Cookie tramite Browser</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                L'utente può gestire o eliminare i cookie direttamente attraverso le impostazioni del
                                proprio browser. Di seguito i link alle guide dei principali browser:
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium">
                                <a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank"
                                   rel="noreferrer"
                                   className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center hover:text-blue-500 transition-colors">
                                    Google Chrome
                                </a>
                                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank"
                                   rel="noreferrer"
                                   className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center hover:text-blue-500 transition-colors">
                                    Mozilla Firefox
                                </a>
                                <a href="https://support.apple.com/kb/HT1677?viewlocale=it_IT" target="_blank"
                                   rel="noreferrer"
                                   className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center hover:text-blue-500 transition-colors">
                                    Apple Safari
                                </a>
                                <a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie"
                                   target="_blank" rel="noreferrer"
                                   className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center hover:text-blue-500 transition-colors">
                                    Microsoft Edge
                                </a>
                            </div>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl text-amber-600 dark:text-amber-400">
                                <HelpCircle className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">4. Dubbi, Chiarimenti e Aggiornamenti</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Per qualsiasi dubbio, richiesta di chiarimento o in caso di necessità legate alla presente Cookie Policy, vi invitiamo a contattarci direttamente utilizzando i recapiti forniti in questa pagina.
                            </p>
                            <p>
                                La presente informativa potrà essere modificata o aggiornata in qualsiasi momento in base all'evoluzione tecnica del sito o alle normative vigenti; vi invitiamo pertanto a consultarla periodicamente.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-emerald-600 dark:text-emerald-400">
                                <Building className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">5. Titolare del Trattamento</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-300">
                            <div className="space-y-3">
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Ragione
                                        Sociale:</strong>
                                    <span className="block font-medium text-slate-900 dark:text-white">Tecnoserrature Sesto</span>
                                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                        Tecnoserrature Sesto è un marchio di proprietà di Luciano, P.IVA 09082580961
                                    </span>
                                </div>
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Sede
                                        Operativa:</strong>
                                    <span>Via Gran Paradiso, 4 - Brugherio (MB) 20861</span>
                                </div>
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Partita IVA:</strong>
                                    <span>09082580961</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Contatto
                                        Telefonico:</strong>
                                    <a href="tel:3299370481"
                                       className="text-blue-600 dark:text-blue-400 font-medium hover:underline">329 937
                                        0481</a>
                                </div>
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Indirizzo
                                        Email:</strong>
                                    <a href="mailto:info@tecnoserraturesesto.it"
                                       className="text-blue-600 dark:text-blue-400 font-medium hover:underline">info@tecnoserraturesesto.it</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="bg-slate-100 dark:bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-4">
                        <div
                            className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold uppercase tracking-wider">
                            <AlertTriangle className="w-4 h-4 text-amber-500"/> Note Legali e Responsabilità Tecnica
                        </div>
                        <p>
                            Il Webmaster fornisce esclusivamente il supporto tecnico, la gestione dello spazio server e
                            del nome a dominio. Il Webmaster non è in alcun modo responsabile dei contenuti pubblicati,
                            delle informazioni commerciali o delle trattative intercorse tra gli utenti e la
                            società <strong>Tecnoserrature Sesto</strong>, restando quest'ultima l'unica responsabile
                            per i contenuti del sito e il trattamento dei dati personali.
                        </p>
                    </section>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default CookiePolicy;