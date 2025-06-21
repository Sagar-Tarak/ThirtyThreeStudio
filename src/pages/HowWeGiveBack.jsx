import React from 'react'
import { useEffect, useRef } from 'react';
import Canvas from '../Canvas';
function HowWeGiveBack() {


    return (
        <div className="min-h-screen bg-black text-white border-t border-[#222] relative overflow-hidden">
            <div className="max-w-5xl mx-auto pt-12">
                <h1 className="text-4xl font-normal leading-tight mb-8 font-satoshi">
                    At Thirtysixstudio, we recognize that our industry can perpetuate harm. We believe we have to try and reverse some of these imbalances. That’s why we’re launching SS36, our local social sustainability hub.
                </h1>
                <h2 className="text-3xl font-normal leading-snug mb-0 font-satoshi">
                    Through SS36, we reinvest some of our revenue and expertise into the communities that shape the culture and trends our field so heavily relies on. Our main focus is on bridging gaps for those affected by systemic obstacles related to race, sexuality, wealth and gender identity.
                </h2>
            </div>
            <div className="border-t border-[#222] mt-16 pt-16">
                <div className="max-w-2xl mx-auto">
                    <p className="text-base mb-4">
                        Our SS36 work includes community-centric projects for local marginalized groups, as well as career initiatives for marginalized industry talent.
                    </p>
                    <p className="text-base mb-6">
                        As a client, the most impactful way you can assist us in reaching our social sustainability goals is by collaborating with our team on a project. We warmly welcome partner- and sponsorships from like-minded individuals and organizations.
                    </p>
                    <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-satoshi text-base cursor-pointer">
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HowWeGiveBack
