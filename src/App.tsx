import "./App.css";
import Assurance from "./components/Assurance";
import ChooseUs from "./components/ChooseUs";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Started from "./components/Started";
import Testimonial from "./components/Testimonial";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Overview />
            <Testimonial />
            <Assurance />
            <Started />
            <ChooseUs />
            <FAQ />
        </div>
    );
}

export default App;
