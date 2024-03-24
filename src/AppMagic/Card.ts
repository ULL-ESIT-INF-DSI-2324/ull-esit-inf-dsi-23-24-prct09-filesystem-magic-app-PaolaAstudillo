/**
 * Enumeración de colores mágicos para cartas.
 * Representa los posibles colores de una carta en el juego.
 */
export enum MagicColor {
  White = "White",
  Blue = "Blue",
  Black = "Black",
  Red = "Red",
  Green = "Green",
  Grey = "Grey",
  Multicolored = "Multicolored",
  Cyan = "Cyan",
  Yellow = "Yellow",
  Magenta = "Magenta"
}

/**
 * Enumeración de tipos de cartas.
 * Representa los diferentes tipos de cartas en el juego.
 */
export enum MagicType {
  Land = "Land",
  Creature = "Creature",
  Enchantment = "Enchantment",
  Sorcery = "Sorcery",
  Instant = "Instant",
  Artifact = "Artifact",
  Planeswalker = "Planeswalker"
}

/**
 * Enumeración de rarezas de cartas.
 * Representa los distintos niveles de rareza que puede tener una carta.
 */
export enum MagicRarity {
  Common = "Common",
  Uncommon = "Uncommon",
  Rare = "Rare",
  Mythic = "Mythic"
}

/**
 * Clase que representa una carta de Magic.
 * Cada carta tiene atributos como ID, nombre, coste de maná, color, etc.
 */
export class MagicCard {
  /**
   * Constructor de la clase MagicCard.
   * @param id El identificador único de la carta.
   * @param name El nombre de la carta.
   * @param manaCost El coste de maná para jugar la carta.
   * @param color El color de la carta.
   * @param type El tipo de la carta.
   * @param rarity La rareza de la carta.
   * @param text El texto de reglas de la carta.
   * @param marketValue El valor de mercado de la carta.
   * @param powerToughness La fuerza y resistencia de la carta (solo para criaturas).
   * @param loyalty La lealtad de la carta (solo para planeswalkers).
   */
  constructor(
    public id: number,
    public name: string,
    public manaCost: number,
    public color: MagicColor,
    public type: MagicType,
    public rarity: MagicRarity,
    public text: string,
    public marketValue: number,
    public powerToughness?: [number, number],
    public loyalty?: number,
  ){}
}
