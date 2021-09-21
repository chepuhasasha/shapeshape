import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#18A0FB',
  colorSecondary: '#18A0FB',

  // UI
  appBg: '#1F1F1F',
  appContentBg: '#2C2C2C',
  appBorderColor: 'rgba(255,255,255,0.1)',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Arial"',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: 'none',

  // Form colors
  inputBg: 'none',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 0,

  brandTitle: 'birdpull.',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150',
});