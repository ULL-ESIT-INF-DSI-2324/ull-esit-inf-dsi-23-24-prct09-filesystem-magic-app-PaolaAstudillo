import { MagicCard } from "../AppMagic/Card.js";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from "fs";
import chalk from 'chalk';

/**
 * Clase que representa una colección de cartas mágicas.
 */
export class MagicCardCollection {
  private cards: Map<number, MagicCard>;

  /**
   * Constructor de la clase MagicCardCollection.
   * @param username El nombre de usuario asociado a la colección.
   */
  constructor(private username: string) {
    this.cards = new Map();
    this.loadCollection();
  }

  /**
   * Obtiene la ruta del archivo de la colección del usuario.
   * @returns La ruta del archivo de la colección.
   */
  getCollectionFilePath() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    return join(__dirname, '../../data', `${this.username}.json`);
  }

  /**
   * Verifica si el archivo de la colección del usuario existe.
   * @returns True si existe, False en caso contrario.
   */
  userFileExists() {
    return fs.existsSync(this.getCollectionFilePath());
  }

  /**
   * Carga la colección de cartas desde el archivo del usuario.
   */
  loadCollection() {
    const filePath = this.getCollectionFilePath();
    if (this.userFileExists()) {
      const rawData = fs.readFileSync(filePath, 'utf8');
      const cardData: MagicCard[] = JSON.parse(rawData);
      cardData.forEach(card => this.cards.set(card.id, card));
    }
  }

  /**
   * Escribe la colección actual en el archivo del usuario.
   */
  private writeCollection(): void {
    const filePath = this.getCollectionFilePath();
    const cardData = Array.from(this.cards.values());
    fs.writeFileSync(filePath, JSON.stringify(cardData, null, 2));
  }

  /**
   * Añade una carta a la colección.
   * @param card La carta a añadir.
   */
  public addCard(card: MagicCard): void {
    if (this.cards.has(card.id)) {
      console.error(chalk.red(`Error: Card with ID ${card.id} already exists.`));
      return;
    }
    this.cards.set(card.id, card);
    this.writeCollection();
    console.log(chalk.green(`Card with ID ${card.id} added.`));
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
    this.writeCollection();
    console.log(chalk.green(`Card with ID ${card.id} updated.`));
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
    this.writeCollection();
    console.log(chalk.green(`Card with ID ${cardId} deleted.`));
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