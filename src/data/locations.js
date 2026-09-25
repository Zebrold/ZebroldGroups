/**
 * Zebrold International Holdings Limited (Zebrold IHL)
 * Global corporate locations, design plants, and registered offices.
 */
export const LOCATIONS = [
  {
    id: 'frankfurt-hq',
    isPrimary: true,
    tag: {
      en: 'Primary',
      de: 'Hauptstandort',
    },
    title: {
      en: 'Headquarters ( Manufacturing )',
      de: 'Hauptsitz ( Fertigung )',
    },
    addressLine1: 'Bockenheimer Landstrasse 17-19',
    locality: 'Frankfurt am Main',
    region: 'Hesse',
    postalCode: '60311',
    countryCode: 'DE',
    country: {
      en: 'Germany',
      de: 'Deutschland',
    },
    fullAddress: 'Bockenheimer Landstrasse 17-19, Frankfurt am Main, Hesse, 60311, DE',
    mapQuery: 'Bockenheimer+Landstrasse+17-19,+60311+Frankfurt+am+Main,+Germany',
  },
  {
    id: 'milan-design',
    isPrimary: false,
    tag: null,
    title: {
      en: 'Rolling stocks Design',
      de: 'Schienenfahrzeug-Design',
    },
    addressLine1: 'Piazza Sei Febbraio',
    locality: 'Milan',
    region: 'Lombardy',
    postalCode: '20145',
    countryCode: 'IT',
    country: {
      en: 'Italy',
      de: 'Italien',
    },
    fullAddress: 'Piazza Sei Febbraio, Milan, Lombardy, 20145, IT',
    mapQuery: 'Piazza+Sei+Febbraio,+20145+Milano,+Italy',
  },
  {
    id: 'bangalore-plant',
    isPrimary: false,
    tag: null,
    title: {
      en: 'Design Plant',
      de: 'Entwicklungswerk',
    },
    addressLine1: 'Fernbank, 3, Rest House Rd',
    locality: 'Bangalore',
    region: 'Karnataka',
    postalCode: '560001',
    countryCode: 'IN',
    country: {
      en: 'India',
      de: 'Indien',
    },
    fullAddress: 'Fernbank, 3, Rest House Rd, Bangalore, Karnataka, 560001, IN',
    mapQuery: 'Fernbank,+3+Rest+House+Rd,+Bangalore,+Karnataka+560001,+India',
  },
  {
    id: 'hyderabad-office',
    isPrimary: false,
    tag: null,
    title: {
      en: 'Registered Office',
      de: 'Eingetragener Sitz',
    },
    addressLine1: 'Plot.No12, New Software Units Layout, Opp.Sattva Gate 2, Madhapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500081',
    countryCode: 'IN',
    country: {
      en: 'India',
      de: 'Indien',
    },
    fullAddress: 'Plot.No12, New Software Units Layout, Opp.Sattva Gate 2, Madhapur, Hyderabad, Telangana, 500081, IN',
    mapQuery: 'Plot+No+12+New+Software+Units+Layout+Opp+Sattva+Gate+2+Madhapur+Hyderabad+Telangana+500081',
  },
];
