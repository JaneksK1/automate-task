
module.exports = {
  'Check validation' : function(browser) {
      var landing = browser.page.landingPage();
      landing
        .navigate('https://www.letapolise.lv/lv')
        .waitForElementVisible('body')

        // check if OCTA validation message appears
        .assert.visible('@landingOctaForm')
        .setValue('@inputCarPlate', '')
        .setValue('@inputCarCertificate', '')
        .click('@buttonSubmitOctaCalc')
        .assert.visible('@errorCarPlate')
        .assert.visible('@errorCarCertificate')
      },

  'Check redirect to results' : function(browser){
    var landing = browser.page.landingPage();
    var details = browser.page.octaDetails();
    landing
    // check if page redirects on calculator data submission
      .setValue('@inputCarPlate', 'KM3859')
      .setValue('@inputCarCertificate', 'AF3350214')
      .click('@buttonSubmitOctaCalc')
      .click('@buttonSubmitOctaCalc');

    // A better practice is to implement waiting for all AJAX requests to be done
    details
      .waitForElementVisible('@divPriceResultsTable', 4000)
      .pause(10000)
      .waitForElementVisible('@firstRedOffer');
  },

  'Submit purchase details form' : function(browser){
    var details = browser.page.octaDetails();
    details
      .click('@firstRedOffer')
      .waitForElementVisible('@divPurchaseDetailsForm', 5000) // check if details form is displayed
      .assert.not.visible('@divPriceResultsTable') // check if results table is hidden
      .assert.attributeEquals('@inputPhysicalPerson', 'checked', 'true')

      // set person data
      .setValue('@inputFormName', 'Jānis')
      .setValue('@inputFormLastName', 'Bērziņš')
      .setValue('@inputFormPersCode', '321234-99990')
      .setValue('@inputFormAddress', 'Liepāja, Rīgas iela 5-104')
      .setValue('@inputFormEmail', 'test@example.com')
      .setValue('@inputFormTelNr', '+37121234567')

      //set delivery data
      .click('@labelDeliveryOther')

      //set payment type
      .click('@labelEmailReceipt')
      .click('@buttonSubmitDetails');
    browser.page.octaCheckout().waitForElementVisible('@labelAcceptRules');
  },
  'Submit at checkout' : function(browser){
    var checkout = browser.page.octaCheckout();
    checkout
      .assert.containsText('@dataRegNr', 'KM3859') //could also check other data. TODO: use variables for inputed data.
      .click('@labelAcceptRules')
      .waitForElementVisible('@buttonSubmitOrder', 1000)
      .verify.visible('@divPopUp')
      .click('@aClosePopUp')
      .click('@spanAcceptRules')
      .click('@buttonSubmitOrder')
      .waitForElementVisible('@successHeading', 5000)
  }
};
