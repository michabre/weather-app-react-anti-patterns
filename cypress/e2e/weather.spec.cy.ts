/// <reference types="cypress" />

import searchResults from '../fixtures/search-result.json';

describe('weather application', () => {
  it('displays the application title', () => {
  cy.visit('http://localhost:5173/');
  cy.contains('Weather Application');
  });

  it('searches for a city', () => {
    cy.intercept("GET", "https://api.openweathermap.org/geo/1.0/direct?q=*", {
      statusCode: 200,
      body: searchResults,
    });
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="search-input"]').type('Melbourne');
    cy.get('[data-testid="search-input"]').type('{enter}');
    cy.get('[data-testid="search-results"] .search-result')
    .should('have.length', 2);
  });

  it('adds city to favorite list', () => {
    cy.intercept("GET", "https://api.openweathermap.org/geo/1.0/direct?q=*", {
      statusCode: 200,
      body: searchResults,
    });
    cy.visit('http://localhost:5173/');
    cy.get('[data-testid="search-input"]').type('Melbourne');
    cy.get('[data-testid="search-input"]').type('{enter}');
    cy.get('[data-testid="search-results"] .search-result')
      .first()
      .click();
    cy.get('[data-testid="favorite-cities"] .city')
      .should('have.length', 1);
    cy.get('[data-testid="favorite-cities"].name: contains("Melbourne")')
      .should('exist');
    cy.get('[data-testid="favorite-cities"] .city:contains("20°C")')
      .should('exist');
  })

});