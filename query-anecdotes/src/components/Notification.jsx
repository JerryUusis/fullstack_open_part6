import { useEffect } from "react";
import {
  useNotificationMessage,
  useNotificationDispatch,
} from "./NotificationContext";

const Notification = ({ type }) => {
  const message = useNotificationMessage();
  const dispatch = useNotificationDispatch();
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        dispatch({ type });
      }, 5000);
    }
  }, [dispatch, message]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  if (!message) return null;

  return <div style={style}>{message}</div>;
};

export default Notification;
