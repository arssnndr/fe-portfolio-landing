import { ref, nextTick, onMounted, onUnmounted } from 'vue'

interface ScrollSection {
  id: string
  element: HTMLElement
}

export function useScrollMagnet() {
  const currentSection = ref<string>('')
  const isScrolling = ref(false)
  const sections = ref<ScrollSection[]>([])
  let scrollTimer: number | undefined

  const findSections = (): ScrollSection[] => {
    const sectionQueries = [
      { id: '', selector: '.portfolio-hero' },
      { id: 'about', selector: '#about' },
      { id: 'projects', selector: '#projects' },
      { id: 'contact', selector: '#contact' },
    ]

    return sectionQueries
      .map(({ id, selector }) => {
        const element = document.querySelector(selector) as HTMLElement
        return element ? { id, element } : null
      })
      .filter((section): section is ScrollSection => section !== null)
  }

  const calculateVisibility = (element: HTMLElement): number => {
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight

    // Calculate how much of the viewport the section occupies
    const visibleTop = Math.max(0, -rect.top)
    const visibleBottom = Math.min(rect.height, windowHeight - rect.top)
    const visibleHeight = Math.max(0, visibleBottom - visibleTop)

    return visibleHeight / windowHeight
  }

  const getMostVisibleSection = (): ScrollSection | null => {
    if (sections.value.length === 0) return null

    let mostVisible: ScrollSection | null = null
    let maxVisibility = 0

    sections.value.forEach((section) => {
      const visibility = calculateVisibility(section.element)
      if (visibility > maxVisibility) {
        maxVisibility = visibility
        mostVisible = section
      }
    })

    return mostVisible
  }

  const updateURL = (sectionId: string) => {
    const newHash = sectionId ? `#${sectionId}` : ''
    const currentHash = window.location.hash

    if (currentHash !== newHash) {
      if (sectionId) {
        history.replaceState(null, '', `${window.location.pathname}${newHash}`)
      } else {
        history.replaceState(null, '', window.location.pathname)
      }
    }
  }

  const updateCurrentSection = (section: ScrollSection) => {
    if (section.id !== currentSection.value) {
      currentSection.value = section.id
      updateURL(section.id)
    }
  }

  const smoothScrollToSection = (element: HTMLElement) => {
    if (isScrolling.value) return

    isScrolling.value = true

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrolling.value = false
    }, 1000)
  }

  const handleScroll = () => {
    if (isScrolling.value) return

    // Clear previous timer
    if (scrollTimer) {
      clearTimeout(scrollTimer)
    }

    // Debounce scroll events
    scrollTimer = window.setTimeout(() => {
      const mostVisible = getMostVisibleSection()

      if (mostVisible) {
        const visibility = calculateVisibility(mostVisible.element)

        // If section is 25% or more visible and different from current
        if (visibility >= 0.25 && mostVisible.id !== currentSection.value) {
          updateCurrentSection(mostVisible)

          // Auto-scroll to make section fully visible
          setTimeout(() => {
            if (!isScrolling.value) {
              smoothScrollToSection(mostVisible.element)
            }
          }, 50)
        }
      }
    }, 150)
  }

  const scrollToSection = (sectionId: string) => {
    const section = sections.value.find((s) => s.id === sectionId)
    if (section) {
      updateCurrentSection(section)
      smoothScrollToSection(section.element)
    }
  }

  const handleInitialHash = () => {
    const hash = window.location.hash.substring(1)
    if (hash && sections.value.length > 0) {
      setTimeout(() => {
        scrollToSection(hash)
      }, 200)
    }
  }

  const initializeScrollMagnet = async () => {
    // Wait for DOM to be ready
    await nextTick()

    // Find all sections
    sections.value = findSections()

    if (sections.value.length === 0) {
      console.warn('No sections found for scroll magnet')
      return
    }

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Handle initial hash if present
    handleInitialHash()

    // Set initial section based on current scroll position
    const initialSection = getMostVisibleSection()
    if (initialSection) {
      updateCurrentSection(initialSection)
    }
  }

  onMounted(() => {
    // Initialize after a short delay to ensure all components are mounted
    setTimeout(() => {
      initializeScrollMagnet()
    }, 100)
  })

  onUnmounted(() => {
    // Clean up
    window.removeEventListener('scroll', handleScroll)

    if (scrollTimer) {
      clearTimeout(scrollTimer)
    }
  })

  return {
    currentSection,
    scrollToSection,
    isScrolling,
  }
}
