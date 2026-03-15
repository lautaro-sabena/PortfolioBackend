# Design: i18n and Theme Support

## Technical Approach

Implement client-side i18n using React Context and JSON translation files. Use next-themes for theme switching with Tailwind dark mode. Both features will be integrated into the Header component with toggle buttons.

## Architecture Decisions

### Decision: Client-side i18n vs Route-based

**Choice**: Client-side i18n with React Context
**Alternatives considered**: Next.js i18n routing, next-intl, react-i18next
**Rationale**: Simpler for a single-page portfolio with minimal text. No route changes needed, instant UI updates.

### Decision: next-themes for Dark Mode

**Choice**: Use next-themes library
**Alternatives considered**: Manual CSS variables, custom hook
**Rationale**: Handles localStorage persistence, system preference detection, and prevents flash of wrong theme out of the box.

### Decision: Translation keys in components

**Choice**: Use translation hook (`useTranslation`) in each component
**Alternatives considered**: Pass translations via props, use context directly
**Rationale**: Cleaner separation of concerns, easier to maintain, follows React patterns.

## Data Flow

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Translation    │     │  LanguageContext │     │   Components    │
│  JSON Files     │────▶│  (React Context) │────▶│  (useTranslation│
│  en.json/es.json│     │  - language      │     │   hook)         │
└─────────────────┘     │  - setLanguage   │     └─────────────────┘
                        └──────────────────┘
                                │
                                ▼
                        ┌──────────────────┐
                        │   localStorage   │
                        │  (persistence)   │
                        └──────────────────┘
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/data/translations/en.json` | Create | English translations |
| `src/data/translations/es.json` | Create | Spanish translations |
| `src/context/LanguageContext.tsx` | Create | Language state management |
| `src/components/ThemeToggle.tsx` | Create | Theme toggle button with sun/moon icons |
| `src/components/LanguageToggle.tsx` | Create | Language toggle button (EN/ES) |
| `src/components/Header.tsx` | Modify | Add theme and language toggles |
| `src/app/layout.tsx` | Modify | Add ThemeProvider and LanguageProvider |
| `src/app/globals.css` | Modify | Add dark mode CSS variables |

## Interfaces / Contracts

### Translation JSON Structure

```json
// src/data/translations/en.json
{
  "nav": {
    "about": "About",
    "work": "Work",
    "contact": "Contact"
  },
  "about": {
    "available": "Available for work",
    "focusOn": "I focus on:"
  },
  "projects": {
    "title": "Selected Work",
    "source": "source"
  },
  "skills": {
    "title": "Skills & Tools"
  },
  "contact": {
    "title": "Get in touch",
    "subtitle": "Have a project in mind? Let's talk.",
    "name": "Name",
    "namePlaceholder": "Your name",
    "email": "Email",
    "emailPlaceholder": "your@email.com",
    "message": "Message",
    "messagePlaceholder": "Tell me about your project...",
    "send": "Send Message"
  },
  "footer": {
    "email": "Email",
    "github": "GitHub",
    "linkedin": "LinkedIn"
  }
}
```

### LanguageContext TypeScript

```typescript
// src/context/LanguageContext.tsx
interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | Translation key lookup | Verify keys resolve correctly |
| Unit | Language context state | Verify state changes on toggle |
| Integration | Theme persistence | Reload page, verify theme persists |
| Integration | Language persistence | Reload page, verify language persists |
| E2E | Full toggle flow | Click toggles, verify UI updates |

## Migration / Rollout

No migration required. This is a purely additive feature.

## Open Questions

- [ ] None - design is complete
