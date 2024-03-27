import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function AccordionCustomIcon() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 pt-4 pb-4">
                <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 transition-colors ${open === 1 ? "text-purple-400 hover:!text-purple-500" : ""
                    }`}>What are Captions?</AccordionHeader>
                <AccordionBody className="mt-4 text-justify text-lg text-whitesmoke font-normal">
                    Captions are text that is displayed at the bottom of a video file. This text transcribes the video content and aims to improve the understandability of the video.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 pt-4 pb-4">
                <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 transition-colors ${open === 2 ? "text-purple-400 hover:!text-purple-500" : ""
                    }`}>How do you auto-generate Captions online?</AccordionHeader>
                <AccordionBody className="mt-4 text-justify text-lg text-whitesmoke font-normal">
                    Simply head over to FramePhase and upload your video. We will transcribes voice to text and adds it as subtitles to your video.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 pt-4 pb-4">
                <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0 transition-colors ${open === 3 ? "text-purple-400 hover:!text-purple-500" : ""
                    }`}>How can we download the subtitled videos?</AccordionHeader>
                <AccordionBody className="mt-4 text-justify text-lg text-whitesmoke font-normal">
                    You can download the subtitled videos using the &quot;Download&quot; button.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 pt-4 pb-4">
                <AccordionHeader onClick={() => handleOpen(4)} className={`border-b-0 transition-colors ${open === 4 ? "text-purple-400 hover:!text-purple-500" : ""
                    }`}>Does FramePhase summarize video?</AccordionHeader>
                <AccordionBody className="mt-4 text-justify text-lg text-whitesmoke font-normal">
                    Yes, We provide the summary of video which you have uploaded for generating the caption.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 pt-4 pb-4">
                <AccordionHeader onClick={() => handleOpen(5)} className={`border-b-0 transition-colors ${open === 5 ? "text-purple-400 hover:!text-purple-500" : ""
                    }`}>Is FramePhase free? </AccordionHeader>
                <AccordionBody className="mt-4 text-justify text-lg text-whitesmoke font-normal">
                    Although FramePhase isn&apos;t entirely free, you can take advantage of our beginner plan, which comes at absolutely no cost to you.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 pt-4 pb-4">
                <AccordionHeader onClick={() => handleOpen(6)} className={`border-b-0 transition-colors ${open === 6 ? "text-purple-400 hover:!text-purple-500" : ""
                    }`}>Can I coustimize the captions?</AccordionHeader>
                <AccordionBody className="mt-4 text-justify text-lg text-whitesmoke font-normal">
                    Absolutely! With FramePhase, you have full control to customize captions a timestamps in your videos. You&apos;re not just limited to altering the text you can also tweak the style and font of the captions to suit your preferences.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />} className="mb-6 rounded-lg border border-blue-gray-100 px-4 pt-4 pb-4">
                <AccordionHeader onClick={() => handleOpen(7)} className={`border-b-0 transition-colors ${open === 7 ? "text-purple-400 hover:!text-purple-500" : ""
                    }`}>Can I use the service offline? </AccordionHeader>
                <AccordionBody className="mt-4 text-justify text-lg text-whitesmoke font-normal">
                    No, the service requires an internet connection to function.
                </AccordionBody>
            </Accordion>



        </>
    );
}