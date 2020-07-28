import tomatoIcon from "../assets/png/tomato.png";

export const requestNotifyPermission = (): object | void => {
  try {
    return Notification.requestPermission().then(function (result) {
      return result;
    });
  } catch (err) {
    console.warn("NotificationsAPI error: " + err);
  }
};

export const getCurrentNotifyPermission = ():
  | "default"
  | "denied"
  | "granted" => {
  try {
    return Notification.permission;
  } catch {
    return "denied";
  }
};

export const createNotify = (
  title: string,
  body: string
): Notification | void => {
  try {
    if (getCurrentNotifyPermission() === "granted") {
      var options = {
        body: body,
        icon: tomatoIcon,
      };
      return new Notification(title, options);
    }
  } catch (err) {
    console.warn("NotificationsAPI error: " + err);
  }
};
