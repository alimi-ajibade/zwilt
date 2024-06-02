import styles from "../styles";
import { jasonAvatar, groovehq, groovesm, testimonial } from "../constants";
import BoundedArrow from "./BoundedArrow";
import { SectionWrapper } from "../hoc";

const TestimonialContent = () => {
    return (
        <div className="pt-[15.44rem]">
            <div className="flex flex-row justify-between">
                <div>
                    <div className="w-96 h-48">
                        <h1 className={`${styles.sectionHeader} text-white`}>
                            How it worked for Jason{" "}
                            <span className="inline-block rounded-full overflow-hidden size-14 align-middle">
                                <img src={jasonAvatar} />
                            </span>{" "}
                            at{" "}
                            <span className="block pt-3">
                                <img src={groovehq} />
                            </span>
                        </h1>
                    </div>

                    <div className={`mt-11 w-[28.81rem] ${styles.testimonial}`}>
                        Zwilt enabled us to deliver on time and they’ve been
                        heavy hitters in our corner since.
                    </div>

                    <div className="mt-11 flex flex-row gap-4">
                        <BoundedArrow
                            bgColor="bg-white"
                            arrowColor="#50589F"
                            size="size-[3.13rem]"
                            direction="rotate-180"
                            radius="rounded-[1.25rem]"
                            arrowHeight="10"
                            arrowWidth="16"
                        />
                        <BoundedArrow
                            bgColor="bg-white"
                            arrowColor="#50589F"
                            size="size-[3.13rem]"
                            radius="rounded-[1.25rem]"
                            arrowHeight="10"
                            arrowWidth="16"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex flex-row text-white gap-x-4">
                        <div className="rounded-[2.5rem] size-[6.17rem] bg-[#AF7CFF] flex flex-col justify-center items-center">
                            <img src={groovesm} className=" w-[4.75rem] h-6" />
                        </div>

                        <div>
                            <h3 className="text-4xl">{testimonial.name}</h3>
                            <p className="text-[#C6C4C4] text-base opacity-40 mt-[3px]">
                                {testimonial.post}
                            </p>
                            <p className="text-[#C6C4C4] text-base opacity-40 mt-[5px]">
                                {testimonial.location}
                            </p>
                        </div>
                    </div>
                    <div
                        className={`w-[31.19rem] h-[10rem] mt-[3.69rem] ${styles.testimonial}`}>
                        {testimonial.testmonial}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(TestimonialContent);
