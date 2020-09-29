module.exports = {
  elements: {
    divPriceResultsTable: 'div#results',
    firstRedOffer: 'td.res.red a.select-offer',
    divPurchaseDetailsForm: 'div#buy',
    inputPhysicalPerson: 'input#person_type1',
    inputFormName: 'table.policy input#first_name',
    inputFormLastName: 'table.policy input#last_name',
    inputFormPersCode: 'table.policy input#pk',
    inputFormAddress: 'table.policy input#address',
    inputFormEmail: 'table.policy input#email',
    inputFormTelNr: 'table.policy input#phoneField',
    labelDeliveryOther: 'label[for=delivery_type_other]',
    labelEmailReceipt: 'label[for=pay_type_email]',
    buttonSubmitDetails: {
      selector: '//input[contains(@onclick, "orderValidator")]',
      locateStrategy: 'xpath'
    }
  }
};
