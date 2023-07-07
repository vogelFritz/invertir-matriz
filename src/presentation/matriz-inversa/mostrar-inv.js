import './mat-inv.css';


const crearTableRow = () => {
    const colHtml = document.createElement('tr');
    colHtml.className = 'columnas';
    return colHtml;
}
/**
 * 
 * @param {String} matElem Un elemento de la matriz inversa
 */
const crearTableElem = ( matElem ) => {
    const elemTablaHtml = document.createElement('td');
    elemTablaHtml.innerText = matElem;
    return elemTablaHtml;
}
/**
 * Recibe la matriz inversa y crea el table completo
 * @param {Array<Array<Number>>} matInv 
 * @returns {HTMLTableElement} Devuelve la tabla completa con los valores de la matriz inversa
 */
export const construirHtmlInversa = ( matInv ) => {
    const tableMatInv = document.createElement('table');
    const n = matInv[0].length; // matriz nxn
    let actTableRow;

    tableMatInv.id = 'tabla-inversa';

    for(let i = 0; i < n; i++){
        actTableRow = crearTableRow();
        for(let j = 0; j < n; j++){
            actTableRow.append( crearTableElem( matInv[i][j].toFixed(2) ) );
        }
        tableMatInv.append( actTableRow );
    }
    return tableMatInv;
}