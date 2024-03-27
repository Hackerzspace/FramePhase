import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div className='w-full pt-16 pb-8 z-0' data-scroll
            data-scroll-section
            data-scroll-speed="-0.1">

            <div className='footer-content flex justify-around items-start mb-12 '>
                <div className="content1 flex flex-col gap-4">
                    <h3 className='text-xl font-semibold'>Product</h3>
                    <Link href="/"><a className='text-slate-300'>Features</a></Link>
                    <Link href="/"><a className='text-slate-300'>Caption Generator</a></Link>
                </div>
                <div className="content2 flex flex-col gap-4">
                    <h3 className='text-xl font-semibold'>Company</h3>
                    <a href="mailto:contact@framephase.com" className='text-slate-300'>Contact</a>
                    <a href="https://github.com/Hackerzspace/FramePhase" className='text-slate-300'>About</a>
                </div>
                <div className="content3 flex flex-col gap-4">
                    <h3 className='text-xl font-semibold'>Support</h3>
                    <a className='text-slate-300'>FAQs</a>
                    <Link href="/pricing"><a className='text-slate-300'>Pricing</a></Link>
                </div>
            </div>

            <div className='video-done flex flex-col gap-4 justify-center items-center'>
                <img src='/footer-logo.svg' alt='logo' height={150} width={150} />
                <h1 className='text-5xl font-semibold'>Videos, <span className='text-orange-400'>Done Right</span></h1>
                <div className="copyright">Copyright ©️ <span id="fullyear">2024</span> <Link href="/"><span className='text-orange-400'>FramePhase</span></Link>, All rights reserved</div>
            </div>
        </div>
    );
}

export default Footer;