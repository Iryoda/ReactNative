// Necessário pq o RN é burro e quer que declare isso senão o bicho
// fica perdido.

import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        font: string,
        primary: string,
        secondary: string,
        background: string,
        backgroundDarker: string,
        box: string, 
    }
}