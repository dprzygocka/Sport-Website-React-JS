import { createGlobalStyle } from 'styled-components'


//Global css styling
export default createGlobalStyle`
    h1 {
        color: blue
    }

    h2 {
        caret-color: transparent
    }

    .container{
        background: linear-gradient(180deg, rgba(198, 198, 198, 0.54) 0%, rgba(255, 255, 255, 0) 48.44%, rgba(255, 255, 255, 0) 52.08%), #F4F4F4;
        position:fixed;
        padding:0;
        margin:0;
    
        top:0;
        left:0;
    
        width: 100%;
        height: 100%;
    }

    .button {
        background-color:rgba(198, 198, 198, 0.54);
        border: none;
        color: white;
        padding: 15px 64px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        caret-color: transparent
    }

    .input {
        padding: 12px 20px;
        width: 20%;
        font-size:16px
    }
`;