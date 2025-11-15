import KaltaraMap from './components/kaltara-maps';
import NeracaChart from './components/neraca-chart';
import NeracaFilter from './components/neraca-filter';
import NeracaSupplyChart from './components/neraca-supply-chart';
import NeracaSupplyFilter from './components/neraca-supply-filter';
import NeracaTable from './components/neraca-table/neraca-table';

const DashboardNeracaPage: React.FC = () => {
    return (
        <>
            <NeracaFilter />
            <KaltaraMap />
            <NeracaSupplyFilter />
            <NeracaSupplyChart />
            <NeracaTable />
            <NeracaChart />
        </>
    );
};

export default DashboardNeracaPage;
