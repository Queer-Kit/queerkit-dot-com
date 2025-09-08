export default defineAppConfig({
  ui: {
    colors: {
      primary: 'yellow',
      neutral: 'neutral',
    },
    icons: {
      close: 'lucide:x',
      chevronLeft: 'lucide:chevron-left',
      chevronRight: 'lucide:chevron-right',
    },
    card: {
      slots: {
        root: 'rounded-none'
      }
    },
    toast: {
      slots: {
        root: 'rounded-none'
      }
    },
    banner: {
      slots: {
        icon: 'text-highlighted',
        title: 'text-highlighted',
        close: 'text-highlighted'
      }
    },
    header: {
      slots: {
        root: ''
      }
    },
    footer: {
      slots: {
        root: 'py-6'
      }
    },
    page: {
      slots: {
        root: 'lg:gap-6',
      }
    },
    contentToc: {
      defaultVariants: {
        highlight: true,
        highlightColor: 'primary'
      }
    }
  },
})