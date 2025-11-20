import KaltaraMap from './_components/kaltara-maps';
import NeracaFilter from './_components/price-filter';
import PriceSupplyFilter from './_components/price-supply-chart';

const DashboardPricePage: React.FC = () => {
    return (
        <>
            <NeracaFilter />
            <KaltaraMap />
            <PriceSupplyFilter />
        </>
    );
};

export default DashboardPricePage;
