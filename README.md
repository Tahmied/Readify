# 📚 Book Store Platform

A modern, full-featured book store platform built with Next.js, featuring a beautiful UI, secure authentication, and comprehensive book management capabilities.

## ✨ Features

### 🔐 Authentication System
- **NextAuth Integration** - Secure authentication powered by NextAuth.js
- **Multiple Login Methods**:
  - Google OAuth authentication
  - Email and password credentials
- **User Registration** - Easy sign-up process for new users
- **Secure Sessions** - Protected routes and user data

### 📖 Book Management
- **Browse Books** - Beautiful landing page displaying all available books and site informations
- **My Books Dashboard** - Personal collection of published books
- **Add New Books** - Intuitive form to publish new books
- **Edit Books** - Update book information anytime
- **Book Details Page** - Comprehensive view including:
  - Book description
  - Reviews and ratings
  - Page count
  - Pricing information
  - "Read Now" button linking to the book

### 🎨 User Interface
- Modern, responsive design
- Clean and intuitive navigation
- Optimized for all devices

##  Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A database (PostgreSQL, MySQL, or MongoDB)
- Google OAuth credentials (for Google login)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tahmied/Readify.git
cd bookstore-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI ="your-database-url"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
AUTH_SECRET="your-secret-key"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
bookstore-platform/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── books/
│   │   ├── [id]/
│   │   └── my-books/
│   ├── api/
│   │   └── auth/
│   └── page.tsx
├── components/
│   ├── BookCard.tsx
│   ├── BookDetails.tsx
│   └── Navbar.tsx
├── lib/
│   ├── auth.ts
│   └── db.ts
├── public/
└── package.json
```

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Prisma](https://www.prisma.io/)** / **[MongoDB](https://www.mongodb.com/)** - Database ORM
- **React** - UI library

## 📄 Pages

### Public Pages
- `/` - Home page 
- `/book/[id]` - Individual book details page
- `/login` - User login page
- `/register` - New user registration
- `/books` - All Books

### Protected Pages (Requires Authentication)
- `/books/my-books` - User's published books
- `/books/add-book` - Add new book form
- `/books/edit-book/[id]` - Edit existing book

## 🔑 Key Functionalities

### Book Details Include:
- Title and author information
- Cover image
- Description
- Number of pages
- User ratings and reviews
- Price
- "Read Now" button with external link

### User Dashboard Features:
- View all personally published books
- Quick access to add new books
- Edit existing book entries

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Your Name
- GitHub: [@Tahmied](https://github.com/Tahmied)
- Email: contact@tahmied.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NextAuth.js for seamless authentication
- The open-source community

## 📧 Support

For support, email contact@tahmied.com or open an issue in the repository.
