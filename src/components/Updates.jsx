import React, {useState, useRef, useEffect} from 'react';
import Button from './Button';
import { SiSoundcharts } from 'react-icons/si';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Updates = () => {
    const imgRefs = useRef([]);
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
                            backgroundColor: "#ffffff",
                            duration: 0.5,
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(document.body, {
                            backgroundColor: "#ffffff",
                            duration: 0.5,
                        });
                    },
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (event, index) => {
        const { clientX, clientY } = event;
        const rect = imgRefs.current[index].getBoundingClientRect();


        const xOffset = clientX - rect.left - rect.width / 2;
        const yOffset = clientY - rect.top - rect.height / 2;


        gsap.to(imgRefs.current[index], {
            x: xOffset * 0.01,
            y: yOffset * 0.01,
            rotationY: xOffset / 25,
            rotationX: -yOffset / 25,
            transformPerspective: 900,
            duration: 0.7,
            ease: 'power1.out',
        });
    };


    const handleMouseLeave = (index) => {
        gsap.to(imgRefs.current[index], {
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.1,
            ease: 'power1.out',
        });
    };

    useGSAP(() => {
        gsap.to('#title1', {
            scrollTrigger: {
                trigger: '#title1',
                start: '30% center',
                end: 'bottom center',
                pin: true,
                toggleActions: 'play none none none',
            },
            duration: 1.5,
        });
    }, []);

    return (
        <section ref={sectionRef} className='sm:h- flex flex-col md:flex-row gap-5'>
            {/* Left Section: Title and Button */}
            <div id='title1' className='space-y-5 px-4'>
                <h1 className='font-zentry special-font text-black text-[18vw] px-4 md:text-[8vw] leading-[0.8] uppercase'>
                    Lat<b>e</b>st <b>u</b>pdates
                </h1>
                <p className='text-[3vw] md:text-[1vw] px-4 leading-[1] w-[220px]'>
                    Stay updated with the latest news, events, and updates in our ecosystem. Be part of our universe's growth and evolution.
                </p>
                <Button title='READ ALL NEWS' containerClass='!bg-black text-white flex [transform:scale(0.9)] space-x-5' rightIcon={<SiSoundcharts />} />
            </div>

            {/* Right Section: Images with mouse movement effect */}
            <div className='flex flex-col gap-5 md:w-1/2 py-60 md:py-0 px-12'>
                {/* First Image */}
                <div
                    onMouseMove={(e) => handleMouseMove(e, 0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                    className='relative items-end object-end justify-end'
                >
                    <img
                        ref={(el) => (imgRefs.current[0] = el)}
                        src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jK_mhODu9NdF-H3Q'
                        alt='updates-1'
                        className='w-full md:w-[70vw] lg:w-[50vw] rounded-lg object-cover border border-black'
                    />
                    <div className='flex justify-between max-w-lg space-x-5 py-5 w-2/3'>
                        <p className='text-[2vw] md:text-[1vw] font-general font-semibold opacity-70'>09.05.2024</p>
                        <h1 className='font-robert-medium text-[3vw] md:text-[1.5vw] max-w-xs leading-[1.1]'>Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global Play Economy</h1>
                    </div>
                </div>

                {/* Second Image */}
                <div
                    onMouseMove={(e) => handleMouseMove(e, 1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                    className='relative '
                >
                    <img
                        ref={(el) => (imgRefs.current[1] = el)}
                        src='https://a.storyblok.com/f/271652/1053x602/cf66707253/news-cover-4.png/m/'
                        alt='updates-2'
                        className='w-full md:w-[70vw] lg:w-[50vw] object-cover border border-black rounded-md hover:shadow-md transition-all'
                    />
                    <div className='flex justify-start space-x-5 max-w-lg py-5 w-2/3'>
                        <p className='text-[2vw] md:text-[1vw] font-general font-semibold opacity-70'>23.04.2024</p>
                        <h1 className='font-robert-medium text-[3vw] md:text-[1.5vw] max-w-xs leading-[1.1]'>Zentry Whitepaper: The Blueprint to the Metagame</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Updates;
