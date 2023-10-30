import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#EE4D52',
  },
  components: {
    Layout: {
      bodyBg: '#F9F9FC',
    },
    Collapse: {
      contentPadding: '0 16px',
    },
  },
};

export default theme;
