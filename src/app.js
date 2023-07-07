import './presentation/matriz/matriz.css';
import './app.css';
import { construirMatriz } from './presentation/matriz/matriz';
import { construirBotInversa } from './presentation/botones/obtencion-inversa';
import { obtencionMatrizInversa } from './obtencion-matriz-inversa/matriz-inversa';
import { construirHtmlInversa } from './presentation/matriz-inversa/mostrar-inv';
// import { obtencionMatriz } from './obtencion-matriz-inversa/matriz-inversa';

const divApp = document.querySelector('#app'),
      botonInversa = construirBotInversa(),
      divMatriz = document.createElement('div');
let matInv, 
    matriz = [], 
    vec = [], 
    n, j,
    inputs;

divMatriz.className = 'matriz';
divMatriz.id = 'input-mat';

n = prompt('Ingrese las dimensiones de la matriz nxn', 3);
n = parseFloat(n);

construirMatriz(divMatriz,n,n); // Consigo el div completo

divApp.append( divMatriz );

divApp.append( botonInversa );

botonInversa.addEventListener( 'click', () => {
    inputs = document.querySelectorAll('.inputs-mat');
    j = 0;
    inputs.forEach( elem => {
        vec.push(+elem.value);
        j++;
        if(j >= n) {
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




