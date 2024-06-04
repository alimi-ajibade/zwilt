import { SectionWrapper } from "../hoc";
import styles from "../styles";
import { development, design } from "../constants";
import OverviewStat from "./OverviewStat";
import OverviewTechnologies from "./OverviewTechnologies";
import Link from "./Link";

const OverviewContent = () => {
    return (
        <div className="pt-[11.44rem]">
            <div className="w-[61.06rem] h-32 mx-auto">
                <h1 className={`${styles.sectionHeader} text-center`}>
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

                <Link
                    width="w-56"
                    height="h-20"
                    size="size-[4.63rem]"
                    text="Explore More"
                    textSize="text-xl"
                />
                <div className="text-xl font-medium opacity-80">
                    <span className="font-bold">30 more </span>
                    <span className="font-normal">to explore</span>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(OverviewContent);
