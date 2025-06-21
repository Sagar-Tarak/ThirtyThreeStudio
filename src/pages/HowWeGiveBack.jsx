import React, { useEffect, useRef } from 'react';
import Canvas from '../Canvas';

function HowWeGiveBack({ showCanvas, canvasData }) {
    // Set bg and text color based on showCanvas
    const bgColor = showCanvas ? "bg-[#fd2c2a] text-black" : "bg-black text-white";
    const borderColor = showCanvas ? "border-black" : "border-[#222]";
    const paragraphColor = showCanvas ? "text-black/70" : "text-white/80";

    return (
        <div className={`min-h-screen ${bgColor} border-t ${borderColor} relative overflow-hidden transition-colors duration-1000 ease-in-out px-3 sm:px-6 md:px-0`}>
            {/* Canvas red dot animation */}
            {showCanvas &&
                canvasData?.map((canvasDets, index) => (
                    <Canvas key={index} details={canvasDets} />
                ))}
            <div className="max-w-5xl mx-auto pt-8 sm:pt-12 px-0 sm:px-4 md:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-6 sm:mb-8 font-satoshi text-center md:text-left">
                    At Thirtysixstudio, we recognize that our industry can perpetuate harm. We believe we have to try and reverse some of these imbalances. That’s why we’re launching SS36, our local social sustainability hub.
                </h1>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-normal leading-snug mb-0 font-satoshi text-center md:text-left">
                    Through SS36, we reinvest some of our revenue and expertise into the communities that shape the culture and trends our field so heavily relies on. Our main focus is on bridging gaps for those affected by systemic obstacles related to race, sexuality, wealth and gender identity.
                </h2>
            </div>
            <div className={`border-t mt-10 sm:mt-16 pt-10 sm:pt-16 ${borderColor}`}>
                <div className="max-w-2xl mx-auto px-0 sm:px-4 md:px-0">
                    <p className={`text-sm sm:text-base mb-3 sm:mb-4 ${paragraphColor} text-center md:text-left`}>
                        Our SS36 work includes community-centric projects for local marginalized groups, as well as career initiatives for marginalized industry talent.
                    </p>
                    <p className={`text-sm sm:text-base mb-4 sm:mb-6 ${paragraphColor} text-center md:text-left`}>
                        As a client, the most impactful way you can assist us in reaching our social sustainability goals is by collaborating with our team on a project. We warmly welcome partner- and sponsorships from like-minded individuals and organizations.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className={`bg-transparent border ${showCanvas ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'} px-4 sm:px-6 py-2 rounded-full font-satoshi text-sm sm:text-base cursor-pointer transition-colors duration-300`}>
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWeGiveBack;
