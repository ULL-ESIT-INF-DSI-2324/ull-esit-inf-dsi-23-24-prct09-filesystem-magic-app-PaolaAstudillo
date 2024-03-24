/**
 * Módulo MagicFileHandler
 * 
 * Este módulo proporciona funciones para manejar el almacenamiento y recuperación
 * de cartas de Magic en el sistema de archivos.
 */

import { MagicCard } from '../AppMagic/Card.js';
import * as fs from 'fs';
import * as path from 'path';

export class MagicFileHandler {
  /**
   * Obtiene la ruta del archivo para una carta o colección de un usuario específico.
   * @param username El nombre de usuario de la colección.
   * @param cardId Opcional, el ID de la carta.
   * @returns La ruta del archivo para la carta o colección.
   */
  static getFilePath(username: string, cardId?: number): string {
    const basePath = path.join(__dirname, '..', '..', 'data', username);
    if (!fs.existsSync(basePath)) {
      fs.mkdirSync(basePath, { recursive: true });
    }
    return cardId ? path.join(basePath, `${cardId}.json`) : basePath;
  }

  /**
   * Guarda una carta en un archivo JSON.
   * @param card La carta de Magic a guardar.
   * @param username El nombre de usuario de la colección.
   */
  static saveCardToFile(card: MagicCard, username: string) {
    const filePath = this.getFilePath(username, card.id);
    fs.writeFileSync(filePath, JSON.stringify(card, null, 2));
  }

  /**
   * Carga una carta desde un archivo JSON.
   * @param cardId El ID de la carta a cargar.
   * @param username El nombre de usuario de la colección.
   * @returns La carta de Magic cargada o null si no se encuentra.
   */
  static loadCardFromFile(cardId: number, username: string): MagicCard | null {
    const filePath = this.getFilePath(username, cardId);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContent) as MagicCard;
    }
    return null;
  }

  /**
   * Carga todas las cartas de un usuario desde archivos JSON.
   * @param username El nombre de usuario de la colección.
   * @returns Un array de cartas de Magic.
   */
  static loadAllCards(username: string): MagicCard[] {
    const basePath = this.getFilePath(username);
    const cards: MagicCard[] = [];
    if (fs.existsSync(basePath)) {
      fs.readdirSync(basePath).forEach(file => {
        const filePath = path.join(basePath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        cards.push(JSON.parse(fileContent) as MagicCard);
      });
    }
    return cards;
  }

  /**
   * Elimina la carta de un usuario del sistema de archivos.
   * @param cardId El ID de la carta a eliminar.
   * @param username El nombre de usuario de la colección.
   */
  static deleteCard(cardId: number, username: string) {
    const filePath = this.getFilePath(username, cardId);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}
