import { createGlobalStyle } from 'styled-components'


//Global css styling
export default createGlobalStyle`
    h1 {
        color: blue
    }

    h2 {
        caret-color: transparent
    }

    .login-main-container{
        background: linear-gradient(180deg, rgba(198, 198, 198, 0.54) 0%, rgba(255, 255, 255, 0) 48.44%, rgba(255, 255, 255, 0) 52.08%), #F4F4F4;

        height: 80vh;
        width: 100vw;
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

    .button:focus {
        outline: none
    }

    .input {
        padding: 12px 20px;
        width: 20%;
        font-size:16px
    }

    body {
        height: 100vh;
        width: 100vw;
    }

    #root {
        height: 100vh;
        width: 100vw;
    }
`;