# Scroll Magnet Effect

## Overview

The scroll magnet effect creates a smooth, automatic scrolling experience where sections "snap" into view when they become 25% visible. This provides better navigation and URL management for single-page applications.

## Features

### 1. **Automatic Section Detection**

- Detects when a section becomes 25% visible in the viewport
- Automatically scrolls to make the section fully visible
- Updates URL hash to reflect current section

### 2. **URL Management**

- Hero section: No hash (clean URL)
- About section: `#about`
- Projects section: `#projects`
- Contact section: `#contact`

### 3. **Smooth Scrolling**

- CSS `scroll-behavior: smooth` for natural transitions
- JavaScript-based smooth scrolling with `scrollIntoView`
- Prevents scroll conflicts during animation

### 4. **Responsive Behavior**

- Works on all screen sizes
- Optimized for both desktop and mobile
- Debounced scroll events for better performance

## Implementation

### Composable: `useScrollMagnet.ts`

```typescript
import { useScrollMagnet } from '@/composables/useScrollMagnet'

// In your component
const { currentSection, scrollToSection, isScrolling } = useScrollMagnet()
```

### Key Functions

- **`calculateVisibility()`**: Determines how much of a section is visible
- **`getMostVisibleSection()`**: Finds the section occupying most viewport space
- **`handleScroll()`**: Debounced scroll handler with 25% visibility threshold
- **`scrollToSection()`**: Programmatic navigation to specific sections
- **`updateURL()`**: Manages browser history and URL hash

### CSS Requirements

Each section must have:

- `min-height: 100vh` for full viewport coverage
- Proper IDs for navigation (`#about`, `#projects`, `#contact`)
- Hero section uses class `.portfolio-hero` (no ID)

## Usage Examples

### Navigation Links

```vue
<a href="#about" @click="scrollToSection('about')">About</a>
<a href="#projects" @click="scrollToSection('projects')">Projects</a>
<a href="#contact" @click="scrollToSection('contact')">Contact</a>
```

### Current Section Detection

```vue
<template>
  <nav :class="{ active: currentSection === 'about' }">Navigation based on current section</nav>
</template>
```

## Configuration

### Visibility Threshold

```typescript
// Current: 25% visibility triggers magnet effect
if (visibility >= 0.25 && mostVisible.id !== currentSection.value) {
  // Trigger scroll magnet
}
```

### Scroll Debounce

```typescript
// Current: 150ms debounce for scroll events
scrollTimer = window.setTimeout(() => {
  // Handle scroll logic
}, 150)
```

## Browser Compatibility

- **Modern Browsers**: Full support with smooth scrolling
- **Older Browsers**: Fallback to instant scrolling
- **Mobile**: Optimized touch scrolling support
- **Accessibility**: Respects `prefers-reduced-motion` when available

## Performance Optimizations

1. **Debounced Events**: Scroll events are debounced to prevent excessive calculations
2. **Passive Listeners**: Scroll listeners use `{ passive: true }` for better performance
3. **Efficient Calculations**: Minimal DOM queries and cached section references
4. **Memory Management**: Proper cleanup on component unmount

## Benefits

1. **Better UX**: Users always see complete sections, no partial views
2. **Clear Navigation**: URL always reflects current section
3. **Mobile Friendly**: Works well with touch scrolling
4. **SEO Friendly**: Proper URL structure for deep linking
5. **Accessible**: Works with keyboard navigation and screen readers
