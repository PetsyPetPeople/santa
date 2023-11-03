import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#EE4D52',
    fontSize: 16,
    borderRadius: 30,
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
  },
};

export default theme;
