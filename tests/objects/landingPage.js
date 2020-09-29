module.exports = {
  elements: {
    landingOctaForm: {
      selector: '//form[@id="octaForm"]',
      locateStrategy: 'xpath'
    },
    inputCarPlate: 'input#regNr',
    errorCarPlate: '#error_for_regNr',
    inputCarCertificate: 'input#regSert',
    errorCarCertificate: '#error_for_regSert',
    buttonSubmitOctaCalc: 'input.button.green[type="submit"]',
  }
};
