import { SectionWrapper } from "../hoc";
import styles from "../styles";
import { assurance, play, playWhite } from "../constants";

const Assurance = () => {
    return (
        <div className="mt-[9.31rem]">
            <div className={`w-[35.63rem] h-32 ${styles.sectionHeader}`}>
                How we ensure you’re in good hands.
            </div>

            <div className="mt-[1.88rem] w-[40.38rem] h-16 text-[1.38rem] opacity-80 font-normal">
                With our comprehensive screening process, we hand-pick highly
                skilled candidates so you can onboard them in a matter of days.
            </div>

            <ul className="mt-[1.88rem]">
                {assurance.map((a, index) => {
                    return (
                        <li
                            className={`w-[39.69rem] border border-[#F0F0F0] rounded-lg mt-1 px-5 py-3 ${
                                index !== 1 ? "h-20" : "h-40 shadow-lg"
                            }`}
                            key={a.value}>
                            <div className="flex flex-row items-center justify-start gap-6">
                                <div
                                    className={`size-[3.56rem] rounded-full flex flex-row items-center justify-center ${
                                        index !== 1
                                            ? "bg-[#ECECEC]"
                                            : "bg-[#8BA4FD]"
                                    }`}>
                                    <img src={index !== 1 ? play : playWhite} />
                                </div>

                                <div className="text-base">
                                    <span className="font-semibold">
                                        Step {index + 1}:{" "}
                                    </span>
                                    <span>{a.value}</span>
                                </div>
                            </div>
                            {index === 1 && (
                                <div className="mt-4 text-base font-normal">
                                    {a.description}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SectionWrapper(Assurance);
