# Nuxt 4 Migration Plan

## Overview
This document outlines the migration strategy from the current React + Vite application to Nuxt 4.

---

## Current Tech Stack (React)

### Core Dependencies
- **React 18.2.0** - UI library
- **React Router DOM 6.22.3** - Client-side routing
- **Vite 5.2.7** - Build tool
- **TypeScript 5.4.3** - Type safety

### UI & Styling
- **Tailwind CSS 3.4.3** - Utility-first CSS
- **class-variance-authority** - Component variants
- **clsx** - Conditional classnames
- **tailwind-merge** - Merge Tailwind classes
- **tailwindcss-animate** - Animation utilities

### Animation Libraries
- **motion 12.5.0** (Framer Motion) - Component animations
- **GSAP 3.12.7** - Advanced animations

### UI Components
- **Radix UI** (@radix-ui/react-slot) - Unstyled components
- **Lucide React** - Icon library
- **React Icons** - Additional icons

---

## Nuxt 4 Equivalent Stack

### Core Framework
- **Nuxt 4** - Vue.js meta-framework (replaces React + Vite + React Router)
  - Built-in routing (file-based)
  - Built-in SSR/SSG support
  - Auto-imports for components and composables
  - Built-in TypeScript support

### UI & Styling
- **Tailwind CSS Module** (`@nuxtjs/tailwindcss`) - Same as React
- **nuxt-icon** or **@nuxt/icon** - Icon library (replaces Lucide/React Icons)
- **tailwindcss-animate** - Keep the same
- **clsx** / **tailwind-merge** - Keep the same (works with Vue)

### Animation Libraries
- **@vueuse/motion** - Vue equivalent of Framer Motion
- **GSAP** - Keep the same (framework-agnostic)
- Alternative: **@formkit/auto-animate** - Auto-animations for Vue

### UI Components
- **Radix Vue** - Vue port of Radix UI
- **shadcn-vue** - Vue version of shadcn/ui components
- Alternative: **Nuxt UI** - Complete component library for Nuxt

### State Management
- **Pinia** (built-in with Nuxt) - Replaces React Context
- **useState** (Nuxt composable) - For simple reactive state

### VueUse
- **@vueuse/core** - Collection of Vue composition utilities
  - `useWindowSize` - Replaces window resize listeners
  - `useScroll` - Replaces scroll listeners
  - `useMediaQuery` - Responsive breakpoints

---

## Nuxt 4 Project Structure

```
personal-portfolio/
├── .nuxt/                    # Auto-generated (gitignored)
├── .output/                  # Build output
├── public/                   # Static assets
│   ├── icon.svg
│   └── images/
│       ├── 404.jpg
│       ├── about.jpg
│       ├── desktop-bg.webp
│       ├── mobile-bg.webp
│       └── portfolio/        # Portfolio cover images
├── assets/                   # Assets that need processing
│   └── css/
│       └── main.css         # Global styles (Tailwind imports)
├── components/              # Auto-imported components
│   ├── about/
│   │   ├── InfoArrows.vue
│   │   └── SkillCard.vue
│   ├── portfolio/
│   │   ├── Github.vue
│   │   └── ProjectCard.vue
│   ├── resume/
│   │   ├── ColumnItems.vue
│   │   └── ResumeItem.vue
│   ├── services/
│   │   └── ServiceCard.vue
│   └── ui/
│       ├── Button.vue
│       ├── Divider.vue
│       ├── MenuButton.vue
│       ├── Navbar.vue
│       ├── PageContainer.vue
│       ├── SectionContainer.vue
│       ├── SectionTitles.vue
│       └── SocialButton.vue
├── composables/             # Auto-imported composables
│   ├── useGlobal.ts        # Replaces GlobalContext
│   └── useRevealOnScroll.ts # Scroll animations
├── layouts/                 # Layout components
│   └── default.vue         # Main layout with navbar
├── pages/                   # File-based routing
│   ├── index.vue           # Home page (/)
│   ├── about.vue           # About page (/about)
│   ├── portfolio.vue       # Portfolio page (/portfolio)
│   ├── resume.vue          # Resume page (/resume)
│   ├── services.vue        # Services page (/services)
│   └── [...slug].vue       # 404 page
├── plugins/                 # Plugins
│   └── gsap.client.ts      # GSAP setup
├── utils/                   # Utility functions
│   ├── cn.ts               # Class name merger (clsx + tailwind-merge)
│   └── navbar-buttons.ts   # Navigation config
├── types/                   # TypeScript types
│   └── index.ts
├── app.vue                  # Root component
├── nuxt.config.ts          # Nuxt configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## Component Mapping: React → Vue

### React Patterns → Vue Equivalents

| React Pattern | Vue Equivalent |
|--------------|----------------|
| `useState()` | `ref()`, `reactive()` |
| `useEffect()` | `onMounted()`, `watch()`, `watchEffect()` |
| `useContext()` | `provide()/inject()` or composables |
| `useRef()` | `ref()` with template refs |
| `React.Fragment` | `<template>` or `<>` |
| `className` | `class` |
| `dangerouslySetInnerHTML` | `v-html` |
| `{condition && <Component />}` | `v-if="condition"` |
| `{array.map()}` | `v-for` |
| Props spreading | `v-bind="props"` |

### Animation Library Migration

**React (Framer Motion)**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2, delay: 0.2 }}
>
  Content
</motion.div>
```

**Vue (@vueuse/motion)**
```vue
<div
  v-motion
  :initial="{ opacity: 0, y: 20 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 200, delay: 200 } }"
>
  Content
</div>
```

---

## File-by-File Migration Guide

### 1. **Root Application**

**React:** `ts-client/src/main.tsx` + `ts-client/src/App.tsx`
```tsx
// main.tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>
);
```

**Nuxt:** `app.vue`
```vue
<template>
  <div>
    <FirstLoading v-if="!isLoaded" @complete="handleLoadComplete" />
    <div
      v-else
      class="bg-image min-h-screen transition-opacity duration-700 bg-zinc-900 text-zinc-200"
      :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
    >
      <NuxtPage />
      <ScrollProgress />
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoaded = ref(false)
const { setLoading } = useGlobal()

const handleLoadComplete = () => {
  isLoaded.value = true
  setLoading(false)
}
</script>
```

### 2. **Global State (Context → Composable)**

**React:** `ts-client/src/contexts/Global.tsx`
```tsx
export const GlobalContext = createContext<GlobalContextProps>(null!);
export default function GlobalProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  // ...
}
```

**Nuxt:** `composables/useGlobal.ts`
```ts
export const useGlobal = () => {
  const loading = useState('loading', () => true)
  const isMobile = useState('isMobile', () => false)

  const { width } = useWindowSize()

  watchEffect(() => {
    isMobile.value = width.value < 1024
  })

  return {
    loading,
    setLoading: (value: boolean) => loading.value = value,
    isMobile,
    setIsMobile: (value: boolean) => isMobile.value = value
  }
}
```

### 3. **Pages**

**React:** `ts-client/src/pages/home/page.tsx`
```tsx
export default function Home() {
  const { loading } = useContext(GlobalContext);
  if (loading) return <Loading />;
  return <PageContainer>...</PageContainer>;
}
```

**Nuxt:** `pages/index.vue`
```vue
<template>
  <PageContainer nav-mobile-only nav-transparent-when-top class="flex items-center">
    <Loading v-if="loading" />
    <main v-else class="flex w-full items-center p-3 pt-20 lg:pt-3">
      <!-- Content -->
    </main>
  </PageContainer>
</template>

<script setup lang="ts">
import { content } from '~/utils/content/home'

const { loading } = useGlobal()
</script>
```

### 4. **Components**

**React:** `ts-client/src/components/ui/navbar.tsx`
- Class component with hooks
- Uses `useState`, `useEffect`
- Props via TypeScript interfaces

**Nuxt:** `components/ui/Navbar.vue`
```vue
<template>
  <nav
    class="fixed top-0 z-30 w-full"
    :class="{ 'backdrop-blur-sm': !transparentWhenTop }"
    :style="navStyle"
  >
    <!-- Navigation content -->
  </nav>
</template>

<script setup lang="ts">
interface Props {
  transparentWhenTop?: boolean
  mobileOnly?: boolean
}

const props = defineProps<Props>()

const { y: scrollY } = useScroll(window)
const { width } = useWindowSize()

const isMobile = computed(() => {
  if (props.mobileOnly) return true
  return width.value < 1024
})

const backgroundTransparency = computed(() => {
  if (!props.transparentWhenTop) return 1
  const transparency = scrollY.value / 600
  return Math.min(transparency, 1)
})

const navStyle = computed(() => ({
  background: props.transparentWhenTop
    ? `rgba(0, 0, 0, ${backgroundTransparency.value})`
    : '#000d'
}))
</script>
```

### 5. **Routing**

**React:** Manual route configuration with React Router
```tsx
<Routes>
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/services" element={<Services />} />
  <Route path="/" element={<Home />} />
  <Route path="*" element={<Page404 />} />
</Routes>
```

**Nuxt:** File-based routing (automatic)
```
pages/
├── index.vue        → /
├── about.vue        → /about
├── portfolio.vue    → /portfolio
├── resume.vue       → /resume
├── services.vue     → /services
└── [...slug].vue    → /* (catch-all 404)
```

### 6. **Navigation Links**

**React:**
```tsx
import { Link } from "react-router-dom";
<Link to="/about">About</Link>
```

**Nuxt:**
```vue
<NuxtLink to="/about">About</NuxtLink>
```

---

## Configuration Files

### `nuxt.config.ts`
```ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@vueuse/motion/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Heitor M Bonfim - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Heitor M Bonfim' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }
      ]
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  compatibilityDate: '2024-10-26'
})
```

### `tailwind.config.ts`
```ts
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        // ... (keep existing theme)
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
```

### `package.json` Scripts
```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "lint": "eslint .",
    "typecheck": "nuxt typecheck"
  }
}
```

---

## Dependencies Installation

```bash
# Create new Nuxt 4 project or install core
pnpm add nuxt@latest

# Nuxt modules
pnpm add -D @nuxtjs/tailwindcss @vueuse/nuxt @nuxt/icon @vueuse/motion

# Keep from React project
pnpm add gsap clsx tailwind-merge class-variance-authority tailwindcss-animate

# Vue-specific replacements
pnpm add @vueuse/core radix-vue

# Dev dependencies
pnpm add -D typescript tailwindcss postcss autoprefixer prettier prettier-plugin-tailwindcss

# Optional: Vue dev tools
pnpm add -D @nuxt/devtools
```

---

## Key Migration Steps

### Phase 1: Setup & Configuration (Day 1)
1. ✅ Initialize Nuxt 4 project
2. ✅ Install dependencies
3. ✅ Set up Tailwind CSS configuration
4. ✅ Configure `nuxt.config.ts`
5. ✅ Set up TypeScript strict mode
6. ✅ Move static assets to `public/` directory
7. ✅ Create `assets/css/main.css` with Tailwind imports and custom styles

### Phase 2: Core Structure (Day 1-2)
1. ✅ Create `app.vue` (root component)
2. ✅ Create `composables/useGlobal.ts` (replace GlobalContext)
3. ✅ Create utility functions (`utils/cn.ts`, `utils/navbar-buttons.ts`)
4. ✅ Set up layouts (`layouts/default.vue`)

### Phase 3: Components Migration (Day 2-3)
1. ✅ Convert UI components to Vue:
   - `components/ui/Button.vue`
   - `components/ui/Navbar.vue`
   - `components/ui/PageContainer.vue`
   - `components/ui/SectionContainer.vue`
   - `components/ui/MenuButton.vue`
   - `components/ui/SocialButton.vue`
   - `components/ui/Divider.vue`
   - `components/ui/SectionTitles.vue`
2. ✅ Convert feature components:
   - `components/FirstLoad.vue`
   - `components/Loading.vue`
   - `components/ScrollProgress.vue`
   - `components/RevealOnScroll.vue`
3. ✅ Convert page-specific components:
   - About components
   - Portfolio components
   - Resume components
   - Services components

### Phase 4: Pages Migration (Day 3-4)
1. ✅ Convert all page components to Vue:
   - `pages/index.vue` (Home)
   - `pages/about.vue`
   - `pages/portfolio.vue`
   - `pages/resume.vue`
   - `pages/services.vue`
   - `pages/[...slug].vue` (404)
2. ✅ Move content files to utils/content/
3. ✅ Update all content imports

### Phase 5: Animations & Interactions (Day 4-5)
1. ✅ Replace Framer Motion with @vueuse/motion
2. ✅ Migrate GSAP animations
3. ✅ Test scroll-based animations
4. ✅ Test page transitions
5. ✅ Implement reveal-on-scroll composable

### Phase 6: Testing & Optimization (Day 5)
1. ✅ Test all routes and navigation
2. ✅ Test responsive behavior
3. ✅ Test animations and interactions
4. ✅ Optimize images
5. ✅ Test build output (`pnpm build`)
6. ✅ Test SSG generation if needed (`pnpm generate`)

### Phase 7: Deployment (Day 6)
1. ✅ Update deployment configuration (Vercel, Netlify, etc.)
2. ✅ Update environment variables if any
3. ✅ Test production build
4. ✅ Deploy and verify

---

## Key Differences to Keep in Mind

### 1. **Component Naming Convention**
- React: PascalCase for files (`navbar.tsx`)
- Vue/Nuxt: PascalCase for files (`Navbar.vue`) - auto-imported as `<Navbar />`

### 2. **Props & Events**
- React: `onComplete={() => {}}` (props)
- Vue: `@complete="handleComplete"` (events with `defineEmits`)

### 3. **Conditional Rendering**
- React: `{condition && <Component />}`
- Vue: `<Component v-if="condition" />`

### 4. **List Rendering**
- React: `{items.map(item => <Item key={item.id} />)}`
- Vue: `<Item v-for="item in items" :key="item.id" />`

### 5. **Class Names**
- React: `className="..."`
- Vue: `class="..."` or `:class="{ active: isActive }"`

### 6. **Inline Styles**
- React: `style={{ color: 'red' }}`
- Vue: `:style="{ color: 'red' }"`

### 7. **HTML Content**
- React: `dangerouslySetInnerHTML={{ __html: content }}`
- Vue: `v-html="content"`

### 8. **Refs**
- React: `const ref = useRef(null)`
- Vue: `const ref = ref<HTMLElement>()`

### 9. **Component Lifecycle**
- React: `useEffect(() => {}, [])`
- Vue: `onMounted(() => {})`

### 10. **Auto-imports**
- Nuxt auto-imports components from `components/`
- Nuxt auto-imports composables from `composables/`
- No need for explicit imports

---

## Advantages of Nuxt 4

1. ✅ **Better SEO** - Built-in SSR/SSG
2. ✅ **File-based routing** - No manual route configuration
3. ✅ **Auto-imports** - Cleaner code, fewer imports
4. ✅ **Built-in optimizations** - Image optimization, code splitting
5. ✅ **Better DX** - Nuxt DevTools, better error messages
6. ✅ **Smaller bundle** - Vue 3 is lighter than React
7. ✅ **Composition API** - More flexible than React hooks

---

## Potential Challenges

1. ⚠️ **Learning Curve** - Vue syntax if team is React-focused
2. ⚠️ **Animation Migration** - Need to rewrite Framer Motion animations
3. ⚠️ **Component Library** - shadcn-vue is less mature than shadcn-ui
4. ⚠️ **Third-party Libraries** - Some React-specific libs need Vue alternatives

---

## Resources

- **Nuxt 4 Docs:** https://nuxt.com
- **VueUse:** https://vueuse.org
- **@vueuse/motion:** https://motion.vueuse.org
- **Radix Vue:** https://www.radix-vue.com
- **shadcn-vue:** https://www.shadcn-vue.com
- **Nuxt UI:** https://ui.nuxt.com
- **Tailwind CSS:** https://tailwindcss.com

---

## Timeline Estimate

**Total Time:** 5-6 days

- **Day 1:** Setup, configuration, and core structure (4-6 hours)
- **Day 2:** UI components migration (6-8 hours)
- **Day 3:** Page components migration (6-8 hours)
- **Day 4:** Animations and interactions (4-6 hours)
- **Day 5:** Testing and optimization (4-6 hours)
- **Day 6:** Deployment and final testing (2-4 hours)

---

## Success Criteria

- ✅ All pages render correctly
- ✅ All routes work as expected
- ✅ Responsive design works on all devices
- ✅ All animations work smoothly
- ✅ Performance is equal or better than React version
- ✅ SEO meta tags are properly set
- ✅ Build succeeds without errors
- ✅ Production deployment works

---

## Next Steps

1. Review this migration plan
2. Set up Nuxt 4 project
3. Start with Phase 1 (Setup & Configuration)
4. Proceed through phases sequentially
5. Test thoroughly at each phase
6. Deploy to staging environment
7. Final testing and production deployment
