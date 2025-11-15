import KaltaraMap from './components/kaltara-maps';
import NeracaChart from './components/neraca-chart';
import NeracaFilter from './components/neraca-filter';
import NeracaSupplyChart from './components/neraca-supply-chart';
import NeracaTable from './components/neraca-table/neraca-table';

const DashboardNeracaPage: React.FC = () => {
    return (
        <>
            <NeracaFilter />
            <KaltaraMap />
            <NeracaSupplyChart />
            <NeracaTable />
            <NeracaChart />
        </>
    );
};

export default DashboardNeracaPage;
