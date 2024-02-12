import SparklesIcon from "./SparklesIcon";

export default function DemoSection(){
    return(
        <section className="flex justify-around items-center mt-24">
            <div className="bg-gray-300/15 w-[240px] h-[480px] rounded-xl"></div>
                <SparklesIcon />
            <div className="bg-gray-300/15 w-[240px] h-[480px] rounded-xl"></div>
        </section>
    );
}