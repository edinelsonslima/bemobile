import { useTable } from '../../hooks/useTable';
import { TableHeader } from '../TableHeader';
import { TableLine } from '../TableLine';

import './index.css';

const Table = () => {
    const { users } = useTable();

    return (
        <table className='container table-container'>
            <thead className='thead-container'>
                <TableHeader />
            </thead>
            <tbody>
                {users.map((users) => (
                    <TableLine
                        key={users.id}
                        id={users.id}
                        image={users.image}
                        name={users.name}
                        job={users.job}
                        admission_date={users.admission_date}
                        phone={users.phone}
                    />
                ))}
            </tbody>
        </table>
    );
};

export { Table };
