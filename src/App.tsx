import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Testimonial from "./components/Testimonial";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Overview />
            <Testimonial />
        </div>
    );
}

export default App;
