import {
    createContext,
    Dispatch,
    SetStateAction,
    useMemo,
    useState,
} from 'react';

type SearchContextType = {
    keyUp: boolean;
    search: string;
    keyEnter: boolean;
    setKeyUp: Dispatch<SetStateAction<boolean>>;
    setSearch: Dispatch<SetStateAction<string>>;
    setKeyEnter: Dispatch<SetStateAction<boolean>>;
};

type SearchProviderProps = {
    children: React.ReactNode;
};

const SearchContext = createContext({} as SearchContextType);

const SearchProvider = ({ children }: SearchProviderProps) => {
    const [search, setSearch] = useState(''),
        [keyEnter, setKeyEnter] = useState(false),
        [keyUp, setKeyUp] = useState(false);

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                keyEnter,
                keyUp,
                setKeyEnter,
                setKeyUp,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };
