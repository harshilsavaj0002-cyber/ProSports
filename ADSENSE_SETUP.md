# Google AdSense Setup and Optimization Guide

## Overview
ProSports is now optimized for Google AdSense monetization with strategic ad placements across the site for maximum earnings while maintaining user experience.

## AdSense Implementation

### 1. Publisher ID Setup
Replace all instances of `ca-pub-xxxxxxxxxxxxxxxx` with your actual Google AdSense Publisher ID:

**Files to update:**
- `components/adsense-ad.tsx` - Main AdSense component
- `app/article/[id]/page.tsx` - Article page ad placeholders
- Any other pages where you use the AdSense components

### 2. Ad Slots Configuration
Each ad placement uses a unique ad slot for tracking and performance optimization:

**Current Ad Slots:**
- `1234567890` - Top of article (horizontal 728x90 or 970x90)
- `0987654321` - Mid-article (300x250 or 336x280)
- `1122334455` - Bottom of article (horizontal 728x90 or 970x90)
- `5566778899` - Sidebar vertical ad (336x280)

Create these ad slots in your AdSense account and configure their sizes and types.

### 3. Ad Placements Strategy

#### Homepage (app/page.tsx)
- Top banner ad after hero section
- Mid-content ad within trending section
- Sidebar ad in featured sections

#### Article Pages (app/article/[id]/page.tsx)
- **Top Ad**: Horizontal banner below breadcrumb
- **Mid-Content Ad**: Between article paragraphs (optimal placement for high viewability)
- **Bottom Ad**: Above related articles section

#### Content Pages
- About, Players, Match Analysis, Tournaments pages
- Horizontal ad at top
- Vertical ads in sidebars

#### Legal Pages
- Minimal ad placement to maintain trust
- Single horizontal ad mid-page

### 4. Responsive Ad Component Usage

The `AdSenseAd` component supports multiple formats:

```tsx
import { AdSenseAd, AdSenseVertical, AdSenseHorizontal } from '@/components/adsense-ad';

// Auto-responsive ad
<AdSenseAd adSlot="your-slot-id" />

// Specific format ads
<AdSenseVertical adSlot="vertical-slot-id" />
<AdSenseHorizontal adSlot="horizontal-slot-id" />
```

### 5. Mobile Optimization
- All ads are mobile-responsive
- Horizontal ads (728x90) automatically scale on mobile
- Vertical ads (300x250) stack on mobile
- Responsive design ensures proper ad rendering across devices

## Content Optimization for AdSense

### 1. Content Quality
- All articles are 800-1500 words (optimal for ad earnings)
- 30+ unique articles across multiple categories
- Regular content updates ensure fresh crawls

### 2. Heading Structure
```
H1 - Page title
H2 - Main sections
H3 - Subsections
```
Proper heading hierarchy helps Google understand content and display relevant ads.

### 3. Internal Linking
- Each article links to related articles
- Navigation breadcrumbs establish site structure
- Category pages link to detailed content

### 4. SEO Schema Markup
Already implemented:
- Organization Schema
- Website Schema
- NewsArticleSchema for articles
- Proper structured data for rich snippets

## Traffic Optimization Tips

### 1. Trending Section
The homepage features a "Trending Now" section highlighting top articles, driving repeat visits and impressions.

### 2. Category Filter
Multiple sports categories encourage users to explore more pages and generate additional ad impressions.

### 3. Related Articles
Each article page suggests 3 related articles, increasing page views per session.

### 4. Newsletter Signup
Recurring visitors through email subscriptions increase consistent traffic and ad revenue.

### 5. Featured Tournaments
Current sporting events keep content fresh and attract regular visitors checking tournament status.

## Compliance Requirements

### 1. Policies
- ✓ Original content (not copied)
- ✓ Clear disclosure of ads (ad labels visible)
- ✓ No invalid traffic prevention measures
- ✓ Proper robots.txt and sitemap configuration

### 2. Required Pages
- ✓ Privacy Policy (`/privacy`)
- ✓ Terms of Service (`/terms`)
- ✓ Disclaimer (`/disclaimer`)
- ✓ Cookie Policy (`/cookies`)
- ✓ About Us (`/about`)
- ✓ Contact page (add as needed)

### 3. Header Configuration
Update the header with complete contact information in your email/contact form to establish trust.

## Performance Optimization

### 1. Ad Performance Metrics
Monitor in AdSense Dashboard:
- CPM (Cost Per Mille): Revenue per 1000 impressions
- RPM (Revenue Per Mille): Your earnings per 1000 impressions
- CTR (Click-Through Rate): Percentage of clicks on ads
- Page RPM: Revenue per page view

### 2. Placement Testing
Test different ad positions and formats:
- Above the fold vs below
- Responsive vs fixed sizes
- Different ad formats (728x90, 300x250, etc.)

### 3. Content Performance
Track which topics drive highest RPM:
- Basketball vs other sports
- Match analysis vs player profiles
- News vs features

## Implementation Checklist

- [ ] Replace all `ca-pub-xxxxxxxxxxxxxxxx` with real Publisher ID
- [ ] Create ad slots in AdSense account
- [ ] Set up ad units in AdSense dashboard
- [ ] Test ad display on homepage, articles, and content pages
- [ ] Verify ads appear correctly on mobile and desktop
- [ ] Monitor AdSense dashboard for invalid traffic alerts
- [ ] Set up Google Search Console for crawl optimization
- [ ] Submit XML sitemap to Google Search Console
- [ ] Create robots.txt if not present
- [ ] Monitor Performance Metrics for 2-4 weeks before optimization

## Additional Resources

### Google AdSense Optimization
- AdSense Help Center: support.google.com/adsense
- AdSense Policies: support.google.com/adsense/answer/48182
- Ad Size Guide: support.google.com/adsense/answer/6002575

### SEO Optimization
- Google Search Central: developers.google.com/search
- Core Web Vitals: web.dev/vitals
- Mobile-First Indexing: developers.google.com/search/mobile-sites/mobile-first-indexing

## Maintenance Tasks

### Weekly
- Check AdSense dashboard for invalid traffic alerts
- Monitor article engagement metrics
- Respond to traffic changes

### Monthly
- Analyze top-performing articles and topics
- Identify underperforming content for updates
- Test new ad placements

### Quarterly
- Review and optimize ad sizes based on performance
- Update articles with current information
- Add new content in high-performing categories

---

**Note**: Always review Google AdSense policies before making changes. Invalid traffic or policy violations can result in account suspension.
