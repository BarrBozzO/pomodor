import tomatoIcon from '../assets/png/tomato.png';

export const requestNotifyPermission = () => {
    try {
      return Notification.requestPermission().then(function(result) {
        return result;
      });
    } catch(err) {
      console.warn('NotificationsAPI error: ' + err);
    }
};

export const getCurrentNotifyPermission = () => {
    // Possible values = default, granted, denied
    try {
      return Notification.permission;
    } catch {
      return 'denied';
    }
};

export const createNotify = (title, body)  => {
  try {
    if (getCurrentNotifyPermission() === 'granted') {
      var options = {
          body: body,
          icon: tomatoIcon
      };
      return new Notification(title, options);  
    }
  } catch(err) {
    console.warn('NotificationsAPI error: ' + err);
  }
}
