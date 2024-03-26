"use client"

import DemoSection from "@/components/DemoSection";
import HomePageContent from "@/components/HomePageContent";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    AOS.init({
      duration: 600,

      offset: 200,
    })
  }, [])
  return (
    <>

      <div className="text-center max-w-4xl  mx-auto">
        <PageHeaders
          h1text={'Add epic captions to your videos'}
          h2text={'Just upload your video and we will do the rest'}
        />
        <UploadForm />
        <DemoSection />
        <HomePageContent />
      </div>
      <div className="marquee-section">
        <Marquee />
      </div>
      <Footer />
    </>
  );
}