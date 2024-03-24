# **Práctica 9 - Aplicación para coleccionistas de cartas Magic**
Nombre: Paola Astudillo Capote
Gmail: alu010337418@ull.edu.es

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-PaolaAstudillo/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-PaolaAstudillo?branch=main)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-PaolaAstudillo&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-PaolaAstudillo)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-PaolaAstudillo/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-PaolaAstudillo/actions/workflows/node.js.yml)

## Introducción
En esta práctica tenemos que solucionar un ejercicio basado en la creación de una aplicación para coleccionistas de cartas Magic, en donde almacenaremos y gestionaremos información sobre las cartas de cada usuario. Además comentaré la solución propuesta para el ejercicio desarrollado durante la hora de PE.

## Objetivos
* Pasos previos
* Desarrollo de la aplicación
* Ejercicio del PE 
* Conclusión

## Desarrollo

### Pasos previos
Para realizar esta práctica, comencé creando la estructura básica del proyecto, siguiendo el mismo formato que en las prácticas anteriores, es decir, haciendo uso de GitHubPages, de documentación en TypeDoc, desarrollo dirigido por pruebas,con “Mocha y Chai”, GItHubActions, Coveralls y SonarCloud. Además implementamos el uso de el paquete `chalk`, para colorear en consola y `yargs` que permite parsear diferentes argumentos pasados a un programa desde la línea de comandos.

### Desarrollo de la aplicación

### Ejercicio del PE 

Esta solución se ha diseñado y desarrollado para cumplir con los requisitos específicos del enunciado. Se evitó el uso directo de los métodos `filter`, `map` y `reduce` de TypeScript y se implementó el patrón Template Method. 

Esta solución se basa en la clase base abstracta `NumberListProcessor`, que sirve como el núcleo, definiendo el flujo general del algoritmo a través del método `processNumbers`. Este método encapsula las etapas de filtrado, mapeo y reducción, fundamentales para procesar una lista de números. En la etapa de filtrado, el método `filter` itera sobre cada número en la lista y aplica un predicado lógico definido en `filterPredicate`. Este predicado es una función que determina si un número cumple con una condición específica, y si es así, el número se incluye en la lista resultante. Esta implementación de filtrado evita el uso directo del método `filter` de TypeScript.

La siguiente fase es el mapeo, donde `map` transforma cada número de la lista filtrada. Aquí, en lugar de utilizar el método `map` de TypeScript, se aplica una transformación definida en `mapFunction` a cada elemento. 

Además en la clase `NumberListProcessor` tenemos el método `reduce` que es abstracto, lo que obliga a las subclases a proporcionar su propia implementación. Asegurando que la operación de reducción sea específica y adecuada para el contexto de cada subclase.

Para abordar las variaciones en la operación de reducción, desarrollé varias subclases: `FilterMapAddReduce`, `FilterMapDivReduce`, `FilterMapProdReduce`, y `FilterMapSubReduce`. Cada una implementa `reduce` de manera que refleje su operación característica. Además, estas subclases tienen la opción de sobrescribir los métodos hook `afterFiltering` y `afterMapping`. Estos se ejecutan después de las operaciones de filtrado y mapeo, respectivamente, y ofrecen puntos de extensión para agregar funcionalidades adicionales, aunque en la implementación actual no se les dio un uso específico más allá de mostrar su potencial.

### Conclusión