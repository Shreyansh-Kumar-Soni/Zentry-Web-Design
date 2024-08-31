import Hero from "./components/Hero";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Vault from "./components/Vault.jsx";
// import gsap from "gsap";
// import { SplitText } from 'gsap/SplitText';
// import { ScrollTrigger} from "gsap/ScrollTrigger";
//
// gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Vault />
        <Contact />
        <Footer />
    </main>
  );
}

export default App;
