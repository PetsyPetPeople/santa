import { App } from 'antd';

export const useApp = () => {
  const { message, modal, notification } = App.useApp();

  return {
    message,
    modal,
    notification: { ...notification, placement: 'topRight' },
  };
};
