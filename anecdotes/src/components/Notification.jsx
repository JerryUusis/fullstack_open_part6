import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notification.message);
  const isVisible = useSelector((state) => state.notification.isVisible);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    display: isVisible ? "block" : "none",
  };

  return <div style={style}>{notification}</div>;
};

export default Notification;
