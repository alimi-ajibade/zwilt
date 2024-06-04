import { JSXElementConstructor } from "react";

const SectionWrapper = (Component: JSXElementConstructor<any>) =>
    function HOC() {
        return (
            <section className="w-[81.25rem] mx-auto">
                <Component />
            </section>
        );
    };

export default SectionWrapper;
