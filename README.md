# NEXTJS-BLOG-APP

## Overview

**NEXTJS-BLOG-APP** is a web application built with **Next.js 14**, **MongoDB**, and **TypeScript**. The app allows the blog author to add posts to the blog, with the content being rendered from markdown files. Users can view all posts, read each post in detail, and contact the author through a contact form. The contact messages are stored in a MongoDB database. Additionally, the application uses React portals to manage notifications about the state of the messages sent through the contact form.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Endpoints](#endpoints)

## Technologies Used

- **Next.js 14**: A React framework that enables functionalities such as server-side rendering, static site generation, and more.
- **MongoDB**: A NoSQL database used to store contact messages sent by users.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **React Portals**: A feature of React that allows rendering a component's children into a DOM node that exists outside the DOM hierarchy of the parent component.

## Features

- **Post Management**: The blog author can add posts using markdown files as the data source.
- **Post Viewing**: Users can view all posts and read individual posts in detail.
- **Contact Form**: Users can contact the blog author through a form, with the data being saved in MongoDB.
- **Notifications**: React portals are used to display notifications about the state of messages sent through the contact form.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/bohdanadev/nextjs-blog-app.git
   cd nextjs-blog-app
   ```

2. **Install Dependencies**:

   ```bash
   npm ci
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```
   MONGO_URL=your-mongodb-connection-string
   ```

4. **Run the App**:

   ```bash
   npm run start
   ```

5. **Access the Application**:
   Open your browser and go to `http://localhost:3000`.

## Usage

- **Adding Posts**: Posts are added by the blog author as markdown files.
- **Viewing Posts**: Users can view all posts on the main page (`/posts`) and read individual posts by clicking on them.
- **Contacting the Author**: Users can use the contact form on `/contact` to send a message to the author. Notifications will appear indicating whether the message was sent successfully or if there was an error.

## Endpoints

- `http://localhost:3000/posts`: Displays all blog posts.
- `http://localhost:3000/posts/[id]`: Displays the details of a specific post.
- `http://localhost:3000/contact`: A contact form for users to send messages to the author.
