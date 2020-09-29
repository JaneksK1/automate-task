module.exports = {
  elements: {
    //orderSubmissionError: 'div#buy h1.red',
    dataRegNr: {
      selector: '//td[text()="Auto reģ. numurs:"]/following-sibling::td',
      locateStrategy: 'xpath'
    },
    labelAcceptRules: 'label[for=rules_accept]',
    spanAcceptRules: 'span.checkbox',
    buttonSubmitOrder: 'input#order_send',
    successHeading: {
      selector: '//h1[contains(text(), "Paldies")]',
      locateStrategy: 'xpath'
    },
    divPopUp: 'div#popup-terms',
    aClosePopUp: 'div#popup-terms .close-popup',
  }
};
