import SkewedContainer from "./SkewedContainer";
import styles from "../styles";
import { faqs } from "../constants";
import Arrow from "./Arrow";

const FAQ = () => {
    return (
        <SkewedContainer
            height="h-[83.94rem]"
            bgColor="bg[#D6D6D6] pt-[8.38rem]">
            <div>
                <div>
                    <h1 className={`${styles.sectionHeader} text-center`}>
                        Frequently asked questions
                    </h1>
                </div>

                <ul className="mt-[5.5rem] border">
                    {faqs.map((faq, index) => {
                        if (faq.extra) {
                            return (
                                <li className="w-[81.25rem] mx-auto">
                                    <div className="h-[112px] grid grid-cols-6 items-center">
                                        <div className="w-[7rem] border-r h-full text-center flex flex-row items-center justify-center font-semibold">
                                            General
                                        </div>
                                        <div className="text-center col-span-5">
                                            {faq.value}
                                        </div>
                                    </div>
                                </li>
                            );
                        }
                        if (faq.extra2) {
                            return (
                                <li className="border">
                                    <div className="grid grid-cols-10 items-center h-[112px] w-[81.25rem] mx-auto">
                                        <div className="w-[7rem] border-r h-full text-center flex flex-row items-center justify-center font-semibold bg-[#E8E8E8]">
                                            General
                                        </div>
                                        <div className="border-r h-full text-center flex flex-row items-center justify-center font-semibold">
                                            Joining Process
                                        </div>
                                        <div className="text-center col-span-8">
                                            {faq.value}
                                        </div>
                                    </div>
                                </li>
                            );
                        }

                        return (
                            <li
                                className={`border ${
                                    index === 2 ? "bg-[#E8E8E8]" : ""
                                }`}>
                                <div className="grid grid-cols-6 items-center h-[112px] w-[81.25rem] mx-auto">
                                    <div
                                        className={`text-center ${
                                            index === 2
                                                ? "col-start-3 col-span-3"
                                                : "col-start-2 col-span-5"
                                        }`}>
                                        {faq.value}
                                    </div>
                                    {index === 2 && (
                                        <div className=" justify-self-center">
                                            <Arrow color="#FFBE2E" />
                                        </div>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </SkewedContainer>
    );
};

export default FAQ;
