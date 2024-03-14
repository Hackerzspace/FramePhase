'use client';
import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function UploadForm() {

  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.postForm('/api/upload', {
        file,
      });
      setIsUploading(false);
      const newName = res.data.newName;
      router.push('/'+newName);
    }
  }
    return (
        <>
            {isUploading && (
                <div className="bg-black/80 text-white fixed inset-0 flex items-center">
                    <div className="w-full text-center">
                        <h2 className="text-3xl mb-4">Uploading</h2>
                        <h3>please wait...</h3>
                    </div>
                </div>
            )}
            <label className="rounded-full py-3 px-5 inline-flex gap-2 cursor-pointer" style={{ background: '#0d1127',    border: '2px solid #5978F3ca'}}>
                <UploadIcon />
                <span>Choose File</span>
                <input onChange={upload} type="file" className="hidden"  />
            </label>
        </>
    );
}