import { NumberListProcessor } from '../practica/NumberListProcessor.js';

export class FilterMapSubReduce extends NumberListProcessor {
    protected reduce(numbers: number[]): number {
        return numbers.reduce((acc, curr, index) => {
            return index === 0 ? curr : acc - curr;
        }, 0);
    }


    // Implementación opcional de los métodos hook
    protected afterFiltering(filteredNumbers: number[]): void {
        console.log('FilterMapSubReduce - After filtering:', filteredNumbers);
    }

    protected afterMapping(mappedNumbers: number[]): void {
        console.log('FilterMapSubReduce - After mapping:', mappedNumbers);
    }
}
