import KaltaraMap from './components/kaltara-maps';
import NeracaFilter from './components/neraca-filter';
import PriceSupplyFilter from './components/neraca-supply-chart';

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
