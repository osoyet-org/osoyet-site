export const site = {
  // WhatsApp number in international format: no +, no spaces, no leading 0 (e.g. 254712345678)
  whatsapp: '254716538395',
  whatsappMessage: 'Hello Osoyet, I would like to know more about your work.',

  // Contact details shown on the site
  email: 'osoyetorganization@gmail.com',
  phone: '+254716538395',
  address: 'Olulunga, Narok, Kenya',

  // Legitimacy details shown in the footer
  registration: 'Registered as a community based organization ',
  registrationNumber: 'Serial No 03519',

  // Support details. Do not publish until these are the real details.
  mpesa: { label: 'Our support account', paybill: '247247', account: '0360185123285' },
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;