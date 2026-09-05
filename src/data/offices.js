// Coordinates are standard city/district-level reference points (not street-geocoded —
// no geocoding service is available in this environment). Frankfurt, Milan, Bangalore
// and Hyderabad are placed as close as possible to the given street address's
// neighborhood.

const offices = [
  {
    id: 'frankfurt',
    city: 'Frankfurt',
    country: 'Germany',
    region: 'Europe',
    type: 'Headquarters (Manufacturing) (Primary)',
    address: 'Bockenheimer Landstrasse 17-19, Frankfurt am Main, Hesse 60311, DE',
    lat: 50.1155,
    lng: 8.6570,
  },
  {
    id: 'milan',
    city: 'Milan',
    country: 'Italy',
    region: 'Europe',
    type: 'Aerospace & Military Software',
    address: 'Piazza Sei Febbraio, Milan, Lombardy 20145, IT',
    lat: 45.4685,
    lng: 9.1917,
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    country: 'India',
    region: 'India',
    type: 'Automotive Design',
    address: 'Fernbank, 3, Rest House Rd, Bangalore, Karnataka 560001, IN',
    lat: 12.9750,
    lng: 77.6070,
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    country: 'India',
    region: 'India',
    type: 'Registered Office',
    address: 'Plot.No12, New Software Units Layout, Opp.Sattva Gate 2, Madhapur, Hyderabad, Telangana 500081, IN',
    lat: 17.4483,
    lng: 78.3915,
  },
];

export default offices;
