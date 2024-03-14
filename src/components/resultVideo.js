import SparklesIcon from "@/components/SparklesIcon";


export default function ResultVideo(filename){
    return(
        <>
            <div className="mb-4">
                <button className="rounded-full py-3 px-5 inline-flex gap-2 cursor-pointer" style={{ background: '#0d1127',    border: '2px solid #5978F3ca'}}>
                    <SparklesIcon/>
                    <span>Apply captions</span>
                </button>
            </div>
            <div className="rounded-xl overflow-hidden">
            <video
                controls
                src={"https://framephase.s3.amazonaws.com/"+filename}>
            </video>
            </div>
        </>
    );
}