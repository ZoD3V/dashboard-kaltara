import KaltaraMap from './components/kaltara-maps';
import NeracaChart from './components/neraca-chart';
import NeracaFilter from './components/neraca-filter';
import NeracaSupplyChart from './components/neraca-supply-chart';

const DashboardNeracaPage: React.FC = () => {
    return (
        <>
            <NeracaFilter />
            <KaltaraMap />
            <NeracaSupplyChart />
            <NeracaChart />
        </>
    );
};

export default DashboardNeracaPage;
