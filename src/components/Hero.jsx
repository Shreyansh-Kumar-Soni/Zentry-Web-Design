import gsap from 'gsap'
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef, useState} from "react";


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(false);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className={"relative h-dvh w-screen overflow-x-hidden"}>
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
            >
                <div>
                    <div
                        className="mask-clip-path absolute-center absolute-z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div
                            onClick={handleMiniVdClick}
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(currentIndex + 1)}
                                loop
                                muted
                                id="current-video"
                                className="absolute-center absolute size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>

                    <video
                        src={getVideoSrc(currentIndex)}
                        autoPlay
                        loop
                        muted
                        className="absolute left-0 top-0 size-full object-cover object-center"
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero
