import ReactDOM from "react-dom";

import css from "./notification.module.css";
import { FC } from "react";
import { INotification } from "@/types";

const Notification: FC<INotification> = ({
  status,
  message,
  title,
}: INotification) => {
  let statusCss = "";

  if (status === "success") {
    statusCss = css.success;
  }

  if (status === "error") {
    statusCss = css.error;
  }

  const cssClasses = `${css.notification} ${statusCss}`;

  const portalElement = document.getElementById("notifications");

  if (!portalElement) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    portalElement
  );
};

export default Notification;
