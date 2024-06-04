import "./App.css";
import Assurance from "./components/Assurance";
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
        </div>
    );
}

export default App;
