import KaltaraMap from './components/kaltara-maps';
import NeracaFilter from './components/neraca-filter';
import PriceCorrelation from './components/price-correlation';
import TrenRegionCommodity from './components/tren-region-commodity';

const DashboardNeracaPage: React.FC = () => {
    return (
        <>
            <NeracaFilter />
            <KaltaraMap />
            <TrenRegionCommodity />
            <PriceCorrelation />
        </>
    );
};

export default DashboardNeracaPage;
