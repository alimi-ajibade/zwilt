import BoundedArrow from "./BoundedArrow";

interface Props {
    header: string;
    technologies: { icon: string; value: string }[];
    arrow: "first" | "last";
}

const OverviewTechnologies = ({ header, technologies, arrow }: Props) => {
    return (
        <div className="w-[45.63rem] h-[15rem] rounded-2xl bg-white py-5 px-7">
            <h3 className="text-base font-medium">{header}</h3>
            <div className="mt-4">
                <ul className="flex flex-row items-center justify-center gap-5">
                    {arrow === "first" && (
                        <li className="self-start">
                            <BoundedArrow
                                size="size-24"
                                bgColor="bg-[#F6F6F6]"
                                arrowColor="black"
                                direction="-rotate-180"
                            />
                        </li>
                    )}

                    {technologies.map((element) => {
                        return (
                            <li className="w-24" key={element.value}>
                                <div className="size-24 flex flex-row items-center justify-center rounded-full bg-[#F6F6F6]">
                                    <img
                                        src={element.icon}
                                        className="object-fill"
                                    />
                                </div>
                                <div className="text-center mt-3 font-semibold whitespace-pre-line">
                                    {element.value}
                                </div>
                            </li>
                        );
                    })}

                    {arrow === "last" && (
                        <li className="self-start">
                            <BoundedArrow
                                size="size-24"
                                bgColor="bg-[#F6F6F6]"
                                arrowColor="black"
                            />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default OverviewTechnologies;
