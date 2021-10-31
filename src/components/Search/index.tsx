import { useContext, KeyboardEvent } from 'react';
import { Lupa } from '../../assets/lupa';
import { SearchContext } from '../../context/search';
import './index.css';

const Search = () => {
    const { setSearch, search, setFindUser } = useContext(SearchContext);

    const styleLupa = {
        position: 'absolute',
        top: '11px',
        right: '15px',
    };

    if (search.length > 0) setFindUser(true);

    return (
        <div className='search-container'>
            <input
                type='text'
                placeholder='Pesquisar'
                className='search-input'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <Lupa style={styleLupa} />
        </div>
    );
};

export { Search };
