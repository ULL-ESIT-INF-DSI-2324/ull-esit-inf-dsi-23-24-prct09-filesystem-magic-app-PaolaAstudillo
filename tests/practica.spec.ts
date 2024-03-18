import { expect } from 'chai';
import { FilterMapSubReduce } from '../src/practica/FilterMapSubReduce.js';
import { FilterMapProdReduce } from '../src/practica/FilterMapProdReduce.js';
import { FilterMapDivReduce } from '../src/practica/FilterMapDivReduce.js';
import { FilterMapAddReduce } from '../src/practica/FilterMapAddReduce.js';

describe('Pruebas de NumberListProcessor', () => {

  describe('Pruebas de FilterMapSubReduce', () => {
    const processor = new FilterMapSubReduce();

    it('debería restar todos los elementos', () => {
      const resultado = processor.processNumbers([10, 5, 3]);
      expect(resultado).to.equal(2); // 10 - 5 - 3 = 2
    });

    it('debería retornar el único elemento para un arreglo con un elemento', () => {
      const resultado = processor.processNumbers([10]);
      expect(resultado).to.equal(10);
    });

    it('debería retornar 0 para un arreglo vacío', () => {
      const resultado = processor.processNumbers([]);
      expect(resultado).to.equal(0);
    });
  });

  describe('Pruebas de FilterMapProdReduce', () => {
    const processor = new FilterMapProdReduce();

    it('debería multiplicar todos los elementos', () => {
      const resultado = processor.processNumbers([2, 3, 4]);
      expect(resultado).to.equal(24); // 2 * 3 * 4 = 24
    });

    it('debería retornar el único elemento para un arreglo con un elemento', () => {
      const resultado = processor.processNumbers([7]);
      expect(resultado).to.equal(7);
    });

    it('debería retornar 1 para un arreglo vacío', () => {
      const resultado = processor.processNumbers([]);
      expect(resultado).to.equal(1);
    });
  });

  describe('Pruebas de FilterMapDivReduce', () => {
    const processor = new FilterMapDivReduce();

    it('debería dividir todos los elementos', () => {
      const resultado = processor.processNumbers([20, 2, 5]);
      expect(resultado).to.equal(2); // 20 / 2 / 5 = 2
    });

    it('debería lanzar un error si el primer elemento es 0', () => {
      expect(() => processor.processNumbers([0, 1, 2])).to.throw("Division by zero error in reduce operation.");
    });

    it('debería lanzar un error para un arreglo vacío', () => {
      expect(() => processor.processNumbers([])).to.throw("Division by zero error in reduce operation.");
    });
  });

  describe('Pruebas de FilterMapAddReduce', () => {
    const processor = new FilterMapAddReduce();

    it('debería sumar todos los elementos', () => {
        const resultado = processor.processNumbers([2, 3, 4]);
        expect(resultado).to.equal(9); // 2 + 3 + 4 = 9
    });

    it('debería retornar el único elemento para un arreglo con un elemento', () => {
        const resultado = processor.processNumbers([7]);
        expect(resultado).to.equal(7);
    });

    it('debería retornar 0 para un arreglo vacío', () => {
        const resultado = processor.processNumbers([]);
        expect(resultado).to.equal(0);
    });
});
});
