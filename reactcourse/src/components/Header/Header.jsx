import "./Header.css"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

function Header(props) {
    const hideMenu = props.hideMenu

    return (
        <header className="Header">
            {hideMenu ? null : (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            )}
            {props.name}
            {props.children}
        </header>
    )
}

Header.PropTypes = {
    hideMenu: PropTypes.boll,
    children: PropTypes.node,
    name: PropTypes.string
}

export default Header