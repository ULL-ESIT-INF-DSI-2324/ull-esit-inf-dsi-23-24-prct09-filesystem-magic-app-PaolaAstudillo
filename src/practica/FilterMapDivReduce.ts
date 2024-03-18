import { NumberListProcessor } from '../practica/NumberListProcessor.js';

/**
 * Clase FilterMapDivReduce que extiende de NumberListProcessor.
 * Esta clase implementa la operación reduce para dividir todos los elementos
 * de un arreglo numérico y proporciona implementaciones opcionales para los 
 * métodos hook afterFiltering y afterMapping.
 */
export class FilterMapDivReduce extends NumberListProcessor {
    /**
     * Realiza la operación de reducción en el arreglo de números.
     * Esta implementación específica divide todos los elementos del arreglo.
     * Si el primer elemento es 0 o el arreglo está vacío, lanza un error para 
     * prevenir la división por cero.
     * @param numbers Arreglo de números a reducir.
     * @returns El resultado de dividir sucesivamente todos los elementos del arreglo.
     * @throws Error si el arreglo está vacío o el primer elemento es 0.
     */
    protected reduce(numbers: number[]): number {
        if (numbers.length === 0 || numbers[0] === 0) {
            throw new Error("Division by zero error in reduce operation.");
        }
        return numbers.reduce((acc, curr, index) => {
            return index === 0 ? curr : acc / curr;
        });
    }

    /**
     * Método hook que se ejecuta después de la operación de filtrado.
     * Este método imprime en consola los números después de haber sido filtrados.
     * @param filteredNumbers Los números después de aplicar la operación de filtrado.
     */
    protected afterFiltering(filteredNumbers: number[]): void {
        console.log('FilterMapDivReduce - After filtering:', filteredNumbers);
    }

    /**
     * Método hook que se ejecuta después de la operación de mapeo.
     * Este método imprime en consola los números después de haber sido mapeados.
     * @param mappedNumbers Los números después de aplicar la operación de mapeo.
     */
    protected afterMapping(mappedNumbers: number[]): void {
        console.log('FilterMapDivReduce - After mapping:', mappedNumbers);
    }
}
