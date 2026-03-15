# Proposal: Add i18n and Theme Support

## Intent

Add multilingual support (English/Spanish) and theme switching (Light/Dark) to the portfolio. This addresses the need for a more professional, accessible portfolio that serves a broader audience and provides better user experience.

## Scope

### In Scope
- Language toggle in header (EN/ES)
- Theme toggle in header (Light/Dark)
- Translation dictionaries (JSON files)
- Persistent preferences in localStorage
- Dark mode styling with Tailwind
- Smooth transitions and animations
- Accessibility (aria-labels)

### Out of Scope
- Additional languages beyond EN/ES
- System theme detection
- Route-based i18n (using simple client-side state)

## Approach

1. **Language Support**: Create JSON translation files, use React context for language state, add toggle button in header
2. **Theme Support**: Install next-themes, configure provider, add sun/moon toggle with animations
3. **Integration**: Update all static text components to use translation keys

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/Header.tsx` | Modified | Add language and theme toggles |
| `src/data/translations/en.json` | New | English translations |
| `src/data/translations/es.json` | New | Spanish translations |
| `src/context/LanguageContext.tsx` | New | Language state management |
| `src/app/layout.tsx` | Modified | Add ThemeProvider |
| `src/app/globals.css` | Modified | Dark mode color variables |
| `src/components/*.tsx` | Modified | Replace static text with translation keys |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Missing translation keys | Medium | Create utility to warn on missing keys |
| Theme flash on reload | Low | Use next-themes suppressHydrationWarning |
| Breaking existing layout | Low | Test thoroughly after each change |

## Rollback Plan

1. Remove LanguageContext provider from layout
2. Remove ThemeProvider from layout
3. Remove toggle buttons from Header
4. Replace translation keys with static text in components
5. Delete translation files

## Dependencies

- `next-themes` (theme switching)
- `lucide-react` (sun/moon icons)

## Success Criteria

- [ ] Language toggle visible in header, switches all text
- [ ] Theme toggle visible in header, switches between light/dark
- [ ] Preferences persist in localStorage across reloads
- [ ] Smooth transitions on theme change (~300ms)
- [ ] No console errors on load
- [ ] Build passes successfully
