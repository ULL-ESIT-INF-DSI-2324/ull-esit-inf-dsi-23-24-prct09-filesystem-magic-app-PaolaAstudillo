import { NumberListProcessor } from '../practica/NumberListProcessor.js';

/**
 * Clase FilterMapDivReduce que extiende de NumberListProcessor.
 * Esta clase implementa la operación reduce para dividir todos los elementos
 * de un arreglo numérico y proporciona implementaciones opcionales para los 
 * métodos hook afterFiltering y afterMapping.
 */
export class FilterMapDivReduce extends NumberListProcessor {
    protected reduce(numbers: number[]): number {
        if (numbers.length === 0 || numbers[0] === 0) {
            throw new Error("Division by zero error in reduce operation.");
        }
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result /= numbers[i];
        }
        return result;
    }

    /**
     * Método hook que se ejecuta después de la operación de filtrado.
     * Este método imprime en consola los números después de haber sido filtrados.
     * @param filteredNumbers Los números después de aplicar la operación de filtrado.
     */
    //realizar acciones adicionales despues de cada etpa del proceso
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
