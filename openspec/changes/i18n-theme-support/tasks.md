# Tasks: i18n and Theme Support

## Phase 1: Infrastructure

- [x] 1.1 Install dependencies: `npm install next-themes lucide-react`
- [x] 1.2 Create `src/data/translations/en.json` with English translations
- [x] 1.3 Create `src/data/translations/es.json` with Spanish translations

## Phase 2: Core Implementation

- [x] 2.1 Create `src/context/LanguageContext.tsx` with language state and useTranslation hook
- [x] 2.2 Create `src/components/ThemeToggle.tsx` with sun/moon icons and animations
- [x] 2.3 Create `src/components/LanguageToggle.tsx` with EN/ES toggle

## Phase 3: Integration

- [x] 3.1 Update `src/app/layout.tsx` to wrap with ThemeProvider and LanguageProvider
- [x] 3.2 Update `src/app/globals.css` to add dark mode CSS variables
- [x] 3.3 Update `src/components/Header.tsx` to add ThemeToggle and LanguageToggle
- [x] 3.4 Update `src/components/About.tsx` to use translation keys
- [x] 3.5 Update `src/components/Projects.tsx` to use translation keys
- [x] 3.6 Update `src/components/Skills.tsx` to use translation keys
- [x] 3.7 Update `src/components/Contact.tsx` to use translation keys
- [x] 3.8 Update `src/components/Footer.tsx` to use translation keys
- [x] 3.9 Update `src/components/Header.tsx` nav links to use translation keys

## Phase 4: Testing & Verification

- [x] 4.1 Run `npm run build` to verify no errors
- [ ] 4.2 Test language toggle switches all text
- [ ] 4.3 Test theme toggle switches light/dark mode
- [ ] 4.4 Verify language persists after page reload
- [ ] 4.5 Verify theme persists after page reload
- [ ] 4.6 Test smooth transitions (~300ms) on theme change
- [ ] 4.7 Verify aria-labels on toggle buttons

## Phase 5: Cleanup

- [x] 5.1 Remove unused imports from components
- [ ] 5.2 Verify no console errors in browser
