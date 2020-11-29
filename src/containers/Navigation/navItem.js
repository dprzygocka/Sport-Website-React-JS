import React, { PureComponent } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { color } from '../../styles/color'
import { styles } from './styles'
import './navItem.css'


class NavItem extends PureComponent {
    render() {
        const { to, title } = this.props

        return (
                <NavLink
                    to={to}
                    style={{ ...styles.generalText, ...styles.navItem}}
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                >
                    {title}
                </NavLink>
        )
    }
}

export default NavItem