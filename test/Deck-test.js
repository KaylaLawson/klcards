const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Deck', function() {
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be a new instance of', function() {
    let deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should count how many cards are in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    let deck = new Deck( [card1, card2, card3] );

    deck.cardCount();
    expect(deck.cardCount()).to.equal(3);
  });
});