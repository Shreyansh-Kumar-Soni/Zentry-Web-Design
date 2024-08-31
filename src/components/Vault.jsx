import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all";
import Button from "./Button.jsx";

gsap.registerPlugin( SplitText);

const Vault = () => {


    return (
        <div className="min-h-screen w-screen py-20 ">
            <div className="container mx-auto text-center">
                <p className="font-general uppercase px-5 py-5 text-sm">who we are</p>
                <div className="animated-title justify-between">
                    <p className=" font-zentry mx-auto max-w-4xl text-6xl">We&#39;re building <br/>a new <span className="inline-block w-[0.5em] h-[0.5em] bg-black align-middle rounded-md"></span> reality <br/> that rewards<br/> players <span className="inline-block w-[0.5em] h-[0.5em] bg-black align-middle rounded-md"></span> and <br/> empowers <br/> humans &amp; AI<br /> to <span className="inline-block w-[0.5em] h-[0.5em] bg-black align-middle rounded-md"></span> thrive</p>
                </div>

                <p className="font-general text-sm  px-4 py-6">
                    Zentry envisions a future where players, emerging tech,<br/> and a new economy unite at the convergence of gaming <br/> and AI.
                </p>

                <Button
                    title="discover who we are"
                />
            </div>
        </div>
    )
}
export default Vault
