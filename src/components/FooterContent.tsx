import SkewedContainer from "./SkewedContainer";
import styles from "../styles";
import BoundedArrow from "./BoundedArrow";
import zwilt from "../assets/zwit.png";
import { footer } from "../constants";

const FooterContent = () => {
    return (
        <div className="flex flex-col gap-y-[7.69rem]">
            <SkewedContainer
                height="h-[30.06rem]"
                bgColor="bg-[#525AA0]"
                classname="flex flex-col items-center justify-center w-[81.25rem] mx-auto">
                <div
                    className={`${styles.sectionHeader} text-white w-[42.69rem] text-center`}>
                    Need a job done, and done well? Get started
                </div>
                <div className="w-full flex flex-row justify-center mt-[2.19rem]">
                    <BoundedArrow
                        arrowColor="white"
                        size="size-[4.56rem]"
                        bgColor="bg-[#202229]"
                        radius="rounded-[29.89px]"
                        direction="rotate-90"
                    />
                </div>
            </SkewedContainer>

            <div className="flex flex-row gap-x-[5.69rem] w-[81.25rem] mx-auto">
                <div className="w-60">
                    <div className="w-[4.81rem] h-[1.69rem]">
                        <img src={zwilt} />
                    </div>

                    <div className="text-white opacity-80 text-sm w-[17.75rem] mt-[26.69px]">
                        We take complex hiring processes - and simplify them.
                        Connecting you to the world’s highly qualified talent
                        pool.
                    </div>

                    <div className="h-[6.13rem] mt-[49px]">
                        <div className="text-white opacity-40 text-sm">
                            LINKS AND REDIRECTS
                        </div>
                        <div className="mt-4 flex flex-row gap-x-2 w-full h-full">
                            <div className="w-[10.13rem] h-[3.13rem] rounded-[20.27px] flex flex-row items-center justify-center bg-[#292B34] text-white">
                                Hire now
                            </div>

                            <div className="w-[10.13rem] h-[3.13rem] rounded-[20.27px] flex flex-row items-center justify-center bg-[#292B34] text-white">
                                Apply now
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`w-[48.69rem] ${styles.sectionHeader} text-white`}>
                        Connecting the right people to the right businesses.
                    </div>
                    <div className="mt-16">
                        <div className="flex flex-row items-start justify-between">
                            {footer.map((f) => {
                                return (
                                    <ul>
                                        {f.map((i, index) => {
                                            if (index === 0) {
                                                return (
                                                    <li className="text-sm text-white opacity-40">
                                                        {i}
                                                    </li>
                                                );
                                            }

                                            return (
                                                <li className=" text-lg text-white mt-[23px]">
                                                    {i}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;
