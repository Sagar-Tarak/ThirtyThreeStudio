import React from "react";
import Canvas from "../Canvas";

function WhoWeAre({ showCanvas, canvasData }) {
 const bgColor = showCanvas
    ? "bg-[#fd2c2a] text-black"
    : "bg-black text-white";
  const lineColor = showCanvas ? "bg-black" : "bg-zinc-800";
  const paragraphColor = showCanvas ? "text-black/70" : "text-white/80";

return (
    <div
        className={`w-full relative overflow-hidden ${bgColor} transition-colors duration-1000 ease-in-out`}
    >
        <div className={`w-full h-[1px] ${lineColor}`} />

        {/* Test: force show canvas for debug */}
        {showCanvas &&
            canvasData?.map((canvasDets, index) => (
                <Canvas key={index} details={canvasDets} />
            ))}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-20 px-[8%] py-24">
            <div className="md:w-1/2 flex items-center gap-4 mb-8 md:mb-0">
                <span className="text-lg uppercase tracking-widest">02</span>
                <span className="h-[1px] w-8 bg-current" />
                <span className="text-lg uppercase font-semibold tracking-widest">
                    Who We Are
                </span>
            </div>
            <div className="md:w-1/2 flex flex-col items-start md:items-end gap-6">
                <h2 className="text-3xl md:text-4xl font-light leading-snug md:leading-tight text-right">
                    Our vision is to refine digital production while creating social
                    impact and opportunity.
                </h2>
            </div>
        </div>

        <div className="w-full border-t border-white/20">
            {[
                {
                    title: "Agile",
                    description:
                        "We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly.",
                },
                {
                    title: "Innovative",
                    description:
                        "We use carefully crafted digital processes and new technology to ensure our initiatives run smoothly, allowing our lean and international team to focus on what matters and maximize momentum and opportunity.",
                },
                {
                    title: "Cultured",
                    description:
                        "We are progressive and community-focused and don’t believe in maintaining the status quo or sticking to outdated ways. Our people reflect today’s realities and stay connected to culture.",
                },
            ].map((item, index) => (
                <div
                    key={index}
                    className="w-full flex flex-col md:flex-row items-start justify-between gap-10 py-24 border-b border-white/20"
                >
                    {/* Left Title — closer to the edge */}
                    <div className="text-[8vw] font-semibold leading-none md:pl-[4%]">
                        {item.title}
                    </div>

                    {/* Right Description — stays padded */}
                    <div className="md:w-2/5 text-md font-normal leading-relaxed pr-[18%]">
                        {item.description}
                    </div>
                </div>
            ))}
        </div>

        <div className={`w-full px-[18%] py-24 ${showCanvas } relative`}>
            <div className="max-w-xl ml-auto text-right relative">
                
                <h1 className="text-6xl md:text-5xl font-normal leading-snug md:leading-tight mb-20 relative">
                    <span className="relative">
                        Our studio represents today's
                        <span className="inline-block align-middle ml-2">
                            {/* Red dot for mobile, hidden on desktop */}
                            <span className="md:hidden inline-block w-3 h-3 rounded-full bg-[#fd2c2a] align-middle ml-1"></span>
                        </span>
                    </span>
                    <br />
                    modern world: progressive,
                    <br />
                    inclusive, and socially engaged.
                </h1>
                <p className="text-sm md:text-lg font-light leading-relaxed md:leading-loose mb-8">
                    Thirtysixstudio was founded by Gita Jagessar, a queer person of
                    color and seasoned production director from Amsterdam. With over 13
                    years of experience in digital advertising, Gita has worked with
                    renowned global brands such as Netflix, Converse, Travis Scott, Ben
                    & Jerry’s, Adidas, Cash App, and many more.
                </p>
                <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 text-md font-semibold tracking-widest">
                    LEARN MORE
                </button>
            </div>
        </div>
    </div>
);
}

export default WhoWeAre;
