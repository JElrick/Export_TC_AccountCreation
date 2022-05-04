import { Selector } from 'testcafe';

var dmt = new Date();
var AccountName = "TestCafe" + dmt.getTime();
var p = "meowbrowncats1!"
var e = "RPlan.BSupport@rs-components.com"

var n = "Joel"
var s = "pot"
var m = "01234567891"


fixture `Account Creation - TR`

    .page `https://tr-uat.rsdelivers.com`

    .meta({author: 'James Elrick', creationDate: '10/02/2021'});

  test('Export', async t => {
    
    await t

    //.maximizeWindow()
    .wait(5000)
    //click account button
    .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.column.header-menu-component_icon-button__2n1dO.header-menu-component_account__1fdJM'))
    //click register
    .click(Selector('#accountLogin > div > div.loginColumnTwo > div > span > a'))
    
    //fill in info
    .typeText('#txtUserName',AccountName)
    .typeText('#txtPassword',p)
    .typeText('#txtPasswordConfirm',p)
    .typeText('#txtEmail',e)
    .typeText('#txtName',n)
    .typeText('#txtSurname',s)
    .typeText('#txtTelephone',m)
    
    .click(Selector('#cmbJobRoles'))
      .click(Selector('#cmbJobRoles > option:nth-child(11)'))

    //click Complete Reg
    .click(Selector('#pagecell > form > div > div:nth-child(1) > div.formFields > div.regButtonDiv > div > span > input'))
    //click confirm box
    .click(Selector('#chkReUseEmail'))
    //click complete reg again
    .click(Selector('#pagecell > form > div > div:nth-child(1) > div.formFields > div.regButtonDiv > div > span > input'))

    //.expect(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.column.header-menu-component_icon-button__2n1dO.header-menu-component_account__1fdJM > div.header-menu-component_info__2Ai5g > span').textContent).contains('Hi')
    .wait(2000)
    //click account button
    .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.column.header-menu-component_icon-button__2n1dO.header-menu-component_account__1fdJM'))

    //logout
    .wait(2000)
    //.click(Selector('#aLogout'))
});