import React from 'react'
import { color } from '../../styles/color'

export const styles = {
    navigation: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: '100px'
    },
    align_left: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    align_right: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    navItem: {
        padding: 10,
        height:'80px',
        width:'120px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    active: {
        background: color.darkBlue
    },
    activeText:{
        color: color.white,
    },
    text:{
        color:color.black,
    },
    generalText:{
        textDecoration: 'none',
        fontFamily:'Salsa',
        caretColor: 'transparent'
    },
    logo: {
        width:'10%',
        height:'100%'
    }
}