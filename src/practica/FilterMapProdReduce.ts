import { NumberListProcessor } from '../practica/NumberListProcessor.js';

/**
 * Clase FilterMapProdReduce que extiende de NumberListProcessor.
 * Esta clase implementa el método reduce específicamente para
 * multiplicar todos los elementos de un arreglo de números.
 */
export class FilterMapProdReduce extends NumberListProcessor {
    protected reduce(numbers: number[]): number {
        let result = 1;
        for (let num of numbers) {
            result *= num;
        }
        return result;
    }

    /**
     * Método hook opcional que se ejecuta después de filtrar los números.
     * @param filteredNumbers Los números después de aplicar el filtro.
     */
    //estos metodos se ejecutan despues de las operaciones de filtrado y mapeo
    protected afterFiltering(filteredNumbers: number[]): void {
        console.log('FilterMapProdReduce - After filtering:', filteredNumbers);
    } //imprem¡imen los numeros despues del filtrado

    /**
     * Método hook opcional que se ejecuta después de mapear los números.
     * @param mappedNumbers Los números después de aplicar el mapeo.
     */
    protected afterMapping(mappedNumbers: number[]): void {
        console.log('FilterMapProdReduce - After mapping:', mappedNumbers);
    }
}
