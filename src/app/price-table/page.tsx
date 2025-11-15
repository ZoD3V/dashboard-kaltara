import KaltaraMap from './components/kaltara-maps';
import NeracaFilter from './components/neraca-filter';
import NeracaSupplyFilter from './components/neraca-supply-filter';

const DashboardNeracaPricePage: React.FC = () => {
    return (
        <>
            <NeracaFilter />
            <KaltaraMap />
            <NeracaSupplyFilter />
            {/* <NeracaSupplyChart />
            <NeracaTable />
            <NeracaChart /> */}
        </>
    );
};

export default DashboardNeracaPricePage;
