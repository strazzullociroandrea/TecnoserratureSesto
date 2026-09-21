import React from 'react';

const images = [
    {src: "imm1.jpeg", title: ""},
    {src: "imm2.jpeg", title: ""},
    {src: "imm3.jpeg", title: ""},
    {src: "imm4.jpeg", title: ""},
    {src: "imm5.jpeg", title: ""},
    {src: "imm6.jpeg", title: ""}
];

const Gallery = () => (
    <section
        id="galleria"
        className="relative mx-auto my-8 max-w-7xl px-4"
    >
        <div className="relative z-10 py-10 md:py-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                    I Nostri <span
                    className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Lavori</span>
                </h2>
                <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium drop-shadow">
                    Alcune foto dai nostri interventi
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer group relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg border border-amber-200/30 dark:border-slate-700/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-amber-300/30"
                    >
                        <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Gallery;