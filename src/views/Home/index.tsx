import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';

const Home = () => {
    return (
        <>
            <Navbar />
            <main style={{ padding: '0 2rem' }}>
                <Header />
                <Table />
            </main>
        </>
    );
};

export { Home };
