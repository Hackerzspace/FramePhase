'use client'
import TranscriptionItem from "@/components/TranscriptionItem";
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
            <div className="flex gap-1 ">

            </div>
            {awsTranscriptionItems.length > 0 && awsTranscriptionItems.map(item => (
                <TranscriptionItem item={item} />
            ))}
        </div>
    );
}
