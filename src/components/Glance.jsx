import {TiLocationArrow} from "react-icons/ti";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

const Glance = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Background color animation timeline
            const bgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center", // When top hits center of viewport
                    end: "bottom center", // When bottom leaves center
                    onEnter: () => {
                        gsap.to(document.body, {
                            backgroundColor: "#000000",
                            duration: 0.5
                        });
                    },
                    onEnterBack: () => {  // This fires when scrolling back up
                        gsap.to(document.body, {
                            backgroundColor: "#000000",
                            duration: 0.5
                        });
                    },
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <section ref={sectionRef} className={"bg-white"}>
            <div className={"container mx-auto "}>
                <p className="bento-title special-font py-16 !text-8xl text-white">Zentry at a<br/> Glance</p>

                <div>

                </div>
                <div className={"relative grid h-[135vh] grid-cols-1  md:grid-cols-2"}>
                    <div className={""}>
                        <div
                            className={"relative size-full shadow-lg overflow-hidden bg-violet-300 rounded-lg h-[600px] w-[420px]"}>
                            <div className={"font-zentry !text-[18vw] uppercase text-center mt-0"}>
                                500k+
                            </div>
                            <img src="img/gallery-1.webp"
                                 className="absolute left-0 top-0 size-full object-cover object-center"/>

                        </div>
                        <div
                            className={"relative size-full shadow-lg overflow-hidden bg-violet-300 rounded-lg h-[600px] w-[420px]"}>
                            <div className={"font-zentry !text-[18vw] uppercase text-center mt-0"}>
                                500k+
                            </div>
                            <img src="img/gallery-1.webp"
                                 className="absolute left-0 top-0 size-full object-cover object-center"/>

                        </div>
                        <div
                            className={"relative size-full shadow-lg overflow-hidden bg-violet-300 rounded-lg h-[600px] w-[420px]"}>
                            <div className={"font-zentry !text-[18vw] uppercase text-center mt-0"}>
                                500k+
                            </div>
                            <img src="img/gallery-1.webp"
                                 className="absolute left-0 top-0 size-full object-cover object-center"/>

                        </div>
                    </div>
                    <div>
                        <div
                            className={"flex relative size-full shadow-lg overflow-hidden bg-violet-300 rounded-lg h-[600px] w-[420px]"}>
                            <div className={"font-zentry !text-[18vw] uppercase text-center mt-0"}>
                                500k+
                            </div>
                            <img src="img/gallery-1.webp"
                                 className="absolute left-0 top-0 size-full object-cover object-center"/>

                        </div>
                        <div
                            className={"flex relative size-full shadow-lg overflow-hidden bg-violet-300 rounded-lg h-[600px] w-[420px]"}>
                            <div className={"font-zentry !text-[18vw] uppercase text-center mt-0"}>
                                500k+
                            </div>
                            <img src="img/gallery-1.webp"
                                 className="absolute left-0 top-0 size-full object-cover object-center"/>

                        </div>
                        <div
                            className={"flex relative size-full shadow-lg overflow-hidden bg-violet-300 rounded-lg h-[600px] w-[420px]"}>
                            <div className={"font-zentry !text-[18vw] uppercase text-center mt-0"}>
                                500k+
                            </div>
                            <img src="img/gallery-1.webp"
                                 className="absolute left-0 top-0 size-full object-cover object-center"/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Glance