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

    const Tilt = ({children, className=''}) => {
        const [transformStyle, setTransformStyle] = useState('');
        const itemRef = useRef();

        const handleMouseMove = (e) => {
            // if(!itemRef.current) return;

            const {left, top, width, height} = itemRef.current.getBoundingClientRect();

            const relativeX = (e.clientX - left)/width;
            const relativeY = (e.clientY - top)/height;

            const tiltX = (relativeX - 0.5)*10;
            const tiltY = (relativeY - 0.5)*10;

            const newTransformStyle = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(0.97,0.97,0.97)`;


            setTransformStyle(newTransformStyle);
        }

        const handleMouseLeave = () => {
            setTransformStyle('')
        }

        return (
            <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:  transformStyle}}>
                {children}
            </div>
        )
    }

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
        <section ref={sectionRef} className='flex flex-col md:flex-row gap-5'>
            {/* Left Section: Title and Button */}
            <div id='title1' className='md:w-[50%] space-y-5 px-4'>
                <h1 className='font-zentry special-font text-black text-[18vw] px-4 md:text-[8vw] leading-[0.8] uppercase'>
                    Lat<b>e</b>st <b>u</b>pdates
                </h1>
                <p className='text-[3vw] md:text-[1vw] px-4 leading-[1] w-[420px] lg:w-[300px]'>
                    Stay updated with the latest news,<br/> events, and updates in our<br/> ecosystem. Be part of our<br/> universe's growth and evolution.
                </p>
                <Button title='READ ALL NEWS' containerClass='!bg-black text-white flex [transform:scale(0.9)] space-x-5' rightIcon={<SiSoundcharts />} />
            </div>

            {/* Right Section: Images with mouse movement effect */}
            <div className='flex flex-col gap-5 md:w-[50%] mt-80 md:mt-0 px-12 w-full right-0'>
                {/* First Image */}
                <div className='relative -mr-12 w-[calc(100%+3rem)] md:mr-0 md:w-full md:ml-0  ml-auto px-2'>
                    <Tilt>
                    <img

                        src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jK_mhODu9NdF-H3Q'
                        alt='updates-1'
                        className='w-full md:w-[70vw] lg:w-[50vw] rounded-lg object-cover border border-black'
                    />
                    </Tilt>
                    <div className='flex justify-start space-x-5 max-w-lg py-5 w-[80%]'>
                        <p className='text-[2vw] md:text-[1vw] font-general font-semibold opacity-70'>09.05.2024</p>
                        <h1 className='font-robert-medium text-[3vw] md:text-[1.5vw] leading-[1.1] px-4'>Nexus: Zentry’s Metagame Portal Bridging Human & AI in the Global Play Economy</h1>
                    </div>
                </div>

                {/* Second Image */}
                <div className='relative -ml-12 w-[calc(100%+3rem)] md:mr-0 md:w-full md:ml-0  px-2'>
                    <Tilt>
                    <img
                        ref={(el) => (imgRefs.current[1] = el)}
                        src='https://a.storyblok.com/f/271652/1053x602/cf66707253/news-cover-4.png/m/'
                        alt='updates-2'
                        className='w-full md:w-[70vw] lg:w-[50vw] object-cover border border-black rounded-md hover:shadow-md transition-all'
                    />
                    </Tilt>
                    <div className='flex justify-start space-x-5 max-w-lg py-5 w-[80%]'>
                        <p className='text-[2vw] md:text-[1vw] font-general font-semibold opacity-70'>23.04.2024</p>
                        <h1 className='font-robert-medium text-[3vw] md:text-[1.5vw] leading-[1.1] px-4'>Zentry Whitepaper: The Blueprint to the Metagame</h1>
                    </div>
                </div>
                <div className="md:hidden min-h-24"></div>
            </div>
        </section>
    );
};

export default Updates;
