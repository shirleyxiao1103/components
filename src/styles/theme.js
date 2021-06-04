/* eslint-disable prefer-destructuring */
// 1. Import the extendTheme util - it will merge with the default theme
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Button } from './components/Shared/styles/button';
import { Drawer } from './components/Shared/styles/drawer';

// 2. Extend the theme to include custom colors, fonts, etc.
const colors = {
    colors: {
        brand: {
            primary: {
                700: '#0A4296',
                600: '#025DE4',
                500: '#0066FF',
                400: '#4D94FF',
                300: '#80B3FF',
                200: '#B3D1FF',
                100: '#E5F0FF',
                90: '#F7F9FE',
                80: '#FAFCFF',
            },
            secondary: {
                500: '#F05A28',
                400: '#F4835E',
                300: '#F7AC93',
                200: '#FBD6C9',
                100: '#FDEFE9',
            },
            neutral: {
                900: '#042765',
                800: '#1D3D74',
                700: '#365284',
                600: '#4F6893',
                500: '#687DA3',
                400: '#9BA9C1',
                200: '#B4BED1',
                100: '#CDD4E0',
                90: '#E6E9F0',
                80: '#F3F4F7',
                70: '#FAFBFC',
                white: '#ffffff',
            },
            green: {
                500: '#1E7E0E',
                400: '#569E4A',
                300: '#8FBF87',
                200: '#C7DFC3',
                100: '#E8F2E7',
            },
            yellow: {
                500: '#ECAF00',
                400: '#F1C340',
                300: '#F5D780',
                200: '#FAEBBF',
                100: '#FDF7E5',
            },
            red: {
                500: '#CF1415',
                400: '#DB4F50',
                300: '#E7898A',
                200: '#F3C4C5',
                100: '#FAE7E8',
            },
        },
    },
};

const breakpoints = createBreakpoints({
    xs: '360px',
    sm: '576px',
    md: '768px',
    lg: '899px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1537px',
});

const fontSizes = {
    fontSizes: {
        xxs: '11px',
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
    },
};

const fontWeights = {
    fontWeights: {
        lightest: 100,
        lighter: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        bolder: 800,
        super: 900,
    },
};

const fonts = {
    fonts: {
        heading: 'Graphik',
        body: 'Graphik',
    },
};

const components = {
    Button,
    Drawer,
};

const customTheme = extendTheme({
    colors,
    components,
    fontWeights,
    fontSizes,
    fonts,
    breakpoints,
});

export default customTheme;
