/// <reference types="cypress" />
describe('window.isSecureContext', () => {
  it('runs on firefox', () => {
    expect(window.navigator.userAgent).to.include('Firefox')
  })
  it('runs on localhost', () => {
    expect(window.location.hostname).to.equal('localhost')
  })
  it('is true', () => {
    expect(window.isSecureContext).to.be.true;
  })
})
