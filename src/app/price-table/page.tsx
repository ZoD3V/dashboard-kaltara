import KaltaraMap from './components/kaltara-maps';
import NeracaFilter from './components/price-filter';
import PriceSupplyFilter from './components/price-supply-chart';

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
