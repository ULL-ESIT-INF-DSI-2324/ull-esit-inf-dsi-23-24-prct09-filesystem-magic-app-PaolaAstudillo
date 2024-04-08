import { MagicCard } from "../AppMagic/Card.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from "fs";
import chalk from 'chalk';

export class MagicCardCollection {
  private cards: Map<number, MagicCard>;

  constructor(private username: string) {
    this.cards = new Map();
    this.loadCollection();
  }

  getCollectionFilePath() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    return join(__dirname, '../../data', `${this.username}.json`);
  }

  userFileExists() {
    return fs.existsSync(this.getCollectionFilePath());
  }

  loadCollection() {
    const filePath = this.getCollectionFilePath();
    if (this.userFileExists()) {
      const rawData = fs.readFileSync(filePath, 'utf8');
      const cardData: MagicCard[] = JSON.parse(rawData);
      cardData.forEach(card => this.cards.set(card.id, card));
    }
  }
  //creamos metodo para escribir en el archivo de forma asincrona
  private writeCollectionAsync(callback: (error?: string) => void): void {
    const filePath = this.getCollectionFilePath();
    const cardData = Array.from(this.cards.values());//contiene todas las cartas de la coleccion
    //fs.writeFile: metodo asincrono para escribir archivos
    //JSON.Stringify convierte el objeto cardData en cadena JSON.
    fs.writeFile(filePath, JSON.stringify(cardData, null, 2), (err) => { //null, 2 para formatear salida, mas legible
      //fs.write toma la ruta y los domainToASCII(json)
      if (err) {
        console.error(chalk.red(`Error writing to file: ${err.message}`));
        callback(`Error writing to file: ${err.message}`);
        return;
      }
      //funcion anonima (función que se definirá más tarde en cada metodo)
      callback(); //ejecuta si la operacion de escritura exitosa
    });
  }

  public addCard(card: MagicCard): void {
    try {
      if (this.cards.has(card.id)) { // Verificar si la carta ya existe
        console.error(chalk.red(`Error: Card with ID ${card.id} already exists.`));
        return;
      }
      // Si la carta no existe en la colección, la añade al mapa 'this.cards'.
      this.cards.set(card.id, card); // Agregar la carta al mapa si no existe
  
      // Llamar a writeCollectionAsync y pasar un callback para manejar la respuesta
      this.writeCollectionAsync((error) => {
        if (error) {
          console.error(chalk.red(`Error writing to file: ${error}`)); // Manejar el error de escritura
          return;
        }
        console.log(chalk.green(`Card with ID ${card.id} added.`)); // Confirmar que la carta se agregó
      });
    } catch (error) {
      // Capturar y manejar cualquier otro error que ocurra durante addCard
      console.error(chalk.red(`Error in addCard: ${error}`));
    }
  }
  
  /**
   * Actualiza una carta en la colección.
   * @param card La carta actualizada.
   */
  public updateCard(card: MagicCard): void {
    if (!this.cards.has(card.id)) {
      console.error(chalk.red(`Error: Card with ID ${card.id} not found.`));
      return;
    }
    this.cards.set(card.id, card);
    this.writeCollectionAsync(() => {
      if (Error) {
        console.error(chalk.red(Error));
        return;
      }
      console.log(chalk.green(`Card with ID ${card.id} updated.`));
    });
  }

  /**
   * Elimina una carta de la colección.
   * @param cardId El ID de la carta a eliminar.
   */
  public deleteCard(cardId: number): void {
    if (!this.cards.has(cardId)) {
      console.error(chalk.red(`Error: Card with ID ${cardId} not found.`));
      return;
    }
    this.cards.delete(cardId);
    this.writeCollectionAsync(() => {
      if (Error) {
        console.error(chalk.red(Error));
        return;
      }
      console.log(chalk.green(`Card with ID ${cardId} deleted.`));
    });
  }

  /**
   * Lista todas las cartas en la colección.
   */
  public listCards(): void {
    if (!this.userFileExists()) {
      console.error(chalk.red(`Error: Collection for user '${this.username}' does not exist.`));
      return;
    }
    console.log(chalk.green('Listing all cards:'));
    this.cards.forEach(card => {
      const colorFunc = this.getColorFunction(card.color);
      console.log(colorFunc(
        `ID: ${card.id}, ` +
        `Name: ${card.name}, ` +
        `Mana Cost: ${card.manaCost}, ` +
        `Color: ${card.color}, ` +
        `Type: ${card.type}, ` +
        `Rarity: ${card.rarity}, ` +
        `Text: ${card.text}, ` +
        `Market Value: ${card.marketValue}, ` +
        `${card.powerToughness ? `Power/Toughness: ${card.powerToughness[0]}/${card.powerToughness[1]}, ` : ''}` +
        `${card.loyalty ? `Loyalty: ${card.loyalty}` : ''}`
    ));
});
  }

  /**
   * Muestra los detalles de una carta específica.
   * @param cardId El ID de la carta.
   */
  public readCard(cardId: number): void {
    const card = this.cards.get(cardId);
    if (!card) {
        console.error(chalk.red(`Error: Card with ID ${cardId} not found.`));
        return;
    }
    const colorFunc = this.getColorFunction(card.color);
    console.log(chalk.green(`Card details for ID ${cardId}:`));
    console.log(colorFunc(JSON.stringify(card, null, 2)));
  }

  /**
   * Obtiene la función de color correspondiente al color de la carta.
   * @param color El color de la carta.
   * @returns La función chalk correspondiente al color.
   */
  private getColorFunction(color: string) {
    switch (color.toLowerCase()) {
      case 'white': return chalk.white;
      case 'blue': return chalk.blue;
      case 'black': return chalk.black;
      case 'red': return chalk.red;
      case 'green': return chalk.green;
      case 'yellow': return chalk.yellow;
      case 'cyan': return chalk.cyan;
      case 'grey': return chalk.gray;
      case 'magenta': return chalk.magenta;
      default: return chalk.white;
    }
  }
}