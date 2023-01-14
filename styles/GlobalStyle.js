import { createGlobalStyle } from "styled-components";
import variables from "@/styles/variables";
import fonts from '@/styles/fonts';

const GlobalStyle = createGlobalStyle`
    
    html {
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: overlay;
        width: 100%;
        height: 100%; 
        scroll-behaviour: smooth;
        
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        overflow-y: overlay;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        @media (max-width: 320px) {
            word-break: break-all;
        }
    }
    
    :root {
        ${variables}
        ${fonts}

        html {
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: overlay;
        background-color: var(--dark);
        width: 100%;
        height: 100%; 
        scroll-behaviour: smooth;
        
        }
        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            background-color: var(--dark);
            max-width: 100%;
            min-height: 100%;
            overflow-x: hidden;
            overflow-y: overlay;
            scrollbar-gutter: stable;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            @media (max-width: 320px) {
                word-break: break-all;
            }
        }

        .test {
            font-family: var(--cabinet);
            color: var(--white);
            font-weight: 700;
        }
        
    }   
`;

export default GlobalStyle;