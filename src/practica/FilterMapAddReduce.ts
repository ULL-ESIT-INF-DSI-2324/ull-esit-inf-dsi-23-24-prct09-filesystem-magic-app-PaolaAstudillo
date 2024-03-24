import { NumberListProcessor } from '../practica/NumberListProcessor.js';

export class FilterMapAddReduce extends NumberListProcessor {
    protected reduce(numbers: number[]): number {
        let result = 0;
        for (const num of numbers) {
            result += num;
        }
        return result;
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

