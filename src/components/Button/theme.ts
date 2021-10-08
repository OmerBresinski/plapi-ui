import * as C from 'constant';

export const DIMENSIONS = {
  [C.SIZE.xs]: {
    paddingBlock: 1,
    paddingInline: 8,
    fontSize: 12,
    iconMarginInline: 4,
    iconMarginBottom: 0,
    lineHeight: 16,
  },
  [C.SIZE.small]: {
    paddingBlock: 1,
    paddingInline: 12,
    fontSize: 14,
    iconMarginInline: 8,
    iconMarginBottom: 0,
    lineHeight: 20,
  },
  [C.SIZE.medium]: {
    paddingBlock: 3,
    paddingInline: 12,
    fontSize: 15,
    iconMarginInline: 8,
    iconMarginBottom: 0,
    lineHeight: 20,
  },
  [C.SIZE.large]: {
    paddingBlock: 3,
    paddingInline: 16,
    fontSize: 16,
    iconMarginInline: 8,
    iconMarginBottom: 0,
    lineHeight: 24,
  },
  [C.SIZE.xl]: {
    paddingBlock: 7,
    paddingInline: 16,
    fontSize: 18,
    iconMarginInline: 8,
    iconMarginBottom: 0,
    lineHeight: 24,
  },
  [C.SIZE.xxl]: {
    paddingBlock: 11,
    paddingInline: 20,
    fontSize: 20,
    iconMarginInline: 8,
    iconMarginBottom: 0,
    lineHeight: 24,
  },
};

export const THEME = {
  contained: {
    primary: {
      default: {
        color: `#fff`,
        backgroundColor: '#37C998',
        border: '1px solid #37C998',
        opacity: 1,
      },
      hover: {
        color: `#fff`,
        backgroundColor: '#2CA076',
        border: '1px solid #2CA076',
        opacity: 1,
      },
      active: {
        color: `#fff`,
        backgroundColor: '#217859',
        border: '1px solid #217859',
        opacity: 1,
      },
      disabled: {
        color: `#fff`,
        backgroundColor: '#87DEBF',
        border: '1px solid #87DEBF',
        opacity: 1,
      },
    },
    secondary: {
      default: {
        color: '#fff',
        backgroundColor: '#a6a8ab',
        border: '1px solid #a6a8ab',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#808184',
        border: '1px solid #808184',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#66676b',
        border: '1px solid #66676b',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#dbdcdd',
        border: '1px solid #dbdcdd',
        opacity: 1,
      },
    },
    danger: {
      default: {
        color: '#fff',
        backgroundColor: '#F14949',
        border: '1px solid #F14949',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#c03a3a',
        border: '1px solid #c03a3a',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#992e2e',
        border: '1px solid #992e2e',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#992e2e',
        border: '1px solid #992e2e',
        opacity: 1,
      },
    },
    invert: {
      default: {
        color: '#231f20',
        backgroundColor: '#f3f3f3',
        border: '1px solid #f3f3f3',
        opacity: 1,
      },
      hover: {
        color: '#231f20',
        backgroundColor: '#f9f9f9',
        border: '1px solid #f9f9f9',
        opacity: 1,
      },
      active: {
        color: '#231f20',
        backgroundColor: '#f9f9f9',
        border: '1px solid #f9f9f9',
        opacity: 1,
      },
      disabled: {
        color: '#231f20',
        backgroundColor: '#616670',
        border: '1px solid #616670',
        opacity: 1,
      },
    },
    light: {
      default: {
        color: '#231f20',
        backgroundColor: '#f3f3f3',
        border: '1px solid #f3f3f3',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#808184',
        border: '1px solid #808184',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#dbdcdd',
        border: '1px solid #dbdcdd',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#dbdcdd',
        border: '1px solid #dbdcdd',
        opacity: 1,
      },
    },
    white: {
      default: {
        color: '#231f20',
        backgroundColor: '#fff',
        border: '1px solid #fff',
        opacity: 1,
      },
      hover: {
        color: '#231f20',
        backgroundColor: '#e6e7e8',
        border: '1px solid #e6e7e8',
        opacity: 1,
      },
      active: {
        color: '#231f20',
        backgroundColor: '#e6e7e8',
        border: '1px solid #e6e7e8',
        opacity: 1,
      },
      disabled: {
        color: '#231f20',
        backgroundColor: '#e6e7e8',
        border: '1px solid #e6e7e8',
        opacity: 1,
      },
    },
    blue: {
      default: {
        color: '#fff',
        backgroundColor: '#447AEF',
        border: '1px solid #447AEF',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#3462C6',
        border: '1px solid #3462C6',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#274B99',
        border: '1px solid #274B99',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#447AEF',
        border: '1px solid #447AEF',
        opacity: 0.3,
      },
    },
    orange: {
      default: {
        color: '#fff',
        backgroundColor: '#FF977A',
        border: '1px solid #FF977A',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#E8928A',
        border: '1px solid #E8928A',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#C95C58',
        border: '1px solid #C95C58',
        opacity: 0.8,
      },
    },
  },
  outlined: {
    primary: {
      default: {
        color: `#fff`,
        backgroundColor: '#37C998',
        border: '1px solid #37C998',
        opacity: 1,
      },
      hover: {
        color: `#fff`,
        backgroundColor: '#2CA076',
        border: '1px solid #2CA076',
        opacity: 1,
      },
      active: {
        color: `#fff`,
        backgroundColor: '#217859',
        border: '1px solid #217859',
        opacity: 1,
      },
      disabled: {
        color: `#fff`,
        backgroundColor: '#87DEBF',
        border: '1px solid #87DEBF',
        opacity: 1,
      },
    },
    secondary: {
      default: {
        color: '#fff',
        backgroundColor: '#a6a8ab',
        border: '1px solid #a6a8ab',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#808184',
        border: '1px solid #808184',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#66676b',
        border: '1px solid #66676b',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#dbdcdd',
        border: '1px solid #dbdcdd',
        opacity: 1,
      },
    },
    danger: {
      default: {
        color: '#fff',
        backgroundColor: '#F14949',
        border: '1px solid #F14949',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#c03a3a',
        border: '1px solid #c03a3a',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#992e2e',
        border: '1px solid #992e2e',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#992e2e',
        border: '1px solid #992e2e',
        opacity: 1,
      },
    },
    invert: {
      default: {
        color: '#231f20',
        backgroundColor: '#f3f3f3',
        border: '1px solid #f3f3f3',
        opacity: 1,
      },
      hover: {
        color: '#231f20',
        backgroundColor: '#f9f9f9',
        border: '1px solid #f9f9f9',
        opacity: 1,
      },
      active: {
        color: '#231f20',
        backgroundColor: '#f9f9f9',
        border: '1px solid #f9f9f9',
        opacity: 1,
      },
      disabled: {
        color: '#231f20',
        backgroundColor: '#616670',
        border: '1px solid #616670',
        opacity: 1,
      },
    },
    light: {
      default: {
        color: '#231f20',
        backgroundColor: '#f3f3f3',
        border: '1px solid #f3f3f3',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#808184',
        border: '1px solid #808184',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#dbdcdd',
        border: '1px solid #dbdcdd',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#dbdcdd',
        border: '1px solid #dbdcdd',
        opacity: 1,
      },
    },
    white: {
      default: {
        color: '#231f20',
        backgroundColor: '#fff',
        border: '1px solid #fff',
        opacity: 1,
      },
      hover: {
        color: '#231f20',
        backgroundColor: '#e6e7e8',
        border: '1px solid #e6e7e8',
        opacity: 1,
      },
      active: {
        color: '#231f20',
        backgroundColor: '#e6e7e8',
        border: '1px solid #e6e7e8',
        opacity: 1,
      },
      disabled: {
        color: '#231f20',
        backgroundColor: '#e6e7e8',
        border: '1px solid #e6e7e8',
        opacity: 1,
      },
    },
    blue: {
      default: {
        color: '#fff',
        backgroundColor: '#447AEF',
        border: '1px solid #447AEF',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#3462C6',
        border: '1px solid #3462C6',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#274B99',
        border: '1px solid #274B99',
        opacity: 1,
      },
      disabled: {
        color: '#fff',
        backgroundColor: '#447AEF',
        border: '1px solid #447AEF',
        opacity: 0.3,
      },
    },
    orange: {
      default: {
        color: '#fff',
        backgroundColor: '#FF977A',
        border: '1px solid #FF977A',
        opacity: 1,
      },
      hover: {
        color: '#fff',
        backgroundColor: '#E8928A',
        border: '1px solid #E8928A',
        opacity: 1,
      },
      active: {
        color: '#fff',
        backgroundColor: '#C95C58',
        border: '1px solid #C95C58',
        opacity: 0.8,
      },
    },
  },
};
