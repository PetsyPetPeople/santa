import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#EE4D52',
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#ffffff',
    },
    Collapse: {
      contentPadding: '0 16px',
    },
  },
};

export default theme;
