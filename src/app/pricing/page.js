import React from 'react';
import Footer from "@/components/Footer";

export default function PricingPage() {
    return (
        <>
            <div className="mx-auto">
                <div className="pt-2" id="pricing">
                    <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="text-xl mb-6 font-semibold leading-7 text-indigo-400">Our Transcription Plans</h1>
                            <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-5xl">Whether it&apos;s just you, or your entire
                                team - we&apos;ve got you covered.</p>
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose the plan that works best for you.</p>
                        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                                <div className="flex items-center justify-between gap-x-4">
                                    <h2 id="product1" className="text-lg font-semibold leading-8 text-white">Starter Plan</h2>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Starter Plan</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">$ 10 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
                                </p>
                                <a href="/pricing" aria-describedby="product1"
                                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
                                    Now</a>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>40 units</li>
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>1 feature</li>
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>Fast delivery</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                                <div className="flex items-baseline justify-between gap-x-4">
                                    <h2 id="product2" className="text-lg font-semibold leading-8 text-white">Most Popular Plan</h2>
                                    <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most popular</p>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">The most popular choice. Product details for Most Popular Plan</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">$ 20 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
                                </p>
                                <a href="/pricing" aria-describedby="product2"
                                    className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
                                    Now</a>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>120 units</li>
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>3 different features</li>
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>Fast delivery</li>
                                </ul>
                            </div>

                            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                                <div className="flex items-center justify-between gap-x-4">
                                    <h2 id="product3" className="text-lg font-semibold leading-8 text-white">Pro Plan</h2>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-300">Product details for Pro Plan</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-white">$ 50 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
                                </p>
                                <a href="/pricing" aria-describedby="product3"
                                    className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
                                    Now</a>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>240 units</li>
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>6 different features</li>
                                    <li className="flex gap-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                        <path fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"></path>
                                    </svg>Fast delivery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}
