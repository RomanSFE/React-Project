import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const style = {
    color: 'red',
    fontWeight: '700',
}

class Menu extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink activeStyle={style} exact to="/">First</NavLink>
                    <NavLink activeStyle={style} to="/second">Second</NavLink>
                    <NavLink activeStyle={style} to="/menu">Menu</NavLink>
                </nav>

            </div>
        )
    }
}
export default Menu
