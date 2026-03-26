export const trackEvent = (eventName: string, payload: Record<string, unknown> = {}) => {
  const eventPayload = { event: eventName, ...payload };
  try {
    const dataLayer = (window as any).dataLayer as Array<Record<string, unknown>> | undefined;
    if (Array.isArray(dataLayer)) {
      dataLayer.push(eventPayload);
    }
    const gtag = (window as any).gtag as ((...args: unknown[]) => void) | undefined;
    if (typeof gtag === 'function') {
      gtag('event', eventName, payload);
    }
    window.dispatchEvent(new CustomEvent('nest-analytics', { detail: eventPayload }));
  } catch {
    // no-op
  }
};
