# DevBlog Solutions

A simple full-stack blog application where users can register, log in, create posts, view posts, and edit or delete their own posts.

## Features

- User registration and login
- JWT authentication
- Create blog posts
- View recent blog posts
- View individual posts
- Edit posts
- Delete posts
- Protected API routes
- Responsive UI with Tailwind CSS

## Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT

## Getting Started

### Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>`

### Install Dependencies

    npm install


### Environment Variables

Create a `.env` file for the frontend:

    VITE_API_URL=http://localhost:3000

Add the appropriate environment variables for the backend:

    MONGODB_URI=your-mongodb-connection-string
    JWT_SECRET=your-secret

Do not commit `.env` files to Git.

### Run the Application

Start the backend:

    npm run dev

Start the frontend:

    npm run dev

The frontend will be available at the local URL provided by Vite.


## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Log in a user |
| GET | `/posts` | Get all posts |
| GET | `/posts/:id` | Get a single post |
| POST | `/posts` | Create a post |
| PUT | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

## Authentication

The application uses JWT authentication.

After a successful login or registration, the JWT access token is stored in `localStorage` and included with protected API requests.

    Authorization: Bearer <token>

## License

This project is for educational and personal use.
