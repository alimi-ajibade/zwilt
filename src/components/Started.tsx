import { SectionWrapper } from "../hoc";
import SkewedContainer from "./SkewedContainer";
import styles from "../styles";
import { gettingStarted } from "../constants";
import Link from "./Link";

const Started = () => {
    return (
        <div className="mt-[9rem]">
            <h1 className={`${styles.sectionHeader} text-center`}>
                Start your journey today.
            </h1>

            <ul className="mt-10">
                {gettingStarted.map((e) => {
                    return (
                        <li className="mt-5">
                            <SkewedContainer
                                bgColor={e.bgColor}
                                height="24.22rem"
                                classname="overflow-hidden px-6">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-x-5 mt-24">
                                        <div className="w-[3.20rem] h-[5.19rem]">
                                            <img src={e.number} />
                                        </div>
                                        <div>
                                            <div className="w-[27.81rem] h-[5.5rem] text-[2.13rem] leading-10 font-semibold whitespace-pre-line">
                                                {e.header}
                                            </div>
                                            <div className="mt-5 w-96 h-12 text-base opacity-80 font-normal">
                                                {e.detail}
                                            </div>
                                            <div className="mt-6">
                                                <Link
                                                    width="w-[7.55rem]"
                                                    height="h-[3.11rem]"
                                                    size="size-[3.11rem]"
                                                    text="Join Now"
                                                    textSize="text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="-mt-5">
                                        <img src={e.image} />
                                    </div>
                                </div>
                            </SkewedContainer>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SectionWrapper(Started);
