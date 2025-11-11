# Puzzle - Complete Design Specification
## AI-Powered Accounting & Tax Platform for US Businesses

**Version:** 1.0
**Date:** 2025-11-11
**Status:** Implementation Ready

---

## Table of Contents

1. [Strategic Foundation & Brand Architecture](#1-strategic-foundation--brand-architecture)
2. [Complete Visual Design System](#2-complete-visual-design-system)
3. [Technical Layout Architecture](#3-technical-layout-architecture)
4. [Comprehensive UI Component Library](#4-comprehensive-ui-component-library)
5. [Dynamic Quote Builder Feature Specification](#5-dynamic-quote-builder-feature-specification)
6. [Content Architecture & Messaging](#6-content-architecture--messaging)
7. [Implementation Guidelines](#7-implementation-guidelines)

---

## 1. Strategic Foundation & Brand Architecture

### 1.1 Brand Personality

**Core Adjectives & Behavioral Manifestations:**

1. **Intelligent** - Demonstrates expertise through:
   - Data-driven insights presented visually
   - Smart automation suggestions without overwhelming users
   - Educational tooltips that explain complex concepts simply
   - Proactive problem detection with clear solutions

2. **Approachable** - Expressed through:
   - Conversational microcopy that avoids jargon
   - Friendly confirmation messages and success states
   - Human-centric error messages with actionable next steps
   - Warm color accents balanced with professional neutrals

3. **Trustworthy** - Manifested by:
   - Consistent, predictable interface patterns
   - Transparent pricing with no hidden fees
   - Security badges and compliance certifications prominently displayed
   - Clear data handling explanations
   - Professional typography and precise alignment

4. **Efficient** - Shown through:
   - One-click actions for common tasks
   - Keyboard shortcuts clearly indicated
   - Minimal form fields with smart defaults
   - Instant feedback on all interactions
   - Progress indicators for multi-step processes

5. **Empowering** - Delivered via:
   - Educational content integrated contextually
   - Customization options without complexity
   - Clear visual hierarchy prioritizing user goals
   - Celebration of user achievements and milestones

### 1.2 User Personas

#### Primary Persona: Business Owner (Sarah)

**Demographics:**
- Age: 35-52
- Role: Small to medium business owner/CEO
- Business size: 1-50 employees
- Industry: Service-based businesses, retail, consulting
- Location: United States (English), Netherlands (Dutch)

**Technology Comfort:**
- Intermediate (6/10)
- Uses smartphone daily
- Comfortable with basic SaaS tools (email, CRM, basic accounting)
- Prefers intuitive interfaces over feature-heavy platforms

**Pain Points:**
1. "I don't have time to learn complex accounting software"
2. "Tax deadlines stress me out - I'm never sure if I'm compliant"
3. "I can't afford a full-time accountant but need expert help"
4. "I need to see my financial health at a glance"
5. "Switching between multiple tools wastes my time"

**Goals:**
- Accurate books without manual data entry
- Tax compliance without constant worry
- Financial clarity for better decisions
- Affordable professional-grade tools
- Time savings for business growth

**Usage Context:**
- Primarily desktop during work hours (60%)
- Mobile for quick checks (40%)
- Needs access during tax season (Q1, Q4)
- Reviews financials monthly

#### Secondary Persona: Accountant (Michael)

**Demographics:**
- Age: 28-55
- Role: CPA, tax professional, accounting firm employee
- Client base: 10-100+ small businesses
- Location: United States (English)

**Technology Comfort:**
- Advanced (8/10)
- Early adopter of accounting tech
- Comfortable with APIs and integrations
- Values efficiency and accuracy

**Pain Points:**
1. "Client data is scattered across multiple systems"
2. "Manual data entry for tax preparation is time-consuming"
3. "Clients don't provide documents on time"
4. "I need to review and approve AI suggestions before filing"
5. "Different clients use different platforms"

**Goals:**
- Streamlined client onboarding
- Automated data collection and categorization
- Easy review and approval workflows
- Multi-client dashboard view
- Accurate AI suggestions with audit trails

**Usage Context:**
- Primarily desktop, all-day usage
- Peak usage during tax season
- Needs batch processing capabilities
- Requires export and reporting features

### 1.3 Core Value Propositions

**1. AI-Powered Automation That Saves 10+ Hours Per Month**
- Evidence Points:
  - Automatic transaction categorization with 98% accuracy
  - Smart receipt matching using OCR technology
  - Predictive tax obligation calculations
  - Automated reconciliation suggestions
  - Real-time financial dashboard updates

**2. Tax Compliance Without the Stress**
- Evidence Points:
  - Year-round tax health monitoring
  - Deadline reminders with task breakdowns
  - Form pre-population from transaction data
  - State and federal compliance tracking
  - Quarterly tax estimate calculations

**3. Professional-Grade Accuracy at Small Business Prices**
- Evidence Points:
  - Starting at €699 (all-inclusive)
  - CPA-reviewed AI algorithms
  - Bank-level security (256-bit encryption)
  - Includes domain and hosting
  - No per-transaction fees

**4. One Platform for All Financial Needs**
- Evidence Points:
  - Bookkeeping, invoicing, payroll integration
  - Direct bank connections
  - Receipt capture via mobile app
  - Client portal for accountant collaboration
  - Financial reporting and analytics

### 1.4 Design Philosophy Statement

"Puzzle transforms complex financial management into an intuitive, empowering experience. We believe that powerful automation should feel effortless, professional tools should be accessible to all business sizes, and financial clarity should be the default, not a luxury. Our design prioritizes human understanding over technical complexity, making AI-driven accounting approachable without sacrificing the precision and trustworthiness that financial tools demand."

### 1.5 Brand Voice & Tone Guidelines

#### English Market Voice

**Overall Character:** Confident, friendly, knowledgeable guide

**Tone Variations by Context:**

| Context | Tone | Example |
|---------|------|---------|
| Homepage Hero | Inspiring, Clear | "Your AI accountant works while you focus on growing your business" |
| Feature Descriptions | Informative, Benefit-focused | "Automatic categorization saves you hours of manual data entry" |
| Error Messages | Helpful, Reassuring | "We couldn't connect to your bank. Let's try again or use manual upload instead." |
| Success States | Encouraging, Celebratory | "Perfect! Your Q4 taxes are filed and on time." |
| Educational Content | Expert, Approachable | "Tax deductions explained: what you can claim and why it matters" |
| CTAs | Action-oriented, Clear | "Start your free 30-day trial" (not "Try now") |

**Writing Principles:**
- Use active voice ("AI categorizes your transactions" not "Transactions are categorized by AI")
- Lead with benefits, then features
- Avoid accounting jargon; when necessary, provide inline definitions
- Use "you" and "your" to personalize
- Keep sentences under 20 words when possible
- Use contractions for friendliness ("we'll" not "we will")

#### Dutch Market Voice

**Overall Character:** Betrouwbaar, professioneel, helder (Reliable, professional, clear)

**Tone Variations by Context:**

| Context | Tone | Example |
|---------|------|---------|
| Homepage Hero | Professioneel, Direct | "Uw AI-boekhouder werkt terwijl u zich richt op groei" |
| Feature Descriptions | Informatief, Voordeel-gericht | "Automatische categorisering bespaart u uren handmatig werk" |
| Error Messages | Behulpzaam, Geruststelling | "We konden geen verbinding maken met uw bank. Laten we het opnieuw proberen." |
| Success States | Bemoedigend, Positief | "Perfect! Uw Q4-belastingen zijn op tijd ingediend." |
| Educational Content | Deskundig, Toegankelijk | "Belastingaftrek uitgelegd: wat u kunt claimen en waarom het belangrijk is" |
| CTAs | Actie-gericht, Helder | "Start uw gratis proefperiode van 30 dagen" |

**Cultural Considerations:**
- Dutch market values directness over embellishment
- Emphasize data security and privacy (GDPR compliance)
- Use formal "u" in professional contexts, "je" only in very casual help content
- Provide metric equivalents where relevant
- Acknowledge Dutch business culture's preference for pragmatism

---

## 2. Complete Visual Design System

### 2.1 Primary Color Palette

```json
{
  "primary_colors": {
    "puzzle_blue": {
      "hex": "#2563EB",
      "rgb": "rgb(37, 99, 235)",
      "hsl": "hsl(217, 84%, 53%)",
      "usage": "Primary CTAs, links, active states, brand elements",
      "accessibility": "AA compliant on white backgrounds"
    },
    "puzzle_blue_dark": {
      "hex": "#1E40AF",
      "rgb": "rgb(30, 64, 175)",
      "hsl": "hsl(221, 71%, 40%)",
      "usage": "Hover states for primary buttons, emphasis text"
    },
    "puzzle_blue_light": {
      "hex": "#DBEAFE",
      "rgb": "rgb(219, 234, 254)",
      "hsl": "hsl(214, 100%, 93%)",
      "usage": "Backgrounds for info callouts, subtle highlights"
    },
    "puzzle_indigo": {
      "hex": "#4F46E5",
      "rgb": "rgb(79, 70, 229)",
      "hsl": "hsl(244, 75%, 59%)",
      "usage": "Secondary accent, AI-related features, innovation indicators"
    },
    "neutral_dark": {
      "hex": "#1F2937",
      "rgb": "rgb(31, 41, 55)",
      "hsl": "hsl(215, 28%, 17%)",
      "usage": "Primary text, headings, high-emphasis content"
    },
    "neutral_medium": {
      "hex": "#6B7280",
      "rgb": "rgb(107, 114, 128)",
      "hsl": "hsl(220, 9%, 46%)",
      "usage": "Secondary text, labels, placeholders"
    },
    "neutral_light": {
      "hex": "#F3F4F6",
      "rgb": "rgb(243, 244, 246)",
      "hsl": "hsl(220, 14%, 96%)",
      "usage": "Backgrounds, cards, subtle dividers"
    },
    "white": {
      "hex": "#FFFFFF",
      "rgb": "rgb(255, 255, 255)",
      "hsl": "hsl(0, 0%, 100%)",
      "usage": "Primary backgrounds, card surfaces, overlays"
    }
  }
}
```

### 2.2 Secondary/Accent Colors

```json
{
  "accent_colors": {
    "success_green": {
      "hex": "#10B981",
      "rgb": "rgb(16, 185, 129)",
      "usage": "Success messages, positive indicators, completed states"
    },
    "warning_amber": {
      "hex": "#F59E0B",
      "rgb": "rgb(245, 158, 11)",
      "usage": "Warning messages, pending actions, attention needed"
    },
    "error_red": {
      "hex": "#EF4444",
      "rgb": "rgb(239, 68, 68)",
      "usage": "Error messages, destructive actions, critical alerts"
    },
    "info_cyan": {
      "hex": "#06B6D4",
      "rgb": "rgb(6, 182, 212)",
      "usage": "Information callouts, helper text, educational content"
    }
  }
}
```

**Color Usage Rules:**

1. **Primary Actions:** Always use `puzzle_blue` (#2563EB)
2. **Hover States:** Darken by one shade (use `puzzle_blue_dark`)
3. **Disabled States:** 40% opacity of base color
4. **Text Contrast:** Minimum 4.5:1 ratio for body text, 3:1 for large text
5. **Backgrounds:** Use `neutral_light` for sections, `white` for cards
6. **Borders:** Use `neutral_medium` at 20% opacity (#6B728033)

### 2.3 Typography System

```json
{
  "typography": {
    "font_families": {
      "primary": {
        "name": "Inter",
        "fallback": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        "usage": "All UI elements, body text, headings",
        "weights": [300, 400, 500, 600, 700],
        "source": "Google Fonts",
        "variable_font": true
      },
      "monospace": {
        "name": "JetBrains Mono",
        "fallback": "'Courier New', monospace",
        "usage": "Code snippets, API examples, numerical data",
        "weights": [400, 600],
        "source": "Google Fonts"
      }
    },
    "heading_scale": {
      "h1": {
        "desktop": {
          "size": "60px",
          "line_height": "72px",
          "weight": 700,
          "letter_spacing": "-0.02em"
        },
        "tablet": {
          "size": "48px",
          "line_height": "56px",
          "weight": 700,
          "letter_spacing": "-0.02em"
        },
        "mobile": {
          "size": "36px",
          "line_height": "44px",
          "weight": 700,
          "letter_spacing": "-0.01em"
        },
        "usage": "Homepage hero, major section headers"
      },
      "h2": {
        "desktop": {
          "size": "48px",
          "line_height": "56px",
          "weight": 700,
          "letter_spacing": "-0.01em"
        },
        "tablet": {
          "size": "40px",
          "line_height": "48px",
          "weight": 700,
          "letter_spacing": "-0.01em"
        },
        "mobile": {
          "size": "30px",
          "line_height": "38px",
          "weight": 700,
          "letter_spacing": "0"
        },
        "usage": "Section headers, feature titles"
      },
      "h3": {
        "desktop": {
          "size": "36px",
          "line_height": "44px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "tablet": {
          "size": "30px",
          "line_height": "38px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "mobile": {
          "size": "24px",
          "line_height": "32px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "usage": "Subsection headers, card titles"
      },
      "h4": {
        "desktop": {
          "size": "24px",
          "line_height": "32px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "tablet": {
          "size": "22px",
          "line_height": "30px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "mobile": {
          "size": "20px",
          "line_height": "28px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "usage": "Component headers, list titles"
      },
      "h5": {
        "desktop": {
          "size": "20px",
          "line_height": "28px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "tablet": {
          "size": "18px",
          "line_height": "26px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "mobile": {
          "size": "18px",
          "line_height": "26px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "usage": "Small component headers, emphasized labels"
      },
      "h6": {
        "desktop": {
          "size": "16px",
          "line_height": "24px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "tablet": {
          "size": "16px",
          "line_height": "24px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "mobile": {
          "size": "16px",
          "line_height": "24px",
          "weight": 600,
          "letter_spacing": "0"
        },
        "usage": "Overlines, small headers, form section labels"
      }
    },
    "body_text": {
      "large": {
        "size": "20px",
        "line_height": "32px",
        "weight": 400,
        "usage": "Hero subtext, important descriptions"
      },
      "base": {
        "size": "16px",
        "line_height": "26px",
        "weight": 400,
        "usage": "Primary body text, descriptions, form inputs"
      },
      "small": {
        "size": "14px",
        "line_height": "22px",
        "weight": 400,
        "usage": "Helper text, labels, secondary information"
      },
      "caption": {
        "size": "12px",
        "line_height": "18px",
        "weight": 400,
        "usage": "Timestamps, meta information, legal text"
      }
    },
    "ui_text": {
      "button_large": {
        "size": "16px",
        "line_height": "24px",
        "weight": 600,
        "letter_spacing": "0"
      },
      "button_base": {
        "size": "14px",
        "line_height": "20px",
        "weight": 600,
        "letter_spacing": "0"
      },
      "button_small": {
        "size": "12px",
        "line_height": "16px",
        "weight": 600,
        "letter_spacing": "0.01em"
      },
      "label": {
        "size": "14px",
        "line_height": "20px",
        "weight": 500,
        "letter_spacing": "0"
      },
      "input": {
        "size": "16px",
        "line_height": "24px",
        "weight": 400,
        "letter_spacing": "0"
      }
    }
  }
}
```

### 2.4 Logo Specifications

**Primary Logo:**
- Wordmark: "Puzzle" in Inter Bold (700)
- Icon: Interlocking geometric pieces forming a "P"
- Colors: `puzzle_blue` (#2563EB) with `puzzle_indigo` (#4F46E5) accent
- Minimum width: 120px (maintains legibility)
- Clear space: Minimum 1x the height of the logo on all sides

**Logo Variations:**

```json
{
  "logo_variations": {
    "primary_horizontal": {
      "usage": "Desktop header, footer, marketing materials",
      "dimensions": "240px × 48px",
      "format": "SVG preferred, PNG fallback"
    },
    "icon_only": {
      "usage": "Mobile header, favicon, app icon",
      "dimensions": "48px × 48px square",
      "format": "SVG, PNG"
    },
    "white_version": {
      "usage": "Dark backgrounds, hero sections",
      "colors": "White (#FFFFFF) with 90% opacity accent"
    },
    "monochrome": {
      "usage": "Print, single-color applications",
      "color": "neutral_dark (#1F2937)"
    }
  }
}
```

### 2.5 Visual Style Characteristics

```json
{
  "visual_style": {
    "border_radius": {
      "none": "0px",
      "small": "4px",
      "base": "8px",
      "medium": "12px",
      "large": "16px",
      "xlarge": "24px",
      "full": "9999px",
      "usage_rules": {
        "buttons": "8px",
        "cards": "12px",
        "modals": "16px",
        "images": "8px",
        "badges": "9999px (full pill)",
        "inputs": "8px"
      }
    },
    "shadows": {
      "small": {
        "value": "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "usage": "Subtle elevation, hover states"
      },
      "medium": {
        "value": "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)",
        "usage": "Cards, dropdowns, default elevation"
      },
      "large": {
        "value": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
        "usage": "Modals, important elevated content"
      },
      "xlarge": {
        "value": "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
        "usage": "Major focus elements, floating panels"
      }
    },
    "opacity_levels": {
      "disabled": 0.4,
      "hover_overlay": 0.08,
      "active_overlay": 0.12,
      "subtle_background": 0.05,
      "medium_background": 0.1,
      "divider": 0.12
    },
    "transitions": {
      "fast": "150ms cubic-bezier(0.4, 0, 0.2, 1)",
      "base": "200ms cubic-bezier(0.4, 0, 0.2, 1)",
      "slow": "300ms cubic-bezier(0.4, 0, 0.2, 1)",
      "usage": {
        "button_hover": "base",
        "modal_open": "slow",
        "dropdown": "fast",
        "page_transition": "slow"
      }
    }
  }
}
```

---

## 3. Technical Layout Architecture

### 3.1 Complete Site Map

```
Puzzle Platform Structure
│
├── 🏠 Homepage (/)
│   ├── Hero Section
│   ├── Value Proposition
│   ├── Features Overview
│   ├── Quote Builder (Interactive)
│   ├── How It Works
│   ├── [Hidden] Real Results Section
│   ├── Pricing
│   ├── FAQ
│   └── CTA Section
│
├── 📋 Features (/features)
│   ├── AI Automation
│   ├── Tax Compliance
│   ├── Financial Reporting
│   ├── Integrations
│   └── Mobile App
│
├── 💰 Pricing (/pricing)
│   ├── Plan Comparison
│   ├── Quote Builder
│   └── FAQ
│
├── 🎓 Resources (/resources)
│   ├── Blog (/resources/blog)
│   ├── Help Center (/resources/help)
│   ├── Tax Guides (/resources/guides)
│   └── Webinars (/resources/webinars)
│
├── 🏢 For Accountants (/for-accountants)
│   ├── Features
│   ├── Client Management
│   ├── Collaboration Tools
│   └── Partner Program
│
├── ℹ️ Company (/company)
│   ├── About Us (/company/about)
│   ├── Careers (/company/careers)
│   ├── Contact (/company/contact)
│   └── Press (/company/press)
│
├── 🔐 Legal
│   ├── Privacy Policy (/privacy)
│   ├── Terms of Service (/terms)
│   ├── Security (/security)
│   └── GDPR Compliance (/gdpr)
│
└── 🚀 App Portal
    ├── Login (/login)
    ├── Sign Up (/signup)
    └── Dashboard (/app/*)
```

**Primary Navigation (Desktop):**
- Logo (left) → Homepage
- Features (dropdown)
- Pricing
- Resources (dropdown)
- For Accountants
- Language Switcher (EN/NL)
- Login (text link)
- Get Started (primary CTA button)

**Mobile Navigation:**
- Hamburger menu (right)
- Logo (left)
- Full-screen overlay menu on activation

### 3.2 Grid System

```json
{
  "grid_system": {
    "desktop_large": {
      "breakpoint": "1440px+",
      "columns": 12,
      "gutter": "32px",
      "margin": "80px",
      "max_width": "1280px"
    },
    "desktop": {
      "breakpoint": "1024px - 1439px",
      "columns": 12,
      "gutter": "24px",
      "margin": "64px",
      "max_width": "1024px"
    },
    "tablet": {
      "breakpoint": "768px - 1023px",
      "columns": 8,
      "gutter": "20px",
      "margin": "40px",
      "max_width": "768px"
    },
    "mobile": {
      "breakpoint": "0px - 767px",
      "columns": 4,
      "gutter": "16px",
      "margin": "20px",
      "max_width": "100%"
    }
  }
}
```

**Container Implementation:**
```css
.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 80px;
  padding-right: 80px;
}

@media (max-width: 1439px) {
  .container {
    padding-left: 64px;
    padding-right: 64px;
  }
}

@media (max-width: 1023px) {
  .container {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 767px) {
  .container {
    padding-left: 20px;
    padding-right: 20px;
  }
}
```

### 3.3 Spacing System

```json
{
  "spacing_system": {
    "base_unit": "8px",
    "scale": {
      "0": "0px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "8": "32px",
      "10": "40px",
      "12": "48px",
      "16": "64px",
      "20": "80px",
      "24": "96px",
      "32": "128px",
      "40": "160px",
      "48": "192px"
    },
    "component_spacing": {
      "stack_small": "12px",
      "stack_base": "24px",
      "stack_large": "48px",
      "section_small": "64px",
      "section_base": "96px",
      "section_large": "128px",
      "inline_small": "8px",
      "inline_base": "16px",
      "inline_large": "24px"
    }
  }
}
```

**Spacing Usage Rules:**
- Between sections: 96px (desktop), 64px (mobile)
- Between related elements: 24px
- Between UI components: 16px
- Internal padding on cards: 24px (desktop), 20px (mobile)
- Form field spacing: 20px vertical
- Button padding: 12px vertical, 24px horizontal (base size)

### 3.4 Responsive Breakpoints

```json
{
  "breakpoints": {
    "mobile_small": {
      "min": "0px",
      "max": "374px",
      "usage": "Small phones (iPhone SE)"
    },
    "mobile": {
      "min": "375px",
      "max": "767px",
      "usage": "Standard mobile phones"
    },
    "tablet": {
      "min": "768px",
      "max": "1023px",
      "usage": "Tablets, small laptops"
    },
    "desktop": {
      "min": "1024px",
      "max": "1439px",
      "usage": "Standard desktop screens"
    },
    "desktop_large": {
      "min": "1440px",
      "max": "9999px",
      "usage": "Large desktop screens, external monitors"
    }
  }
}
```

**Media Query Implementation:**
```css
/* Mobile First Approach */
/* Base styles are mobile */

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}

@media (min-width: 1440px) {
  /* Large desktop styles */
}
```

### 3.5 Visual Hierarchy Ratios

```json
{
  "hierarchy_ratios": {
    "type_scale": 1.25,
    "element_relationships": {
      "hero_heading_to_subtext": "3:1",
      "section_heading_to_body": "2:1",
      "card_title_to_description": "1.5:1",
      "primary_cta_to_secondary": "1.2:1 (size), 3:1 (visual weight)"
    },
    "white_space_ratios": {
      "heading_top_spacing": "2x line height of heading",
      "heading_bottom_spacing": "0.5x line height of heading",
      "paragraph_spacing": "1.5x line height of body text",
      "section_spacing": "3x base unit (96px)"
    }
  }
}
```

---

## 4. Comprehensive UI Component Library

### 4.1 Hero Section Variations

#### Variation 1: Homepage Hero (Primary)

**Layout Specifications:**
```json
{
  "hero_primary": {
    "height": {
      "desktop": "calc(100vh - 80px)",
      "min_height": "600px",
      "max_height": "900px",
      "mobile": "auto"
    },
    "background": "#FFFFFF",
    "padding": {
      "desktop": "96px 80px",
      "mobile": "64px 20px"
    },
    "content_layout": "centered",
    "max_content_width": "800px",
    "elements": {
      "eyebrow": {
        "text": "AI-Powered Accounting for US Businesses",
        "style": "badge",
        "background": "rgba(37, 99, 235, 0.1)",
        "color": "#2563EB",
        "padding": "8px 16px",
        "border_radius": "9999px",
        "font_size": "14px",
        "font_weight": 600,
        "margin_bottom": "24px"
      },
      "heading": {
        "tag": "h1",
        "max_width": "800px",
        "margin_bottom": "24px",
        "text_align": "center",
        "example_en": "Your Books, Taxes, and Financial Clarity—All in One Place",
        "example_nl": "Uw Boekhouding, Belastingen en Financiële Helderheid—Alles op Één Plek"
      },
      "subheading": {
        "tag": "p",
        "size": "20px",
        "line_height": "32px",
        "color": "#6B7280",
        "max_width": "600px",
        "margin_bottom": "40px",
        "text_align": "center",
        "example_en": "Puzzle automates bookkeeping, ensures tax compliance, and provides real-time financial insights—so you can focus on growing your business.",
        "example_nl": "Puzzle automatiseert boekhouding, zorgt voor belastingnaleving en biedt real-time financiële inzichten—zodat u zich kunt concentreren op groei."
      },
      "cta_group": {
        "layout": "horizontal",
        "gap": "16px",
        "justify": "center",
        "margin_bottom": "48px",
        "buttons": [
          {
            "type": "primary",
            "text_en": "Start Free 30-Day Trial",
            "text_nl": "Start Gratis 30-Dagen Proefperiode",
            "action": "/signup"
          },
          {
            "type": "secondary",
            "text_en": "See How It Works",
            "text_nl": "Zie Hoe Het Werkt",
            "action": "#how-it-works"
          }
        ]
      },
      "trust_signals": {
        "layout": "horizontal",
        "gap": "32px",
        "items": [
          "Bank-level security",
          "GDPR compliant",
          "No credit card required"
        ],
        "style": {
          "font_size": "14px",
          "color": "#6B7280",
          "display": "flex",
          "align_items": "center",
          "icon_size": "16px",
          "icon_color": "#10B981"
        }
      },
      "hero_visual": {
        "type": "dashboard_screenshot",
        "width": "100%",
        "max_width": "1000px",
        "border_radius": "16px",
        "shadow": "large",
        "position": "below_cta",
        "margin_top": "64px"
      }
    }
  }
}
```

#### Variation 2: Feature Page Hero (Secondary)

**Layout Specifications:**
```json
{
  "hero_secondary": {
    "height": {
      "desktop": "400px",
      "mobile": "auto"
    },
    "background": "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
    "padding": {
      "desktop": "80px 80px",
      "mobile": "48px 20px"
    },
    "content_layout": "centered",
    "max_content_width": "700px",
    "elements": {
      "breadcrumb": {
        "display": true,
        "color": "rgba(255, 255, 255, 0.8)",
        "separator": "/",
        "margin_bottom": "16px"
      },
      "heading": {
        "tag": "h1",
        "color": "#FFFFFF",
        "margin_bottom": "16px",
        "text_align": "center"
      },
      "subheading": {
        "tag": "p",
        "size": "18px",
        "color": "rgba(255, 255, 255, 0.9)",
        "max_width": "600px",
        "text_align": "center"
      }
    }
  }
}
```

#### Variation 3: Split Hero with Visual

**Layout Specifications:**
```json
{
  "hero_split": {
    "layout": "two_column",
    "column_ratio": "1:1",
    "gap": "64px",
    "padding": {
      "desktop": "96px 80px",
      "mobile": "64px 20px"
    },
    "background": "#F3F4F6",
    "left_column": {
      "content_type": "text",
      "vertical_alignment": "center",
      "elements": {
        "eyebrow": "same as primary",
        "heading": "left_aligned",
        "subheading": "left_aligned",
        "cta_group": "left_aligned",
        "feature_list": {
          "display": true,
          "items": 4,
          "icon": "checkmark",
          "spacing": "16px"
        }
      }
    },
    "right_column": {
      "content_type": "visual",
      "vertical_alignment": "center",
      "visual_type": "illustration or screenshot",
      "max_width": "100%",
      "border_radius": "16px"
    },
    "mobile_behavior": "stack_vertical (text first, then visual)"
  }
}
```

### 4.2 Card Component Variations

#### Card Type 1: Feature Card

```json
{
  "feature_card": {
    "dimensions": {
      "width": "100%",
      "max_width": "384px",
      "min_height": "320px",
      "padding": "32px",
      "border_radius": "12px"
    },
    "background": "#FFFFFF",
    "border": "1px solid rgba(107, 114, 128, 0.2)",
    "shadow": "medium",
    "hover_state": {
      "transform": "translateY(-4px)",
      "shadow": "large",
      "border_color": "#2563EB",
      "transition": "200ms cubic-bezier(0.4, 0, 0.2, 1)"
    },
    "elements": {
      "icon": {
        "size": "48px",
        "color": "#2563EB",
        "background": "rgba(37, 99, 235, 0.1)",
        "padding": "12px",
        "border_radius": "12px",
        "margin_bottom": "20px"
      },
      "title": {
        "tag": "h3",
        "size": "20px",
        "weight": 600,
        "color": "#1F2937",
        "margin_bottom": "12px"
      },
      "description": {
        "size": "16px",
        "line_height": "26px",
        "color": "#6B7280",
        "margin_bottom": "20px"
      },
      "cta_link": {
        "text": "Learn more →",
        "color": "#2563EB",
        "font_weight": 600,
        "hover_color": "#1E40AF",
        "text_decoration": "none"
      }
    }
  }
}
```

#### Card Type 2: Pricing Card

```json
{
  "pricing_card": {
    "dimensions": {
      "width": "100%",
      "max_width": "400px",
      "padding": "40px 32px",
      "border_radius": "16px"
    },
    "variants": {
      "standard": {
        "background": "#FFFFFF",
        "border": "2px solid rgba(107, 114, 128, 0.2)",
        "shadow": "medium"
      },
      "featured": {
        "background": "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
        "border": "none",
        "shadow": "xlarge",
        "text_color": "#FFFFFF",
        "badge": {
          "text": "Most Popular",
          "background": "#F59E0B",
          "position": "top_right_absolute",
          "offset": "-16px"
        }
      }
    },
    "elements": {
      "plan_name": {
        "size": "14px",
        "weight": 600,
        "text_transform": "uppercase",
        "letter_spacing": "0.05em",
        "margin_bottom": "8px"
      },
      "price": {
        "size": "48px",
        "weight": 700,
        "margin_bottom": "4px",
        "structure": "<currency>€</currency><amount>699</amount><period>/month</period>",
        "period_size": "18px",
        "period_weight": 400
      },
      "description": {
        "size": "14px",
        "line_height": "22px",
        "margin_bottom": "24px",
        "opacity": 0.8
      },
      "feature_list": {
        "margin_bottom": "32px",
        "item_spacing": "12px",
        "icon": "checkmark",
        "icon_color": "#10B981",
        "icon_size": "20px",
        "text_size": "14px"
      },
      "cta_button": {
        "width": "100%",
        "text": "Get Started",
        "variant": "primary (standard) or white (featured)"
      }
    }
  }
}
```

#### Card Type 3: Testimonial Card

```json
{
  "testimonial_card": {
    "dimensions": {
      "width": "100%",
      "max_width": "400px",
      "padding": "32px",
      "border_radius": "12px"
    },
    "background": "#F3F4F6",
    "border": "1px solid rgba(107, 114, 128, 0.15)",
    "elements": {
      "quote_icon": {
        "size": "32px",
        "color": "rgba(37, 99, 235, 0.2)",
        "margin_bottom": "16px"
      },
      "quote_text": {
        "size": "16px",
        "line_height": "26px",
        "color": "#1F2937",
        "font_style": "normal",
        "margin_bottom": "24px"
      },
      "author_section": {
        "layout": "flex",
        "gap": "16px",
        "align_items": "center",
        "elements": {
          "avatar": {
            "size": "48px",
            "border_radius": "9999px",
            "border": "2px solid #FFFFFF"
          },
          "author_info": {
            "name": {
              "size": "14px",
              "weight": 600,
              "color": "#1F2937",
              "margin_bottom": "2px"
            },
            "title": {
              "size": "12px",
              "color": "#6B7280"
            }
          }
        }
      }
    }
  }
}
```

#### Card Type 4: Stat Card

```json
{
  "stat_card": {
    "dimensions": {
      "width": "100%",
      "padding": "24px",
      "border_radius": "12px"
    },
    "background": "#FFFFFF",
    "border": "1px solid rgba(107, 114, 128, 0.2)",
    "text_align": "center",
    "elements": {
      "icon": {
        "size": "32px",
        "color": "#2563EB",
        "margin_bottom": "12px"
      },
      "stat_value": {
        "size": "36px",
        "weight": 700,
        "color": "#1F2937",
        "margin_bottom": "8px",
        "examples": ["10+", "98%", "$50K", "24/7"]
      },
      "stat_label": {
        "size": "14px",
        "color": "#6B7280",
        "line_height": "22px"
      }
    }
  }
}
```

### 4.3 Button System

```json
{
  "buttons": {
    "sizes": {
      "large": {
        "height": "56px",
        "padding_horizontal": "32px",
        "font_size": "16px",
        "font_weight": 600,
        "border_radius": "8px",
        "icon_size": "20px",
        "icon_gap": "12px"
      },
      "base": {
        "height": "48px",
        "padding_horizontal": "24px",
        "font_size": "14px",
        "font_weight": 600,
        "border_radius": "8px",
        "icon_size": "18px",
        "icon_gap": "10px"
      },
      "small": {
        "height": "40px",
        "padding_horizontal": "20px",
        "font_size": "14px",
        "font_weight": 600,
        "border_radius": "8px",
        "icon_size": "16px",
        "icon_gap": "8px"
      }
    },
    "variants": {
      "primary": {
        "background": "#2563EB",
        "color": "#FFFFFF",
        "border": "none",
        "shadow": "0 1px 3px rgba(37, 99, 235, 0.3)",
        "states": {
          "hover": {
            "background": "#1E40AF",
            "shadow": "0 4px 6px rgba(37, 99, 235, 0.4)",
            "transform": "translateY(-2px)"
          },
          "active": {
            "background": "#1E3A8A",
            "shadow": "0 1px 2px rgba(37, 99, 235, 0.3)",
            "transform": "translateY(0)"
          },
          "disabled": {
            "background": "#2563EB",
            "opacity": 0.4,
            "cursor": "not-allowed"
          },
          "loading": {
            "opacity": 0.8,
            "cursor": "wait",
            "icon": "spinner animation"
          }
        }
      },
      "secondary": {
        "background": "#FFFFFF",
        "color": "#2563EB",
        "border": "2px solid #2563EB",
        "shadow": "none",
        "states": {
          "hover": {
            "background": "rgba(37, 99, 235, 0.05)",
            "border_color": "#1E40AF",
            "color": "#1E40AF"
          },
          "active": {
            "background": "rgba(37, 99, 235, 0.1)"
          },
          "disabled": {
            "opacity": 0.4,
            "cursor": "not-allowed"
          }
        }
      },
      "ghost": {
        "background": "transparent",
        "color": "#2563EB",
        "border": "none",
        "shadow": "none",
        "states": {
          "hover": {
            "background": "rgba(37, 99, 235, 0.08)",
            "color": "#1E40AF"
          },
          "active": {
            "background": "rgba(37, 99, 235, 0.12)"
          },
          "disabled": {
            "opacity": 0.4,
            "cursor": "not-allowed"
          }
        }
      },
      "destructive": {
        "background": "#EF4444",
        "color": "#FFFFFF",
        "border": "none",
        "states": {
          "hover": {
            "background": "#DC2626"
          },
          "active": {
            "background": "#B91C1C"
          }
        }
      }
    },
    "icon_positions": ["left", "right", "only"],
    "full_width": {
      "width": "100%",
      "justify_content": "center"
    }
  }
}
```

**Button Usage Rules:**
- Primary: Main actions (Sign up, Start trial, Submit)
- Secondary: Alternative actions (Learn more, Contact sales)
- Ghost: Tertiary actions (Cancel, Skip, Back)
- Destructive: Delete, Remove, Cancel subscription

### 4.4 Form Elements

```json
{
  "form_elements": {
    "text_input": {
      "height": "48px",
      "padding": "12px 16px",
      "border": "1px solid rgba(107, 114, 128, 0.3)",
      "border_radius": "8px",
      "background": "#FFFFFF",
      "font_size": "16px",
      "font_weight": 400,
      "color": "#1F2937",
      "placeholder_color": "#9CA3AF",
      "states": {
        "focus": {
          "border_color": "#2563EB",
          "border_width": "2px",
          "outline": "none",
          "shadow": "0 0 0 3px rgba(37, 99, 235, 0.1)"
        },
        "error": {
          "border_color": "#EF4444",
          "background": "rgba(239, 68, 68, 0.05)"
        },
        "success": {
          "border_color": "#10B981"
        },
        "disabled": {
          "background": "#F3F4F6",
          "color": "#9CA3AF",
          "cursor": "not-allowed"
        }
      },
      "label": {
        "font_size": "14px",
        "font_weight": 500,
        "color": "#1F2937",
        "margin_bottom": "8px",
        "required_indicator": "*",
        "required_color": "#EF4444"
      },
      "helper_text": {
        "font_size": "12px",
        "color": "#6B7280",
        "margin_top": "6px"
      },
      "error_text": {
        "font_size": "12px",
        "color": "#EF4444",
        "margin_top": "6px",
        "icon": "alert-circle",
        "icon_size": "14px"
      }
    },
    "textarea": {
      "min_height": "120px",
      "padding": "12px 16px",
      "resize": "vertical",
      "all_other_properties": "same as text_input"
    },
    "select_dropdown": {
      "height": "48px",
      "padding": "12px 16px",
      "padding_right": "40px",
      "appearance": "none",
      "background_image": "chevron-down icon",
      "icon_position": "right 16px center",
      "all_other_properties": "same as text_input",
      "dropdown_menu": {
        "background": "#FFFFFF",
        "border": "1px solid rgba(107, 114, 128, 0.3)",
        "border_radius": "8px",
        "shadow": "large",
        "max_height": "300px",
        "overflow_y": "auto",
        "option": {
          "padding": "12px 16px",
          "hover_background": "rgba(37, 99, 235, 0.08)",
          "selected_background": "rgba(37, 99, 235, 0.1)",
          "selected_color": "#2563EB"
        }
      }
    },
    "checkbox": {
      "size": "20px",
      "border": "2px solid rgba(107, 114, 128, 0.3)",
      "border_radius": "4px",
      "background": "#FFFFFF",
      "states": {
        "checked": {
          "background": "#2563EB",
          "border_color": "#2563EB",
          "icon": "checkmark",
          "icon_color": "#FFFFFF"
        },
        "hover": {
          "border_color": "#2563EB"
        },
        "focus": {
          "outline": "2px solid rgba(37, 99, 235, 0.3)",
          "outline_offset": "2px"
        }
      },
      "label": {
        "font_size": "14px",
        "color": "#1F2937",
        "margin_left": "12px",
        "cursor": "pointer"
      }
    },
    "radio_button": {
      "size": "20px",
      "border": "2px solid rgba(107, 114, 128, 0.3)",
      "border_radius": "9999px",
      "background": "#FFFFFF",
      "states": {
        "checked": {
          "border_color": "#2563EB",
          "inner_circle": {
            "size": "10px",
            "background": "#2563EB"
          }
        },
        "hover": {
          "border_color": "#2563EB"
        }
      },
      "label": "same as checkbox"
    },
    "toggle_switch": {
      "width": "44px",
      "height": "24px",
      "border_radius": "9999px",
      "background": "rgba(107, 114, 128, 0.3)",
      "states": {
        "checked": {
          "background": "#2563EB"
        }
      },
      "toggle_circle": {
        "size": "20px",
        "background": "#FFFFFF",
        "shadow": "0 2px 4px rgba(0, 0, 0, 0.2)",
        "position": {
          "unchecked": "2px from left",
          "checked": "2px from right"
        },
        "transition": "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }
  }
}
```

### 4.5 Navigation Components

#### Desktop Header

```json
{
  "desktop_header": {
    "height": "80px",
    "background": "#FFFFFF",
    "border_bottom": "1px solid rgba(107, 114, 128, 0.15)",
    "shadow": "0 1px 3px rgba(0, 0, 0, 0.05)",
    "position": "sticky",
    "top": "0",
    "z_index": 1000,
    "padding": "0 80px",
    "layout": {
      "display": "flex",
      "justify_content": "space-between",
      "align_items": "center"
    },
    "logo_section": {
      "width": "auto",
      "logo_width": "140px"
    },
    "nav_links": {
      "display": "flex",
      "gap": "32px",
      "link_style": {
        "font_size": "14px",
        "font_weight": 500,
        "color": "#1F2937",
        "text_decoration": "none",
        "padding": "8px 12px",
        "border_radius": "6px",
        "transition": "background 150ms",
        "hover": {
          "color": "#2563EB",
          "background": "rgba(37, 99, 235, 0.05)"
        },
        "active": {
          "color": "#2563EB",
          "font_weight": 600
        }
      },
      "dropdown": {
        "trigger": {
          "icon": "chevron-down",
          "icon_size": "16px",
          "icon_margin_left": "4px"
        },
        "menu": {
          "position": "absolute",
          "top": "calc(100% + 8px)",
          "background": "#FFFFFF",
          "border": "1px solid rgba(107, 114, 128, 0.15)",
          "border_radius": "12px",
          "shadow": "large",
          "padding": "8px",
          "min_width": "240px",
          "item": {
            "padding": "12px 16px",
            "border_radius": "8px",
            "hover_background": "rgba(37, 99, 235, 0.05)",
            "icon": {
              "size": "20px",
              "margin_right": "12px",
              "color": "#2563EB"
            },
            "text": {
              "title": {
                "font_size": "14px",
                "font_weight": 500,
                "color": "#1F2937"
              },
              "description": {
                "font_size": "12px",
                "color": "#6B7280",
                "margin_top": "2px"
              }
            }
          }
        }
      }
    },
    "actions_section": {
      "display": "flex",
      "gap": "16px",
      "align_items": "center",
      "language_switcher": {
        "type": "dropdown",
        "current_lang": "EN or NL",
        "width": "80px",
        "height": "40px"
      },
      "login_link": {
        "type": "text",
        "font_size": "14px",
        "font_weight": 500,
        "color": "#1F2937",
        "hover_color": "#2563EB"
      },
      "cta_button": {
        "variant": "primary",
        "size": "base",
        "text": "Get Started"
      }
    }
  }
}
```

#### Mobile Header

```json
{
  "mobile_header": {
    "height": "64px",
    "background": "#FFFFFF",
    "border_bottom": "1px solid rgba(107, 114, 128, 0.15)",
    "position": "sticky",
    "top": "0",
    "z_index": 1000,
    "padding": "0 20px",
    "layout": {
      "display": "flex",
      "justify_content": "space-between",
      "align_items": "center"
    },
    "logo": {
      "width": "120px"
    },
    "hamburger_menu": {
      "width": "32px",
      "height": "32px",
      "icon": "three horizontal lines",
      "icon_color": "#1F2937",
      "active_icon": "X close icon",
      "tap_target": "44px minimum"
    },
    "mobile_menu": {
      "type": "full_screen_overlay",
      "background": "#FFFFFF",
      "animation": "slide from right",
      "duration": "300ms",
      "padding": "80px 20px 40px 20px",
      "nav_links": {
        "display": "flex",
        "flex_direction": "column",
        "gap": "0",
        "link": {
          "padding": "16px 0",
          "border_bottom": "1px solid rgba(107, 114, 128, 0.15)",
          "font_size": "18px",
          "font_weight": 500,
          "color": "#1F2937"
        }
      },
      "actions": {
        "position": "bottom",
        "padding": "24px 0",
        "gap": "12px",
        "buttons": {
          "login": {
            "variant": "ghost",
            "size": "large",
            "full_width": true
          },
          "cta": {
            "variant": "primary",
            "size": "large",
            "full_width": true
          }
        }
      }
    }
  }
}
```

#### Footer

```json
{
  "footer": {
    "background": "#1F2937",
    "color": "#FFFFFF",
    "padding": {
      "desktop": "80px 80px 40px 80px",
      "mobile": "48px 20px 24px 20px"
    },
    "layout": {
      "main_section": {
        "display": "grid",
        "columns": {
          "desktop": "2fr 1fr 1fr 1fr 1fr",
          "tablet": "2fr 1fr 1fr",
          "mobile": "1fr"
        },
        "gap": "48px",
        "margin_bottom": "48px"
      },
      "brand_column": {
        "logo": {
          "variant": "white",
          "margin_bottom": "16px"
        },
        "tagline": {
          "font_size": "14px",
          "color": "rgba(255, 255, 255, 0.7)",
          "line_height": "22px",
          "margin_bottom": "24px",
          "max_width": "300px"
        },
        "social_links": {
          "display": "flex",
          "gap": "16px",
          "icon_size": "24px",
          "color": "rgba(255, 255, 255, 0.7)",
          "hover_color": "#2563EB"
        }
      },
      "link_columns": {
        "heading": {
          "font_size": "14px",
          "font_weight": 600,
          "text_transform": "uppercase",
          "letter_spacing": "0.05em",
          "margin_bottom": "16px",
          "color": "#FFFFFF"
        },
        "links": {
          "display": "flex",
          "flex_direction": "column",
          "gap": "12px",
          "link": {
            "font_size": "14px",
            "color": "rgba(255, 255, 255, 0.7)",
            "text_decoration": "none",
            "hover_color": "#FFFFFF",
            "transition": "color 150ms"
          }
        }
      },
      "bottom_section": {
        "border_top": "1px solid rgba(255, 255, 255, 0.1)",
        "padding_top": "24px",
        "display": "flex",
        "justify_content": "space-between",
        "align_items": "center",
        "mobile_flex_direction": "column",
        "mobile_gap": "16px",
        "copyright": {
          "font_size": "12px",
          "color": "rgba(255, 255, 255, 0.5)"
        },
        "legal_links": {
          "display": "flex",
          "gap": "24px",
          "font_size": "12px",
          "color": "rgba(255, 255, 255, 0.7)"
        }
      }
    }
  }
}
```

### 4.6 Icon System

```json
{
  "icon_system": {
    "style": "outline (primary), solid (emphasis)",
    "stroke_width": "2px",
    "library": "Lucide React or Heroicons",
    "sizes": {
      "small": "16px",
      "base": "20px",
      "medium": "24px",
      "large": "32px",
      "xlarge": "48px"
    },
    "categories": {
      "navigation": [
        "menu",
        "close",
        "chevron-down",
        "chevron-right",
        "arrow-right",
        "external-link"
      ],
      "features": [
        "zap (automation)",
        "shield-check (security)",
        "bar-chart (analytics)",
        "cloud (cloud-based)",
        "clock (time-saving)",
        "check-circle (completed)"
      ],
      "financial": [
        "dollar-sign",
        "trending-up",
        "file-text (invoices)",
        "calculator",
        "credit-card",
        "receipt"
      ],
      "user_actions": [
        "upload",
        "download",
        "search",
        "filter",
        "settings",
        "user"
      ],
      "feedback": [
        "check",
        "alert-triangle",
        "alert-circle",
        "info",
        "x-circle"
      ]
    },
    "color_usage": {
      "default": "#6B7280",
      "primary": "#2563EB",
      "success": "#10B981",
      "warning": "#F59E0B",
      "error": "#EF4444",
      "info": "#06B6D4"
    }
  }
}
```

---

## 5. Dynamic Quote Builder Feature Specification

### 5.1 Feature Overview

The Quote Builder is an interactive tool that allows users to describe their business needs in natural language. As they type, their input transforms into visual "bubbles" that represent selected features, providing immediate visual feedback and price calculation.

### 5.2 Input Field Specifications

```json
{
  "quote_builder_input": {
    "container": {
      "max_width": "800px",
      "margin": "0 auto",
      "padding": "48px 0"
    },
    "input_field": {
      "height": "64px",
      "padding": "20px 24px",
      "border": "2px solid #2563EB",
      "border_radius": "12px",
      "background": "#FFFFFF",
      "shadow": "0 4px 6px rgba(37, 99, 235, 0.1)",
      "font_size": "18px",
      "font_weight": 400,
      "color": "#1F2937",
      "placeholder": {
        "text_en": "Describe your business needs... (e.g., 'I need bookkeeping, tax prep, and monthly reports')",
        "text_nl": "Beschrijf uw zakelijke behoeften... (bijv. 'Ik heb boekhouding, belastingvoorbereiding en maandelijkse rapporten nodig')",
        "color": "#9CA3AF",
        "font_style": "italic"
      },
      "focus_state": {
        "border_color": "#1E40AF",
        "shadow": "0 4px 12px rgba(37, 99, 235, 0.2)",
        "outline": "none"
      }
    },
    "submit_button": {
      "type": "icon_button",
      "position": "absolute_right_inside",
      "right": "8px",
      "size": "48px",
      "border_radius": "8px",
      "background": "#2563EB",
      "icon": "arrow-right or magic-wand",
      "icon_color": "#FFFFFF",
      "icon_size": "20px",
      "hover": {
        "background": "#1E40AF",
        "transform": "scale(1.05)"
      }
    },
    "ai_indicator": {
      "position": "below_input",
      "margin_top": "12px",
      "display": "flex",
      "align_items": "center",
      "gap": "8px",
      "icon": "sparkles or cpu",
      "icon_size": "16px",
      "icon_color": "#4F46E5",
      "text": {
        "content_en": "AI analyzing your needs...",
        "content_nl": "AI analyseert uw behoeften...",
        "font_size": "12px",
        "color": "#6B7280",
        "font_style": "italic"
      },
      "loading_animation": "pulse",
      "visible_when": "processing"
    }
  }
}
```

### 5.3 Text-to-Bubble Transformation

```json
{
  "bubble_transformation": {
    "trigger": "submit button click or Enter key",
    "animation_sequence": [
      {
        "step": 1,
        "action": "parse_input",
        "duration": "500ms",
        "description": "AI processes text and identifies features"
      },
      {
        "step": 2,
        "action": "create_bubbles",
        "duration": "300ms per bubble",
        "stagger_delay": "100ms",
        "description": "Bubbles appear one by one with animation"
      },
      {
        "step": 3,
        "action": "calculate_price",
        "duration": "200ms",
        "description": "Price counter animates to final value"
      },
      {
        "step": 4,
        "action": "clear_input",
        "duration": "200ms",
        "description": "Input field clears and refocuses"
      }
    ],
    "animation_easing": "cubic-bezier(0.34, 1.56, 0.64, 1)",
    "animation_properties": {
      "transform": "scale(0.8) → scale(1)",
      "opacity": "0 → 1",
      "transform_origin": "center"
    }
  }
}
```

### 5.4 Bubble Styling

```json
{
  "bubble_component": {
    "dimensions": {
      "height": "40px",
      "padding": "10px 16px",
      "border_radius": "9999px"
    },
    "variants": {
      "default": {
        "background": "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
        "color": "#FFFFFF",
        "border": "none",
        "shadow": "0 2px 4px rgba(37, 99, 235, 0.3)"
      },
      "hover": {
        "background": "linear-gradient(135deg, #1E40AF 0%, #4338CA 100%)",
        "shadow": "0 4px 8px rgba(37, 99, 235, 0.4)",
        "transform": "translateY(-2px)",
        "cursor": "pointer"
      },
      "selected": {
        "border": "2px solid #F59E0B",
        "shadow": "0 0 0 4px rgba(245, 158, 11, 0.2)"
      }
    },
    "typography": {
      "font_size": "14px",
      "font_weight": 600,
      "letter_spacing": "0.01em",
      "text_transform": "none"
    },
    "icon": {
      "position": "left",
      "size": "16px",
      "margin_right": "8px",
      "color": "#FFFFFF"
    },
    "close_button": {
      "position": "right",
      "size": "20px",
      "margin_left": "8px",
      "icon": "x",
      "icon_size": "14px",
      "opacity": 0.7,
      "hover_opacity": 1,
      "visible_on": "hover only"
    },
    "price_badge": {
      "display": "optional",
      "position": "right",
      "background": "rgba(255, 255, 255, 0.2)",
      "padding": "2px 8px",
      "border_radius": "4px",
      "font_size": "12px",
      "font_weight": 700,
      "margin_left": "8px"
    }
  }
}
```

### 5.5 Layout Behavior

```json
{
  "bubble_layout": {
    "container": {
      "display": "flex",
      "flex_wrap": "wrap",
      "gap": "12px",
      "margin_top": "32px",
      "padding": "32px",
      "background": "rgba(37, 99, 235, 0.03)",
      "border": "1px dashed rgba(37, 99, 235, 0.2)",
      "border_radius": "12px",
      "min_height": "120px"
    },
    "responsive_behavior": {
      "desktop": {
        "max_bubbles_per_row": "auto (flex-wrap)",
        "justify_content": "flex-start"
      },
      "tablet": {
        "max_bubbles_per_row": "auto (flex-wrap)",
        "justify_content": "flex-start"
      },
      "mobile": {
        "flex_direction": "column (if needed for long text)",
        "bubbles_full_width": false
      }
    },
    "empty_state": {
      "display": "when no bubbles",
      "text_en": "Your selected features will appear here",
      "text_nl": "Uw geselecteerde functies verschijnen hier",
      "font_size": "14px",
      "color": "#9CA3AF",
      "text_align": "center",
      "icon": "cursor-click",
      "icon_size": "32px",
      "icon_color": "rgba(37, 99, 235, 0.2)",
      "icon_position": "above_text",
      "icon_margin_bottom": "12px"
    }
  }
}
```

### 5.6 User Interaction Flows

**Adding Features:**
1. User types description in input field
2. Clicks submit button or presses Enter
3. AI processes text (500ms loading indicator)
4. Identified features animate into bubble container
5. Price updates with counter animation
6. Input field clears and refocuses

**Editing Bubbles:**
1. User hovers over bubble
2. Close button (X) fades in
3. Click close button
4. Bubble animates out (scale down + fade)
5. Price recalculates with animation
6. Layout reflows smoothly

**Manual Feature Selection:**
1. Below input, display "Popular Features" section
2. Show 8-10 pre-defined feature buttons
3. Click button → transforms into bubble
4. Button becomes disabled/selected state
5. Click bubble → removes and re-enables button

**Keyboard Navigation:**
- Tab: Navigate through input and bubbles
- Enter: Submit input or remove focused bubble
- Escape: Clear all bubbles (with confirmation)
- Arrow keys: Navigate between bubbles

### 5.7 Pricing Integration

```json
{
  "pricing_display": {
    "position": "right_side or below_bubbles",
    "container": {
      "padding": "32px",
      "background": "#FFFFFF",
      "border": "2px solid #2563EB",
      "border_radius": "12px",
      "shadow": "large",
      "sticky": true,
      "top": "96px"
    },
    "elements": {
      "heading": {
        "text_en": "Your Custom Quote",
        "text_nl": "Uw Aangepaste Offerte",
        "font_size": "18px",
        "font_weight": 600,
        "margin_bottom": "16px"
      },
      "feature_list": {
        "display": "dynamic",
        "items": "from bubbles",
        "item_style": {
          "padding": "8px 0",
          "border_bottom": "1px solid rgba(107, 114, 128, 0.1)",
          "display": "flex",
          "justify_content": "space-between",
          "font_size": "14px"
        }
      },
      "subtotal": {
        "margin_top": "16px",
        "padding_top": "16px",
        "border_top": "2px solid rgba(107, 114, 128, 0.2)",
        "display": "flex",
        "justify_content": "space-between",
        "font_size": "16px",
        "font_weight": 600
      },
      "total_price": {
        "margin_top": "12px",
        "font_size": "36px",
        "font_weight": 700,
        "color": "#2563EB",
        "animation": "counter from previous to new value",
        "duration": "500ms",
        "starting_price": "€699",
        "includes_text": {
          "text_en": "Includes domain and hosting",
          "text_nl": "Inclusief domein en hosting",
          "font_size": "12px",
          "color": "#6B7280",
          "margin_top": "4px"
        }
      },
      "cta_button": {
        "variant": "primary",
        "size": "large",
        "full_width": true,
        "margin_top": "24px",
        "text_en": "Get Started",
        "text_nl": "Begin Nu"
      },
      "trust_badge": {
        "text_en": "No credit card required • Cancel anytime",
        "text_nl": "Geen creditcard vereist • Altijd opzegbaar",
        "font_size": "12px",
        "color": "#6B7280",
        "text_align": "center",
        "margin_top": "12px"
      }
    }
  }
}
```

### 5.8 AI Feature Detection Keywords

```json
{
  "keyword_mapping": {
    "bookkeeping": {
      "keywords": ["bookkeeping", "books", "transactions", "entries", "ledger", "boekhouding"],
      "feature": "Automated Bookkeeping",
      "icon": "book-open",
      "base_price": 0
    },
    "tax_prep": {
      "keywords": ["tax", "taxes", "tax prep", "filing", "returns", "belasting", "aangifte"],
      "feature": "Tax Preparation",
      "icon": "file-text",
      "base_price": 0
    },
    "invoicing": {
      "keywords": ["invoice", "invoices", "billing", "bills", "factuur", "facturering"],
      "feature": "Invoicing",
      "icon": "receipt",
      "base_price": 0
    },
    "payroll": {
      "keywords": ["payroll", "salary", "wages", "employees", "loonlijst"],
      "feature": "Payroll Integration",
      "icon": "users",
      "additional_price": 99
    },
    "reports": {
      "keywords": ["report", "reports", "analytics", "dashboard", "insights", "rapporten"],
      "feature": "Financial Reports",
      "icon": "bar-chart",
      "base_price": 0
    },
    "bank_sync": {
      "keywords": ["bank", "connect", "sync", "integration", "bankkoppeling"],
      "feature": "Bank Synchronization",
      "icon": "link",
      "base_price": 0
    },
    "receipts": {
      "keywords": ["receipt", "receipts", "scan", "ocr", "bonnetjes"],
      "feature": "Receipt Scanning",
      "icon": "camera",
      "base_price": 0
    },
    "multi_currency": {
      "keywords": ["currency", "multi-currency", "international", "forex", "valuta"],
      "feature": "Multi-Currency",
      "icon": "globe",
      "additional_price": 49
    }
  }
}
```

---

## 6. Content Architecture & Messaging

### 6.1 Homepage Section Sequence

```json
{
  "homepage_sections": [
    {
      "section_number": 1,
      "name": "Hero",
      "purpose": "Capture attention and communicate core value proposition",
      "background": "#FFFFFF",
      "padding": "96px 0",
      "content_requirements": {
        "headline": "Clear benefit statement (8-12 words)",
        "subheadline": "Expand on benefit (20-30 words)",
        "cta_primary": "Start Free 30-Day Trial",
        "cta_secondary": "See How It Works",
        "visual": "Dashboard screenshot or product demo",
        "trust_signals": ["Security badge", "Compliance badge", "No CC required"]
      }
    },
    {
      "section_number": 2,
      "name": "Social Proof Bar",
      "purpose": "Build immediate credibility",
      "background": "#F3F4F6",
      "padding": "32px 0",
      "content_requirements": {
        "text": "Trusted by 10,000+ businesses",
        "logos": "5-7 recognizable client logos",
        "layout": "horizontal scroll on mobile"
      }
    },
    {
      "section_number": 3,
      "name": "Value Propositions",
      "purpose": "Explain three main benefits",
      "background": "#FFFFFF",
      "padding": "96px 0",
      "content_requirements": {
        "heading": "Why Puzzle?",
        "cards": 3,
        "card_structure": {
          "icon": "Feature-specific",
          "title": "Benefit-focused (4-6 words)",
          "description": "Explain how (40-60 words)",
          "cta": "Learn more link"
        }
      }
    },
    {
      "section_number": 4,
      "name": "Quote Builder",
      "purpose": "Interactive engagement and lead generation",
      "background": "linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%)",
      "padding": "96px 0",
      "content_requirements": {
        "heading": "Build Your Custom Package",
        "subheading": "Tell us what you need, get instant pricing",
        "input_field": "As specified in section 5",
        "pricing_display": "Starting at €699",
        "cta": "Get Started"
      }
    },
    {
      "section_number": 5,
      "name": "Features Deep Dive",
      "purpose": "Detail all features with visuals",
      "background": "#FFFFFF",
      "padding": "96px 0",
      "content_requirements": {
        "heading": "Everything You Need to Run Your Business",
        "layout": "alternating text/image",
        "items": 6,
        "item_structure": {
          "heading": "Feature name",
          "description": "Detailed benefit (80-120 words)",
          "screenshot": "Feature in action",
          "list": "3-5 sub-features"
        }
      }
    },
    {
      "section_number": 6,
      "name": "How It Works",
      "purpose": "Simplify the onboarding process",
      "background": "#F3F4F6",
      "padding": "96px 0",
      "content_requirements": {
        "heading": "Get Started in Minutes, Not Hours",
        "steps": 4,
        "step_structure": {
          "number": "1-4",
          "title": "Action-oriented (3-5 words)",
          "description": "Clear explanation (30-50 words)",
          "icon": "Step-specific",
          "estimated_time": "e.g., '2 minutes'"
        },
        "cta": "Start Your Free Trial"
      }
    },
    {
      "section_number": 7,
      "name": "Real Results, Real Fast [HIDDEN]",
      "purpose": "Showcase client success stories (future activation)",
      "background": "#FFFFFF",
      "padding": "96px 0",
      "display": "none",
      "data_attribute": "data-future-section='true'",
      "content_requirements": {
        "heading": "Real Results, Real Fast",
        "subheading": "See how businesses like yours save time and money with Puzzle",
        "testimonial_cards": 6,
        "card_structure": {
          "quote": "Client testimonial (60-100 words)",
          "metrics": "Specific results (e.g., 'Saved 15 hours/month')",
          "author": "Name, role, company",
          "avatar": "Photo",
          "industry": "Business type"
        },
        "cta": "Read More Success Stories"
      },
      "implementation_note": "Build complete structure with placeholder content. Add CSS class '.hidden-section { display: none; }'. Ready for activation via CMS toggle."
    },
    {
      "section_number": 8,
      "name": "Pricing",
      "purpose": "Clear pricing transparency",
      "background": "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
      "padding": "96px 0",
      "text_color": "#FFFFFF",
      "content_requirements": {
        "heading": "Simple, Transparent Pricing",
        "subheading": "Everything included. No hidden fees.",
        "pricing_cards": 3,
        "starting_price": "€699/month",
        "includes": [
          "Unlimited transactions",
          "All features included",
          "Domain and hosting",
          "Email support",
          "Free 30-day trial"
        ],
        "faq_link": "See pricing FAQ",
        "cta": "Start Free Trial"
      }
    },
    {
      "section_number": 9,
      "name": "FAQ",
      "purpose": "Address common objections and questions",
      "background": "#FFFFFF",
      "padding": "96px 0",
      "content_requirements": {
        "heading": "Frequently Asked Questions",
        "questions": 8,
        "layout": "accordion",
        "categories": [
          "Getting Started",
          "Features",
          "Pricing & Billing",
          "Security & Compliance"
        ]
      }
    },
    {
      "section_number": 10,
      "name": "Final CTA",
      "purpose": "Last conversion opportunity",
      "background": "#F3F4F6",
      "padding": "96px 0",
      "content_requirements": {
        "heading": "Ready to Simplify Your Finances?",
        "subheading": "Join thousands of businesses saving time with Puzzle",
        "cta_primary": "Start Free 30-Day Trial",
        "trust_signals": ["No credit card", "Cancel anytime", "Setup in 5 min"]
      }
    }
  ]
}
```

### 6.2 Trust Signal Placement Strategy

```json
{
  "trust_signals": {
    "hero_section": {
      "position": "below_cta_buttons",
      "signals": [
        {
          "type": "security_badge",
          "icon": "shield-check",
          "text": "Bank-level security",
          "size": "small"
        },
        {
          "type": "compliance_badge",
          "icon": "check-circle",
          "text": "GDPR compliant",
          "size": "small"
        },
        {
          "type": "trial_badge",
          "icon": "credit-card-off",
          "text": "No credit card required",
          "size": "small"
        }
      ],
      "layout": "horizontal",
      "gap": "24px"
    },
    "footer_above": {
      "position": "before_footer",
      "background": "#1F2937",
      "padding": "48px 0",
      "signals": [
        {
          "type": "certification",
          "image": "SOC 2 badge",
          "size": "80px"
        },
        {
          "type": "certification",
          "image": "GDPR badge",
          "size": "80px"
        },
        {
          "type": "certification",
          "image": "SSL badge",
          "size": "80px"
        },
        {
          "type": "certification",
          "image": "PCI DSS badge",
          "size": "80px"
        }
      ],
      "layout": "horizontal_centered",
      "gap": "40px"
    },
    "pricing_cards": {
      "position": "bottom_of_each_card",
      "signals": [
        "14-day money-back guarantee",
        "Cancel anytime",
        "Secure payment"
      ]
    },
    "throughout_site": {
      "security_messaging": {
        "placement": "footer",
        "text": "Your data is encrypted with 256-bit SSL and stored in SOC 2 compliant data centers"
      }
    }
  }
}
```

### 6.3 Call-to-Action Hierarchy

```json
{
  "cta_hierarchy": {
    "primary_cta": {
      "text_en": "Start Free 30-Day Trial",
      "text_nl": "Start Gratis 30-Dagen Proefperiode",
      "variant": "primary button",
      "size": "large",
      "placement": [
        "Hero section",
        "After features section",
        "After how it works",
        "Final CTA section",
        "Sticky header (scroll down)"
      ],
      "action": "/signup",
      "emphasis": "highest"
    },
    "secondary_cta": {
      "options": [
        {
          "text_en": "See How It Works",
          "text_nl": "Zie Hoe Het Werkt",
          "variant": "secondary button",
          "placement": ["Hero section"],
          "action": "#how-it-works"
        },
        {
          "text_en": "Contact Sales",
          "text_nl": "Neem Contact Op",
          "variant": "secondary button",
          "placement": ["Pricing section", "For accountants page"],
          "action": "/contact"
        },
        {
          "text_en": "View Pricing",
          "text_nl": "Bekijk Prijzen",
          "variant": "secondary button",
          "placement": ["Features page"],
          "action": "/pricing"
        }
      ],
      "emphasis": "medium"
    },
    "tertiary_cta": {
      "options": [
        {
          "text_en": "Learn more →",
          "text_nl": "Lees meer →",
          "variant": "text link",
          "placement": ["Feature cards", "Testimonials"],
          "emphasis": "low"
        },
        {
          "text_en": "Watch demo",
          "text_nl": "Bekijk demo",
          "variant": "ghost button",
          "placement": ["Features section"],
          "action": "/demo"
        }
      ]
    },
    "sticky_cta": {
      "trigger": "scroll past hero (800px)",
      "position": "top of viewport",
      "variant": "primary button",
      "size": "base",
      "text": "Start Free Trial",
      "background": "#FFFFFF",
      "shadow": "large",
      "z_index": 999
    }
  }
}
```

### 6.4 Bilingual Content Management

```json
{
  "bilingual_system": {
    "language_switcher": {
      "type": "dropdown",
      "position": "header_right",
      "current_language_display": "flag + code (e.g., 🇺🇸 EN)",
      "dropdown_options": [
        {
          "code": "en",
          "label": "English",
          "flag": "🇺🇸"
        },
        {
          "code": "nl",
          "label": "Nederlands",
          "flag": "🇳🇱"
        }
      ],
      "behavior": {
        "action": "reload page with language parameter",
        "url_structure": "?lang=en or /nl/",
        "store_preference": "localStorage",
        "cookie_duration": "365 days"
      }
    },
    "content_structure": {
      "method": "json_language_files",
      "file_structure": {
        "en": "/locales/en.json",
        "nl": "/locales/nl.json"
      },
      "key_naming": "section.component.element",
      "example": {
        "en": {
          "hero.heading": "Your Books, Taxes, and Financial Clarity—All in One Place",
          "hero.subheading": "Puzzle automates bookkeeping...",
          "cta.primary": "Start Free 30-Day Trial"
        },
        "nl": {
          "hero.heading": "Uw Boekhouding, Belastingen en Financiële Helderheid—Alles op Één Plek",
          "hero.subheading": "Puzzle automatiseert boekhouding...",
          "cta.primary": "Start Gratis 30-Dagen Proefperiode"
        }
      }
    },
    "content_length_considerations": {
      "dutch_expansion": "Dutch text typically 10-20% longer than English",
      "button_design": "flexible width, min-width set",
      "navigation": "test with longest labels",
      "mobile": "ensure no text truncation"
    },
    "cultural_adaptations": {
      "date_format": {
        "en": "MM/DD/YYYY",
        "nl": "DD-MM-YYYY"
      },
      "currency": {
        "en": "$699",
        "nl": "€699"
      },
      "number_format": {
        "en": "1,000.00",
        "nl": "1.000,00"
      },
      "formality": {
        "en": "casual_professional (you)",
        "nl": "formal_professional (u)"
      }
    },
    "seo_requirements": {
      "hreflang_tags": true,
      "separate_urls": "recommended (/en/, /nl/)",
      "meta_tags": "translated for each language",
      "structured_data": "language-specific"
    }
  }
}
```

### 6.5 "Real Results, Real Fast" Section Design

```json
{
  "real_results_section": {
    "status": "hidden",
    "implementation": "complete",
    "activation_method": "cms_toggle or css_class_removal",
    "html_structure": {
      "container": {
        "class": "real-results-section hidden",
        "data_attribute": "data-future-section='results'",
        "padding": "96px 0",
        "background": "#FFFFFF"
      },
      "header": {
        "eyebrow": {
          "text_en": "Success Stories",
          "text_nl": "Succesverhalen",
          "style": "badge",
          "background": "rgba(16, 185, 129, 0.1)",
          "color": "#10B981"
        },
        "heading": {
          "text_en": "Real Results, Real Fast",
          "text_nl": "Echte Resultaten, Snel Bereikt",
          "tag": "h2",
          "margin_bottom": "16px"
        },
        "subheading": {
          "text_en": "See how businesses like yours save time and money with Puzzle",
          "text_nl": "Zie hoe bedrijven zoals het uwe tijd en geld besparen met Puzzle",
          "color": "#6B7280"
        }
      },
      "testimonial_grid": {
        "layout": "grid",
        "columns": {
          "desktop": 3,
          "tablet": 2,
          "mobile": 1
        },
        "gap": "32px",
        "cards": "6 testimonial cards",
        "card_structure": "as defined in section 4.2"
      },
      "cta_section": {
        "text_en": "Want similar results?",
        "text_nl": "Wilt u vergelijkbare resultaten?",
        "button": {
          "text_en": "Start Your Free Trial",
          "text_nl": "Start Uw Gratis Proefperiode",
          "variant": "primary"
        }
      }
    },
    "css_implementation": {
      "hidden_class": ".hidden { display: none !important; }",
      "activation": "remove .hidden class via JS or CMS",
      "animation_on_reveal": {
        "type": "fade-in-up",
        "duration": "600ms",
        "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
      }
    },
    "cms_integration": {
      "toggle_field": "section_real_results_visible",
      "type": "boolean",
      "default": false,
      "update_method": "real-time without deployment"
    },
    "placeholder_content": {
      "testimonials": [
        {
          "quote_en": "[Client testimonial will appear here showcasing specific results achieved]",
          "quote_nl": "[Klantgetuigenis verschijnt hier met specifieke behaalde resultaten]",
          "author": "[Client Name]",
          "role": "[Job Title]",
          "company": "[Company Name]",
          "metrics": {
            "time_saved": "[X hours/month]",
            "cost_reduction": "[X% reduction]",
            "accuracy_improvement": "[X% improvement]"
          }
        }
      ],
      "instructions": "Replace placeholder text with real client data when ready to activate section"
    }
  }
}
```

---

## 7. Implementation Guidelines

### 7.1 Mobile-First Responsive Specifications

```json
{
  "responsive_strategy": {
    "approach": "mobile_first",
    "base_styles": "mobile (320px+)",
    "progressive_enhancement": "tablet → desktop → large desktop",
    "breakpoint_behaviors": {
      "mobile": {
        "range": "320px - 767px",
        "column_count": 1,
        "navigation": "hamburger menu",
        "typography": "smaller scale",
        "spacing": "reduced (16px base)",
        "images": "full width or stacked",
        "cta_buttons": "full width",
        "forms": "single column"
      },
      "tablet": {
        "range": "768px - 1023px",
        "column_count": "2-3",
        "navigation": "full menu or hybrid",
        "typography": "medium scale",
        "spacing": "medium (20px base)",
        "images": "side by side or 2-column",
        "cta_buttons": "auto width",
        "forms": "2 column where appropriate"
      },
      "desktop": {
        "range": "1024px - 1439px",
        "column_count": "3-4",
        "navigation": "full horizontal menu",
        "typography": "full scale",
        "spacing": "full (24px base)",
        "images": "grid layouts",
        "cta_buttons": "auto width",
        "forms": "2-3 column"
      },
      "large_desktop": {
        "range": "1440px+",
        "column_count": "4-6",
        "max_width": "1280px container",
        "typography": "full scale",
        "spacing": "expanded (32px base)",
        "images": "large grids",
        "increased_white_space": true
      }
    },
    "touch_targets": {
      "minimum_size": "44px × 44px",
      "applies_to": ["buttons", "links", "form inputs", "clickable icons"],
      "spacing_between": "minimum 8px"
    },
    "image_optimization": {
      "srcset": "provide 2x, 3x versions",
      "lazy_loading": "below fold images",
      "format": "WebP with JPEG fallback",
      "responsive_images": "different crops for mobile/desktop"
    }
  }
}
```

### 7.2 WCAG 2.1 AA Accessibility Requirements

```json
{
  "accessibility_standards": {
    "color_contrast": {
      "body_text": "minimum 4.5:1 ratio",
      "large_text": "minimum 3:1 ratio (18px+ or 14px+ bold)",
      "ui_components": "minimum 3:1 ratio",
      "testing_tools": ["WebAIM Contrast Checker", "Chrome DevTools"],
      "implementation": {
        "text_on_white": "use #1F2937 or darker",
        "text_on_blue": "use #FFFFFF",
        "links": "underline or 3:1 contrast with surrounding text"
      }
    },
    "keyboard_navigation": {
      "focus_indicators": {
        "visible": true,
        "style": "2px solid outline",
        "color": "#2563EB",
        "offset": "2px",
        "applies_to": ["buttons", "links", "inputs", "interactive elements"]
      },
      "tab_order": "logical, left to right, top to bottom",
      "skip_link": {
        "text": "Skip to main content",
        "position": "first focusable element",
        "visible_on_focus": true
      },
      "keyboard_shortcuts": {
        "escape": "close modals/dropdowns",
        "enter": "activate buttons/links",
        "space": "toggle checkboxes",
        "arrows": "navigate menus"
      }
    },
    "screen_reader_support": {
      "semantic_html": "use proper heading hierarchy (h1-h6)",
      "alt_text": {
        "decorative_images": "alt=''",
        "informative_images": "descriptive alt text",
        "icons": "aria-label when standalone"
      },
      "aria_labels": {
        "navigation": "aria-label='Main navigation'",
        "forms": "aria-describedby for helper text",
        "buttons": "descriptive labels",
        "links": "avoid 'click here', use descriptive text"
      },
      "live_regions": {
        "error_messages": "aria-live='assertive'",
        "loading_states": "aria-live='polite'",
        "success_messages": "aria-live='polite'"
      }
    },
    "form_accessibility": {
      "labels": "visible and associated with inputs",
      "required_fields": "aria-required='true'",
      "error_messages": {
        "announcement": "immediate via aria-live",
        "association": "aria-describedby to link error to input",
        "visibility": "near input field"
      },
      "input_hints": "aria-describedby for helper text",
      "fieldsets": "group related inputs with legend"
    },
    "responsive_text": {
      "text_resize": "support up to 200% zoom without loss of functionality",
      "reflow": "no horizontal scrolling at 320px width",
      "spacing": "allow user to override text spacing"
    },
    "motion_preferences": {
      "respect_prefers_reduced_motion": true,
      "implementation": "@media (prefers-reduced-motion: reduce) { /* disable animations */ }"
    }
  }
}
```

### 7.3 Performance Targets

```json
{
  "performance_metrics": {
    "loading_times": {
      "first_contentful_paint": "< 1.5 seconds",
      "largest_contentful_paint": "< 2.5 seconds",
      "time_to_interactive": "< 3.5 seconds",
      "cumulative_layout_shift": "< 0.1",
      "first_input_delay": "< 100ms"
    },
    "page_weight": {
      "homepage": "< 1.5 MB total",
      "images": "< 800 KB",
      "javascript": "< 400 KB",
      "css": "< 100 KB",
      "fonts": "< 100 KB"
    },
    "optimization_strategies": {
      "images": {
        "format": "WebP with fallback",
        "compression": "80% quality",
        "responsive_images": "srcset and sizes attributes",
        "lazy_loading": "loading='lazy' for below-fold",
        "dimensions": "width and height attributes"
      },
      "fonts": {
        "loading": "font-display: swap",
        "subsetting": "include only required characters",
        "formats": "WOFF2 primary",
        "preload": "critical fonts only",
        "limit": "2 font families maximum"
      },
      "javascript": {
        "minification": "remove whitespace and comments",
        "tree_shaking": "eliminate unused code",
        "code_splitting": "separate vendor and app bundles",
        "defer_loading": "async or defer attributes",
        "third_party_scripts": "load after critical content"
      },
      "css": {
        "minification": true,
        "critical_css": "inline above-the-fold styles",
        "remove_unused": "PurgeCSS or similar",
        "combine_files": "single CSS file when possible"
      },
      "caching": {
        "static_assets": "1 year cache headers",
        "html": "no-cache with ETag",
        "cdn": "use CDN for static assets",
        "service_worker": "cache shell for repeat visits"
      }
    },
    "testing_tools": [
      "Google PageSpeed Insights",
      "WebPageTest",
      "Lighthouse",
      "Chrome DevTools Performance"
    ]
  }
}
```

### 7.4 Browser Compatibility Matrix

```json
{
  "browser_support": {
    "desktop": {
      "chrome": "last 2 versions",
      "firefox": "last 2 versions",
      "safari": "last 2 versions",
      "edge": "last 2 versions",
      "opera": "last 2 versions"
    },
    "mobile": {
      "ios_safari": "iOS 13+",
      "chrome_android": "last 2 versions",
      "samsung_internet": "last 2 versions"
    },
    "unsupported": [
      "Internet Explorer (all versions)"
    ],
    "fallbacks": {
      "css_grid": "flexbox fallback",
      "css_custom_properties": "static values",
      "webp_images": "JPEG/PNG fallback",
      "modern_js": "transpile to ES5 if needed"
    },
    "testing_requirements": {
      "browserstack": "test on real devices",
      "responsive_design_mode": "test all breakpoints",
      "accessibility": "test with screen readers"
    }
  }
}
```

### 7.5 AI Feature Integration Specifications

```json
{
  "ai_integration": {
    "quote_builder_ai": {
      "endpoint": "/api/parse-business-needs",
      "method": "POST",
      "request": {
        "body": {
          "text": "user input string",
          "language": "en or nl"
        }
      },
      "response": {
        "features": [
          {
            "id": "feature_id",
            "name": "Feature Name",
            "icon": "icon-name",
            "base_price": 0,
            "additional_price": 99
          }
        ],
        "total_price": 699,
        "confidence": 0.95
      },
      "error_handling": {
        "timeout": "5 seconds",
        "retry": "2 attempts",
        "fallback": "show manual feature selection"
      },
      "loading_state": {
        "indicator": "AI analyzing...",
        "animation": "pulse",
        "duration": "500-2000ms typical"
      }
    },
    "dashboard_transition": {
      "trigger": "signup completion",
      "onboarding_flow": [
        {
          "step": 1,
          "name": "welcome",
          "duration": "30 seconds",
          "content": "Welcome message + quick tour"
        },
        {
          "step": 2,
          "name": "bank_connection",
          "duration": "2-5 minutes",
          "content": "Connect bank accounts"
        },
        {
          "step": 3,
          "name": "business_details",
          "duration": "1-2 minutes",
          "content": "Enter business information"
        },
        {
          "step": 4,
          "name": "ai_setup",
          "duration": "automated",
          "content": "AI categorizes initial transactions"
        },
        {
          "step": 5,
          "name": "dashboard",
          "content": "Main application dashboard"
        }
      ],
      "progress_indicator": {
        "type": "stepper",
        "position": "top",
        "show_percentage": true
      }
    },
    "real_time_features": {
      "transaction_categorization": {
        "trigger": "new transaction detected",
        "processing_time": "< 2 seconds",
        "confidence_threshold": 0.85,
        "user_review": "flagged if confidence < 0.85"
      },
      "tax_calculations": {
        "trigger": "transaction categorized or date change",
        "update_frequency": "real-time",
        "display": "dashboard widget"
      },
      "insights_generation": {
        "trigger": "weekly or on-demand",
        "types": [
          "spending_trends",
          "tax_optimization",
          "cash_flow_forecast",
          "expense_anomalies"
        ]
      }
    }
  }
}
```

### 7.6 Low/No-Code Platform Implementation Notes

#### Webflow Implementation

```json
{
  "webflow": {
    "structure": {
      "pages": "create based on site map",
      "cms_collections": [
        "Blog Posts",
        "Testimonials",
        "FAQ Items",
        "Portfolio Items"
      ],
      "symbols": [
        "Header",
        "Footer",
        "CTA Section",
        "Feature Card",
        "Testimonial Card"
      ]
    },
    "styling": {
      "style_guide": "create style guide page with all components",
      "color_swatches": "add all colors as swatches",
      "text_styles": "create for each heading level and body text",
      "combo_classes": "use for state variations (hover, active)"
    },
    "interactions": {
      "hover_effects": "use Webflow interactions",
      "scroll_animations": "fade in on scroll for sections",
      "modal_open_close": "custom code or IX2",
      "dropdown_menus": "native Webflow dropdown"
    },
    "responsive": {
      "breakpoints": "use Webflow's default (992px, 768px, 479px)",
      "adjustments_per_breakpoint": "hide/show elements, resize, reorder",
      "mobile_menu": "use Webflow nav component"
    },
    "custom_code": {
      "quote_builder": "embed custom HTML/CSS/JS in page",
      "language_switcher": "custom JS with localStorage",
      "ai_integration": "API calls via custom code",
      "forms": "Webflow forms + custom submission handling"
    },
    "cms_for_multilingual": {
      "method": "duplicate pages for each language",
      "url_structure": "/en/page-name, /nl/page-name",
      "language_switcher": "custom code to toggle"
    }
  }
}
```

#### Framer Implementation

```json
{
  "framer": {
    "structure": {
      "pages": "create pages from site map",
      "components": [
        "Button (all variants)",
        "Card (all types)",
        "Input Field",
        "Header",
        "Footer"
      ],
      "cms": "use Framer CMS for testimonials, blog, FAQ"
    },
    "styling": {
      "design_system": "create in Framer design panel",
      "color_tokens": "define all colors as tokens",
      "text_styles": "create styles for all typography",
      "components": "use Framer components with variants"
    },
    "interactions": {
      "hover_animations": "Framer native hover variants",
      "page_transitions": "use Framer Motion",
      "scroll_animations": "scroll variants",
      "micro_interactions": "component states"
    },
    "responsive": {
      "breakpoints": "use Framer's responsive modes",
      "layout": "use Framer's auto layout (flex)",
      "hide_elements": "responsive visibility controls",
      "mobile_menu": "create mobile variant of header component"
    },
    "custom_code": {
      "quote_builder": "code component in React",
      "api_integration": "fetch in code components",
      "language_switcher": "React state management",
      "forms": "native Framer forms + custom logic"
    },
    "cms_multilingual": {
      "method": "CMS fields for each language",
      "conditional_rendering": "show/hide based on language selection"
    }
  }
}
```

#### WordPress + Elementor

```json
{
  "wordpress_elementor": {
    "theme": "use lightweight theme (GeneratePress, Astra)",
    "plugins": [
      "Elementor Pro (for advanced features)",
      "WPML (multilingual)",
      "WPForms (forms)",
      "Yoast SEO"
    ],
    "structure": {
      "pages": "create pages using Elementor",
      "templates": "header, footer, single post templates",
      "global_widgets": "reusable components"
    },
    "styling": {
      "global_colors": "define in Elementor settings",
      "global_fonts": "set in Elementor typography",
      "style_guide": "create sample page with all components"
    },
    "responsive": {
      "breakpoints": "Elementor's responsive modes",
      "mobile_editing": "adjust per breakpoint",
      "mobile_menu": "Elementor menu widget"
    },
    "custom_code": {
      "quote_builder": "custom HTML widget + JS",
      "api_calls": "custom PHP or JS",
      "forms": "WPForms + custom handlers"
    },
    "multilingual": {
      "plugin": "WPML",
      "method": "translate each page/post",
      "language_switcher": "WPML widget in header"
    }
  }
}
```

---

## 8. Design File Checklist

**Implementation Package Must Include:**

- [ ] Complete design specification document (this file)
- [ ] JSON files for:
  - [ ] Color palette
  - [ ] Typography scale
  - [ ] Spacing system
  - [ ] Component specifications
- [ ] CSS file with:
  - [ ] Custom properties for colors, spacing, typography
  - [ ] Base styles
  - [ ] Component classes
  - [ ] Utility classes
  - [ ] Responsive breakpoints
- [ ] HTML templates for:
  - [ ] Homepage (all sections)
  - [ ] Feature page
  - [ ] Pricing page
  - [ ] Component library page
- [ ] JavaScript for:
  - [ ] Quote builder functionality
  - [ ] Language switcher
  - [ ] Mobile menu toggle
  - [ ] Form validations
- [ ] Image specifications:
  - [ ] Required dimensions
  - [ ] Format requirements
  - [ ] Alt text guidelines
- [ ] Content templates for:
  - [ ] All page sections
  - [ ] Bilingual copy (EN/NL)
  - [ ] Microcopy (buttons, labels, errors)

---

## 9. Handoff Notes

**For Development Teams:**
1. Start with mobile-first approach
2. Use semantic HTML5 elements
3. Test accessibility at each stage
4. Implement responsive images with srcset
5. Optimize for Core Web Vitals from the start
6. Use CSS Grid and Flexbox for layouts
7. Implement proper focus management
8. Test with real assistive technologies

**For Low/No-Code Platforms:**
1. Create style guide page first with all components
2. Build reusable components/symbols
3. Test responsive behavior at each breakpoint
4. Use platform's built-in features before custom code
5. Implement custom code for quote builder
6. Set up proper redirects for language switching
7. Configure SEO settings per page
8. Test forms thoroughly

**For Content Teams:**
1. All copy must be translated by native speakers
2. Test character limits in UI with longest translations
3. Use provided tone and voice guidelines
4. Include alt text for all images
5. Write descriptive link text (avoid "click here")
6. Maintain consistency across languages

**Quality Assurance Checklist:**
- [ ] Visual consistency across all pages
- [ ] All interactive elements have hover/focus states
- [ ] Forms validate properly
- [ ] Error messages are clear and helpful
- [ ] Success states provide confirmation
- [ ] Loading states indicate progress
- [ ] Mobile navigation works smoothly
- [ ] Language switcher functions correctly
- [ ] All links work (no 404s)
- [ ] Images load properly
- [ ] Typography scales correctly
- [ ] Colors meet contrast requirements
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces content properly
- [ ] Performance meets targets

---

**END OF SPECIFICATION**

This document provides complete implementation-ready specifications for the Puzzle platform. No additional design decisions are required. Proceed with confidence.
