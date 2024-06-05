import Arrow from "./Arrow";
import { SectionWrapper } from "../hoc";
import { heroImage, jobs } from "../constants";
import styles from "../styles";

const Hero = () => {
    return (
        <div>
            <div className="w-[41.94rem] h-[8rem] mx-auto mt-36">
                <h1 className={`${styles.sectionHeader} text-center`}>
                    Finding the right fit{" "}
                    <span>
                        <img
                            src={heroImage}
                            className="inline w-[4.25rem] h-[2.69rem]"
                        />
                    </span>{" "}
                    has never been easier.
                </h1>
            </div>

            <div className="w-[36.38rem] h-16 mx-auto mt-5">
                <h2 className="text-[1.38rem] font-normal leading-[2rem] text-center text-[#202229] opacity-80">
                    With our rigorous pre-vetting process, you'll never have to
                    worry about finding the ideal candidate ever again.
                </h2>
            </div>

            <div className="flex flex-row justify-between w-[35.63rem] h-[4.63rem] border-[0.09rem] border-[#F0F0F0] rounded-2xl mx-auto mt-8 overflow-hidden">
                <div className="grow h-full text-base flex flex-row items-center pl-8 disabled:bg-white">
                    <span className="font-semibold ">Looking for </span>
                    <span>&nbsp; design</span>|
                </div>
                <div className="flex flex-col justify-center items-center basis-[4.63rem] rounded-2xl bg-[#FFBE2E]">
                    <Arrow color="#202229" />
                </div>
            </div>

            <div className="w-[57.5rem] bg-[#F8F8F8] mx-auto mt-[2.5rem] rounded-2xl pt-4 text-[#202229] text-base">
                <div className="w-[24.44rem] h-[2.75rem] bg-[#D2D2D2] bg-opacity-15 rounded-2xl overflow-hidden flex flex-row justify-between items-center mx-auto">
                    <div className="bg-[#C7F4C2] font-semibold h-full px-[1.88rem] flex flex-col justify-center rounded-2xl">
                        IT & Development
                    </div>
                    <div className="font-medium h-full flex flex-col justify-center px-[1.88rem] rounded-2xl">
                        Design & Creative
                    </div>
                </div>

                <div className="mt-[1.44rem] pb-[1.88rem] w-10/12 mx-auto">
                    <ul className="grid grid-rows-4 grid-cols-3 gap-y-[1.23rem] text-base font-normal text-[#959595]">
                        {jobs.map((job, index) => {
                            if (index === 6 || index === 11)
                                return (
                                    <li
                                        key={index}
                                        className={`${styles.textColor} font-medium`}>
                                        {job}
                                    </li>
                                );
                            return <li key={index}>{job}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Hero);
