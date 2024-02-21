'use client'
import  axios  from "axios";
import { useEffect, useState } from "react";

export default function FilePage({params}) {
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);

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
            setAwsTranscriptionItems(transcription.results.items);
        }
    });
 }
    return (
        <div>
            {filename}
            <div>is transcribing:{JSON.stringify(isTranscribing)}</div>
            {awsTranscriptionItems.length > 0 && awsTranscriptionItems.map(item => (
                <div>
                    <span className="text-white/50 mr-2">
                        {item.start_time} - {item.end_time}
                    </span>
                    <span>
                        {item.alternatives[0].content}
                    </span>
                </div>
            ))}
        </div>
    );
}
