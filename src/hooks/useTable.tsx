import { useContext, useEffect, useMemo, useState } from 'react';
import { SearchContext } from '../context/search';
import { api } from '../services/api';

export type DataJson = {
    admission_date: string;
    id: number;
    image: string;
    job: string;
    phone: string;
    name: string;
};

const useTable = () => {
    const { search, findUser, setFindUser } = useContext(SearchContext);
    const [users, setUsers] = useState<DataJson[]>([]);
    const [usersAux, setUsersAux] = useState<DataJson[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await api.get<DataJson[]>('/employess');
            setUsers(data);
            setUsersAux(data);
        })();
    }, []);

    useMemo(() => {
        if (search.length >= 2) {
            console.log('a');
            const expressao = new RegExp(search, 'i');
            const arrAux: DataJson[] = [];
            usersAux.map((user) => {
                if (expressao.test(user.name)) {
                    arrAux.push(user);
                }
            });
            setUsers(arrAux);
            setFindUser(false);
        } else {
            setUsers(usersAux);
            setFindUser(false);
        }

    }, [findUser]);

    return { users };
};
export { useTable };
