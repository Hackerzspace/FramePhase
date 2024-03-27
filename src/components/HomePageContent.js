import React from "react";
import UploadIcon from "./UploadIcon";
import SparklesIcon from "./SparklesIcon";
import { AccordionCustomIcon } from "./Faqs";

const HomePageContent = () => {
  return (
    <div className="home-page">
      {/* --------------> Basic Three Steps  to Use This FramePhase Component <-------------- */}

      <div data-aos="fade-up-right">
        <h1 className="mt-24 text-4xl font-semibold">
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
              <img src="/download.png" height={25} width={25} /> Edit and
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
        <h1 className="mt-20 text-4xl font-semibold mb-16">
          Why are Subtitles important in today’s world?
        </h1>
      </div>
      <div className="importance mt-10 flex justify-between gap-8 items-center md:flex-col lg:flex-row sm:flex-col">
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
        <h1 className="mt-20 text-4xl font-semibold mb-16">
          Here’s why FramePhase’s Caption
          <br />
          Generator is awesome!
        </h1>
      </div>
      <div className="why flex justify-between gap-12 mb-12 items-center sm:flex-col md:flex-col lg:flex-row ">
        <div data-aos="fade-right">
          <ul className="mt-10 list-disc">
            <li className="mt-6 text-left text-xl">
              Instantly Generate captions with
              <br />
              FramePhase
            </li>
            <li className="mt-8 text-left text-xl">
              Format your captions like a pro!
            </li>
            <li className="mt-8 text-left text-xl mb-6">
              To increase and enhance user experince
            </li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <img src="/benifits2.png" alt="benifits" height={320} width={320} />
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
          <h1 className="mt-20 text-4xl font-semibold mb-32">
            Freaquently Asked Questions
          </h1>
        </div>
        <div className="mb-10" data-aos="zoom-in-up">
          <AccordionCustomIcon />
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;