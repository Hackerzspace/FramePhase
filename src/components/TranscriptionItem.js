import { useState } from "react";

export default function TranscriptionItem({item}) {
  const [startSeconds, setStartSeconds] = useState(item.start_time);
  const [endSeconds, setEndSeconds] = useState(item.end_time);
  const [content, setContent] = useState(item.content);
  return (
    <div className="my-1 grid grid-cols-3 gap-1 items-center">
      <input type="text"
             className="bg-white/20 p-1 rounded-md"
             value={startSeconds}
             onChange={ev => setStartSeconds(ev.target.value)}
      />
      <input type="text"
             className="bg-white/20 p-1 rounded-md"
             value={endSeconds}
             onChange={ev => setEndSeconds(ev.target.value)}
      />
      <input type="text"
             className="bg-white/20 p-1 rounded-md"
             value={content}
             onChange={ev => setContent(ev.target.value)}
      />
    </div>
  );
}