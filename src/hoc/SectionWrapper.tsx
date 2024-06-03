import { JSXElementConstructor } from "react";

const SectionWrapper = (Component: JSXElementConstructor<any>) =>
    function HOC() {
        return (
            <section className="container mx-auto">
                <Component />
            </section>
        );
    };

export default SectionWrapper;
