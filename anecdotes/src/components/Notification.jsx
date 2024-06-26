import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsVisible } from "../reducers/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification.message);
  const isVisible = useSelector((state) => state.notification.isVisible);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsVisible(false));
    }, 5000);
    return () => clearTimeout(timer);
  }, [isVisible, dispatch]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    display: isVisible ? "block" : "none",
  };

  return <div style={style}>{notification}</div>;
};

export default Notification;
