import React from "react";
import UploadIcon from "./UploadIcon";
import SparklesIcon from "./SparklesIcon";
import { AccordionCustomIcon } from "./Faqs";
import Image from 'next/image';

const HomePageContent = () => {
  return (
    <div className="home-page">
      {/* --------------> Basic Three Steps  to Use This FramePhase Component <-------------- */}

      <div data-aos="fade-up-right">
        <h1 className="mt-10 sm:mt-24 text-2xl sm:text-4xl font-semibold">
          How to Auto Generate Captions
        </h1>
        <h3 className="mt-8 text-l font-light">In just three simple steps</h3>
      </div>
      <div className="relative mt-12 lg:mt-20" data-aos="zoom-in">
        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
          <img
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            alt="curve dots"
            title="curve dots"
            width="auto"
            height="auto"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold text-white-700"> 1 </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10 flex items-center gap-4 ml-6">
              <UploadIcon /> Upload Video
            </h3>
            <p className="mt-4 text-base text-white text-opacity-70 text-left ml-6">
              Upload your Video to FramePhase and we will
              <br />
              do the rest.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold text-gray-700"> 2 </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10 flex items-center gap-4 ml-4">
              <SparklesIcon /> Apply Caption
            </h3>
            <p className="ml-4 mt-4 text-base text-white text-opacity-70 text-left">
              Once uploaded, simply click <br />
              on ‘Apply Caption’ and wait
              <br />
              for the FramePhase to do its magic trick.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto  border-2 border-gray-200 rounded-full shadow">
              <span className="text-xl font-semibold text-white"> 3 </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10 flex items-center gap-4 ml-4">
              <Image src="/download.png" height={25} width={25} alt="download"/> Edit and
              Download
            </h3>
            <p className="mt-4 text-base text-white text-opacity-70 text-left ml-6">
              You can customize the subtitles and Once you finish customizing,
              you can simply download the subtitled video.
            </p>
          </div>
        </div>
      </div>

      {/* --------------> Why Are subtitle important component <-------------- */}

      <div data-aos="zoom-in">
        <h1 className="mt-10 sm:mt-20 text-2xl md:text-4xl font-semibold sm:mb-16">
          Why are Subtitles important in today’s world?
        </h1>
      </div>
      <div className="importance mt-10 sm:flex p-7 sm:p-1 justify-between gap-8 items-center md:flex-col lg:flex-row sm:flex-col">
        <div data-aos="fade-right">
          <ul className="mt-10 list-disc">
            <li className="mt-6 text-left text-xl">
              Improve your Video’s Retention metrics
            </li>
            <li className="mt-8 text-left text-xl">
              Your No.1 friend on social media
            </li>
            <li className="mt-8 text-left text-xl">
              To Break the Language barriers
            </li>
            <li className="mt-8 text-left text-xl mb-6">
              To enhance user experince
            </li>
          </ul>
        </div>

        <div className="benifits" data-aos="fade-left">
          <video
            src="/VideoMetrics.mp4"
            autoPlay
            muted
            loop
            height={400}
            width={400}
          ></video>
        </div>
      </div>

      {/* --------------> Why to choose FramePhase component <-------------- */}

      <div data-aos="zoom-out">
        <h1 className="mt-10 sm:mt-20 text-2xl md:text-4xl font-semibold mb-16">
          Here’s why FramePhase’s Caption
          <br />
          Generator is awesome!
        </h1>
      </div>
      <div className="sm:flex justify-between gap-8 sm:gap-12 p-7 sm:p-1 mb-12 items-center sm:flex-col md:flex-col lg:flex-row ">
        <div data-aos="fade-right">
          <ul className="mt-10 list-disc">
            <li className="mt-6 text-left text-xl">
              Revolutionize Your Content Creation with
              <br />
              FramePhase
            </li>
            <li className="mt-8 text-left text-xl">
              Transform your videos instantly with expertly crafted captions!
            </li>
            <li className="mt-8 text-left text-xl mb-6">
              Elevate User Engagement:
            </li>
            <li className="mt-8 text-left text-xl mb-6">
              Empower users with cutting-edge text summarization technology!
            </li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <Image src="/benifits2.webp" alt="benifits" height={320} width={320} />
        </div>
      </div>

      {/* --------------> Compare with Youtube Caption Generator <-------------- */}
      <div data-aos="fade-in-out" className="bg-slate-900/50 p-7 sm:p-10 w-full rounded-3xl flex border-dashed border-2 border-[#263369]">
        <div className="text-left">
          <h1 className="mt-25 text-2xl sm:text-3xl font-semibold">
            Not convinced?</h1>
            <br />
          <h1 className="text-2xl sm:text-3xl font-semibold">
            See how our Transcript <br/> compares to YouTube&apos;s
          </h1>
          <ul className="mt-10 list-disc text-lg">
          Youtube&apos;s auto transcripts are ok... but they:
            <li className="text-slate-400 mt-2 text-left text-base">don&apos;t count for SEO</li>
            <li className="text-slate-400 mt-2 text-left text-base">mash separate sentences together</li>
            <li className="text-slate-400 mt-2 text-left text-base">don&apos;t have commas or periods</li>
          </ul>
          <ul className="mt-10 list-decimal text-xl">
          Our Transcripts:
            <li className="text-sky-400 mt-2 text-left text-base">More Accurate transcripts 🤪 - what&apos;s the point otherwise?</li>
            <li className="text-sky-400 mt-2 text-left text-base">Punctuation and Capitalization ❓ - humans will read it</li>
            <li className="text-sky-400 mt-2 text-left text-base">Easy to get 99.9% accuracy ✨ - it ranks you better</li>
          </ul>
        </div>
        <div className="hidden sm:flex ml-14 gap-8">
          <div data-aos="fade-up" className="mt-4 text-center w-[12rem] h-fit p-4 bg-slate-500/50 rounded-3xl border-2 border-[#5978F3ca]">
            <h2 className=" text-xl">Youtube</h2>
            <ul className="mt-6">
              <li className="text-sm pb-2">[00:00] no freaking way that brett maverick&apos;s</li>

              <li className="text-sm pb-2">[00:02] jawline is</li>

              <li className="text-sm pb-2">[00:03] natural welcome back to the first</li>

              <li className="text-sm pb-2">[00:05] episode of jawline review which is</li>

              <li className="text-sm pb-2">[00:07] quite simply exactly what it sounds like</li>

              <li className="text-sm pb-2">[00:09] we review people&apos;s jawlines we&apos;re going</li>
            </ul>
          </div>
          <div data-aos="fade-down" className=" mt-0 text-center w-[12rem] h-fit p-4 bg-slate-500/50 rounded-3xl border-2 border-[#5978F3ca]">
            <h2 className=" text-xl">FramePhase</h2>
            <ul className="mt-6">
              <li className="text-sm pb-2">[00:00] No fricking way that Brett Maverick&apos;s jawline is</li>

              <li className="text-sm pb-2">[00:02] natural</li>

              <li className="text-sm pb-2">[00:04] Welcome back to the first episode of jawline review,</li>

              <li className="text-sm pb-2">[00:06] which is quite simply exactly what it sounds like.</li>

              <li className="text-sm pb-2">[00:09] We review people&apos;s jawlines so we&apos;re going to be looking at an absolute Maverick</li>

              <li className="text-sm pb-2">[00:14] called Brett Maverick.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --------------> Freaquently asked Questions <--------------  */}

      <div
        className="faqs"
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.1"
      >
        <div data-aos="zoom-in">
          <h1 className="mt-20 text-2xl sm:text-4xl font-semibold mb-12 sm:mb-32">
            Freaquently Asked Questions
          </h1>
        </div>
        <div className="mb-6 sm:mb-10" data-aos="zoom-in-up">
          <AccordionCustomIcon />
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;