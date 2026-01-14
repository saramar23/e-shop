# 🛒 E-Commerce Application — Product Requirements Document (PRD)

## 1. Project Overview

### Summary
An **intermediate-level, mobile-first e-commerce application** built with **React**, **TypeScript**, and **Tailwind CSS**.  
The project focuses on delivering a seamless shopping experience with high performance, strong type safety, and a modern UI.

### Primary Goal
Build a **fully functional shopping cart and checkout flow**.

### Target Audience
Mobile-first shoppers looking for a clean, fast, and intuitive interface.

### Key Success Metrics
- **Lighthouse Performance score > 90**
- **Lighthouse Accessibility score > 90**
- Smooth mobile UX with no layout shifts
- Zero TypeScript errors in strict mode

---

## 2. Technical Stack

| Category | Technology |
|-------|-----------|
| Framework | React 18+ (Vite) |
| Language | TypeScript (Strict Mode enabled) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State Management | Context API (Cart) + React Hooks |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |

---

## 3. Design System & Guidelines

### 🎨 Color Palette

| Role | Color | Hex | Usage |
|----|----|----|----|
| Primary | Indigo-600 | `#4F46E5` | Main buttons, links, active states |
| Secondary | Slate-900 | `#0F172A` | Headings, navigation, dark text |
| Accent | Amber-500 | `#F59E0B` | Ratings, sale badges, alerts |
| Background | Slate-50 | `#F8FAFC` | App background |
| Surface | White | `#FFFFFF` | Cards, modals |
| Error | Red-500 | `#EF4444` | Validation errors, destructive actions |

---

### 🅰️ Typography (Inter)

- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

| Type | Size |
|----|----|
| H1 | 30px / 1.875rem (Bold) |
| H2 | 24px / 1.5rem (Semibold) |
| Body | 16px / 1rem (Regular) |
| Small / Caption | 14px / 0.875rem (Medium) |

---

### 📐 Layout Rules

- **Touch Targets**: Minimum `44 × 44px`
- **Grid Layout**
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3–4 columns
- **Image Aspect Ratios**
  - `1:1` (square) or `4:5`
  - Prevent layout shifts at all breakpoints

---

## 4. Implementation Roadmap

### Phase 1 — Planning & Foundation (Week 1)

**Goal:** Establish project structure and reusable UI components.

| Day | Task |
|--|--|
| Day 1 | Initialize Vite + TypeScript, setup Tailwind & Prettier, create folder structure |
| Day 2 | Build UI kit: Button, Input, Badge, Spinner |
| Day 3 | Implement `MainLayout` with sticky mobile Navbar & Footer |
| Day 4 | Create `src/types/` and configure API layer (FakeStore API via Fetch/Axios) |
| Day 5 | Build Home View with Product Grid & ProductCard |

---

### Phase 2 — Core Functionality (Week 2)

**Goal:** Implement shopping logic and state management.

| Day | Task |
|--|--|
| Day 6 | Product details route `/product/:id` with image gallery |
| Day 7 | Create `CartContext` for global cart state |
| Day 8 | Implement mobile-first Cart Drawer (slide-out panel) |
| Day 9 | Search + category filters (horizontal scroll on mobile) |
| Day 10 | Empty cart states + `localStorage` persistence |

---

### Phase 3 — Checkout & Polish (Week 3)

**Goal:** Improve conversion, accessibility, and QA.

| Day | Task |
|--|--|
| Day 11 | Shipping form using React Hook Form + Zod |
| Day 12 | Order summary with dynamic total calculation |
| Day 13 | Accessibility improvements (ARIA, focus states, keyboard nav) |
| Day 14 | Cross-browser QA (Chrome, Safari Mobile, Firefox) |
| Day 15 | Production deployment (Vercel or Netlify) |

---

## 5. Specific Implementation Instructions

### 🛠 Technical Nuances

- **Image Optimization**
  - Use `object-cover`
  - Add `loading="lazy"` to all product images
- **Error Boundaries**
  - Wrap the root app with an `ErrorBoundary`
  - Display friendly fallback UI on runtime errors
- **Empty States**
  - Never show blank screens
  - Examples:
    - “No products found”
    - “Your cart is empty”
  - Always include a **"Shop Now"** CTA
- **Z-Index Scale**
  - Dropdown: `10`
  - Sticky elements: `20`
  - Modals / Drawers: `30`
  - Toasts / Notifications: `40`

---

### 📦 State Persistence

- Cart state **must persist across page refresh**
- Use `useEffect` inside `CartContext` to sync with `localStorage`
- Initialize state from `localStorage` on first render

---

### ⚡ Performance Guidelines

- Use `useMemo` for:
  - Cart subtotal
  - Total price calculations
- Use `useCallback` for:
  - `addToCart`
  - `removeFromCart`
  - `updateQuantity`
- Avoid unnecessary re-renders in ProductCard and CartItem components

---

## 6. Definition of Done (DoD)

The project is considered **complete** when:

- ✅ ESLint passes with no errors
- ✅ TypeScript compiles with **zero errors**
- ✅ Mobile navigation and Cart Drawer work on touch devices
- ✅ Checkout form blocks submission when invalid
- ✅ Responsive design verified from **320px → 1440px**
- ✅ Lighthouse scores exceed **90** for Performance and Accessibility

---

## 7. Out of Scope (Optional)

- Payments (Stripe, PayPal)
- Authentication / user accounts
- Order history persistence
- Admin dashboard

---

## 8. Future Enhancements

- Wishlist functionality
- Skeleton loaders
- Product reviews
- Dark mode toggle
- Server-side rendering (Next.js migration)

---

## 9. Technical Instructions & NuancesImage Handling
- All product images must use object-cover and a fixed aspect ratio ($1:1$) to prevent cumulative layout shift.
- Form Validation: No "Submit" allowed until Zod schema validation passes.
- State: Cart logic must be handled in a custom hook useCart() for clean component separation.

## Useful Info 🔗 Fake Store API (Recommended)

Base URL:

https://fakestoreapi.com

Core Endpoints To Use
- All products:	          /products
- Single product:	      /products/{id}
- Categories:             /products/categories
- Products by category:	  /products/category/{category}