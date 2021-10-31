import { useContext, useEffect, useMemo, useState } from 'react';
import { SearchContext } from '../../context/search';
import { api } from '../../services/api';
import { TableHeader } from '../TableHeader';
import { TableLine } from '../TableLine';

import './index.css';

export type DataJson = {
    admission_date: string;
    id: number;
    image: string;
    job: string;
    phone: string;
    name: string;
};

function debounce(callback: Function, delay: number) {
    let timer: any;
    return (...args: any) => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
            timer = null;
        }, delay);
    };
}

const Table = () => {
    const { search, keyEnter, setKeyEnter } = useContext(SearchContext);
    const [users, setUsers] = useState<DataJson[]>([]),
        [usersAux, setUsersAux] = useState<DataJson[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get<DataJson[]>('/employess');
            setUsers(data);
            setUsersAux(data);
        })();
    }, []);

    useMemo(() => {
        if (search.length >= 2) {
            const expressao = new RegExp(search, 'i'),
                arrAux:DataJson[] = [];
            usersAux.map((user) => {
                if (expressao.test(user.name)) {
                    arrAux.push(user);
                }
            });
            setUsers(arrAux);
            setKeyEnter(false);
        } else {
            setUsers(usersAux);
        }
    }, [keyEnter]);

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

// useEffect(() => {
//     // if (search.length >= 2) {
//     //     const expressao = new RegExp(search, 'i');
//     //     const arrAux: DataJson[] = [];
//     //     users.map((value: DataJson) => {
//     //         if (expressao.test(value.name)) {
//     //             arrAux.push(value);
//     //         }
//     //     });
//     //     setUsers(arrAux);
//     // }
//     // if (search.length < 2) {
//     //     setUsers(users);
//     // }
// }, [search]);
