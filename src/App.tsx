import { SearchProvider } from './context/search';
import { Home } from './views/Home';

function App() {
    return (
        <SearchProvider>
            <Home />
        </SearchProvider>
    );
}

export default App;
