import { extendTheme } from '@mui/joy/styles';
import { inputClasses } from '@mui/joy/Input';

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#cd0f06',
          100: '#cd0f06',
          200: '#cd0f06',
          300: '#cd0f06',
          400: '#cd0f06',
          500: '#cd0f06',
          600: '#cd0f06',
          700: '#cd0f06',
          800: '#cd0f06',
          900: '#cd0f06',
          solidBg: 'var(--joy-palette-primary-600)',
          solidHoverBg: 'var(--joy-palette-primary-500)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#cd0f06',
          100: '#cd0f06',
          200: '#cd0f06',
          300: '#cd0f06',
          400: '#cd0f06',
          500: '#cd0f06',
          600: '#cd0f06',
          700: '#cd0f06',
          800: '#cd0f06',
          900: '#cd0f06',
          solidBg: 'var(--joy-palette-primary-700)',
          solidColor: 'var(--joy-palette-common-black)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
        background: {
          body: 'var(--joy-palette-common-black)',
          surface: 'var(--joy-palette-neutral-900)',
        },
      },
    },
  },
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' && {
            [`&:not(.${inputClasses.focused}):hover::before`]: {
              boxShadow: `inset 0 0 0 2px ${
                theme.vars.palette?.[ownerState.color!]?.outlinedBorder
              }`,
            },
          }),
        }),
        input: {
          caretColor: 'var(--Input-focusedHighlight)',
        },
      },
    },
  },
});
