import SkewedContainer from "./SkewedContainer";
import { quotes } from "../constants";
import TestimonialContent from "./TestimonialContent";

const Testimonial = () => {
    return (
        <SkewedContainer bgColor="bg-[#202229]" height="h-[52.5rem]">
            <div className="absolute -skew-y-2 text-9xl text-white right-0 -top-[1.4rem] mr-[3.5rem]">
                <img src={quotes} />
            </div>

            <TestimonialContent />
        </SkewedContainer>
    );
};

export default Testimonial;
