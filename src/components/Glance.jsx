import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

const Glance = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        gsap.to(document.body, {
                            backgroundColor: "#000000",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(document.body, {
                            backgroundColor: "#000000",
                            duration: 0.5,
                        });
                    },
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="">
            <div className="container mx-auto w-full">
                <div className="mb-8 text-white text-center md:text-left">
                    <p className="font-general text-[1vw] uppercase">our universe in a nutshell</p>
                    <p className="font-zentry !text-[9vw] !leading-[0.8]">Zentry at a<br/> Glance</p>
                </div>

                <div className="relative grid h-min-[135vh] grid-cols-1 gap-5 md:grid-cols-2 mx-2">
                    {/* Left Column */}
                    <div className="flex flex-col items-end gap-5">
                        {/* Container 1 - 220 x 130 (1.69) */}
                        <div className="h-[10vw]"></div>
                        <div
                            className="relative w-full w-[80%] md:max-w-[36vw] aspect-[169/100] shadow-lg overflow-hidden  rounded-lg text-white shadow-[inset_0_0_0_0.5px_rgba(156,163,175,0.5)]">
                            <div className="absolute px-3 py-2 text-[2.8vw] md:text-[1vw] "><b>Products</b></div>
                            <div className="absolute inset-0 flex items-start justify-start px-3 py-7 md:py-3">
                                <span className="font-zentry text-[13vw] md:text-[8vw] uppercase leading-tight">4+</span>
                            </div>
                            <video
                                src="videos/card-1.webm"
                                autoPlay
                                loop
                                className="absolute inset-0 w-full h-full object-cover object-end"
                            />
                        </div>

                        {/* Container 2 - 150 x 140 (1.07) */}
                        <div
                            className="relative w-full w-[50%] md:max-w-[22vw] aspect-[107/100] shadow-lg overflow-hidden bg-yellow-300 rounded-lg text-black">
                            <div className="absolute top-0 left-0 right-0 flex justify-center">
                                <span className="special-font text-[27vw] md:text-[14vw] uppercase leading-none mt-1 "><b>30+</b></span>
                            </div>
                            <div className="absolute inset-0 flex items-end justify-end text-[2.8vw] md:text-[1vw] px-2 py-2">
                            <b>Partners</b>
                            </div>
                        </div>

                        {/* Container 4 - 260 x 330 (0.79) */}
                        <div
                            className="relative w-full w-[75%] md:max-w-[32vw] aspect-[79/120] shadow-lg overflow-hidden bg-violet-300 rounded-lg">
                            <div className="absolute text-general text-[2.8vw] md:text-[1vw] px-3 py-3">
                            <b>Treasury</b>
                            </div>
                            <div className="absolute inset-0 flex items-start justify-start py-4 px-3">
                                <span className="font-zentry text-[18vw] md:text-[7vw] uppercase leading-tight">140M+</span>
                            </div>
                            <video
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/videos/card-5.webm" type="video/webm"/>
                            </video>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-start gap-5">
                        {/* Container 3 - 260 x 370 (0.70) */}
                        <div
                            className="relative w-full w-[75%] md:max-w-[35vw] aspect-[7/10] shadow-lg overflow-hidden bg-violet-300 rounded-lg">
                            <img src="img/gallery-1.webp" alt="..."
                                 className="absolute w-full h-full object-cover object-center"/>
                            <p className="absolute px-3 py-2 text-[2.8vw] md:text-[1vw] "><b>Residents</b></p>
                            <div className=" inset-1 flex items-start justify-center py-8 md:py-6">
                                <span
                                    className="font-zentry special-font text-[20vw] md:text-[9.5vw] uppercase leading-tight [transform:scale(1.4)]" ><b>500K+</b></span>
                            </div>
                        </div>

                        {/* Container 5 - 180 x 150 (1.20) */}
                        <div
                            className="relative w-full w-[50%] md:max-w-[22vw] aspect-[1/1] shadow-lg overflow-hidden bg-black rounded-lg shadow-[inset_0_0_0_0.5px_rgba(156,163,175,0.5)] text-white">
                            <div className="absolute inset-0 flex items-start justify-start py-2 px-2">
                                <span className="font-zentry text-[7vw] md:text-[4vw] uppercase leading-[0.8]">World class <br/> backers</span>
                            </div>
                            <div className="absolute text-[2.2vw] md:text-[0.8vw] inset-0 flex justify-end items-end px-2 py-2">
                                <div className="text-right">
                                    coinbase ventures<br/>
                                    yzi labs<br/>
                                    spartan<br/>
                                    longhash<br/>
                                    pantera capital<br/>
                                    animoca brands<br/>
                                    defiance capital<br/>
                                    play ventures<br/>
                                    skyvision capital<br/>
                                    vessel capital<br/>
                                    arche fund<br/>
                                    synergis<br/>
                                </div>
                            </div>
                        </div>

                        {/* Container 6 - 290 x 130 (2.23) */}
                        <div
                            className="relative w-full w-[80%] md:max-w-[34vw] aspect-[180/100] shadow-lg overflow-hidden bg-neutral-200 rounded-lg">
                            <div className="text-[2.8vw] md:text-[1vw] leading-tight px-2 py-2"><b>Revnue Generated <br/>2024</b></div>
                            <div className="absolute inset-0 flex items-end md:items-start justify-center ">
                                <span
                                    className="font-zentry special-font text-[32vw] md:text-[17vw] uppercase leading-tight [transform:scaleX(1.3)]">
                                    40<b>M</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Glance;
