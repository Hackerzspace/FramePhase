import TranscriptionItem from "@/components/TranscriptionItem";
import { useState } from 'react';
import axios from 'axios';
import SparklesIcon from "./SparklesIcon";

export default function TranscriptionEditor({
  awsTranscriptionItems,
  setAwsTranscriptionItems,
}) {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const updateTranscriptionItem = (index, prop, ev) => {
    const newAwsItems = [...awsTranscriptionItems];
    newAwsItems[index] = { ...newAwsItems[index], [prop]: ev.target.value };
    setAwsTranscriptionItems(newAwsItems);
  };

  const extractContentWords = (transcriptionItems) => {
    const words = transcriptionItems.flatMap(item => item.content.split(' ')).filter(word => word.trim() !== '');
    return words.join(' ');
  };

  const summarizeText = async () => {
    const textToSummarize = extractContentWords(awsTranscriptionItems);
    setText(textToSummarize);
    try {
      const response = await axios.post("https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/", {
        text: textToSummarize,
        min_length: 100,
        max_length: 300,
      }, {
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host": "tldrthis.p.rapidapi.com",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        },
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error summarizing text:", error);
      // Handle error here
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 sticky top-0 bg-black/80 p-2 rounded-md">
        <div>From</div>
        <div>End</div>
        <div>Content</div>
      </div>
      {awsTranscriptionItems.length > 0 && (
        <div className="h-48 sm:h-auto overflow-y-scroll sm:overflow-auto">
          {awsTranscriptionItems.map((item, key) => (
            <div key={key}>
              <TranscriptionItem
                handleStartTimeChange={ev => updateTranscriptionItem(key, 'start_time', ev)}
                handleEndTimeChange={ev => updateTranscriptionItem(key, 'end_time', ev)}
                handleContentChange={ev => updateTranscriptionItem(key, 'content', ev)}
                item={item} />
            </div>
          ))}
        </div>
      )}
      <div className="flex md:flex-row flex-col justify-between mt-4 w-full">
        <div className="md:w-2/5 w-full ">
          <label htmlFor="text" className=" text-sm font-medium text-primary">
            Enter your text
          </label>
          <div className="mt-2">
            <textarea
              rows={14}
              name="text"
              id="text"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-black text-base p-4 rounded-md"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0 mt-4">
          <button
            className="rounded-full px-5 py-3 bg-active gap-1 font-bold inline-flex text-background hover:bg-primary m-1 cursor-pointer"
            style={{ background: '#0d1127', border: '2px solid #5978F3ca' }}
            type="button"
            onClick={summarizeText}
          >
            <SparklesIcon />
            <span>Summarize</span>
          </button>
        </div>

        <div className="md:w-2/5 md:mt-0 mt-4 w-full">
          <label htmlFor="summary" className="text-sm font-medium text-primary">
            Summarized text
          </label>
          <div className="mt-2">
            <textarea
              readOnly
              rows={14}
              name="summary"
              id="summary"
              className="focus:outline-none focus:ring-4 w-full focus:ring-active text-black text-base p-4 rounded-md"
              value={summary}
            />
          </div>
        </div>
      </div>
    </>
  );
}
