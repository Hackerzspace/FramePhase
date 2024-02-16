'use client'
import  axios  from "axios";
import { useEffect, useState } from "react";

export default function FilePage({params}) {
    const filename = params.filename;
    const [requestSent, setRequestSent] = useState(false);
    useEffect(() => {
        setRequestSent(true);
        console.log({requestSent});
        console.log('test'+filename);
        // axios.get('/api/transcription?filename='+filename);
    },[filename])
    return (
        <div>{filename}</div>
    );
}