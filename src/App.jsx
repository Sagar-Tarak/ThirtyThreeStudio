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
  const [navOpen, setNavOpen] = useState(false); // For mobile nav
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

  useEffect(() => {
    // Split heading text into spans for animation
    const headingElement = headingref.current;
    if (headingElement) {
      const text = headingElement.textContent;
      headingElement.innerHTML = text
        .split("")
        .map(
          (char, i) =>
            `<span class="split-char" style="display:inline-block; opacity:0; transform:translateY(40px)">${char === " " ? "&nbsp;" : char}</span>`
        )
        .join("");
    }
    // Animate each character in
    gsap.to(".split-char", {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="min-h-screen relative w-full font-['PP Mori'] mb-10">
        {showCanvas &&
          data[0].map((canvasDets, index) => <Canvas details={canvasDets} key={index} />)}

        <div className="w-full relative z-[1] min-h-[80vh] md:h-screen">
          <nav className="w-full p-3 sm:p-4 md:p-8 flex items-center justify-between z-50 relative ">
            <div className="brand text-xl sm:text-2xl font-md font-semibold text-center md:text-left w-full md:w-auto">
              Thirtysixstudio
            </div>
            {/* Hamburger for mobile/tablet */}
            <button
              className="md:hidden flex flex-col justify-center items-center ml-auto z-50"
              onClick={() => setNavOpen((open) => !open)}
              aria-label="Toggle navigation"
              type="button"
            >
              <span className={`block w-7 h-1 bg-black mb-1 transition-all duration-300 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-1 bg-black mb-1 transition-all duration-300 ${navOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-1 bg-black transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
            {/* Nav links */}
            <div
              className={`links md:flex flex-col md:flex-row gap-2 md:gap-10 items-center md:items-start justify-center md:justify-end absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent shadow-md md:shadow-none transition-all duration-300 z-40 ${navOpen ? 'flex' : 'hidden'}`}
            >
              {["What we do", "Who we are", "How we give back", "Talk to us"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md text-white md:text-black hover:text-gray-300 w-full md:w-auto text-center py-3 md:py-0 border-b md:border-none border-gray-700 md:border-gray-200"
                  onClick={() => setNavOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-3 sm:px-6 md:px-[10%] lg:px-[20%] flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0 mt-2 mb-2">
            {/* Left side - text content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-xl sm:text-2xl md:text-4xl leading-tight mt-2">
                At Thirtysixstudio, we build digital assets and immersive
                experiences for purposeful brands.
              </h3>
              <p className="text-base sm:text-lg mt-4 sm:mt-6 font-normal">
                We're a boutique production studio focused on design, animation,
                and technology, constantly rethinking what digital craft can do
                for present-day ads and campaigns.
              </p>
              <p className="text-lg sm:text-2xl mt-4 sm:mt-6">Scroll</p>
            </div>

            {/* Right side - Circular text using SVG */}
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-50 lg:h-50 relative animate-spin-slow lg:ml-60">
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

          <div className="w-full absolute bottom-0 left-0 pb-2 sm:pb-4">
            <h1
              ref={headingref}
              className="text-[2.2rem] sm:text-[4rem] md:text-[10rem] lg:text-[18rem] font-normal tracking-normal leading-none text-center w-full"
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
