# LaGra Salon and Day Spa – Static Website (Upload-Ready)

This folder contains a simple, fast, mobile-friendly static website for **LaGra Salon and Day Spa** in **Wellsville, NY**.

## Pages
- `index.html` (Home)
- `services.html`
- `about.html`
- `contact.html`

## How to upload
1. Unzip this package on your computer.
2. Upload **all files and folders** to your webhost's site root (often `public_html/`).
3. Visit your domain to confirm it loads.

## What to customize (recommended)
Open `contact.html` and update:
- Street Address
- Phone number (tel link)
- Email address (`mailto:` links and `data-email-to`)
- Hours
- **Booking link**: replace the `href="#"` in the “Book Now” button with your real booking URL
- Map: replace the iframe `src=` with the Google Maps embed for your exact address

Open `about.html` and update:
- Team member names, roles, specialties

Open `services.html` and update:
- Service list to match your real menu (and optionally add pricing)

## Images
All provided photos/logos are stored in:
- `assets/img/`

## Contact form behavior
By default, the form uses a **mailto** fallback (opens the visitor's email app).
If you want a hosted form:
- Use a provider like Formspree/Basin and set the `<form action="...">` URL in `contact.html`.

---
Generated for LaGra Salon and Day Spa.
