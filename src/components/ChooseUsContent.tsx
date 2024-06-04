import styles from "../styles";
import Link from "./Link";
import { whyUs } from "../constants";
import { SectionWrapper } from "../hoc";

const ChooseUsContent = () => {
    return (
        <div>
            <div className="flex flex-row items-center gap-x-[100px]">
                <div>
                    <h1 className={`w-96 h-32 ${styles.sectionHeader}`}>
                        Why choose Zwilt?
                    </h1>
                    <div
                        className={`mt-[2.31rem] w-[20.38rem] h-32 text-[1.38rem] opacity-80`}>
                        We take complex hiring processes - and simplify them.
                        Connecting you to the world’s highly qualified talent
                        pool.
                    </div>
                </div>

                <ul className="flex flex-row gap-x-3 items-center justify-center">
                    {whyUs.map((e) => {
                        return (
                            <li
                                className="w-[81.25rem] h-[40.75rem] shadow-md rounded-xl flex flex-row items-center justify-between pl-[3.63rem] bg-white"
                                key={e.header}>
                                <div>
                                    <h1
                                        className={`${styles.sectionHeader} w-[29rem] h-32 whitespace-pre-line`}>
                                        {e.header}
                                    </h1>

                                    <ul className="h-24 mt-[2.31rem]">
                                        {e.reasons.map((reason) => {
                                            return (
                                                <li
                                                    className="text-nowrap"
                                                    key={reason}>
                                                    <span
                                                        className={`inline-block w-5 h-2 ${e.bulletinColor} rounded-3xl`}></span>
                                                    <span className="inine-block ml-4 text-[1.38rem] wrap">
                                                        {reason}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className="mt-[2.75rem]">
                                        <Link
                                            width="w-[12.63rem]"
                                            height="h-[4.63rem]"
                                            text="Learn More"
                                            textSize="text-[1.38rem]"
                                            size="size-[4.63rem]"
                                            radius="rounded-[1.88rem]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <img
                                        src={e.image}
                                        className="object-fit w-[41.17rem] h-[35.56rem]"
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SectionWrapper(ChooseUsContent);
