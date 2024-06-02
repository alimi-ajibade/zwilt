import { stats } from "../constants";

interface Props {
    header: string;
}

const OverviewStat = ({ header }: Props) => {
    return (
        <>
            <div className="w-[23.75rem] h-[4.28rem]">
                <h2 className="text-2xl">{header}</h2>
            </div>
            <ul className="w-[21rem] grid grid-cols-2 grid-rows-2 gap-y-2 mt-5">
                {stats.map((stat) => {
                    return (
                        <li className="text-base font-normal flex flex-row items-center gap-x-[0.31rem]">
                            <img src={stat.icon} />
                            <span className="opacity-80">{stat.value}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default OverviewStat;
