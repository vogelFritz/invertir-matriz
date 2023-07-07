import './presentation/matriz/matriz.css';
import './app.css';
import { construirMatriz } from './presentation/matriz/matriz';
import { construirBotInversa } from './presentation/botones/obtencion-inversa';
import { determinante, obtencionMatrizInversa } from './obtencion-matriz-inversa/matriz-inversa';
import { construirHtmlInversa } from './presentation/matriz-inversa/mostrar-inv';
// import { obtencionMatriz } from './obtencion-matriz-inversa/matriz-inversa';

const divPrincipal = document.querySelector('.div-obtencion-inversa'),
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

divPrincipal.append( divMatriz );

divPrincipal.append( botonInversa );

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
    if(determinante(matriz,n) != 0){
        console.warn('La matriz es inversible');
        matInv = obtencionMatrizInversa(matriz);
        console.log(matInv);
        divPrincipal.append( construirHtmlInversa( matInv ) );
    } else {
        console.warn('La matriz NO es inversible');
    }
    matriz = [];
    vec = [];
} )




