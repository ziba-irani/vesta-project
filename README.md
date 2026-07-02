# 🛍️ Vesta — Fashion Store

> A modern clothing e-commerce web app built with React, Redux, and TypeScript.

---

## ✨ Features

- **Product Catalogue** — Browse a full clothing collection fetched from an external API
- **Customer Reviews** — Real reviews fetched from a dedicated reviews service
- **Filter Products** — Narrow down items by category
- **Search by Name** — Instantly find products as you type
- **Product Detail Page** — View full details and images for each item
- **Shopping Bag** — Add items with a toast notification on each addition
- **Bag Counter** — Live item count badge shown in the navbar
- **Persistent Bag** — Cart items survive page refresh via localStorage + Redux
- **Custom Navigation Hook** — Shared `useNavigate` wrapper used across the app

---

## 🗂️ Project Structure

```
src/
├── assets/               # Images and static files
├── components/           # Reusable UI components
│   ├── Navbar/
│   ├── ProductCard/
│   ├── ShoppingBag/
│   └── Reviews/
├── customeComponents/    # Custom shared components (e.g. custome-card)
├── hooks/                # Custom React hooks
│   └── useAppNavigate.ts # Custom navigation hook
├── pages/
│   ├── Home/
│   ├── Shop/
│   └── ProductDetail/
├── redux/
│   ├── store.ts
│   └── slices/
│       └── bagSlice.ts   # Shopping bag state + localStorage sync
├── services/
│   ├── productsApi.ts    # Fetches clothing products
│   └── reviewsApi.ts     # Fetches customer reviews
└── utils/
    └── index.ts          # Shared types (CardModel, etc.)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
git clone https://github.com/ziba-irani/vesta-project
cd vesta
npm install
```

### Run Locally

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

---

## 🔌 API Services

Vesta fetches data from two external services:

| Service | Description |
|---|---|
| `productsApi` | Returns the clothing catalogue (title, price, image, category…) |
| `reviewsApi` | Returns customer reviews displayed on the home page |

Configure base URLs in your `.env` file:


---

## 🛒 Shopping Bag

- Items are managed in **Redux** via `bagSlice`
- On every change, the bag is saved to **localStorage** and restored on app load
- A **toast notification** fires whenever a product is added
- The navbar displays a **live badge** with the current item count

---

## 🧩 Tech Stack

| Layer | Library |
|---|---|
| Framework | React 18 + TypeScript |
| Styling | Tailwind CSS |
| UI Components | Ant Design |
| State Management | Redux Toolkit |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Icons | React Icons (Feather) |
| Persistence | localStorage |

---

## 📦 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## 📄 License

MIT © Vesta
