import { useContext, KeyboardEvent } from 'react';
import { Lupa } from '../../assets/lupa';
import { SearchContext } from '../../context/search';
import './index.css';

const Search = () => {
    const { setSearch, search, setKeyEnter, setKeyUp } =
        useContext(SearchContext);

    const styleLupa = {
        position: 'absolute',
        top: '11px',
        right: '15px',
    };

    const handleKey = (e: { key: string }) => {
        if (e.key === 'Enter') setKeyEnter(true);
    };

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
                onKeyDown={handleKey}
            />
            <Lupa style={styleLupa} />
        </div>
    );
};

export { Search };
