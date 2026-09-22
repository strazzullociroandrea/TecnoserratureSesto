"use client";

import {
    Building,
    Phone,
    Shield,
    Lock,
    FileText,
    Server,
    AlertTriangle,
    MoveLeft
} from "lucide-react";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {GoToUp} from "@/components/go-to-up.tsx";
import {Button} from "@/components/ui/button";

const PrivacyPolicy = () => {

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
                        className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-950/50 rounded-2xl text-blue-600 dark:text-blue-400 mb-4 shadow-sm">
                        <Shield className="w-8 h-8"/>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                        Privacy <span
                        className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
                        Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).
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
                                <Building className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">1. Titolare del Trattamento dei Dati</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-300">
                            <div className="space-y-3">
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Ragione Sociale:</strong>
                                    <span className="block font-medium text-slate-900 dark:text-white">Tecnoserrature Sesto</span>
                                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                        Tecnoserrature Sesto è un marchio di proprietà di Luciano, P.IVA 09082580961
                                    </span>
                                </div>
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Sede Operativa:</strong>
                                    <span>Via Gran Paradiso, 4 - Brugherio (MB) 20861</span>
                                </div>
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Partita IVA:</strong>
                                    <span>09082580961</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Contatto Telefonico:</strong>
                                    <a href="tel:3299370481"
                                       className="text-blue-600 dark:text-blue-400 font-medium hover:underline">329 937 0481</a>
                                </div>
                                <div>
                                    <strong className="text-slate-900 dark:text-white block mb-1">Indirizzo Email:</strong>
                                    <a href="mailto:info@tecnoserraturesesto.it"
                                       className="text-blue-600 dark:text-blue-400 font-medium hover:underline">info@tecnoserraturesesto.it</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-green-50 dark:bg-green-950/40 rounded-xl text-green-600 dark:text-green-400">
                                <FileText className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">2. Tipologie di Dati Raccolti e Finalità</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Il sito non raccoglie dati personali tramite moduli online, strumenti di analisi,
                                profilazione o pubblicità comportamentale. Possono essere trattati i dati tecnici
                                necessari alla sicurezza e al funzionamento del sito, oltre ai dati che l'utente
                                comunica volontariamente tramite telefono o email.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                <div
                                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-green-600"/> Pulsante "Chiama"
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Apre l'applicazione telefonica del dispositivo. Nessun dato personale viene
                                        memorizzato o raccolto dai nostri server durante questa operazione.
                                    </p>
                                </div>
                                <div
                                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                                        <span className="text-green-600">📊</span> Google Search Console
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Servizio di analisi tecnica e statistica di Google che sarà attivato per
                                        monitorare il rendimento del sito e ottimizzarne la visibilità sui motori di
                                        ricerca. Il servizio potrà trattare dati tecnici e aggregati di navigazione
                                        secondo la privacy policy di Google.
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
                                <Lock className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">3. Cookie e Servizi di Terze Parti</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Il sito non utilizza cookie di profilazione né servizi di analisi o marketing. Utilizza
                                esclusivamente strumenti tecnici necessari al funzionamento:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4 pt-2">
                                <li className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <strong className="block text-slate-900 dark:text-white mb-1">localStorage</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Memorizzazione locale della scelta effettuata dall'utente sul banner cookie. Non è un cookie e non trasmette dati a terzi.</span>
                                </li>
                                <li className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                                    <strong className="block text-slate-900 dark:text-white mb-1">Log tecnici del server</strong>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Il provider di hosting può trattare indirizzo IP, data e ora della richiesta e dati tecnici per sicurezza, manutenzione e funzionamento del servizio.</span>
                                </li>
                            </ul>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Al momento della pubblicazione del sito, Google Search Console
                                sarà effettivamente operativo. Il sito non incorpora Google Fonts, Google Maps, social
                                pixel, video incorporati o altri strumenti di tracciamento di terze parti.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl text-amber-600 dark:text-amber-400">
                                <Server className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">4. Modalità, Base Giuridica e Conservazione</h2>
                        </div>
                        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                Il trattamento dei dati tecnici si fonda sul <strong>legittimo interesse del
                                Titolare</strong> (art. 6 par. 1 lett. f del GDPR) volto a garantire la sicurezza e la
                                corretta erogazione del sito. I dati comunicati volontariamente per richieste
                                commerciali sono trattati per rispondere alla richiesta e, se necessario, per
                                l'esecuzione di misure precontrattuali o contrattuali. I dati sono conservati per il
                                tempo strettamente necessario alle finalità indicate e secondo i tempi applicati dal
                                provider di hosting per i propri log tecnici.
                            </p>
                        </div>
                    </section>

                    <section
                        className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div
                            className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <div
                                className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl text-emerald-600 dark:text-emerald-400">
                                <Shield className="w-6 h-6"/>
                            </div>
                            <h2 className="text-xl font-bold">5. Diritti dell'Interessato</h2>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                            Gli utenti possono esercitare in qualsiasi momento i diritti previsti dagli <strong>articoli
                            15-22 del GDPR</strong> (accesso, rettifica, cancellazione, limitazione, opposizione e
                            portabilità) rivolgendosi direttamente al Titolare tramite email.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                            {["Diritto di Accesso", "Rettifica Dati", "Cancellazione (Oblio)", "Limitazione Trattamento", "Opposizione", "Portabilità dei Dati"].map((dir, i) => (
                                <div key={i}
                                     className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-300 text-center">
                                    {dir}
                                </div>
                            ))}
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

export default PrivacyPolicy;