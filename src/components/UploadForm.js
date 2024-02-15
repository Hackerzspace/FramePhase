'use client';
import UploadIcon from "@/components/UploadIcon";

export default function UploadForm(){
    async function upload(ev){
        eval.preventDefault();
        const files = ev.target.files;
        if(files.length>0){
            const file = files[0];
            const res = await axios.postForm('/api/upload',{
                file,
            });
            
        }
      }
    return (
        <label className="rounded-full py-3 px-5 inline-flex gap-2 cursor-pointer" style={{ background: '#0d1127',    border: '2px solid #5978F3ca'}}>
            <UploadIcon />
            <span>Choose File</span>
            <input onChange={upload} type="file" className="hidden"  />
      </label>
    );
}