import './presentation/matriz/matriz.css';
import './app.css';
import { construirMatriz } from './presentation/matriz/matriz';
import { construirBotInversa } from './presentation/botones/obtencion-inversa';
import { obtencionMatrizInversa } from './obtencion-matriz-inversa/matriz-inversa';
import { construirHtmlInversa } from './presentation/matriz-inversa/mostrar-inv';
// import { obtencionMatriz } from './obtencion-matriz-inversa/matriz-inversa';

const divApp = document.querySelector('#app');
let matInv, matriz = [], vec = [],
    i, j; 
const n = 3, m = 3;

const divMatriz = document.createElement('div');
divMatriz.className = 'matriz';
divMatriz.id = 'input-mat';

construirMatriz(divMatriz,3,3); // Consigo el div completo

divApp.append( divMatriz );

const botonInversa = construirBotInversa();

divApp.append( botonInversa );

botonInversa.addEventListener( 'click', () => {
    const inputs = document.querySelectorAll('.inputs-mat');
    i = 0;
    j = 0;
    inputs.forEach( elem => {
        vec.push(+elem.value);
        j++;
        if(j >= m) {
            matriz.push(vec);
            j = 0;
            vec = [];
        }
    } );
    console.log(vec);
    console.log(matriz);
    matInv = obtencionMatrizInversa(matriz);
    console.log(matInv);
    divApp.append( construirHtmlInversa( matInv ) );
} )




