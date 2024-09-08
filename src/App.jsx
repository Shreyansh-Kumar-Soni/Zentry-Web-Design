import Hero from "./components/Hero";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Vault from "./components/Vault.jsx";
import Glance from "./components/Glance.jsx";
import Universe from "./components/Universe.jsx";
import Updates from "./components/Updates.jsx";
import Label from "./components/Label.jsx";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Universe />
        <Vault />
        <Glance />
        <Label />
        <div className="min-h-[148px]"></div>
        <Updates />
        <Contact />
        <Footer />
    </main>
  );
}

export default App;
