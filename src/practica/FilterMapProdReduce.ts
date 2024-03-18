import { NumberListProcessor } from '../practica/NumberListProcessor.js';

/**
 * Clase FilterMapProdReduce que extiende de NumberListProcessor.
 * Esta clase implementa el método reduce específicamente para
 * multiplicar todos los elementos de un arreglo de números.
 */
export class FilterMapProdReduce extends NumberListProcessor {

    /**
     * Implementa la operación de reducción multiplicando todos
     * los elementos del arreglo.
     * @param numbers El arreglo de números a reducir.
     * @returns El producto de todos los números del arreglo.
     */
    protected reduce(numbers: number[]): number {
        return numbers.reduce((acc, curr) => acc * curr, 1);
    }

    /**
     * Método hook opcional que se ejecuta después de filtrar los números.
     * @param filteredNumbers Los números después de aplicar el filtro.
     */
    protected afterFiltering(filteredNumbers: number[]): void {
        console.log('FilterMapProdReduce - After filtering:', filteredNumbers);
    }

    /**
     * Método hook opcional que se ejecuta después de mapear los números.
     * @param mappedNumbers Los números después de aplicar el mapeo.
     */
    protected afterMapping(mappedNumbers: number[]): void {
        console.log('FilterMapProdReduce - After mapping:', mappedNumbers);
    }
}
