/**
 * Client helper for the site's one enquiry submission path.
 *
 * The actual request lives in BasicScripts.astro as
 * `window.causewaySoftSendEnquiry` (also used by the legacy #contact-form
 * handler), which posts the form's fields to /forms/contact.php. Forms on
 * Basalt pages call it through here rather than making their own requests.
 */
declare global {
  interface Window {
    causewaySoftSendEnquiry?: (form: HTMLFormElement) => Promise<string>;
  }
}

export function sendEnquiry(form: HTMLFormElement): Promise<string> {
  if (typeof window.causewaySoftSendEnquiry !== 'function') {
    return Promise.reject(new Error('Enquiry submission is not available'));
  }
  return window.causewaySoftSendEnquiry(form);
}
