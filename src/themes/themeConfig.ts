import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#EE4D52',
    borderRadius: 10,
    colorText: '#353538',
    colorTextHeading: '#353538',
    fontWeightStrong: 300,
    fontSizeLG: 16,
    fontSizeHeading2: 32,
    fontSizeHeading3: 22,
    fontFamily: `'Inter' sans-serif`,
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#ffffff',
      headerPadding: '0 80px',
      footerPadding: '0 80px',
    },
    Collapse: {
      contentPadding: '0 16px',
    },
    Badge: {
      statusSize: 16,
      textFontSize: 14,
    },
    Menu: {
      itemPaddingInline: 22,
      horizontalItemSelectedColor: '#353538',
    },
    Table: {
      headerBg: '#ffffff',
      headerColor: '#9797AC',
      footerBg: '#ffffff',
      cellFontSize: 14,
      borderColor: '#F6F6FB',
      footerColor: '#9797AC',
    },
    Pagination: {
      itemActiveBg: 'black',
    },
  },
};

export default theme;
