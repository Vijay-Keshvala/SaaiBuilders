import React from "react";

export default function Hero() {
    return (
        <section className="bg-emerald-800 text-white py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Building homes with{" "}
                                <span className="italic text-orange-400">exceptional</span> craftsmanship
                            </h1>
                            <p className="text-xl text-emerald-100 leading-relaxed">
                                We specialize in creating beautiful, sustainable homes that blend modern design with traditional
                                craftsmanship, delivering quality that lasts generations.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded">
                                View Projects
                            </button>
                            <button className="text-white border border-white hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg rounded">
                                Download Brochure
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
                            <img
                                src='/images/hero.jpg'
                                alt="Modern luxury home"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-20"></div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-5 -translate-y-32 translate-x-32"></div>
        </section>
    );
}
