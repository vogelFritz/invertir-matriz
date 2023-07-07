
/**
 * Retorna el input con el estilo correspondiente
 * @param {Number} posicionX 
 * @param {Number} posicionY 
 * @param {Number} distancia
 * @returns { HTMLInputElement }
 */
const crearInput = ( posicionX, posicionY, deltaX, deltaY ) => {
    const nuevoInput = document.createElement( 'input' );
    const tamXY = (deltaX > deltaY) ? deltaY * 0.5 : deltaX * 0.5;
    nuevoInput.style = `
        position: absolute;
        width: ${ tamXY }%;
        height: ${ tamXY }%;
        margin-top: ${ posicionX * deltaX }%;
        margin-left: ${ posicionY * deltaY }%;
    `;
    nuevoInput.className = 'inputs-mat';
    nuevoInput.type = 'number';
    nuevoInput.value = 0;
    return nuevoInput;
};

/**
 * Crea los inputs a partir de las dimensiones ingresadas
 * @param {HTMLDivElement} divMatriz 
 * @param {Number} numFilas 
 * @param {Number} numColumnas 
 */
export const construirMatriz = ( divMatriz, numFilas, numColumnas ) => {
    const deltaX = 100 / numFilas, deltaY = 100 / numColumnas;
    for(let i = 0; i < numFilas; i++){
        for(let j = 0; j < numColumnas; j++){
            divMatriz.append(crearInput( i, j, deltaX, deltaY ));
        }
    }
};