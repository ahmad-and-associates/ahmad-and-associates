@AGENTS.md
# CLAUDE.md

## Project Overview

Build a premium, modern, high-conversion corporate website for:

# Ahmad and Associates

An architecture liaisoning and government approvals consultancy based in Mumbai with 25+ years of expertise in:

* BMC approvals
* Fire department clearances
* OC/CC approvals
* Building proposal approvals
* Construction compliance
* Government liaisoning
* Municipal permissions

Founder: Sharif Ahmad

Primary business goal:
Generate high-quality inbound leads from builders, developers, architects, contractors, and real-estate firms in Mumbai.

The website should establish:

* Trust
* Authority
* Professionalism
* Government process expertise
* Premium positioning

---

# Tech Stack

## Frontend

* React (latest stable)
* Vite
* Tailwind CSS
* React Router DOM
* Framer Motion (for subtle animations)
* Lucide React Icons

## Optional Enhancements

* Shadcn/UI
* React Hook Form
* Zod validation
* EmailJS or Formspree for forms

---

# Design Philosophy

The website must feel:

* Premium
* Corporate
* Clean
* Modern
* Trustworthy
* Minimal but powerful

Avoid:

* Overly flashy UI
* Generic template appearance
* Excessive gradients
* Cartoonish design
* Over-animation

Inspiration:

* Enterprise consulting firms
* Architecture consultancies
* Government compliance firms
* High-end real-estate service brands

---

# Brand Positioning

Position Ahmad and Associates as:

* Mumbai’s trusted BMC approval experts
* Specialists in complex government approvals
* A reliable liaisoning partner
* Experts with 25+ years of experience
* A premium consultancy with strong local authority

Core messaging:
“Fast, compliant, hassle-free approvals.”

---

# Target Audience

Primary:

* Builders
* Developers
* Architects
* Contractors
* Real-estate companies

Secondary:

* Commercial property owners
* Redevelopment firms
* Industrial project owners

---

# Website Goals

The website should:

1. Generate inbound leads
2. Increase trust instantly
3. Explain services clearly
4. Improve SEO visibility
5. Encourage contact inquiries
6. Showcase experience and authority

Every section should contribute to conversion.

---

# Pages Required

## 1. Home Page

Must include:

* Hero section
* Trust indicators
* Services overview
* Why choose us
* 25+ years highlight
* Process section
* CTA sections
* Testimonials placeholder
* Contact section

Hero headline examples:

* “Mumbai’s Trusted BMC Approval & Liaisoning Experts”
* “25+ Years of Expertise in Government Approvals”

CTA buttons:

* Get Consultation
* Contact Us
* Discuss Your Project

---

## 2. About Page

Include:

* Founder story
* Company history
* Mission & vision
* Industry expertise
* Why clients trust the company

Tone:
Professional and authoritative.

---

## 3. Services Page

Detailed service cards for:

* BMC Approvals
* Fire NOC
* OC/CC
* Building Proposal Approvals
* Redevelopment Approvals
* Compliance Consulting
* Government Liaisoning

Each service should include:

* Problem solved
* Process overview
* Benefits
* CTA

---

## 4. Contact Page

Include:

* Contact form
* Email
* Phone placeholder
* Office location placeholder
* Google Maps placeholder

Must feel trustworthy and simple.

---

# UI/UX Requirements

## Layout

* Max width container: 1280px
* Generous spacing
* Strong typography hierarchy
* Sticky navbar
* Clear CTAs

## Responsive Design

Mobile-first design mandatory.

Breakpoints:

* Mobile
* Tablet
* Desktop
* Large desktop

---

# Color Palette

Primary:

* Deep Navy: #0F172A
* Royal Blue: #1D4ED8

Secondary:

* Slate Gray: #475569
* Light Gray: #F8FAFC

Accent:

* Gold: #C8A96B

Background:

* White
* Off-white sections

---

# Typography

Recommended:

* Headings: Poppins / Inter
* Body: Inter

Rules:

* Strong heading contrast
* Readable spacing
* Corporate feel
* Avoid decorative fonts

---

# Component Architecture

Use reusable components.

Suggested structure:

src/
components/
layout/
sections/
ui/
pages/
hooks/
lib/
assets/
data/

---

# Required Components

* Navbar
* Footer
* HeroSection
* ServiceCard
* CTASection
* ProcessTimeline
* StatsSection
* Testimonials
* ContactForm
* SectionHeading

---

# Tailwind Best Practices

* Use utility-first styling
* Avoid excessive custom CSS
* Use clsx/cn helpers if needed
* Maintain consistent spacing scale
* Create reusable utility patterns
* Avoid inline styles

---

# Animation Guidelines

Use Framer Motion sparingly.

Allowed:

* Fade-in
* Slide-up
* Hover transitions
* Subtle micro-interactions

Avoid:

* Heavy animations
* Long motion sequences
* Distracting effects

---

# SEO Requirements

Every page must include:

* Unique title
* Meta description
* Proper heading hierarchy
* Semantic HTML
* Open Graph tags

Target keywords:

* BMC approval consultant Mumbai
* Architecture liaisoning Mumbai
* Fire NOC consultant Mumbai
* OC CC approvals Mumbai
* Government approvals consultancy Mumbai

---

# Performance Requirements

Must optimize for:

* Lighthouse score 90+
* Fast loading
* Mobile performance
* SEO
* Accessibility

Use:

* Lazy loading
* Optimized images
* Minimal dependencies
* Code splitting

---

# Accessibility

Ensure:

* Proper contrast ratios
* Keyboard navigation
* ARIA labels
* Semantic HTML
* Accessible forms

---

# Forms

Contact forms should:

* Validate properly
* Show success/error states
* Be mobile-friendly
* Minimize friction

Fields:

* Name
* Email
* Phone
* Project Type
* Message

---

# Copywriting Tone

Writing should be:

* Professional
* Confident
* Trustworthy
* Clear
* Corporate

Avoid:

* Generic AI phrases
* Overly salesy language
* Buzzword overload

Focus on:

* Experience
* Reliability
* Compliance expertise
* Smooth approvals
* Reduced delays

---

# Homepage Structure

1. Navbar
2. Hero Section
3. Trust Indicators
4. About Snapshot
5. Services
6. Why Choose Us
7. Process
8. Stats
9. Testimonials
10. CTA Banner
11. Contact Section
12. Footer

---

# Suggested Features

Optional:

* WhatsApp floating button
* Scroll animations
* FAQ accordion
* Blog section
* Case studies
* Project showcase

---

# Coding Standards

* Use functional components
* Prefer composition over prop drilling
* Keep components modular
* Use clean folder structure
* Maintain readable code
* Add comments only where needed

---

# Important Business Context

This is NOT a generic architecture studio.

This is a liaisoning consultancy specializing in:

* Government approvals
* Municipal compliance
* BMC coordination
* Fire approvals
* Regulatory processes

The website must communicate:

* Authority
* Reliability
* Deep procedural knowledge
* Strong Mumbai expertise

---

# Deliverables

Build:

* Fully responsive React website
* Modern UI
* SEO-ready structure
* Production-quality codebase
* Reusable component system
* Clean Tailwind implementation

End goal:
A premium corporate website that generates high-value inbound leads and positions Ahmad and Associates as one of Mumbai’s top architecture liaisoning consultancies.
