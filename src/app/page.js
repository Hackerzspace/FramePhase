import SparklesIcon from "@/components/SparklesIcon";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 max-w-4xl mx-auto">
      <header className="flex justify-between my-8 ">
        <a href="" className="flex gap-1">
        <SparklesIcon />
          <span>FramePhase</span>
        </a>
        <nav className="flex gap-6 text-white/70">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <div className="text-center mt-24 mb-8">
        <h1 className="text-3xl" style={{textShadow: '1px 1px 0 rgba(100,200,300,.5)'}}>
          Add epic captions to your videos
        </h1>
        <h2 className="text-l text-white/65">
          Just upload your video and we will do the rest
        </h2>
      </div>
      <div className="text-center">
        <button className="rounded-full py-3 px-5 inline-flex gap-2" style={{ background: '#0D1127',    border: '2px solid #5978F3'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
          </svg>
          <span>Choose File</span>
        </button>
      </div>
      <div className="flex justify-around items-center mt-24">
        <div className="bg-gray-300/15 w-[240px] h-[480px] rounded-xl"></div>
          <SparklesIcon />
        <div className="bg-gray-300/15 w-[240px] h-[480px] rounded-xl"></div>
      </div>
    </main>
  );
}
