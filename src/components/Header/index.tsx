import { Search } from '../Search';
import './index.css'

const Header = () => {
    return (
        <header className='header-container container'>
            <h4 className='header-title'>Funcionários</h4>
            <Search/>
        </header>
    );
};

export { Header };
