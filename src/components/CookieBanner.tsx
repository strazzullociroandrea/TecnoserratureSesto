'use client'

import {useState, useEffect} from 'react'

const STORAGE_KEY = 'tecno-serrature-sesto-cookie-consent'

function CookieBanner() {
    const [status, setStatus] = useState<'accepted' | 'rejected' | null>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const saved = window.localStorage.getItem(STORAGE_KEY)
        if (saved === 'accepted' || saved === 'rejected') {
            setStatus(saved as 'accepted' | 'rejected')
        }
    }, [])

    const handleChoice = (value: 'accepted' | 'rejected') => {
        window.localStorage.setItem(STORAGE_KEY, value)
        setStatus(value)
    }

    if (!isMounted) return null

    if (status) {
        return (
            <div className="fixed bottom-0 right-4 z-[9999]">
                <button
                    onClick={() => setStatus(null)}
                    className="rounded-t-2xl translate-y-2/3 hover:translate-y-0 cursor-pointer bg-slate-950/90 backdrop-blur-md border border-slate-800 px-4 py-2 text-xs font-medium text-slate-300 shadow-2xl transition-all hover:bg-slate-900 hover:text-white"
                >
                    🍪 Gestione Cookie
                </button>
            </div>
        )
    }

    return (
        <div className="fixed inset-x-0 bottom-6 z-[9999] px-4 sm:px-6 lg:px-8">
            <div
                className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/95 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                <button
                    onClick={() => handleChoice('rejected')}
                    aria-label="Chiudi banner"
                    className="cursor-pointer absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                >
                    ✕
                </button>

                <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:justify-between sm:p-8">
                    <div className="space-y-2 text-center sm:text-left pr-4">
                        <h3 className="text-lg font-bold tracking-tight text-white flex items-center justify-center sm:justify-start gap-2">
                            🍪 Informativa Cookie
                        </h3>
                        <p className="max-w-xl text-[13px] leading-relaxed text-slate-300">
                            Utilizziamo cookie tecnici essenziali e strumenti statistici anonimi per ottimizzare la tua
                            esperienza.
                        </p>
                    </div>
                    <div className="flex w-full flex-col-reverse gap-3 sm:w-auto sm:flex-row sm:items-center">
                        <button
                            onClick={() => handleChoice('rejected')}
                            className="cursor-pointer rounded-2xl border border-slate-700/80 bg-slate-900 px-6 py-3 text-[13px] font-semibold text-slate-300 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-95"
                        >
                            Rifiuta
                        </button>
                        <button
                            onClick={() => handleChoice('accepted')}
                            className="cursor-pointer rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 px-7 py-3 text-[13px] font-bold text-white shadow-lg shadow-orange-950/40 transition-all hover:from-amber-500 hover:to-orange-500 hover:scale-[1.02] active:scale-95"
                        >
                            Accetta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookieBanner;