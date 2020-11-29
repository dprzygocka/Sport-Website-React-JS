import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { color } from '../../styles/color'
import { styles } from './styles'


class NavItem extends PureComponent {
    render() {
        const { to, title, active } = this.props

        return (
            <div style={{...styles.navItem, ...(active && styles.active)}}>
                <Link
                    to={to}
                    style={{...styles.generalText, ...(active? styles.activeText : styles.text)}}>
                    {title}
                </Link>
            </div>
        )
    }
}

export default NavItem