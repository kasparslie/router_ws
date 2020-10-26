import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
<ul className='Header'>
    <li>
        <NavLink activeClassName='active' exact to='/'>Home</NavLink>
    </li>
    <li>
    <NavLink activeClassName='active' to='/fileHTML'>HTML</NavLink>
    </li>
    <li>
    <NavLink activeClassName='active' to='/fileCSS'>CSS</NavLink>
    </li>
    <li>
    <NavLink activeClassName='active' to='/fileJS'>JavaScript</NavLink>
    </li>
</ul>
        )
    }
}
export default Header