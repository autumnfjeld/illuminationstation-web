// Externals
import { injectGlobal } from 'styled-components';

injectGlobal`
    ${'' /* @font-face {
        font-family: 'Sporting Grotesque_Bold';
        src:    url('../static/fonts/Sporting_Grotesque-Bold.eot');
        src:    url('../static/fonts/Sporting_Grotesque-Bold.eot?#iefix') format('embedded-opentype'),
                url('../static/fonts/Sporting_Grotesque-Bold.woff') format('woff'),
                url('../static/fonts/Sporting_Grotesque-Bold.woff2') format('woff2');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Sporting Grotesque_Regular';
        src:    url('../static/fonts/Sporting_Grotesque-Regular.eot');
        src:    url('../static/fonts/Sporting_Grotesque-Regular.eot?#iefix') format('embedded-opentype'),
                url('../static/fonts/Sporting_Grotesque-Regular.woff') format('woff'),
                url('../static/fonts/Sporting_Grotesque-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    } */}
    html {
      box-sizing: border-box;
      font-size: 62.5%; /* Reset to 10px as a base for rem units! */
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Sporting Grotesque_Regular', Helvetica, Arial, sans-serif;
    }
`;
