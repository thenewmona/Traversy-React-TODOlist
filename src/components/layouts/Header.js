import React from 'react';

function Header () {
    return (
        <header style={headerStyle}>
            <h1> Mona's ToDo List </h1>
        </header>
    )
}

const headerStyle = {
    background:'#300',
    color:'#fff',
    textAlign: 'center',
    padding: '10px'

}
export default Header;