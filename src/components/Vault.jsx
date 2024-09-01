import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Button from "./Button.jsx";

const Vault = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);


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
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const ctx = gsap.context(() => {
            if (!textRef.current) return;

            // Initialize SplitText
            const split = new SplitText(textRef.current, {
                type: "words,lines",
                wordsClass: "word",
                linesClass: "line"
            });

            gsap.set(split.lines, {
                opacity: 0,
                rotationY: -90,
                transformOrigin: "50% 50% -200px", // Cylinder depth
                perspective: 800,
                z: -200 // Push back for 3D space
            });

            // Create animation with repeating ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reset",
                }
            });

            tl.to(split.lines, {
                opacity: 1,
                rotationY: 0, // Front-facing
                z: 0, // Bring to normal depth
                duration: 1.2,
                ease: "back.out(1.2)"
            });


            gsap.from(".inline-block", {
                opacity: 0,
                rotationY: -90,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%"
                }
            });

            return () => split.revert();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen w-screen py-20">
            <div className="container mx-auto text-center">
                <p style={{ color: 'black' }} className="font-general uppercase px-5 py-5 text-sm">who we are</p>
                <div className="animated-title justify-between text-black">
                    <p ref={textRef} style={{ color: 'black' }} className="font-zentry mx-auto max-w-4xl text-6xl">
                        We&#39;re building <br/>a new <span className="inline-block w-[0.5em] h-[0.5em] bg-black align-middle rounded-md"></span> reality <br/> that rewards<br/> players <span className="inline-block w-[0.5em] h-[0.5em] bg-black align-middle rounded-md"></span> and <br/> empowers <br/> humans &amp; AI<br /> to <span className="inline-block w-[0.5em] h-[0.5em] bg-black align-middle rounded-md"></span> thrive
                    </p>
                </div>

                <p style={{ color: 'black' }} className="font-general text-sm px-4 py-6">
                    Zentry envisions a future where players, emerging tech,<br/>
                    and a new economy unite at the convergence of gaming <br/>
                    and AI.
                </p>

                <Button title="discover who we are" />
            </div>
        </div>
    );
};

export default Vault;