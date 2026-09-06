# HAVEN — Boutique Hotel & Restaurant

Premium small-business website for **HAVEN** boutique hotel and restaurant. Quiet luxury in Harare — 18 rooms, garden dining, pool & spa.

**Live:** *(deploy to Vercel)* → `vercel.com/new` → Import repository

## Highlights
- Booking bar with date validation (check-in/out, guests)
- Room filtering (Classic / Suites) and pricing
- Restaurant section and amenities grid
- Gallery lightbox, testimonials slider, contact form
- Responsive, luxury editorial design (Cormorant + Inter + Playfair), gold/black/cream palette

## Files
```
haven-hotel/
├── index.html   # Hero + booking, about, rooms, dining, amenities, gallery, testimonials, contact
├── style.css    # Design system + responsive
├── script.js    # Booking logic, filter, lightbox, slider
├── assets/      # Images
├── vercel.json
└── README.md
```

## Preview locally
```bash
python -m http.server 8000
# http://localhost:8000
```

## Deployment — Vercel
1. `vercel.com/new` → Import GitHub repository
2. Framework: Other / Static → Deploy
3. No build step required

## Customization
- Update address, phone, hours in `index.html`
- Replace room images/prices and gallery in `assets/`
- Connect booking and contact forms to backend or Formspree

Built with HTML, CSS, and vanilla JavaScript.
