import OverviewContent from "./OverviewContent";
import OverviewGrad from "./OverviewGrad";

const Overview = () => {
    return (
        <div className="mt-[4.88rem]">
            <div>
                <OverviewGrad />
            </div>

            <div className="bg-[#EDEFFF] -skew-y-2 h-[70.63rem]">
                <OverviewContent />
            </div>
        </div>
    );
};

export default Overview;
