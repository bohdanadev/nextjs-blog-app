"use client";
import { useState, useEffect, FC, FormEvent, ChangeEvent } from "react";

import css from "./contact-form.module.css";
import Notification from "../ui/notification";
import { IContactData, INotification } from "@/types";

async function sendContactData(contactDetails: IContactData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

const ContactForm: FC = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<
    "pending" | "success" | "error" | null
  >(null);
  const [requestError, setRequestError] = useState<string | null>(null);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification: INotification | null = null;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError!,
    };
  }

  return (
    <section className={css.contact}>
      <h1>How can I help you?</h1>
      <form className={css.form} onSubmit={sendMessageHandler}>
        <div className={css.controls}>
          <div className={css.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEnteredEmail(event.target.value)
              }
            />
          </div>
          <div className={css.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEnteredName(event.target.value)
              }
            />
          </div>
        </div>
        <div className={css.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setEnteredMessage(event.target.value)
            }
          ></textarea>
        </div>

        <div className={css.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
