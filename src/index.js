import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import logo from './assets/image/takeawayLogo.png';

import Listing from './components/Listing';

const App = () => {
    return(
        <>
            <header className="header">
                <img src={logo} alt="Logo Takeaway"/>
            </header>
            <Listing />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('app'))
