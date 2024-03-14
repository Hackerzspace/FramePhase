'use client'
import TranscriptionItem from "@/components/TranscriptionItem";
import ResultVideo from "@/components/resultVideo";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionHelpers";
import  axios  from "axios";
import { useEffect, useState } from "react";

export default function FilePage({params}) {
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [isFetchingInfo, setIsFetchingInfo] = useState(false);
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);

    useEffect(() => {
       getTranscription();
 }, [filename]);

 function getTranscription(){
    setIsFetchingInfo(true);
    axios.get('/api/transcribe?filename='+filename). then(response => {
        setIsFetchingInfo(false);
        const status = response.data?.status;
        const transcription = response.data?. transcription;
        if (status === 'IN_PROGRESS') {
            setIsTranscribing(true);
            setTimeout(getTranscription,3000);
        }
        else {
            setIsTranscribing(false);
            
            setAwsTranscriptionItems(
                clearTranscriptionItems(transcription.results.items)
            );
        }
    });
 }

 if(isTranscribing){
    return (
        <div>Transcibing your video...</div>
    );
 }

 if(isFetchingInfo){
    return(
        <div>Fetching Information...</div>
    );
 }
    return (
        <div>
            <div className="grid grid-cols-2 gap-16">
                <div className="">
                    <h2 className="text-2xl mb-4 text-white/60">Transcription</h2>
                    <div className="grid grid-cols-3 sticky top-0 bg-violet-800/80 p-2 rounded-md">
                        <div>Form</div>
                        <div>End</div>
                        <div>Content</div>
                    </div>
                    {awsTranscriptionItems.length >0 && awsTranscriptionItems.map(item => (
                        <TranscriptionItem item={item}/>
                    ))}
                </div>
                <div>
                    <h2 className="text-2xl mb-4 text-white/60">Result</h2>
                    <ResultVideo filename={filename}/>
                </div>
            </div>
        </div>
    );
}
