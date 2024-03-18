import { NumberListProcessor } from '../practica/NumberListProcessor.js';

/**
 * Clase FilterMapAddReduce que extiende de NumberListProcessor.
 * Se especializa en aplicar una operación de reducción que suma todos los elementos de un arreglo.
 */
export class FilterMapAddReduce extends NumberListProcessor {
    
    /**
     * Aplica una operación de reducción que suma todos los elementos del arreglo.
     * @param numbers El arreglo de números a procesar.
     * @returns La suma de todos los elementos del arreglo.
     */
    protected reduce(numbers: number[]): number {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }

    /**
     * Método hook que se ejecuta después de filtrar los números.
     * Puede ser sobreescrito en subclases para realizar acciones después del filtrado.
     * @param filteredNumbers Los números que han pasado el filtro.
     */
    protected afterFiltering(filteredNumbers: number[]): void {
        console.log('After filtering:', filteredNumbers);
    }

    /**
     * Método hook que se ejecuta después de mapear los números.
     * Puede ser sobreescrito en subclases para realizar acciones después del mapeo.
     * @param mappedNumbers Los números después de ser procesados por la función de mapeo.
     */
    protected afterMapping(mappedNumbers: number[]): void {
        console.log('After mapping:', mappedNumbers);
    }

}

