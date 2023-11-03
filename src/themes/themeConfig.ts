import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#EE4D52',
    fontSize: 16,
    borderRadius: 10,
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
      cellFontSize: 14,
      borderColor: '#E8E7F3',
    },
  },
};

export default theme;
