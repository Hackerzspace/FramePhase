import SparklesIcon from "@/components/SparklesIcon";
import {transcriptionItemsToSrt} from "@/libs/awsTranscriptionHelpers";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import {toBlobURL, fetchFile} from "@ffmpeg/util";
import {useEffect, useState, useRef} from "react";
import poppins from './../fonts/Poppins-Regular.ttf';
import poppinsBold from './../fonts/Poppins-Bold.ttf';

export default function ResultVideo({filename,transcriptionItems}) {
    const videoUrl = "https://frame-phase.s3.amazonaws.com/"+filename;
    // const [loaded, setLoaded] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('#FFFFFF');
    const [outlineColor, setOutlineColor] = useState('#000000');
    const [progress, setProgress] = useState(1);
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);
  
    useEffect(() => {
      videoRef.current.src = videoUrl;
      load();
    }, [videoUrl]);
  
    const load = async () => {
      const ffmpeg = ffmpegRef.current;
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd'
      await ffmpeg.load({
        coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
        wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      });
      await ffmpeg.writeFile('/tmp/poppins.ttf', await fetchFile(poppins));
      await ffmpeg.writeFile('/tmp/poppins-bold.ttf', await fetchFile(poppinsBold));
      // setLoaded(true); // Remove this line
    }
  
    function toFFmpegColor(rgb) {
      const bgr = rgb.slice(5,7) + rgb.slice(3,5) + rgb.slice(1,3);
      return '&H' + bgr + '&';
    }
  
    const transcode = async () => {
      const ffmpeg = ffmpegRef.current;
      const srt = transcriptionItemsToSrt(transcriptionItems);
      await ffmpeg.writeFile(filename, await fetchFile(videoUrl));
      await ffmpeg.writeFile('subs.srt', srt);
      videoRef.current.src = videoUrl;
      await new Promise(resolve => {
        videoRef.current.onloadedmetadata = resolve;
      });
      const duration = videoRef.current.duration;
      ffmpeg.on('log', ({ message }) => {
        const regexResult = /time=([0-9:.]+)/.exec(message);
        if (regexResult && regexResult?.[1]) {
          const howMuchIsDone = regexResult?.[1];
          const [hours,minutes,seconds] = howMuchIsDone.split(':');
          const doneTotalSeconds = hours * 3600 + minutes * 60 + seconds;
          const videoProgress = doneTotalSeconds / duration;
          setProgress(videoProgress);
        }
      });
      await ffmpeg.exec([
        '-i', filename,
        '-preset', 'ultrafast',
        '-vf', `subtitles=subs.srt:fontsdir=/tmp:force_style='Fontname=Poppins Bold,FontSize=30,MarginV=70,PrimaryColour=${toFFmpegColor(primaryColor)},OutlineColour=${toFFmpegColor(outlineColor)}'`,
        'output.mp4'
      ]);
      const data = await ffmpeg.readFile('output.mp4');
      videoRef.current.src =
        URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
      setProgress(1);
    }


    return (
        <>
          <div className="mb-4">
            <button
              onClick={transcode}
              className="rounded-full py-3 px-5 mx-3 inline-flex gap-2 cursor-pointer" style={{ background: '#0d1127',    border: '2px solid #5978F3ca'}}>
              <SparklesIcon />
              <span>Apply captions</span>
            </button>
          </div>
          <div>
            primary color:
            <input type="color"
                   value={primaryColor}
                   onChange={ev => setPrimaryColor(ev.target.value)}/>
            <br />
            outline color:
            <input type="color"
                   value={outlineColor}
                   onChange={ev => setOutlineColor(ev.target.value)}/>
          </div>
          <div className="rounded-xl overflow-hidden relative">
            {progress && progress < 1 && (
              <div className="absolute inset-0 bg-black/80 flex items-center">
                <div className="w-full text-center">
                  <div className="bg-gradient-from/50 mx-8 rounded-lg overflow-hidden relative" style={{border: '2px solid #5978F3ca'}}>
                    <div className="bg-bg-gradient-from h-8"
                         style={{width:progress * 100+'%'}}>
                      <h3 className="text-white text-xl absolute inset-0 py-1">
                        {parseInt(progress * 100)}%
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <video
              data-video={0}
              ref={videoRef}
              controls>
            </video>
          </div>
        </>
      );
    }