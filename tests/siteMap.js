
module.exports = {
  'Open each page from secondary and primary menus' : function(browser) {
    browser
      .url('https://www.letapolise.lv/lv')
      //click through the menus and make sure pages are being loaded.
      .elements("css selector", "#primary ul > li", function(result){
        i=0;
        result.value.forEach(function(value){
          i++;
          browser.click("css selector", `#primary ul > li:nth-of-type(${i})`)
          browser.pause(2000)
          browser.assert.visible('div#logo')
        });
      })
      .elements("css selector", "#secondary ul > li", function(result){
        i=0;
        result.value.forEach(function(value){
          i++;
          browser.click("css selector", `#secondary ul > li:nth-of-type(${i})`)
          browser.pause(2000)
          browser.assert.visible('div#logo')
        });
      });



}
};
