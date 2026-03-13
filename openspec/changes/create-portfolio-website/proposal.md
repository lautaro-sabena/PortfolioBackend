# Proposal: Create Developer Portfolio Website

## Intent

Build a minimal, modern, high-performance developer portfolio website to showcase Lautaro Sabena's backend engineering capabilities. The site targets international remote tech companies and startups, highlighting the transition from Unity/real-time systems to .NET backend development.

## Scope

### In Scope
- Single-page portfolio with Hero, About, Projects, Skills, and Contact sections
- Next.js 14+ with App Router, TypeScript, TailwindCSS
- Responsive design (mobile-first)
- SEO meta tags and OpenGraph
- Subtle animations using Framer Motion
- Sticky header with scroll-aware transparency
- Dark mode support (optional)

### Out of Scope
- Blog or content management
- CMS integration
- Analytics integration (defer to later)

## Approach

Create a Next.js project with:
1. Clean component architecture (separate components for each section)
2. TailwindCSS for styling with custom theme (Inter/Geist fonts, neutral palette)
3. Framer Motion for scroll animations
4. Static export for Vercel deployment

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `/` | New | Main portfolio page |
| `/components/*` | New | Header, Hero, About, Projects, Skills, Contact, Footer |
| `/data/projects.ts` | New | Project data |
| `/app/layout.tsx` | New | Root layout with SEO |
| `/app/globals.css` | New | Global styles |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Performance issues from animations | Low | Use light Framer Motion, lazy load if needed |
| SEO not optimized | Low | Include proper meta tags in layout |

## Rollback Plan

Delete the Next.js project and revert to empty repository. No breaking changes to existing code.

## Dependencies

- Node.js 18+
- Vercel account for deployment

## Success Criteria

- [ ] Page loads under 2 seconds (Lighthouse)
- [ ] Mobile responsive (tested on 375px, 768px, 1440px)
- [ ] All sections render correctly
- [ ] Navigation smooth scrolls to sections
- [ ] Dark mode toggles correctly (if implemented)
- [ ] SEO meta tags present in source
