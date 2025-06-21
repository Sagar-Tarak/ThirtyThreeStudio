import React, { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import Services from "./pages/Services";
import WhoWeAre from "./pages/WhoWeAre";
import HowWeGiveBack from "./pages/HowWeGiveBack";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);
  // console.log(data[2]);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="min-h-screen relative w-full font-['PP Mori'] mb-30">
        {showCanvas &&
          data[0].map((canvasDets, index) => <Canvas details={canvasDets} />)}

        <div className="w-full relative z-[1] h-screen  ">
          <nav className="w-full p-8 flex justify-between z-50 ">
            <div className="brand text-2xl font-md font-semibold">
              Thirtysixstudio
            </div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[20%] flex justify-between items-start">
            {/* Left side - text content */}
            <div className="w-1/2">
              <h3 className="text-4xl leading-tight">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p className="text-lg mt-10 font-normal">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="text-2xl mt-8">Scroll</p>
            </div>

            {/* Right side - Circular text using SVG */}
            <div className="w-1/2 flex justify-center items-center">
              <div className="w-50 h-50 relative animate-spin-slow ml-60">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                    />
                  </defs>
                  <text fontSize="8" fontFamily="sans-serif">
                    <textPath href="#circlePath" startOffset="0%">
                      FOR ALL THINGS DIGITAL PRODUCTION – THIRTYSIXSTUDIO –
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[18rem] pl-5 font-normal tracking-normal leading-none"
            >
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>

      

      <Services showCanvas={showCanvas} canvasData={data[1]} />
     <WhoWeAre showCanvas={showCanvas} canvasData={data[9]} />
     <HowWeGiveBack showCanvas={showCanvas} canvasData={data[2]} />
     

    </>
  );
}

export default App;
