# Task Management Website

A modern task management web application built with **Next.js** and **MongoDB**. The app allows users to sign up, manage tasks, and store data using MongoDB. It is deployed on **Vercel**.

## Features

- **Task Management**: Create, update, and delete tasks.
- **MongoDB Integration**: Store tasks and user data securely using MongoDB Atlas.
- **Responsive UI**: Fully responsive for all devices.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: MongoDB (MongoDB Atlas)
- **Hosting**: Vercel

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** for package management
- **MongoDB Atlas account** (for database)
- **Vercel account** (for deployment)

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Md-Huzaifa-Islam/Task-Management.git
cd Task-Management
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install
```

### 3. Set Up MongoDB Atlas

- Create a MongoDB Atlas account and cluster by following the official documentation: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- After setting up your cluster, navigate to the cluster's **Connection** tab and select **Connect your application**.
- Copy the connection string provided and replace `<password>` with your MongoDB user password.
- Add the connection string in the `.env` file (next step).

### 4. Create the .env File

Create a .env file in the root of the project and add the following environment variables:

```bash
MONGODB_URI=your-mongodb-connection-string

```

- Replace your-mongodb-connection-string with the connection string from MongoDB Atlas.

### 5. Run Locally

To run the application locally, use the following command:

```bash
npm run dev
```

The app will be available at http://localhost:3000.

### 6. Deploy to Vercel

- Push your code to GitHub.
- Create an account on [Vercel](https://vercel.com) if you don’t have one.
- Connect your repository to Vercel via the Vercel dashboard.
- During the deployment process, add the MongoDB URI as environment variables on Vercel:
  - Go to your Vercel project settings.
  - Under the **Environment Variables** section, add the `MONGODB_URI` environment variables with the appropriate values.
- After the deployment is successful, Vercel will provide you with a URL where your app is hosted.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
