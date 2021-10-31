import './index.css';

const TableHeader = () => {
    return (
        <tr>
            <th className='thead-th'>Foto</th>
            <th className='thead-th'>Nome</th>
            <th className='thead-th'>Cargo</th>
            <th className='thead-th'>Data de Admissão</th>
            <th className='thead-th'>Telefone</th>
        </tr>
    );
};

export { TableHeader };
