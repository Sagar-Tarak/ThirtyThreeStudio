import React, { useState, useRef, useEffect } from "react";
import Canvas from "../Canvas";
import { FiPlus, FiMinus } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Utility to split text into spans (by word), with better spacing
function SplitWords({ text, className, spanClass }) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ whiteSpace: "pre-wrap" }}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span
            className={spanClass}
            style={{ display: "inline-block", overflow: "hidden", marginRight: i !== words.length - 1 ? "0.25em" : 0 }}
          >
            {word}
          </span>
        </React.Fragment>
      ))}
    </span>
  );
}

function Services({ showCanvas, canvasData }) {
  const bgColor = showCanvas
    ? "bg-[#fd2c2a] text-black"
    : "bg-black text-white";
  const lineColor = showCanvas ? "bg-black" : "bg-zinc-800";
  const paragraphColor = showCanvas ? "text-black/70" : "text-white/80";

  const accordionItems = [
    "Creative",
    "Design",
    "Animation",
    "Technology",
    "Project Delivery",
    "Example Products",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Refs for animated text
  const sectionTitleRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const servicesTitleRef = useRef(null);
  const overviewTextRef = useRef(null);

  useEffect(() => {
    // Section Title
    if (sectionTitleRef.current) {
      gsap.fromTo(
        sectionTitleRef.current.querySelectorAll(".split-word"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Main Heading
    if (mainHeadingRef.current) {
      gsap.fromTo(
        mainHeadingRef.current.querySelectorAll(".split-word"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainHeadingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Services Title
    if (servicesTitleRef.current) {
      gsap.fromTo(
        servicesTitleRef.current.querySelectorAll(".split-word"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesTitleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Overview Text
    if (overviewTextRef.current) {
      gsap.fromTo(
        overviewTextRef.current.querySelectorAll(".split-word"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.3,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: overviewTextRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Section 1 — What We Do */}
      <div
        className={`w-full min-h-screen ${bgColor} px-3 sm:px-6 md:px-[8%] pt-6 sm:pt-12 md:pt-24 pb-0 sm:pb-12 md:pb-24 flex flex-col gap-6 sm:gap-20 relative overflow-hidden transition-colors duration-1000 ease-in-out`}
      >
        {/* Top horizontal line */}
        <div className={`w-full h-[1px] ${lineColor} absolute top-0 left-0`} />

        {/* Canvas red dot animation */}
        {showCanvas &&
          canvasData.map((canvasDets, index) => (
            <Canvas key={index} details={canvasDets} />
          ))}

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full z-10 gap-8 md:gap-0">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-10 md:pl-20">
            <h2 ref={sectionTitleRef} className="text-lg sm:text-xl uppercase tracking-wide font-semibold flex items-center gap-2 sm:gap-3">
              <span>01</span>
              <span className="w-6 sm:w-8 h-[1px] bg-current inline-block"></span>
              <SplitWords text="What we do" spanClass="split-word" />
            </h2>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-10 md:ml-20">
            <h1 ref={mainHeadingRef} className="text-2xl sm:text-4xl md:text-5xl leading-tight font-light max-w-full md:max-w-[65%]">
              <SplitWords text="We aim to elevate digital production in the advertising space, bringing your ideas to life." spanClass="split-word" />
            </h1>

            <div
              className={`text-sm sm:text-base leading-relaxed ${paragraphColor} space-y-4 max-w-full md:max-w-[65%] mt-8 sm:mt-16 md:mt-24`}
            >
              <p>
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver current digital work.
              </p>
              <p>
                Our commitment to innovation and simplicity, paired with our
                agile approach, ensures your journey with us is smooth and
                enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 — Our Services Overview */}
      <div
        className={`w-full ${bgColor} px-3 sm:px-6 md:px-[8%] pt-0 sm:pt-14 md:pt-28 pb-6 sm:pb-14 md:pb-28 flex flex-col items-start gap-2 sm:gap-8 relative transition-colors duration-1000 ease-in-out`}
      >
        {/* Top line */}
        <div className={`w-full h-[1px] ${lineColor} absolute top-0 left-0`} />

         {/* Canvas red dot animation */}
        {showCanvas &&
          canvasData.map((canvasDets, index) => (
            <Canvas key={index} details={canvasDets} />
          ))}

        <h3 ref={servicesTitleRef} className="text-sm sm:text-md uppercase tracking-wider opacity-70 mb-2 sm:mb-5">
          <SplitWords text="Our Services" spanClass="split-word" />
        </h3>
        <p ref={overviewTextRef} className="text-lg sm:text-2xl md:text-4xl leading-snug font-normal max-w-full md:max-w-[65%] ">
          <SplitWords text="We provide you with captivating design, interactive animations, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered." spanClass="split-word" />
        </p>
      </div>

      {/* Section 3 — Accordion */}
      <div
        className={`w-full ${bgColor} px-3 sm:px-6 md:px-[8%] py-4 sm:py-8 md:py-16 transition-colors duration-1000 ease-in-out`}
      >
        <div className={`w-full border-t ${showCanvas ? 'border-black/20' : 'border-white/20'}`}>
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`w-full border-b ${showCanvas ? 'border-black/20' : 'border-white/20'} transition-colors duration-300`}
            >
              {/* Accordion Header — full width, aligned */}
              <div
                className="w-full py-4 sm:py-6 cursor-pointer px-2 sm:px-4 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <h4 className={`uppercase text-sm sm:text-md font-semibold tracking-wide transition-colors duration-300 ${showCanvas ? 'text-black' : 'text-white'}`}> 
                  {item}
                </h4>
                <button
                  className={`
              border ${showCanvas ? 'border-black' : 'border-white'}
              w-8 h-8 rounded-full 
              flex items-center justify-center 
              transition duration-300
              ${
                openIndex === index
                  ? showCanvas
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                  : showCanvas
                    ? 'text-black hover:bg-black hover:text-white'
                    : 'text-white hover:bg-white hover:text-black'
              }
            `}
                >
                  {openIndex === index ? (
                    <FiMinus className="w-4 h-4" />
                  ) : (
                    <FiPlus className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Accordion Content — full width, aligned with header */}
              {openIndex === index && (
                <div className="w-full pb-4 sm:pb-6">
                  <ul className={`text-sm divide-y px-2 sm:px-4 transition-colors duration-300 ${showCanvas ? 'text-black divide-black/10' : 'text-white divide-white/10'}`}>
                    {item === "Creative" &&
                      ["Art direction", "Creative direction"].map((line, i) => (
                        <li
                          key={i}
                          className={`py-3 transition-colors duration-300 cursor-pointer ${showCanvas ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                        >
                          {line}
                        </li>
                      ))}

                    {item === "Design" &&
                      ["UI/UX", "Branding", "Layout Systems"].map((line, i) => (
                        <li
                          key={i}
                          className={`py-3 transition-colors duration-300 cursor-pointer ${showCanvas ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                        >
                          {line}
                        </li>
                      ))}

                    {item === "Animation" &&
                      [
                        "Motion Graphics",
                        "Transitions",
                        "Animated Storytelling",
                      ].map((line, i) => (
                        <li
                          key={i}
                          className={`py-3 transition-colors duration-300 cursor-pointer ${showCanvas ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                        >
                          {line}
                        </li>
                      ))}

                    {item === "Technology" &&
                      [
                        "Web Development",
                        "Frontend Frameworks",
                        "CMS Integrations",
                      ].map((line, i) => (
                        <li
                          key={i}
                          className={`py-3 transition-colors duration-300 cursor-pointer ${showCanvas ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                        >
                          {line}
                        </li>
                      ))}

                    {item === "Project Delivery" &&
                      [
                        "Production Strategy",
                        "Project Management",
                        "Team Direction",
                      ].map((line, i) => (
                        <li
                          key={i}
                          className={`py-3 transition-colors duration-300 cursor-pointer ${showCanvas ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                        >
                          {line}
                        </li>
                      ))}

                    {item === "Example Products" &&
                      [
                        "Microsites",
                        "Interactive Experiences",
                        "Branded Apps",
                      ].map((line, i) => (
                        <li
                          key={i}
                          className={`py-3 transition-colors duration-300 cursor-pointer ${showCanvas ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                        >
                          {line}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Contact Us */}
<div
  className={`w-full ${bgColor} px-3 sm:px-6 md:px-[8%] py-8 sm:py-12 md:py-24 transition-colors duration-1000 ease-in-out`}
>
  <div className="max-w-full md:max-w-3xl ml-0 md:ml-auto flex flex-col gap-4 sm:gap-6">
    <p className="text-xs sm:text-sm md:text-base text-white/80">
      Got a project in mind? Drop us a line at <br />
      <span className="text-white">hello@thirtysixstudio.com</span> or use the form below.
    </p>

    <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
      Not sure what you need? We’re here to help you define the undefined.
      Let’s explore all creative and technical possibilities together through one
      of our tailored labs, where we champion future-forward thinking within
      an ethical framework.
    </p>

    <button
      className="mt-4 w-full md:w-fit border border-white rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm text-white hover:bg-white hover:text-black transition-colors duration-300"
    >
      TALK TO US
    </button>
  </div>
</div>

    </>
  );
}

export default Services;
