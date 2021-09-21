import { addons } from '@storybook/addons';
import Theme from './Theme';

addons.setConfig({
  theme: Theme,
  toolbar: {
    title: { hidden: false, },
    zoom: { hidden: true, },
    eject: { hidden: true, },
    copy: { hidden: false, },
    fullscreen: { hidden: false, },
  },
  sidebar: {
    showRoots: true,
  },
});