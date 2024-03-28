import React from 'react'
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='w-full pt-16 pb-8 z-0' data-scroll
            data-scroll-section
            data-scroll-speed="-0.1">

            <div className='footer-content flex justify-around items-start mb-12 '>
                <div className="content1 flex flex-col gap-4">
                    <h3 className='text-xl text-semibold'>Product</h3>
                    <Link href="/"><h3 className='text-slate-300'>Caption Generator</h3></Link>
                    <Link href="/"><h3 className='text-slate-300'>Feedback</h3></Link>
                </div>
                <div className="content2 flex flex-col gap-4">
                    <h3 className='text-xl text-semibold'>Company</h3>
                    <Link href="/pricing"><h3 className='text-slate-300'>Pricing</h3></Link>
                    <Link href="https://github.com/Hackerzspace/FramePhase"><h3 className='text-slate-300'>About</h3></Link>
                </div>
                <div className="content3 flex flex-col gap-4">
                    <h3 className='text-xl text-semibold'>Support</h3>
                    <Link href="mailto:contact@framephase.com"><h3 className='text-slate-300'>Contact Us</h3></Link>
                </div>

            </div>

            <div className='video-done flex flex-col gap-4 justify-center items-center'>
                <Image src='/footer-logo.svg' alt='logo' height={150} width={150} /> 
                <h1 className='text-3xl sm:text-5xl font-semibold'>Videos, <span className='text-orange-400'>Done Right</span></h1>
                <div className="copyright">Copyright ©️ <span id="fullyear">2024</span> <Link href="/"><span className='text-orange-400'>FramePhase</span></Link>. All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Footer;