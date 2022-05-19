import { Selector } from 'testcafe';

var dmt = new Date();
var AccountName = "TestCafe" + dmt.getTime();
var p = "meowbrowncats1!"
var e = "RPlan.BSupport@rs-components.com"

var n = "Joel"
var s = "pot"
var m = "01234567891"


fixture `Account Creation - Export`

    .page `https://export-uat.rsdelivers.com`

    .meta({author: 'James Elrick', creationDate: '10/02/2021'});

  test('Export', async t => {
    
    await t

    //.maximizeWindow()
    .wait(5000)
    //click account button
    .click(Selector('#root > div > header > div.card-component-module_card-component__1NA2E.page-content.header-menu-component_header-card__3KF4p.card-component-module_padding__51wm7.card-component-module_white__2avgM > div > div.header-menu-component_nav-bar__1Ur-s.row > div > div.column.header-menu-component_icon-button__2n1dO.header-menu-component_account__1fdJM'))
    //click register
    .click(Selector('#root > div > div.sign-in-modal-component_sign-in-modal-container-wrapper__UahxF > div > div.modal-component-module_modal__2tFYw.modal-component-module_normal__lvnkl.modal-component-module_small__2Vhae.modal-component-module_slidedown__tzmxM.sign-in-modal-component_sign-in-modal-container__2ScDv > div.scrollbar-container.default.show-scroll.modal-component-module_scroll-container-no-footer__u-Zdb.ps > div.sign-in-modal-component_modal-content__2PFbR > div.sign-in-modal-component_register__1Xj7y > a'))
    //.click(Selector('#accountLogin > div > div.loginColumnTwo > div > span > a'))
    
    //fill in info
    .typeText('#txtUserName',AccountName)
    .typeText('#txtPassword',p)
    .typeText('#txtPasswordConfirm',p)
    .typeText('#txtEmail',e)
    .typeText('#txtName',n)
    .typeText('#txtSurname',s)
    .typeText('#txtTelephone',m)

    //.click(Selector('#ddlCountry'))
    //  .click(Selector('#ddlCountry > option:nth-child(186)'))
    
    .click(Selector('#ddlCountry'))
      //.click(Selector('#btnPopupConfirm'))
        //.click(Selector('#ddlState'))
          .click(Selector('#ddlCountry > option:nth-child(12)'))

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