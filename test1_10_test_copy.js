Feature('onetest');

//////////////////////////////////////////////////////////////////////
//////рега и сохранение ключей ////////////////////////////////////////

Scenario('рега', async (I) => 

{  I.amOnPage('/');
    I.waitForVisible({css: '.ant-btn.v-auth-create_account.ant-btn-primary'});
    I.click({css: '.ant-btn.v-auth-create_account.ant-btn-primary'});
    I.fillField('#userName', 'username'); 
    I.fillField('#password', 'wavparol'); 
    I.fillField('#confirm', 'wavparol'); 
    I.pressKey('Enter');

I.waitForVisible({css: '.ant-btn.v-auth-create_account.ant-btn-primary'});   //предупреждени о безопасности 
I.click({css: '.ant-btn.v-auth-create_account.ant-btn-primary'},);  

 
  var text = await I.grabTextFrom({css: 'div.seedList'}); //    скопировать сгенеренный сид
  I.click({css: '.ant-btn.ant-btn-primary' }); 
 
  I.waitForVisible('#confirmSeed');
  I.fillField('#confirmSeed', text);   
  I.pressKey('Enter');   //вход в клиент


I.openNewTab('/settings/security'); //открыть вкладку безопасности в новом окне
I.waitForVisible({css: 'div.ant-collapse-item:nth-of-type(1)'});

I.click({css: 'div.ant-collapse-item:nth-of-type(1)'});
I.click({css: 'input#seed.ant-input.seed_input.v-input'});

I.fillField('#seed', 'wavparol'); 
I.pressKey('Enter');
var seed = await I.grabTextFrom({css: 'div.settings_seed_list'});  // сид сохранился в seed 


I.click({css: 'div.ant-collapse-item:nth-of-type(2)'});  
var adress = await I.grabTextFrom({css: 'div.padding-bottom.block-16:nth-of-type(1)'});    // адрес сохранился в adress
var public_key = await I.grabTextFrom({css: 'div.padding-bottom.block-16:nth-of-type(2)'});    // публичный ключ сохранился в public_key
 

I.click({css: 'div.ant-collapse-item:nth-of-type(3)'});
I.click({css: 'input#private_key.ant-input.seed_input.v-input'}); 
I.fillField('#private_key', 'wavparol'); 
I.pressKey('Enter');
var private_key = await I.grabTextFrom({css: 'div.v-explorer__settings-security__private'});  // приватный ключ сохранился в private_key
 



  }
);

