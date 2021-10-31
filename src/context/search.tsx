import {
    createContext,
    Dispatch,
    SetStateAction,
    useMemo,
    useState,
} from 'react';

type SearchContextType = {
    search: string;
    findUser: boolean;
    setSearch: Dispatch<SetStateAction<string>>;
    setFindUser: Dispatch<SetStateAction<boolean>>;
};

type SearchProviderProps = {
    children: React.ReactNode;
};

const SearchContext = createContext({} as SearchContextType);

const SearchProvider = ({ children }: SearchProviderProps) => {
    const [search, setSearch] = useState(''),
        [findUser, setFindUser] = useState(false);

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                findUser,
                setFindUser,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export { SearchContext, SearchProvider };
