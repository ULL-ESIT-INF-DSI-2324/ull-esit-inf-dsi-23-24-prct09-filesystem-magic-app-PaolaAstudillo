import "mocha";
import { expect } from "chai";
import {  MagicCard, MagicColor, MagicType, MagicRarity } from "/home/usuario/practica9/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-PaolaAstudillo/dist/AppMagic/Card.js"; 
import { MagicCardCollection} from ""
describe("MagicCardCollection Asynchronous Tests", () => {

  let collection;

  beforeEach(() => {

    collection = new MagicCardCollection("testUserNuevo");
  });

  it("should add a card successfully", (done) => {
    const card = new MagicCard(1, "Test Card", 5, MagicColor.Blue, MagicType.Creature, MagicRarity.Common, "Test Text", 10);
    
    collection.addCard(card);

    // breve retraso para permitir que el archivo se escriba.
    setTimeout(() => {
      collection.listCards();
      expect(collection.getCards().has(card.id)).to.be.true;
      done();
    }, 500);
  });


 

});
