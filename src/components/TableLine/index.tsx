import { useMemo, useState } from 'react';
import { DataJson } from '../../hooks/useTable';
import './index.css';

const TableLine = (props: DataJson) => {
    const { admission_date, id, image, job, name, phone } = props;

    const [date, setDate] = useState(''),
        [telefone, setTelefone] = useState('');

    const formatPhone = () => {
        const phoneFormatted = phone.replace(
            /(\d{2})(\d{2})(\d{5})/,
            (regex, arg1, arg2, arg3) => `+${arg1} (${arg2}) ${arg3}-`
        );
        setTelefone(phoneFormatted);
    };

    useMemo(() => {
        const [date] = admission_date.split('T');
        setDate(date.split('-').reverse().join('/'));

        formatPhone();
    }, [date, telefone]);

    return (
        <tr className='trow-container'>
            <td className='trow-td'>
                <div className='trow-td-image'>
                    {image ? <img src={image} alt='perfil' /> : name[0]}
                </div>
            </td>
            <td className='trow-td td-name'>{name}</td>
            <td className='trow-td td-job'>{job}</td>
            <td className='trow-td'>{date}</td>
            <td className='trow-td'>{telefone}</td>
        </tr>
    );
};

export { TableLine };
