import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ScrollingText from "../Home/ScrollingText";
import "./TeamCards.css";
import webteam1 from "../../assets/Web Team/Karthik.webp";
import webteam2 from "../../assets/Web Team/Parikshit.webp";
import webteam3 from "../../assets/Web Team/Robin.webp";
import webteam4 from "../../assets/Web Team/Rohan.webp";
import webteam5 from "../../assets/Web Team/Shravan.webp";
import execom1 from  "../../assets/Team/TeamCard0.webp"
import execom2 from  "../../assets/Team/TeamCard1.webp"
import execom3 from  "../../assets/Team/TeamCard2.webp"
import execom4 from  "../../assets/Team/TeamCard3.webp"
import execom5 from  "../../assets/Team/TeamCard4.webp"
import execom6 from  "../../assets/Team/TeamCard5.webp"
import execom7 from  "../../assets/Team/TeamCard6.webp"
import execom8 from  "../../assets/Team/TeamCard7.webp"
import execom9 from  "../../assets/Team/TeamCard8.webp"
import execom10 from  "../../assets/Team/TeamCard9.webp"
import execom11 from  "../../assets/Team/TeamCard10.webp"
import execom12 from  "../../assets/Team/TeamCard11.webp"
import execom13 from  "../../assets/Team/TeamCard12.webp"
import execom14 from  "../../assets/Team/TeamCard13.webp"
import execom15 from  "../../assets/Team/TeamCard14.webp"
import execom16 from  "../../assets/Team/TeamCard15.webp"
import execom17 from  "../../assets/Team/TeamCard16.webp"
import execom18 from  "../../assets/Team/TeamCard17.webp"
import execom19 from  "../../assets/Team/TeamCard18.webp"

export default function Execom() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // Array of team card images
    const teamCards = [execom1, execom2, execom3, execom4, execom5, execom6, execom7, execom8, execom9, execom10, execom11, execom12, execom13, execom14, execom15, execom16, execom17, execom18, execom19];
    // Duplicate the array to create seamless infinite scroll
    const duplicatedTeamCards = [...teamCards, ...teamCards];

    // Web Team members
    const webTeamMembers = [
        { name: "Karthik", image: webteam1 },
        { name: "Parikshit", image: webteam2 },
        { name: "Robin", image: webteam3 },
        { name: "Rohan", image: webteam4 },
        { name: "Shravan", image: webteam5 }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative p-4 sm:p-6 lg:p-8 h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat mt-3"
                    style={{
                        backgroundImage: "url('/bgtest.png')",
                        opacity: 1,
                    }}
                ></div>
                <div className="relative text-center space-y-4 z-10 max-w-4xl mx-auto px-4">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white"
                        style={{ fontFamily: 'Morton' }}
                    >
                        MEET THE 
                    </h1>
                    <h1
                        className="text-5xl sm:text-8xl md:text-9xl lg:text-8xl xl:text-9xl text-[#ED246D]"
                        style={{ fontFamily: 'Morton' }}
                    >
                        TEAM.
                    </h1>
                </div>
            </div>

            {/* Scrolling Team Cards */}
            <div className="team-scroll-wrapper">
                <div className="flex items-center mb-10 ">
                    <h1 className="text-[#ED246D] md:text-5xl text-[25px] font-bold  " style={{ fontFamily: 'Morton' }}>//</h1>
                    <h1 className="text-white md:text-5xl text-[25px]  font-bold  " style={{ fontFamily: 'Morton' }}> GLITCH </h1>
                    <h1 className="text-[#ED246D] md:text-5xl text-[25px] font-bold ml-4 " style={{ fontFamily: 'Morton' }}>EXECOM</h1>
                </div>
                <div className="team-scroll-container">
                    {duplicatedTeamCards.map((cardSrc, index) => (
                        <div key={`team-card-${index}`} className="team-card">
                            <img src={cardSrc} alt={`Team Member ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Web Team Section */}
            <div className="team-scroll-wrapper">
                <div className="flex items-center mb-0">
                    <h1 className="text-[#ED246D] md:text-5xl text-3xl font-bold" style={{ fontFamily: 'Morton' }}>//</h1>
                    <h1 className="text-white md:text-5xl text-3xl font-bold" style={{ fontFamily: 'Morton' }}> WEB </h1>
                    <h1 className="text-[#ED246D] md:text-5xl text-3xl font-bold ml-4" style={{ fontFamily: 'Morton' }}>TEAM</h1>
                </div>
                <div className="web-team-container">
                    {webTeamMembers.map((member, index) => (
                        <div key={`web-team-${index}`} className="web-team-card">
                            <img src={member.image} alt={`${member.name}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
