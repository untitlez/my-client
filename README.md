# 🖥️ My Client (Frontend)

This is a Next.js App Router + TypeScript project with custom form components and UI primitives.
It connects to the my-server backend to handle login, user management, subject management, and lesson plan CRUD, including image selection for lesson plans.

---

## ✨ Features

- ⚡ Next.js App Router (v15+) with TypeScript
- 🎨 UI Components & Primitives via shadcn/ui
- 📝 Form Handling with react-hook-form
- ✅ Form Validation using zod
- 🔒 User Authentication: login/logout, JWT stored in cookies
- 📚 Lesson Plan Management: create, edit, delete, list lesson plans
- 📖 Subject Management: full CRUD for subjects
- 🖼️ Image Selection: fetch images from my-server (Unsplash API)
- 💻 Responsive Design for desktop and mobile

---

## 🚀 Getting Started

1. Clone & install dependencies

```bash
git clone https://github.com/untitlez/my-client.git
cd my-client
npm install
```

2. Create .env

```env
NEXT_PUBLIC_API_URL=http://localhost:3000

NEXT_PUBLIC_ADMIN_USERNAME=admin@example.com
NEXT_PUBLIC_ADMIN_PASSWORD=adminpassword

NEXT_PUBLIC_MEMBER_USERNAME=member@example.com
NEXT_PUBLIC_MEMBER_PASSWORD=memberpassword
```

3. Run development server

```bash
npm run dev
```

4. Open in Browser

```bash
http://localhost:3000
```

## 📂 Project Structure

```plaintext
client/
├── app/
│   ├── (pages)/
│   │   ├── auth/
│   │   │   ├── sign-in/
│   │   │   │   └── page.tsx
│   │   │   └── sign-up/
│   │   │       └── page.tsx
│   │   ├── document/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── lesson-plan/
│   │   │   └── page.tsx
│   │   └── office/
│   │       ├── [id]/
│   │       │   └── page.tsx
│   │       ├── activities/
│   │       │   └── page.tsx
│   │       ├── assessment/
│   │       │   └── page.tsx
│   │       ├── class-level/
│   │       │   ├── primary/
│   │       │   │   └── page.tsx
│   │       │   └── secondary/
│   │       │       └── page.tsx
│   │       ├── objectives/
│   │       │   └── page.tsx
│   │       ├── subject/
│   │       │   ├── subject-list/
│   │       │   │   └── page.tsx
│   │       │   └── page.tsx
│   │       ├── unit-name/
│   │       │   └── page.tsx
│   │       ├── layout.tsx
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── auth/
│   │   ├── sign-in/
│   │   │   ├── app-signin.tsx
│   │   │   ├── signin-form.tsx
│   │   │   ├── signin-popup.tsx
│   │   │   └── signin-submit.tsx
│   │   └── sign-up/
│   │       ├── app-sign-up.tsx
│   │       ├── sign-up-form.tsx
│   │       └── sign-up-submit.tsx
│   ├── document/
│   │   └── document-pdf.tsx
│   ├── form/
│   │   ├── app-form.tsx
│   │   ├── form-detail.tsx
│   │   ├── form-search-select.tsx
│   │   ├── form-select.tsx
│   │   ├── form-submit.tsx
│   │   ├── form-text.tsx
│   │   ├── form-textarea.tsx
│   │   └── form-tools.tsx
│   ├── office/
│   │   ├── content/
│   │   │   ├── subject/
│   │   │   │   ├── subject-add.tsx
│   │   │   │   ├── subject-delete.tsx
│   │   │   │   └── subject-edit.tsx
│   │   │   ├── content-card.tsx
│   │   │   ├── content-delete.tsx
│   │   │   ├── content-info.tsx
│   │   │   ├── content-stat.tsx
│   │   │   └── content-table.tsx
│   │   ├── header/
│   │   │   ├── app-header.tsx
│   │   │   └── header-info.tsx
│   │   └── sidebar/
│   │       ├── app-sidebar.tsx
│   │       ├── sidebar-account.tsx
│   │       ├── sidebar-footer-menu.tsx
│   │       ├── sidebar-main-menu.tsx
│   │       ├── sidebar-sign-out.tsx
│   │       └── sidebar-sub-menu.tsx
│   ├── ui/
│   ├── home.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
│
├── hooks/
│   ├── use-auth-header.ts
│   └── use-mobile.ts
│
├── lib/
│   ├── config.ts
│   ├── constant-auth.ts
│   ├── constant-form.ts
│   ├── constant-path-name.ts
│   ├── constant-sidebar.ts
│   ├── cookies.ts
│   ├── fetch.ts
│   ├── routes.ts
│   └── utils.ts
│
├── validators/
│   ├── form.validator.ts
│   ├── subject.validator.ts
│   └── user.validator.ts
│
└── .env
```
