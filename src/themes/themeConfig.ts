import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#EE4D52',
    borderRadius: 10,
    colorText: '#2D2D31',
    colorTextHeading: '#2D2D31',
    fontWeightStrong: 400,
    fontSizeLG: 16,
    fontSizeHeading2: 32,
    fontSizeHeading3: 22,
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
      itemPaddingInline: 30,
    },
    Table: {
      headerBg: '#f9f9fc',
      headerColor: '#9494A3',
      footerBg: '#F9F9FC',
      cellFontSize: 14,
      borderColor: '#E8E7F3',
      footerColor: '#9494A3',
    },
    Pagination: {
      itemActiveBg: 'black',
    },
  },
};

export default theme;
