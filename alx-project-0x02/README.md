# SoloForge - ALX Project 0x02

A modern Next.js application built with TypeScript, Tailwind CSS, and the Pages Router. This project demonstrates best practices for building scalable web applications with clean architecture and reusable components.

## 🚀 Project Overview

**SoloForge** is a demonstration application showcasing:

- Next.js Pages Router architecture
- TypeScript strict mode for type safety
- Tailwind CSS for responsive styling
- Component-based design patterns
- API data fetching from JSONPlaceholder

## 📁 Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx      (Props: size, shape)
│   │   ├── Card.tsx        (Props: title, content)
│   │   ├── PostCard.tsx    (Props: title, content, userId)
│   │   ├── PostModal.tsx   (Interactive form)
│   │   └── UserCard.tsx    (Props: name, email, address)
│   └── layout/
│       └── Header.tsx      (Navigation)
├── interfaces/
│   └── index.ts            (All interfaces: CardProps, ButtonProps, PostProps, UserProps)
├── src/
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx       (Landing page)
│   │   ├── home.tsx        (Home with cards and modal)
│   │   ├── about.tsx       (About with button variations)
│   │   ├── posts.tsx       (Fetches from JSONPlaceholder)
│   │   ├── users.tsx       (Fetches from JSONPlaceholder)
│   │   └── api/
│   │       └── hello.ts
│   └── styles/
│       └── globals.css
├── public/
│   └── assets/
│       └── images/
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🛠️ Technologies Used

- **Framework:** Next.js 16 (Pages Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Data Fetching:** getStaticProps (SSG)
- **API:** JSONPlaceholder

## 📦 Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Features

### Components

#### Common Components

- **Button:** Customizable button with size (small/medium/large) and shape (rounded-sm/rounded-md/rounded-full) props
- **Card:** Simple display card with title and content
- **PostCard:** Displays post information with user ID badge
- **UserCard:** Shows user details including address
- **PostModal:** Interactive modal form for creating posts

#### Layout Components

- **Header:** Navigation bar with links to all pages

### Pages

- **`/`** - Landing page with gradient background and call-to-action
- **`/home`** - Home page featuring Card components and PostModal
- **`/about`** - About page demonstrating all Button variations
- **`/posts`** - Displays posts fetched from JSONPlaceholder API
- **`/users`** - Displays users fetched from JSONPlaceholder API

## 🔧 Configuration

### TypeScript

The project uses TypeScript strict mode for enhanced type safety. Path aliases are configured for clean imports:

- `@/components/*` - Access components
- `@/interfaces/*` - Access type definitions
- `@/styles/*` - Access stylesheets

### Tailwind CSS

Tailwind is configured with custom utility classes for responsive design. All components use Tailwind for styling.

## 📝 API Integration

The application fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/):

- **Posts:** `https://jsonplaceholder.typicode.com/posts`
- **Users:** `https://jsonplaceholder.typicode.com/users`

Data is fetched at build time using `getStaticProps` for optimal performance with Incremental Static Regeneration (ISR).

## 🚢 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/alx-project-0x02)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Pages Router](https://nextjs.org/docs/pages)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 👤 Author

Built as part of the ALX Software Engineering Program

---

**Happy Coding! 🎉**
