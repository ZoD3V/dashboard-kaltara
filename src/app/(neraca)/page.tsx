import KaltaraMap from './_components/kaltara-maps';
import NeracaFilter from './_components/neraca-filter';
import PriceCorrelation from './_components/price-correlation';
import TrenRegionCommodity from './_components/tren-region-commodity';

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
