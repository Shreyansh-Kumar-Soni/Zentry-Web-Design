import React, {useEffect, useRef} from 'react';
import Button from './Button';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

const Universe = () => {
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
                            backgroundColor: "#edff66",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(document.body, {
                            backgroundColor: "#edff66",
                            duration: 0.5,
                        });
                    },
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen p-5 md:p-10">

            <h1 className='font-zentry special-font md:text-[8vw] text-5xl leading-[0.8]'>the univers<b>e</b> <br/> powered by ZE<b>N</b>T</h1>
            <Button
                id="enter-vault"
                title="ENTER VAULT"
                containerClass="!bg-black mt-10 !py-4 font-bold text-white flex-center gap-1"
            />

            <div className='flex flex-col-reverse md:flex-row justify-between w-full '>
                <div className='space-y-4 flex flex-col opacity-70 justify-end' >
                    <h3 className='font-circular-web font-semibold text-3xl'>Shaping Zentry Collectively</h3>
                    <p className='max-w-xs font-semibold'>Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations</p>
                </div>
                <video src='videos/symbol_3.webm' className="md:h-96 h-48 max-lg:mb-48 mt-10" autoPlay loop muted />
            </div>





        </section>
    );
};

export default Universe;