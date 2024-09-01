import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Background color animation timeline
            const bgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center", // When top hits center of viewport
                    end: "bottom center", // When bottom leaves center
                    onEnter: () => {
                        gsap.to(document.body, {
                            backgroundColor: "#ffffff",
                            duration: 0.5
                        });
                    },
                    onEnterBack: () => {  // This fires when scrolling back up
                        gsap.to(document.body, {
                            backgroundColor: "#ffffff",
                            duration: 0.5
                        });
                    },
                    onLeave: () => {
                        gsap.to(document.body, {
                            backgroundColor: "#000000",
                            duration: 0.5
                        });
                    },
                    // onLeaveBack: () => {
                    //     gsap.to(document.body, {
                    //         backgroundColor: "",
                    //         duration: 0.5
                    //     });
                    // }
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=600 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.fromTo(".mask-clip-path2",
            {
                transformPerspective: 400,
                rotateX: 10,
                rotateY: 18,
                width: "30vw",
                height: "70vh",
                xPercent: -50, // Centers during animation
                left: "50%",
                borderRadius: "3%",
            },
            {
                transformPerspective: 10000,
                rotateX: 0,
                rotateY: 0,
                width: "100vw",
                height: "100vh",
                xPercent: -50, // Maintains center
                left: "50%",
                borderRadius:0
            }
        );
    });

    return (
        <div id="about" ref={containerRef} className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Zentry
                </p>

                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext ">
                    <p>The Game of Games begins—your life, now an epic MMORPG</p>
                    <p className="text-gray-500">
                        Zentry unites every player from countless games and platforms, both
                        digital and physical, into a unified Play Economy
                    </p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <img src="/img/stones.webp" alt={"Stones"} className={"fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-50 opacity-50"}/>
                <div className="mask-clip-path2 about-image ">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-1 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
