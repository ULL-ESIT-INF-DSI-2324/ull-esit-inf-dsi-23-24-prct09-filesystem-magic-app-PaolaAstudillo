import { NumberListProcessor } from '../practica/NumberListProcessor.js';

export class FilterMapSubReduce extends NumberListProcessor {
    protected reduce(numbers: number[]): number {
        let result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result = i === 0 ? numbers[i] : result - numbers[i];
        }
        return result;
    }


    // Implementación opcional de los métodos hook
    protected afterFiltering(filteredNumbers: number[]): void {
        console.log('FilterMapSubReduce - After filtering:', filteredNumbers);
    }// se ejecuta despues de que se completa la operacion de filtrado en 
    //la clase base, imprime lista de numeros ya filtradas

    protected afterMapping(mappedNumbers: number[]): void {
        console.log('FilterMapSubReduce - After mapping:', mappedNumbers);
    }
}
