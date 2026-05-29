# Sport Blog

A full-stack sports blogging platform where users can read, write, and share articles about their favorite sports, teams, and events. The application provides a clean reading experience, user authentication, and an admin dashboard for content management.

## Features

- User registration and login with JWT authentication
- Create, edit, and delete blog posts with rich text editing
- Categorize posts by sport (e.g., football, basketball, tennis)
- Comment system with moderation
- Search and filter articles by category or author
- Responsive design optimized for mobile and desktop
- Admin panel for managing users and posts

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Image Uploads**: Cloudinary or local Multer storage
- **Deployment**: Vercel (frontend), Render/Railway (backend)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mhselfs/sport-blog.git
   cd sport-blog
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` directory with `MONGO_URI`, `JWT_SECRET`, and `CLOUDINARY_*` credentials.
   - Optionally set `NEXT_PUBLIC_API_URL` in the client `.env.local`.

4. Start the development servers:
   ```bash
   # Backend (from server/)
   npm run dev

   # Frontend (from client/)
   npm run dev
   ```

5. Open the app at `http://localhost:3000`.

## Coding and Development

The project follows a modular structure. The backend exposes RESTful API endpoints consumed by the Next.js frontend via Axios or fetch.

- **Backend structure**: `server/`
  - `models/` – Mongoose schemas for User, Post, Comment
  - `routes/` – Express route handlers for auth, posts, comments
  - `middleware/` – Auth middleware to protect routes
  - `controllers/` – Business logic separated from routes

- **Frontend structure**: `client/`
  - `pages/` – Next.js routes (home, post/[id], login, dashboard)
  - `components/` – Reusable UI components (Navbar, PostCard, Editor)
  - `hooks/` – Custom hooks for API calls and authentication state
  - `styles/` – Tailwind configuration and global CSS

- **Code quality**:
  - ESLint and Prettier are configured for consistent code style.
  - API requests include error handling and loading states.
  - Environment variables are validated before server start.

- **Database models**:
  - **User**: username, email, hashed password, role (admin/user)
  - **Post**: title, slug, content, category, cover image, author reference, timestamps
  - **Comment**: text, post reference, author reference, date

- **API endpoints (partial)**:
  - `POST /api/auth/register`, `POST /api/auth/login`
  - `GET /api/posts`, `GET /api/posts/:slug`
  - `POST /api/posts`, `PUT /api/posts/:id`, `DELETE /api/posts/:id`
  - `POST /api/posts/:postId/comments`

## Contributing

Contributions are welcome. Fork the repo, create a feature branch, and submit a pull request. Please follow the existing code style and include relevant tests where applicable.

## License

This project is licensed under the MIT License.
```