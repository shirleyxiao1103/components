// NOTE: this file is being imported in theme.js to override Chakra button UI
const baseStyle = {
  fontWeight: 'fontWeights.normal',
  borderRadius: '4px',
  p: '10px 24px',
  alignSelf: 'center',
  _disabled: {
    opacity: 1,
    cursor: 'default',
  },
  _active: {
    boxShadow: 'none',
  },
};

const primaryButton = {
  bg: 'colors.brand.primary.500',
  color: 'colors.brand.neutral.white',
  minWidth: 'auto',
  _hover: {
    bg: 'colors.brand.primary.600',
  },
  _disabled: {
    bg: '#E5F0FF !important',
  },
  _focus: {
    boxShadow: '0 0 0 2px #B3D1FF',
  },
  _active: {
    bg: 'colors.brand.primary.700',
  },
};

const secondaryButton = {
  borderColor: 'colors.brand.neutral.400',
  borderWidth: '1px',
  bg: 'colors.brand.neutral.white',
  color: 'colors.brand.neutral.500',
  minWidth: 'auto',
  _hover: {
    borderColor: 'colors.brand.neutral.500',
    color: 'colors.brand.neutral.600',
  },
  _disabled: {
    borderColor: '#F3F4F7 !important',
    color: '#CDD4E0 !important',
  },
  _focus: {
    boxShadow: '0 0 0 2px #CDD4E0',
  },
  _active: {
    color: 'colors.brand.neutral.800',
  },
};

const iconButton = {
  w: '32px',
  h: '32px',
  minWidth: '32px',
  minHeight: '32px',
  maxWidth: '32px',
  maxHeight: '32px',
};

const sizes = {
  lg: {
    h: '40px',
    fontSize: 'fontSizes.sm',
  },
  md: {
    h: '32px',
    fontSize: 'fontSizes.xs',
    lineHeight: '16px',
  },
};

export const Button = {
  baseStyle,
  sizes,
  variants: {
    primary: primaryButton,
    secondary: secondaryButton,
    iconPrimary: {
      ...iconButton,
      ...primaryButton,
    },
    iconSecondary: {
      ...iconButton,
      ...secondaryButton,
    },
  },
};
