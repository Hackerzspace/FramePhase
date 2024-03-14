import SparklesIcon from "@/components/SparklesIcon";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { useState,useEffect, useRef } from "react";


export default function ResultVideo(filename){
    const videoUrl = "https://frame-phase.s3.amazonaws.com/"+filename;
    const [loaded, setLoaded] = useState(false);
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.src = videoUrl;
        load();
    },[]);

    const load = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
        const ffmpeg = ffmpegRef.current;
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setLoaded(true);
    }

    const transcode = async () => {
        const ffmpeg = ffmpegRef.current;
        await ffmpeg.writeFile(filename, await fetchFile(videoUrl));
        ffmpeg.on('log', ({ message }) => {
            console.log(message);
        });
        await ffmpeg.exec(['-i', filename, 'output.mp4']);
        const data = await ffmpeg.readFile('output.mp4');
        videoRef.current.src =
            URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
    }

    return(
        <>
            <div className="mb-4">
                <button 
                    onClick={transcode}
                    className="rounded-full py-3 px-5 inline-flex gap-2 cursor-pointer" 
                    style={{ background: '#0d1127',    border: '2px solid #5978F3ca'}}
                    >
                    <SparklesIcon/>
                    <span>Apply captions</span>
                </button>
            </div>
            <div className="rounded-xl overflow-hidden">
            <video
                data-video={0}
                ref={videoRef}
                controls>
            </video>
            </div>
        </>
    );
}