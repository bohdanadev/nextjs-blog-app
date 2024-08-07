import { ObjectId } from "mongodb";

interface IPost {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
}

interface IPostData extends IPost {
  slug: string;
  content: string;
}

interface IContactData {
  email: string;
  name: string;
  message: string;
}

interface INotification {
  status: "pending" | "success" | "error" | null;
  title: string;
  message: string;
}

interface IMessage extends IContactData {
  id?: ObjectId;
}
