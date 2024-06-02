import { SectionWrapper } from "../hoc";
import styles from "../styles";
import { development, design } from "../constants";
import OverviewStat from "./OverviewStat";
import OverviewTechnologies from "./OverviewTechnologies";
import BoundedArrow from "./BoundedArrow";

const OverviewContent = () => {
    return (
        <div className="skew-y-2 pt-[11.44rem]">
            <div className="w-[61.06rem] h-32 mx-auto">
                <h1 className={`${styles.sectionHeader}`}>
                    Your one-stop marketplace for finding the talent your
                    business needs.
                </h1>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-y-[1.88rem] mt-[5.63rem] justify-between items-center">
                <div>
                    <OverviewStat header="Find Dev and IT professionals to scale your business." />
                </div>
                <OverviewTechnologies
                    header="IT & Development"
                    technologies={development}
                    arrow="last"
                />

                <div>
                    <OverviewStat header="Explore Creative individuals with a keen eye for detail." />
                </div>
                <OverviewTechnologies
                    header="Design & Creative"
                    technologies={design}
                    arrow="first"
                />

                <div className="flex flex-row items-center gap-x-3">
                    <BoundedArrow
                        bgColor="bg-black"
                        color="#EDEFFF"
                        size="size-[4.63rem]"
                        radius="rounded-3xl"
                    />
                    <div className="text-xl font-medium">Explore More</div>
                </div>
                <div className="text-xl font-medium opacity-80">
                    <span className="font-bold">30 more </span>
                    <span className="font-normal">to explore</span>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(OverviewContent);
