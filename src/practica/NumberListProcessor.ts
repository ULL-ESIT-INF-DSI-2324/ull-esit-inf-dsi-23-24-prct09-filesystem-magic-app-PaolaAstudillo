/**
 * Clase abstracta NumberListProcessor que sirve como plantilla para procesar una lista de números.
 * Implementa el patrón de diseño Template Method.
 */
export abstract class NumberListProcessor {

    /**
     * Método de plantilla para procesar los números.
     * Aplica una serie de operaciones (filtrado, mapeo y reducción) a la lista de números.
     * @param numbers Lista de números a procesar.
     * @returns El resultado numérico del procesamiento.
     */
    public processNumbers(numbers: number[]): number {
        const filteredNumbers = this.filter(numbers);
        this.afterFiltering(filteredNumbers);
        //ejecuta metodo hook
        //es un punto de extensión donde las subclases pueden agregar lógica adicional 
        //después de la operación de filtrado.
        const mappedNumbers = this.map(filteredNumbers);
        //llama a map en el arreglo ya filtrado de nates
        this.afterMapping(mappedNumbers);
        //hook despues de mapear, punto de extension para subclases
        return this.reduce(mappedNumbers);
        //reduce implementado por las subclaases
    }

    protected filter(numbers: number[]): number[] {
        const result: number[] = [];
        for (const num of numbers) {
            if (this.filterPredicate(num)) {
                //si cumple con lo definido en filterpredicate
                result.push(num);
            }
        }
        return result;
    }

    /**
     * Aplica una función de transformación a cada elemento de la lista de números.
     * @param numbers Lista de números a mapear.
     * @returns Lista de números transformados.
     */
    protected map(numbers: number[]): number[] {
        const result: number[] = [];
        for (const num of numbers) {
            result.push(this.mapFunction(num));
            //en mapfunction esta la funcion de transformacion
        }
        return result;
    }

    /**
     * Método abstracto para reducir la lista de números a un solo valor numérico.
     * Debe ser implementado en las subclases.
     * @param numbers Lista de números a reducir.
     * @returns El resultado de la operación de reducción.
     */
    protected abstract reduce(numbers: number[]): number;

    /**
     * Predicado utilizado para el filtrado de números.
     * @param n El número a evaluar en el filtro.
     * @returns `true` si el número cumple con el criterio de filtrado; de lo contrario, `false`.
     */
    
    protected filterPredicate(n: number): boolean {
        return n !== null; // Ejemplo de implementación
    }

    /**
     * Función utilizada para mapear cada número a un nuevo valor.
     * @param n El número a mapear.
     * @returns El número transformado.
     */
    protected mapFunction(n: number): number {
        return n; // Ejemplo de implementación
    }

    /**
     * Método hook que se ejecuta después del filtrado de números.
     * Puede ser sobreescrito en subclases para realizar acciones adicionales después del filtrado.
     * @param filteredNumbers Lista de números filtrados.
     */
    protected afterFiltering(filteredNumbers: number[]): void {
        // Hook después de filtrar
        //no hace nada, pero proporciona un punto donde
        //las subclases pueden implementar lógica adicional.
    }

    /**
     * Método hook que se ejecuta después del mapeo de números.
     * Puede ser sobreescrito en subclases para realizar acciones adicionales después del mapeo.
     * @param mappedNumbers Lista de números mapeados.
     */
    protected afterMapping(mappedNumbers: number[]): void {
        // Hook después de mapear
    }
}
