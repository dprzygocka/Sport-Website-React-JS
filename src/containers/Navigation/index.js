import React, { Children, useEffect } from 'react'
import * as _ from 'lodash'
import { styles } from './styles';
import { Link } from 'react-router-dom';
import NavItem from './navItem';
import logo from '../../assets/images/logo.png'

const Navigation = props => {
    return (
            <div style={styles.navigation}>
                <img src={logo} style={styles.logo}/>
                <div style={styles.align_left}>
                    <NavItem to={'/dashboard'} title="Dashboard" active={true} />
                    <NavItem to={'/calendar'} title="Calendar"/>
                    <NavItem to={'/teams'} title="Teams"/>
                </div>
                <div style={styles.align_right}>
                    <NavItem to={'/my-team'} title="My Team"/>
                    <NavItem to={'/profile'} title="My Profile"/>
                </div>
            </div>
    )
}

export default Navigation;