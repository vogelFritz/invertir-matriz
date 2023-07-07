/**
 * @param {Array<Array<Number>>} matriz La matriz queda intacta
 * @param {Number} fila Fila a quitar
 * @param {Number} col Columna a quitar
 * @param {Number} n Dimension de la matriz
 * @param {Number} m Dimensión del menor complementario 
 * @returns {Array<Array<Number>>} Menor complementario
 */
const menorComplementario = (matriz, fila, col, n) => {
    let matAux = structuredClone(matriz); // Para no modificar matriz
    // Quitar fila "fila", columna "col"
    // Quitar fila "fila"
    for(let i = fila; i < n; i++){
        matAux.splice(i, 1, matAux[i+1]);
    }
    // Quitar columna "col"
    for(let i = 0; i < n-1; i++){
        for(let j = col; j < n; j++){
            matAux[i].splice(j,1,matAux[i][j+1]);
        }
    }
    // Después del corrimiento quedan al final de cada arreglo valores undefined
    return matAux;
}


/**
 * Saca el determinante de la matriz con la regla de Laplace
 * La función es recursiva
 * @param {Array<Array<Number>>} matriz 
 * @param {Number} n Dimensión de la matriz
 */
const determinante = ( matriz, n ) => {
    let auxMat = structuredClone(matriz); // Para evitar cambiar matriz por referencia
    let auxDet = 0;
    if( n > 1 ){
        for( let i = 0; i < n; i++ )
            if( i % 2 === 0 )
                auxDet += -auxMat[i][0] * determinante( menorComplementario( auxMat, i, 0, n ), n-1 );
            else
                auxDet += auxMat[i][0] * determinante( menorComplementario( auxMat, i, 0, n ), n-1 );
        return auxDet;
    } else {
        return auxMat[0][0];
    }
}

/**
 * 
 * @param {Array<Array<Number>>} matriz 
 * @returns {boolean}
 */
const esInversible = ( matriz ) => determinante(matriz, matriz[0].length) != 0;


/**
 * 
 * @param {Array<Array<Number>>} matriz 
 * @returns {Array<Array<Number>>} Retorna la matriz inversa
 */
export const obtencionMatrizInversa = ( matriz ) => {
    let matId = [], auxElem, vec = [];
    const n = matriz[0].length;
    let matAux = structuredClone(matriz);

    if( !esInversible( matriz ) ) {
        console.warn('La matriz NO es inversible');
        return;
    } 
    console.warn('La matriz es inversible');
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if( i === j )
                vec.push(1);
            else
                vec.push(0);
        }
        matId.push(vec);
        vec = [];
    }

    for(let j = 0; j < n; j++){  // Por cada columna hago ceros y unos
        for(let i = 0; i < n; i++){  // Por cada fila hago una operación elemental
                // Fi = Fi / aii
            auxElem = matAux[j][j];
            for(let k = 0; k < n; k++){
                matAux[j][k] /= auxElem;
                matId[j][k] /= auxElem;
            }
            if ( i != j ) {
                // Fi = Fi - Fj * aij
                auxElem = matAux[i][j];
                for(let k = 0; k < n; k++){
                    matAux[i][k] -= matAux[j][k] * auxElem;
                    matId[i][k] -= matId[j][k] * auxElem;
                }
            }
        }
    }

    return matId;
}

