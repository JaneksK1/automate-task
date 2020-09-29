
module.exports = {
  'Check language switch' : function(browser) {
    var initialUrl = 'https://www.letapolise.lv/lv'
    browser
      .url(initialUrl)
      .click('#languages li:not(.active)')
      .url(function(result){
        this.assert.not.equal(result.value, initialUrl, 'redirected to other language page')
      })
      .pause(1000)
    },
  'Check if swithced to specific lanuage page' : function(browser){
      var baseUrl = 'https://www.letapolise.lv',
          ruUrl = baseUrl + '/ru',
          lvUrl = baseUrl + '/lv'
      browser
        .url(baseUrl)
        .useXpath()
        .click('//nav[@id="languages"]//li/a[contains(text(), "RU")]')
        .url(function(result){
          this.assert.equal(result.value, ruUrl, 'redirected to /ru page')
        })
        .click('//nav[@id="languages"]//li/a[contains(text(), "LV")]')
        .url(function(result){
          this.assert.equal(result.value, lvUrl, 'redirected to /lv page')
        })
  }
};
