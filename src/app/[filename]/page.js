'use client'
import  axios  from "axios";
import { useEffect, useState } from "react";

export default function FilePage({params}) {
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);
    useEffect(() => {
       getTranscription();
 }, [filename]);

 function getTranscription(){
    axios.get('/api/transcribe?filename='+filename). then(response => {
        const status = response.data?.status;
        const transcription = response.data?. transcription;
        if (status === 'IN_PROGRESS') {
            setIsTranscribing(true);
            setTimeout(getTranscription,3000);
        }
        else {
            setIsTranscribing(false);
        }
    });
 }
    return (
        <div>
            {filename}
            <div>is transcribing:{JSON.stringify(isTranscribing)}</div>
        </div>
    );
}
