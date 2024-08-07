import ReactDOM from "react-dom";

import css from "./notification.module.css";
import { FC } from "react";

interface IProps {
  status: "pending" | "success" | "error" | null;
  message: string;
  title: string;
}

const Notification: FC<IProps> = ({ status, message, title }) => {
  let statusCss = "";

  if (status === "success") {
    statusCss = css.success;
  }

  if (status === "error") {
    statusCss = css.error;
  }

  const cssClasses = `${css.notification} ${statusCss}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
};

export default Notification;
