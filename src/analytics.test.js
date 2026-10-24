import { track } from './analytics';

beforeEach(() => {
  window.dataLayer = [];
  delete window.plausible;
});

test('track pushes a flat event to the GTM dataLayer', () => {
  track('cta_clicked', { location: 'cta-band' });
  expect(window.dataLayer).toEqual([{ event: 'cta_clicked', location: 'cta-band' }]);
});

test('track forwards to Plausible when it is loaded', () => {
  window.plausible = jest.fn();
  track('phone_clicked');
  expect(window.plausible).toHaveBeenCalledWith('phone_clicked', undefined);
  expect(window.dataLayer).toEqual([{ event: 'phone_clicked' }]);
});
