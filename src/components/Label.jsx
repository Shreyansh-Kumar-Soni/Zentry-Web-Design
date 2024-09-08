import {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionTitles = {
    backers: " include top-tier VCs, funds, and companies, providing expertise, network, and resources to fuel our project's success.",
    gaming: " partners span projects, communities, protocols, & infrastructure, accelerating expansive growth of the new gaming era.",
    web3: " partners support tech & community, driving cutting-edge innovation and a vibrant ecosystem of users.",
    brands: " partners cover tech, gaming, entertainment, & lifestyle sectors, enhancing our reach and player experience."
};

const partnerData = [
    { name: 'Binance Labs', category: 'backers' },
    { name: 'Coinbase Ventures', category: 'backers' },
    { name: 'Pantera Capital', category: 'backers' },
    { name: 'DeFiance Capital', category: 'backers' },
    { name: 'Animoca Brands', category: 'backers' },
    { name: 'SkyVision Capital', category: 'backers' },
    { name: 'Play Venture', category: 'backers' },
    { name: 'Vessel Capital', category: 'backers' },
    { name: 'Arche Fund', category: 'backers' },
    { name: 'Marblex', category: 'gaming' },
    { name: 'Fnatic', category: 'gaming' },
    { name: 'XSET', category: 'gaming' },
    { name: 'Jambo', category: 'web3' },
    { name: 'AWS', category: 'brands' }
];

const Labels = () => {
    const [currentCategory, setCurrentCategory] = useState('');
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


    useEffect(() => {
        const updateCategory = (entry) => {
            if (entry.isIntersecting) {
                const category = entry.target.dataset.category;
                setCurrentCategory("Our"+category);
            }
        };


        partnerData.forEach((partner, index) => {
            gsap.to(`.partner-${index}`, {
                scrollTrigger: {
                    trigger: `.partner-${index}`,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => {
                        setCurrentCategory(partner.category);
                        gsap.to(`.partner-name-${index}`, { color: 'yellow' });
                    },
                    onLeave: () => {
                        setCurrentCategory('');
                        gsap.to(`.partner-name-${index}`, { color: 'white' });
                    },
                    onEnterBack: () => {
                        setCurrentCategory(partner.category);
                        gsap.to(`.partner-name-${index}`, { color: 'yellow' });
                    },
                    onLeaveBack: () => {
                        setCurrentCategory('');
                        gsap.to(`.partner-name-${index}`, { color: 'white' });
                    },
                }
            });
        });


        gsap.to('.section-title', {
            scrollTrigger: {
                trigger: '.section-title',
                start: 'center center',
                end: `+=${window.innerHeight}`,
                pin: true,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen flex flex-col md:flex-row px-5 md:px-10 py-40 justify-start md:justify-end text-white">

            <div className="flex-col md:hidden">
                <h1 className="font-zentry special-font text-[21vw] px-12 md:hidden leading-[1]">O<b>U</b>R PARTNERS</h1>
                <h2 className="text-neutral-500 text-[2vw] w-[80%] px-14 leading-[1] py-5">
                    <span className="text-white">Our Backers</span> include top-tier VCs, funds, and companies, providing expertise, network, and resources to fuel our project's success.
                </h2>
            </div>

            {/* Left Column */}
            <div className="w-1/2 py-20 flex flex-col hidden md:block">
                <h2 className="text-neutral-500 text-[1.4vw] w-[80%] px-14 leading-[1] section-title">
                    <span className="text-violet-50">{currentCategory} </span>
                    {sectionTitles[currentCategory] || ''}
                </h2>
            </div>

            {/* Right Column */}
            <div className="md:w-1/2">
                <h1 className="font-zentry special-font text-[4vw] px-12 hidden md:block leading-[1]">O<b>U</b>R PARTNERS</h1>

                {partnerData.map((partner, index) => (
                    <div
                        key={index}
                        className={`flex items-start md:items-center space-x-5 text-gra partner-${index}`}
                        data-category={partner.category}
                    >
                        <p className="absolute font-general text-gray-500 text-sm md:text-[1vw] lg:text-[0.5vw] lg:text-sm">{partner.category.toUpperCase()}</p>
                        <h1 className={`font-zentry special-font text-5xl md:text-[4vw] leading-[0.9] px-14 md:px-8 partner-name-${index}`}>
                            {partner.name}
                        </h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Labels;

