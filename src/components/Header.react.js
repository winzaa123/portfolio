import React from 'react'
import logoReact from '../resources/img/logo.svg';
class Header extends React.Component {
    render() {
        return (
             <div className="section">
                            <div className="App-header">
                        <img src={logoReact} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
             
                <h2 className="subtitle is-3">Playing with React</h2>
            </div>
        )
    }
}

export default Header