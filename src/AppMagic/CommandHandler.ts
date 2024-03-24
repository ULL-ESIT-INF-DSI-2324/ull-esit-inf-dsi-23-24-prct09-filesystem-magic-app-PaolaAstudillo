import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { MagicCardCollection } from '../AppMagic/CardCollection.js';
import { MagicCard, MagicColor, MagicType, MagicRarity } from '../AppMagic/Card.js';

/**
 * Clase que maneja los comandos de la línea de comandos para la gestión de la colección de cartas mágicas.
 */
export class MagicCommandHandler {
  /**
   * Configura los comandos de la línea de comandos usando Yargs.
   */
  static setupCommands() {
    yargs(hideBin(process.argv))
      .command({
        command: 'add',
        describe: 'Añade una nueva carta a la colección',
        builder: {
          id: { type: 'number', demandOption: true },
          name: { type: 'string', demandOption: true },
          manaCost: { type: 'number', demandOption: true },
          color: { type: 'string', choices: Object.values(MagicColor), demandOption: true },
          type: { type: 'string', choices: Object.values(MagicType), demandOption: true },
          rarity: { type: 'string', choices: Object.values(MagicRarity), demandOption: true },
          ruleText: { type: 'string', demandOption: true },
          marketValue: { type: 'number', demandOption: true },
          userName: { type: 'string', demandOption: true },
          power: { type: 'number', default: undefined },
          loyaltyMarks: { type: 'number', default: undefined }
        },
        /**
         * Manejador para el comando 'add', que añade una nueva carta a la colección del usuario.
         * @param argv Argumentos de línea de comandos.
         */
        handler(argv) {
          const collection = new MagicCardCollection(argv.userName);
          const newCard = new MagicCard(
            argv.id,
            argv.name,
            argv.manaCost,
            argv.color,
            argv.type,
            argv.rarity,
            argv.text,
            argv.marketValue,
            argv.powerToughness,
            argv.loyalty
          );
          collection.addCard(newCard);
        }
      })
     // Lista todas las cartas en la colección de un usuario
     .command({
      command: 'list',
      describe: 'Lista todas las cartas en la colección',
      builder: {
        userName: { type: 'string', demandOption: true }
      },
      /* Manejador para el comando 'list', que lista las carta de la colección del usuario.
      * @param argv Argumentos de línea de comandos.
      */
      handler(argv) {
        const collection = new MagicCardCollection(argv.userName);
        console.log(collection.listCards());
      }
    })
    // Actualiza una carta específica en la colección
    .command({
      command: 'update',
      describe: 'Actualiza una carta en la colección',
      builder: {
        id: { type: 'number', demandOption: true },
        name: { type: 'string', demandOption: true },
        manaCost: { type: 'number', demandOption: true },
        color: { type: 'string', choices: Object.values(MagicColor), demandOption: true },
        type: { type: 'string', choices: Object.values(MagicType), demandOption: true },
        rarity: { type: 'string', choices: Object.values(MagicRarity), demandOption: true },
        ruleText: { type: 'string', demandOption: true },
        marketValue: { type: 'number', demandOption: true },
        userName: { type: 'string', demandOption: true },
        power: { type: 'number', default: undefined },
        loyaltyMarks: { type: 'number', default: undefined }
      },
      /* Manejador para el comando 'update', que Actualiza una carta específica en la colección
      * @param argv Argumentos de línea de comandos.
      */
      handler(argv) {
        const collection = new MagicCardCollection(argv.userName);
        const updatedCard = new MagicCard(
          argv.id,
          argv.name,
          argv.manaCost,
          argv.color,
          argv.type,
          argv.rarity,
          argv.text,
          argv.marketValue,
          argv.powerToughness,
          argv.loyalty
        );
        collection.updateCard(updatedCard);
      }
    })
    // Muestra la información detallada de una carta específica
    .command({
      command: 'read',
      describe: 'Lee los detalles de una carta específica',
      builder: {
        id: { type: 'number', demandOption: true },
        userName: { type: 'string', demandOption: true }
      },
       /* Manejador para el comando 'read', que muestra la información detallada de una carta específica
      * @param argv Argumentos de línea de comandos.
      */     
      handler(argv) {
        const collection = new MagicCardCollection(argv.userName);
        console.log(collection.readCard(argv.id));
      }
    })
    // Elimina una carta específica de la colección
    .command({
      command: 'remove',
      describe: 'Elimina una carta de la colección',
      builder: {
        id: { type: 'number', demandOption: true },
        userName: { type: 'string', demandOption: true }
      },
       /* Manejador para el comando 'remove', que elimina una carta específica de la colección
      * @param argv Argumentos de línea de comandos.
      */   
      handler(argv) {
        const collection = new MagicCardCollection(argv.userName);
        collection.deleteCard(argv.id);
      }
    })
    .help()
    .argv;
}
}

MagicCommandHandler.setupCommands();