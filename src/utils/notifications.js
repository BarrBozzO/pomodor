
export const requestNotifyPermission = (cb) => {
    try {
      return Notification.requestPermission().then(function(result) {
        return result;
      });
    } catch(err) {
      console.warn('NotificationsAPI error: ' + err);
    }
};

export const getNotifyPermission = () => {
    // Possible values = default, granted, denied
    try {
      return Notification.permission;
    } catch {
      return 'denied';
    }
};
