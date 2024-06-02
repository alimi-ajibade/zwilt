import OverviewContent from "./OverviewContent";
import OverviewGrad from "./OverviewGrad";
import SkewedContainer from "./SkewedContainer";

const Overview = () => {
    return (
        <div className="mt-[4.88rem]">
            <div>
                <OverviewGrad />
            </div>

            <SkewedContainer
                children={<OverviewContent />}
                bgColor="bg-[#EDEFFF]"
                height="h-[70.63rem]"
            />
        </div>
    );
};

export default Overview;
