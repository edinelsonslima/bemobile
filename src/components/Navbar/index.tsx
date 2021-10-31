import { Logo } from '../../assets/logo';

import './index.css'

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className="container">
                <div className='nav-logo-content'>
                    <Logo/>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };
