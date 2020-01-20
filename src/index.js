import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';

import Listing from './components/Listing';

class App extends React.Component{
    render(){
        return(
            <Listing />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
