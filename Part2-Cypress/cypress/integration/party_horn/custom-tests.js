describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(function($el) {
      expect($el).to.have.value(75);
    });
  });

  it('Volume number changes when volume slider changes', () => {
    cy.get("#volume-slider").invoke("val", "33").trigger("input");
    cy.get("#volume-number").then(function($el) {
      expect($el).to.have.value(33);
    });
  });

  it('Volume audio changes when volume slider changes', () => {
    cy.get("#volume-slider").invoke("val", "33").trigger("input");
    cy.get("#horn-sound").then(function($el) {
      expect($el).to.have.prop("volume", .33);
    });
  });

  it('Image source changes to party horn image', () => {
    cy.get("#radio-party-horn").check();
    cy.get("#sound-image").then(function($el) {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });
  });

  it('Sound source changes to party horn sound', () => {
    cy.get("#radio-party-horn").check();
    cy.get("#horn-sound").then(function($el) {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
  });

  it('Volume images change according to volume level', () => {
    cy.get("#volume-slider").invoke("val", "0").trigger("input");
    cy.get("#volume-image").then(function($el) {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-0.svg");
    });

    cy.get("#volume-slider").invoke("val", "1").trigger("input");
    cy.get("#volume-image").then(function($el) {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg");
    });

    cy.get("#volume-slider").invoke("val", "35").trigger("input");
    cy.get("#volume-image").then(function($el) {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg");
    });

    cy.get("#volume-slider").invoke("val", "67").trigger("input");
    cy.get("#volume-image").then(function($el) {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-3.svg");
    });
  });

  it('Honk button is disabled when volume number is NaN or empty', () => {
    cy.get("#volume-number").clear().type("hello");
    cy.get("#honk-btn").then(function($el) {
      expect($el).to.have.attr("disabled");
    });

    cy.get("#volume-number").clear();
    cy.get("#honk-btn").then(function($el) {
      expect($el).to.have.attr("disabled");
    });
  });

  it('Error is shown when volume number is outside range [0, 100]', () => {
    cy.get("#volume-number").clear().type("-1");
    cy.get("#volume-number").then(function($el) {
      expect($el).to.have.class('error')
    });
  });
});
