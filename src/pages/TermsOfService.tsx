"use client";

import {Building, Hammer, IdCard, MapPin, Phone, Shield, FileText, AlertTriangle, MoveLeft} from "lucide-react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {GoToUp} from "@/components/go-to-up";
import {Button} from "@/components/ui/button";

const TermsOfService = () => {
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
                        <FileText className="w-8 h-8"/>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                        Termini e <span
                        className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Condizioni</span>
                    </h1>
                    <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
                        Benvenuto sul nostro sito web. Ti invitiamo a leggere attentamente questi Termini e Condizioni
                        prima di utilizzare i nostri servizi professionali.
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
                                <Shield className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">1. Accettazione dei Termini</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Accedendo e utilizzando i servizi di <strong>Tecnoserrature Sesto</strong>, accetti i
                                seguenti Termini e Condizioni. Se non sei d'accordo con queste condizioni, ti invitiamo
                                a non utilizzare il nostro sito web.
                            </p>
                            <p>
                                L'utilizzo dei nostri servizi implica l'accettazione integrale di tutti i termini e
                                condizioni qui riportati, incluse le politiche di privacy e cookie.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl text-amber-600 dark:text-amber-400">
                                <FileText className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">2. Modifiche ai Termini</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                <strong>Tecnoserrature Sesto</strong> si riserva il diritto di modificare questi Termini
                                e Condizioni in qualsiasi momento per adeguarli alle normative vigenti o ai cambiamenti
                                dei servizi offerti.
                            </p>
                            <p>
                                Le modifiche saranno pubblicate su questa pagina e diventeranno effettive immediatamente
                                dopo la pubblicazione. Ti invitiamo a verificare periodicamente questa pagina per
                                restare aggiornato sulle eventuali modifiche.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-green-50 dark:bg-green-950/40 rounded-xl text-green-600 dark:text-green-400">
                                <Building className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">3. Uso del Sito</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
                            <div
                                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">✅ Uso Consentito</h3>
                                <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                                    <li>• Consultazione delle informazioni sui servizi</li>
                                    <li>• Richiesta di preventivi e appuntamenti</li>
                                    <li>• Contatto per assistenza fabbro</li>
                                    <li>• Utilizzo conforme alle leggi applicabili</li>
                                </ul>
                            </div>
                            <div
                                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">❌ Uso Vietato</h3>
                                <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                                    <li>• Violazione dei diritti di proprietà intellettuale</li>
                                    <li>• Utilizzo per scopi illeciti o fraudolenti</li>
                                    <li>• Invio di contenuti offensivi o spam</li>
                                    <li>• Tentativi di compromettere la sicurezza</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl text-purple-600 dark:text-purple-400">
                                <Shield className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">4. Proprietà Intellettuale</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Tutti i contenuti del sito web di <strong>Tecnoserrature Sesto</strong> sono protetti
                                dalle leggi sul diritto d'autore. È vietata la riproduzione, distribuzione o utilizzo
                                non autorizzato di qualsiasi materiale presente sul sito.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-red-50 dark:bg-red-950/40 rounded-xl text-red-600 dark:text-red-400">
                                <AlertTriangle className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">5. Limitazione di Responsabilità</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                <strong>Tecnoserrature Sesto</strong> non sarà responsabile per danni diretti,
                                indiretti, incidentali o consequenziali derivanti dall'uso del sito web, fatta salva la
                                responsabilità per i servizi di fabbro effettivamente prestati sul campo.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-emerald-600 dark:text-emerald-400">
                                <Phone className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">6. Contatti e Riferimenti del Titolare</h2>
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
                            per i contenuti del sito e l'erogazione dei servizi.
                        </p>
                    </section>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default TermsOfService;