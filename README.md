# Next.js Project Setup and Basics

## Introduction

This repository contains a comprehensive Next.js project that demonstrates modern web development practices using the **Pages Router** architecture. The project, named **alx-project-0x02** (SoloForge), showcases essential Next.js concepts including routing, component creation, state management, and API integration.

## Purpose

The purpose of this repository is to:

- **Learn Next.js fundamentals** using the Pages Router
- **Master TypeScript** for type-safe React development
- **Utilize Tailwind CSS** for modern, responsive styling
- **Build reusable components** following best practices
- **Implement data fetching** with static generation (SSG)
- **Create dynamic user interfaces** with modals and forms

## Project Overview

This repository contains a fully functional Next.js application with the following features:

### ✨ Key Features

1. **Component-Based Architecture**

   - Reusable UI components (Button, Card, PostCard, UserCard)
   - Interactive components (PostModal)
   - Layout components (Header with navigation)

2. **TypeScript Integration**

   - Strict type checking enabled
   - Well-defined interfaces for all props
   - Type-safe API data handling

3. **Tailwind CSS Styling**

   - Utility-first CSS framework
   - Responsive design patterns
   - Custom component styling

4. **API Integration**

   - Static data fetching from JSONPlaceholder
   - Server-side rendering with `getStaticProps`
   - Incremental Static Regeneration (ISR)

5. **Routing & Navigation**
   - Pages Router implementation
   - Dynamic navigation with Next.js Link
   - Multiple page routes (home, about, posts, users)

## Project Structure

```
alx-project-0x02-setup/
└── alx-project-0x02/
    ├── components/
    │   ├── common/
    │   │   ├── Button.tsx          # Reusable button with size/shape props
    │   │   ├── Card.tsx            # Display card component
    │   │   ├── PostCard.tsx        # Post display component
    │   │   ├── PostModal.tsx       # Interactive modal form
    │   │   └── UserCard.tsx        # User information card
    │   └── layout/
    │       └── Header.tsx          # Navigation header
    ├── interfaces/
    │   └── index.ts                # TypeScript interfaces
    ├── src/
    │   ├── pages/
    │   │   ├── _app.tsx            # App wrapper
    │   │   ├── _document.tsx       # Document wrapper
    │   │   ├── index.tsx           # Landing page
    │   │   ├── home.tsx            # Home page
    │   │   ├── about.tsx           # About page
    │   │   ├── posts.tsx           # Posts listing
    │   │   ├── users.tsx           # Users listing
    │   │   └── api/
    │   │       └── hello.ts        # API route
    │   └── styles/
    │       └── globals.css         # Global styles
    ├── public/
    │   └── assets/
    │       └── images/             # Image assets
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    └── README.md
```

## Technologies Used

- **Next.js 16** - React framework with Pages Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library
- **JSONPlaceholder** - Fake REST API for testing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**

   ```bash
   cd alx-project-0x02
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Tasks Completed

### ✅ Task 0: GitHub Repository and Initial Setup

- Created GitHub repository `alx-project-0x02-setup`
- Initialized with README.md
- Added project introduction and purpose

### ✅ Task 1: Set Up Next.js Project

- Scaffolded Next.js with TypeScript, ESLint, and Tailwind CSS
- Created folder structure (components, interfaces, public/assets)
- Implemented welcome page at `pages/index.tsx`
- Verified application runs on port 3000

### ✅ Task 2: Basic Routing

- Created `pages/home.tsx` and `pages/about.tsx`
- Added navigation in `Header.tsx`
- Implemented routing between pages

### ✅ Task 3: Reusable Card Component

- Defined `CardProps` interface
- Created `Card.tsx` component
- Used Card component in home page with dynamic content

### ✅ Task 4: Modal Component

- Implemented `PostModal.tsx` with form
- Added state management for modal
- Displays submitted content on home page
- Includes open/close functionality

### ✅ Task 5: Button Component

- Defined `ButtonProps` interface with size and shape
- Created `Button.tsx` with dynamic styling
- Displayed 9 button variations on about page

### ✅ Task 6: Navigation and Layout

- Created `Header.tsx` with navigation links
- Implemented across all pages
- Added links to /home, /about, /posts, /users

### ✅ Task 7: PostCard Component

- Defined `PostProps` interface
- Created `PostCard.tsx` component
- Fetched data from JSONPlaceholder API
- Displayed posts on `/posts` page

### ✅ Task 8: UserCard Component

- Defined `UserProps` interface
- Created `UserCard.tsx` component
- Fetched user data from JSONPlaceholder API
- Displayed users on `/users` page

## Pages & Routes

- **`/`** - Landing page with welcome message and CTA
- **`/home`** - Home page with cards and post modal
- **`/about`** - About page with button variations
- **`/posts`** - Posts fetched from API
- **`/users`** - Users fetched from API

## Component Documentation

### Button Component

- **Props:** `size` (small | medium | large), `shape` (rounded-sm | rounded-md | rounded-full)
- **Usage:** Reusable button with customizable styling

### Card Component

- **Props:** `title` (string), `content` (string)
- **Usage:** Display information in a card layout

### PostCard Component

- **Props:** `title` (string), `content` (string), `userId` (number)
- **Usage:** Display post information with user badge

### UserCard Component

- **Props:** `name` (string), `email` (string), `address` (object)
- **Usage:** Display user information including address

### PostModal Component

- **Props:** `isOpen` (boolean), `onClose` (function), `onSubmit` (function)
- **Usage:** Interactive modal form for creating posts

## Learning Outcomes

By completing this project, you will learn:

- ✅ How to set up a Next.js project with TypeScript
- ✅ Implementing routing with the Pages Router
- ✅ Creating reusable React components
- ✅ Managing component state and props
- ✅ Styling with Tailwind CSS
- ✅ Fetching data from APIs
- ✅ TypeScript interfaces and type safety
- ✅ Component composition and best practices

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## Author

**ALX Software Engineering Program**

## License

This project is created for educational purposes as part of the ALX Software Engineering curriculum.

---

**Repository:** `alx-project-0x02-setup`  
**Project Directory:** `alx-project-0x02`  
**Last Updated:** November 23, 2025
