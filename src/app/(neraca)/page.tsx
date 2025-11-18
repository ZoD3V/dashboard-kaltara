import KaltaraMap from './components/kaltara-maps';
import NeracaChart from './components/neraca-chart';
import NeracaFilter from './components/neraca-filter';
import NeracaSupplyChart from './components/neraca-supply-chart';
import NeracaTable from './components/neraca-table/neraca-table';
import TrenRegionCommodity from './components/tren-region-commodity';

const DashboardNeracaPage: React.FC = () => {
    return (
        <>
            <NeracaFilter />
            <KaltaraMap />
            <TrenRegionCommodity />
            {/* <NeracaSupplyChart /> */}
            {/* <NeracaTable /> */}
            <NeracaChart />
        </>
    );
};

export default DashboardNeracaPage;
