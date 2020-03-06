import { initialize, pageview as pv, event as ev } from 'react-ga';

const options = {
  gaOptions: {
    cookieDomain: 'auto',
  },
};

export default {
  init: () => initialize('UA-159913065-1', options),
  pageview: () => pv(window.location.pathname + window.location.search),
  event: (e: any) => ev(e),
};
