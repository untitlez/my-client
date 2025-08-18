# my-client

This is a **Next.js 15+ App Router** project with custom form components and UI primitives.  
It can fetch images from the `my-server` backend and handle form submission with validation.

---

## Getting Started

1. Clone & install dependencies
```bash
git clone https://github.com/untitlez/my-client.git
cd my-client
npm install
```

2. Create .env
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

3. Run development server
```bash
npm run dev
```

4. Open in Browser
```bash
http://localhost:3000
```

## Project Structure
```plaintext
my-client/
├── app/
│   ├── globals.css             # Global CSS
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── components/
│   ├── form/
│   │   ├── form-detail.tsx     
│   │   ├── form-select.tsx     
│   │   ├── form-submit.tsx     
│   │   ├── form-text.tsx       
│   │   └── form-textarea.tsx   
│   ├── ui/
│   │   ├── alert-dialog.tsx    
│   │   ├── button.tsx          
│   │   ├── card.tsx            
│   │   ├── dropdown-menu.tsx   
│   │   ├── form.tsx            
│   │   ├── input.tsx           
│   │   ├── label.tsx           
│   │   ├── select.tsx          
│   │   └── textarea.tsx        
│   ├── theme-provider.tsx      
│   └── theme-toggle.tsx        
├── libs/
│   ├── config.ts               
│   └── utils.ts                
├── public/
│   └── books.webp              
├── validators/
│   └── form.validator.ts       
└── .env
```

## Learn More
- Next.js Documentation
- React Hook Form
- Zod Validation

## Deploy on Vercel
- Push repo to GitHub
- Go to Vercel Dashboard → New Project → Connect my-client
- Add Environment Variables:
  - NEXT_PUBLIC_API_URL=https://your-render-app.onrender.com
- Vercel will auto-deploy on push to main branch
