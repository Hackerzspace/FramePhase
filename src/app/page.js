import DemoSection from "@/components/DemoSection";
import PageHeaders from "@/components/PageHeaders";
import UploadIcon from "@/components/UploadIcon";

export default function Home() {
  return (
    <>
      <PageHeaders 
        h1text={'Add epic captions to your videos'}
        h2text={'Just upload your video and we will do the rest'}
      />
      <div className="text-center">
        <button className="rounded-full py-3 px-5 inline-flex gap-2" style={{ background: '#0d1127',    border: '2px solid #5978F3ca'}}>
          <UploadIcon />
          <span>Choose File</span>
        </button>
      </div>
      <DemoSection />
    </>
  );
}
