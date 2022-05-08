
const selectCustomor = {
    Name:'.author__title > strong',
    HiMessage:'.breadcrumb-content > .section-heading > .sec__title'
}

const leftNav = {
    dashboard:'.sidebar-menu > :nth-child(1) > .waves-effect', 
    myBooking:'.sidebar-menu > :nth-child(2) > .waves-effect',
    addFunds: '.sidebar-menu > :nth-child(3) > .waves-effect',
    myProfile:'.sidebar-menu > :nth-child(4) > .waves-effect',
    logout: '.sidebar-menu > :nth-child(5) > .waves-effect',
}

const selectorPageTitle = {
    dashboard:'.title', 
    myBooking:'.title',
    addFunds: '.d-block > .title',
    myProfile:'.form-title-wrap > .title',
}

const selectorInfoBoxTitle = {
    Wallet:'.user_wallet > .icon-box > .d-flex > .info-content > .info__desc', 
    Bookings:':nth-child(2) > .icon-box > .d-flex > .info-content > .info__desc',
    Invoices: ':nth-child(3) > .icon-box > .d-flex > .info-content > .info__desc',
    Reviews:':nth-child(4) > .icon-box > .d-flex > .info-content > .info__desc',
    Searshes:'.title'
};

export {selectCustomor, leftNav, selectorPageTitle, selectorInfoBoxTitle};