# Operava Landing Page Design System

## Brand

Operava is a managed service brand for companies that need stable, secure, and efficient technology operations across DevOps, SOC, IT operations, cloud infrastructure, and security monitoring.

Domain: `operava.id`

Design mood: reliable, secure, stable, enterprise-ready, professional, clean, modern.

## Foundations

### Typography

Primary typeface: Inter.

Approved alternatives: Inter Display, Plus Jakarta Sans, Montserrat.

Weights:
- Regular: `400`
- Medium: `500`
- Semi Bold: `600`

Do not use font weights above `600`.

Line heights:
- Headings: `160%`
- Body text: `150%`
- Buttons and small UI labels should remain readable and should not use compressed line-height.

Tracking:
- Letter spacing is `0`.
- Do not use negative letter spacing.

### Color Tokens

| Role | Token | Value |
| --- | --- | --- |
| Primary | `--color-primary` | `#02D35F` |
| Secondary | `--color-secondary` | `#121212` |
| Background | `--color-bg` | `#FFFFFF` |
| Soft background | `--color-bg-soft` | `#F7F9FA` |
| Gradient start | `--color-bg-gradient-start` | `#FFFFFF` |
| Gradient end | `--color-bg-gradient-end` | `#F4F8F6` |
| Text primary | `--color-text-primary` | `#121212` |
| Text secondary | `--color-text-secondary` | `#5F6B76` |
| Border | `--color-border` | `#E5EAF0` |
| Card background | `--color-card-bg` | `#FFFFFF` |

Usage:
- Use primary green for CTAs, positive status, active indicators, and technical icon accents.
- Use secondary black for navigation, headings, and secondary CTAs.
- Keep backgrounds mostly white with soft grey-green section bands.
- Avoid heavy gradients, glow effects, dark-mode-first surfaces, and one-note green compositions.

### Spacing

All layout spacing uses the 8px system:

`8px`, `16px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `96px`, `120px`

CSS tokens:
- `--space-1`: `8px`
- `--space-2`: `16px`
- `--space-3`: `24px`
- `--space-4`: `32px`
- `--space-5`: `40px`
- `--space-6`: `48px`
- `--space-8`: `64px`
- `--space-10`: `80px`
- `--space-12`: `96px`
- `--space-15`: `120px`

Rules:
- Small element gap: `8px` or `16px`
- Card padding: `24px` or `32px`
- Grid gap: `24px` or `32px`
- Desktop section padding: `80px` to `120px`
- Tablet section padding: `64px` to `80px`
- Mobile section padding: `48px` to `64px`
- Hero spacing should be spacious and premium.

### Radius

| Role | Token | Value |
| --- | --- | --- |
| Buttons | `--radius-none` | `0px` |
| Small cards/icons | `--radius-sm` | `4px` |
| Cards/panels | `--radius-md` | `8px` |

Do not use pill-shaped buttons or rounded CTA buttons.

### Shadows

Use subtle elevation only:
- Cards: `--shadow-card`
- Hover cards: `--shadow-card-hover`
- Dashboard preview: `--shadow-dashboard`

Do not use excessive glow or heavy blurred effects.

## Core Components

### Navbar

Purpose: stable corporate orientation and primary conversion path.

Anatomy:
- Operava wordmark
- Services link
- Operating Model link
- Capabilities link
- Reliability link
- Primary CTA

Rules:
- Height: `64px`
- White translucent surface with subtle bottom border on scroll
- CTA uses primary button
- Mobile menu uses stacked links with clear dividers

### Buttons

Primary button:
- Background: `#02D35F`
- Text: `#121212`
- Radius: `0px`
- Padding: `16px 32px`

Secondary button:
- Background: `#121212`
- Text: `#FFFFFF`
- Radius: `0px`
- Padding: `16px 32px`

Outline button:
- Border: `#E5EAF0`
- Text: `#121212`
- Background: transparent

Rules:
- Sharp, corporate, minimal, confident
- Use icons only when they clarify action
- No pill shapes

### Cards

Base card:
- White background
- `1px` subtle border
- Radius: `4px` to `8px`
- Soft shadow
- Padding: `24px` or `32px`

Card types:
- Service card
- Feature card
- Metric card
- Trust card
- Workflow card
- Dashboard panel

### Technical Icons

Use the `.technical-icon` primitive:
- `40px` square container
- Primary green icon
- Soft green background
- `4px` radius
- Subtle border

Use for DevOps, SOC, cloud, server, monitoring, security, workflow, and support topics.

### Dashboard Preview

Use the `.dashboard-preview` primitive for:
- Operations command panel
- SOC monitoring screen
- Server status panel
- Deployment pipeline
- Security alert cards

Rules:
- White panel
- `8px` radius
- Subtle border
- Dashboard shadow
- Top bar with small status label
- Metric cards inside use the same border and spacing system

### Metric Cards

Use for uptime, response, coverage, incident count, security score, SLA, and monitoring windows.

Rules:
- Values use semi-bold text only
- Text colors should remain restrained
- Use primary green sparingly for success states
- Keep labels short and scannable

## Landing Page Sections

### Hero

Purpose: explain the offer immediately and provide a strong conversion path.

Content pattern:
- Label: managed technology operations
- Headline: stable, secure, efficient operations
- Body: DevOps, SOC, IT service, and operation support
- CTAs: discuss managed service, view services
- Visual: dashboard preview with operations command, status, and metrics

### Brand Introduction

Purpose: establish Operava as an extension of the client technology team.

Visual:
- Dashboard preview
- Infrastructure health
- Security score
- Open incidents
- Uptime
- Service coverage

### Service Cards

Required services:
- Managed DevOps
- Managed SOC
- Managed IT Service
- IT Operation Support

Each card includes:
- Technical icon
- Service title
- Short description
- Operational scope tags

### Operational Challenges & Managed Workflow

Combined section only. Do not split into a generic pain-point page.

Challenge cards:
- Limited visibility
- Fragmented operations
- Security gaps
- Scaling burden

Workflow cards:
- Assess
- Design
- Deploy
- Operate

### Feature Cards

Use for operational capabilities:
- Real-time monitoring
- Workflow automation
- Incident response
- Security visibility
- Performance optimization
- Executive reporting

### Trust And Reliability

Use metrics and operational commitments:
- Uptime SLA
- Incident response time
- 24/7 monitoring
- Multi-cloud support
- Certified engineers
- SLA-backed commitments
- Compliance-ready operations

Do not label this as "Why Choose Us".

### Final CTA

Purpose: direct conversion.

Rules:
- Strong, concise headline
- One primary action
- One low-friction contact action
- No rounded CTA container beyond card radius
- No heavy glow

### Footer

Purpose: close with service navigation and direct contact.

Include:
- Brand summary
- Service links
- Company section links
- Email
- Website
- Legal placeholders

## Explicit Exclusions

Do not create:
- Testimonials
- FAQ
- Why Choose Us section
- Use Case section
- Dark-mode-first design
- Heavy gradients
- Excessive glow
- Playful illustrations
- Crowded layouts
- Font weights above `600`
- Pill-shaped buttons
- Random spacing outside the 8px system
