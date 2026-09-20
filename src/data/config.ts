export interface OfficeAddress {
  title: string;
  type: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  formatted: string;
  mapsUrl: string;
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  category: string;
  address: OfficeAddress; // Primary / Corporate HQ
  regionalOffice: OfficeAddress; // Vijayawada Regional Office
  contact: {
    phoneFormatted: string;
    phoneRaw: string;
    whatsappFormatted: string;
    whatsappRaw: string;
    email: string;
    operatingHours: string;
  };
  maps: {
    query: string;
    directionsUrl: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: 'Sri Thrayi Facility',
  legalName: 'Sri Thrayi Facility Services',
  tagline: 'Trust to Deliver. Committed to Excellence.',
  category: 'Professional Facility Management Services',
  address: {
    title: 'Corporate Headquarters',
    type: 'Corporate Office',
    line1: 'Plot No. 22/A, 5th Floor, Sri Venkateswara Nilayam',
    line2: 'Salivahana Colony, JNTU 9th Phase',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500085',
    country: 'India',
    formatted: 'Plot No. 22/A, 5th Floor, Sri Venkateswara Nilayam, Salivahana Colony, JNTU 9th Phase, Hyderabad – 500085, Telangana, India',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+No.+22%2FA%2C+Sri+Venkateswara+Nilayam%2C+Salivahana+Colony%2C+JNTU+9th+Phase%2C+Hyderabad+500085',
  },
  regionalOffice: {
    title: 'Regional Operations Office',
    type: 'Regional Office',
    line1: 'Kedarnade Taveres, Door No: 49-4-17/1',
    line2: 'Vantena, Adarsha Colony, Road No. 12, Gunadala',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    postalCode: '520004',
    country: 'India',
    formatted: 'Kedarnade Taveres, Door No: 49-4-17/1, Vantena, Adarsha Colony, Road No. 12, Gunadala, Vijayawada – 520004, Andhra Pradesh, India',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Door+No+49-4-17%2F1+Vantena+Adarsha+Colony+Road+No+12+Gunadala+Vijayawada+520004',
  },
  contact: {
    phoneFormatted: '+91 79955 56988',
    phoneRaw: '7995556988',
    whatsappFormatted: '+91 79955 56988',
    whatsappRaw: '7995556988',
    email: 'info@srithrayifacility.com',
    operatingHours: 'Monday – Saturday: 8:30 AM – 7:30 PM (24/7 Operational Response)',
  },
  maps: {
    query: 'Plot No. 22/A, Sri Venkateswara Nilayam, Salivahana Colony, JNTU 9th Phase, Hyderabad 500085',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+No.+22%2FA%2C+Sri+Venkateswara+Nilayam%2C+Salivahana+Colony%2C+JNTU+9th+Phase%2C+Hyderabad+500085',
  },
};
