import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { geoGraticule, geoInterpolate, geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldTopology from 'world-atlas/countries-110m.json';
import { useLanguage } from '../../context/LanguageContext';
import { getExpertise, getStats, getDomains, getNewsSection, getAboutScroll, getCta, getSectionOrder, getTicker } from '../../utils/homepageData';
import { sendContactEmail } from '../../services/emailService';
import SEO from '../../components/SEO/SEO';
import './Home.css';

import heroBg1 from '../../assets/hero_bg_meridian.png';
import heroSection1Img from '../../assets/hero_section1_vr.jpg';
import heroBg2 from '../../assets/hero_bg_northvolt.png';
import heroBg3 from '../../assets/hero_bg_everstone.png';
import evSectorImg from '../../assets/ev_sector.png';
import semiSectorImg from '../../assets/semi_sector.jpg';
import carSectorImg from '../../assets/car_sector.png';
import retailSectorImg from '../../assets/retail_sector.png';
import educationSectorImg from '../../assets/education_sector.png';
import techSectorImg from '../../assets/tech_sector.png';
import financeSectorImg from '../../assets/finance_sector.png';
import healthcareSectorImg from '../../assets/healthcare_sector.png';
import logisticsSectorImg from '../../assets/logistics_sector.png';
import agricultureSectorImg from '../../assets/agriculture_sector.png';
import industrialSectorImg from '../../assets/industrial_sector.png';
import mediaSectorImg from '../../assets/media_sector.png';
import countryHealthLogo from '../../assets/country_health_logo.png';
import instructisLogo from '../../assets/instructis_logo.png';
import flieganWing400fImg from '../../assets/ChatGPT Image Sep 11, 2026 at 05_23_54 PM.png';

// Aerospace Fleet Showcase Multi-Angle Assets
import n444TakeoffImg from '../../assets/products-a321xlr/a321xlr_xtra_long_range_takeoff.png';
import n444FlightImg from '../../assets/products-a321xlr/a321xlr_flight_test_clouds.png';
import n444CockpitImg from '../../assets/products-a321xlr/a321xlr_cockpit.png';
import n444CabinImg from '../../assets/products-a321xlr/a321xlr_cabin_walkthrough.png';

import rs777CruiseImg from '../../assets/products-777x/777x_flight_cruise.png';
import rs777CockpitImg from '../../assets/products-777x/777x_flight_deck.png';
import rs777CabinImg from '../../assets/products-777x/777x_cabin_wide_boeing.png';
import rs777WingImg from '../../assets/products-777x/777x_climb_engines_wing.png';

import f400HeroImg from '../../assets/products-a350f/a350f_hero_flight.png';
import f400CargoHoldImg from '../../assets/products-a350f/a350f_cargo_hold_interior.png';
import f400CargoDoorImg from '../../assets/products-a350f/a350f_xl_cargo_door.png';
import f400WireframeImg from '../../assets/products-a350f/a350f_engineering_wireframe.png';

import cypreliaConceptImg from '../../assets/products-atm/atm_future_concept_aircraft.png';
import cypreliaFormationImg from '../../assets/products-atm/atm_wake_energy_formation.png';
import cypreliaMissionImg from '../../assets/products-atm/atm_hero_control_room.png';
import cypreliaClimbImg from '../../assets/products-atm/atm_climb_departure.png';

gsap.registerPlugin(ScrollTrigger);

/* ── Aerospace Fleet Showcase Data ── */
const SHOWCASE_PRODUCTS = [
  {
    id: 'n444xc',
    name: 'N444XC',
    meta: 'FLIEGANWING',
    category: 'Commercial Passenger & Refurbishment',
    badge: 'REFURBISHMENT PROGRAM',
    status: 'Flight Testing',
    reg: 'D-AZBC · N444XC',
    callsign: 'ZEB-444',
    desc: 'The Xtra Long Range single-aisle route opener refurbished under Zebrold IHL. Connecting distant city pairs with single-aisle economics and widebody passenger comfort.',
    path: '/products/a321xlr',
    specs: {
      range: '8,700 KM',
      rangeNm: '4,700 NM',
      speed: 'Mach 0.78',
      speedKmh: '876 KM/H',
      capacity: '180 – 244 PAX',
      payload: '13.5 T Cargo',
      mtow: '101.0 T',
      wingspan: '35.80 M',
      length: '44.51 M',
      height: '11.76 M',
      engines: 'CFM LEAP-1A / GTF',
      thrust: '32,160 LBF',
      ceiling: '41,000 FT',
      fuelCapacity: '32,940 L (With RCT)',
    },
    views: [
      { id: 'takeoff', label: 'Takeoff Climb', image: n444TakeoffImg, alt: 'N444XC Xtra Long Range climbing shortly after takeoff' },
      { id: 'cruise', label: 'Cruise Flight', image: n444FlightImg, alt: 'N444XC cruising above the clouds in flight test' },
      { id: 'cockpit', label: 'Flight Deck', image: n444CockpitImg, alt: 'N444XC glass cockpit and dual sidestick controls' },
      { id: 'cabin', label: 'Airspace Cabin', image: n444CabinImg, alt: 'N444XC Airspace passenger cabin with wide seats and ambient lighting' },
    ],
  },
  {
    id: '699rs',
    name: '699RS',
    meta: 'PERFORMANCE',
    category: 'Ultra-Long Range Widebody Flagship',
    badge: 'FLAGSHIP COMMERCIAL',
    status: 'Commercial Fleet',
    reg: 'D-AZRS · 699RS',
    callsign: 'ZEB-699',
    desc: 'The world’s largest and most efficient twin-engine widebody airliner. Engineered with folding carbon-fiber wingtips, GE9X turbofans, and intercontinental range.',
    path: '/products/777x',
    specs: {
      range: '16,170 KM',
      rangeNm: '8,730 NM',
      speed: 'Mach 0.84',
      speedKmh: '905 KM/H',
      capacity: '426 PAX (2-Class)',
      payload: '73.5 T Cargo',
      mtow: '351.5 T',
      wingspan: '71.8 M (Folded: 64.8 M)',
      length: '76.7 M',
      height: '19.7 M',
      engines: 'GE9X-105B1A Turbofans',
      thrust: '105,000 LBF each',
      ceiling: '43,100 FT',
      fuelCapacity: '197,360 L',
    },
    views: [
      { id: 'cruise', label: 'Cruise Flight', image: rs777CruiseImg, alt: '699RS ultra-long range widebody in cruising flight' },
      { id: 'cockpit', label: 'Flight Deck', image: rs777CockpitImg, alt: '699RS touchscreen flight deck and HUDs' },
      { id: 'cabin', label: 'Widebody Cabin', image: rs777CabinImg, alt: '699RS wide passenger interior with panoramic windows' },
      { id: 'engines', label: 'GE9X Wing & Engines', image: rs777WingImg, alt: '699RS massive GE9X turbofan and advanced composite wing' },
    ],
  },
  {
    id: '400f',
    name: '400F',
    meta: 'FREIGHT',
    category: 'Main-Deck Heavy Cargo Transporter',
    badge: 'HEAVY FREIGHT PROGRAM',
    status: 'Cargo Operations',
    reg: 'D-AZFW · 400F',
    callsign: 'ZEB-400',
    desc: 'Next-generation clean-sheet main-deck widebody freighter. 70% advanced materials, 111-tonne payload capability, and an oversized 4.4-meter main-deck cargo door.',
    path: '/products/a350f',
    specs: {
      range: '8,700 KM',
      rangeNm: '4,700 NM',
      speed: 'Mach 0.85',
      speedKmh: '910 KM/H',
      capacity: '111 Tonnes Payload',
      payload: '30 Maindeck Pallets',
      mtow: '319.0 T',
      wingspan: '64.75 M',
      length: '70.80 M',
      height: '17.10 M',
      engines: 'Rolls-Royce Trent XWB-97',
      thrust: '97,000 LBF each',
      ceiling: '43,000 FT',
      fuelCapacity: '165,500 L',
    },
    views: [
      { id: 'flight', label: 'In Flight', image: f400HeroImg, alt: '400F main-deck cargo freighter banking in flight' },
      { id: 'cargohold', label: 'Maindeck Hold', image: f400CargoHoldImg, alt: '400F cargo deck interior with automated cargo loading system' },
      { id: 'cargodoor', label: 'XL Cargo Door', image: f400CargoDoorImg, alt: '400F extra-large 4.4-meter cargo door during pallet loading' },
      { id: 'wireframe', label: 'Engineering Spec', image: f400WireframeImg, alt: '400F structural engineering and composite airframe model' },
    ],
  },
  {
    id: 'cyprelia',
    name: 'CYPRELIA V1',
    meta: 'NEXT GENERATION',
    category: 'Autonomous Air Traffic & Next-Gen Flight',
    badge: 'ADVANCED R&D CONCEPT',
    status: 'Advanced Concept',
    reg: 'CONCEPT · CYP-V1',
    callsign: 'ZEB-CYP',
    desc: 'Autonomous aerodynamic architecture engineered for high-efficiency formation corridors, wake-energy harvesting, and automated air traffic management.',
    path: '/products/air-traffic-management',
    specs: {
      range: 'Global Corridors',
      rangeNm: 'Intercontinental',
      speed: 'Mach 0.90+',
      speedKmh: 'Super-Cruise Capable',
      capacity: 'Modular Automated Bay',
      payload: 'Autonomous ATM Integration',
      mtow: 'Optimized Carbon Shell',
      wingspan: 'Adaptive Geometry',
      length: '52.4 M',
      height: '12.8 M',
      engines: 'Hybrid Propulsion Core',
      thrust: 'Distributed Electric / Core',
      ceiling: '50,000 FT',
      fuelCapacity: 'SAF / Hydrogen Ready',
    },
    views: [
      { id: 'concept', label: 'Concept Aircraft', image: cypreliaConceptImg, alt: 'CYPRELIA V1 futuristic aerodynamic concept aircraft' },
      { id: 'formation', label: 'Formation Flight', image: cypreliaFormationImg, alt: 'CYPRELIA V1 flying in wake-energy harvesting formation' },
      { id: 'mission', label: 'Autonomous Hub', image: cypreliaMissionImg, alt: 'Autonomous air traffic operations command and control facility' },
      { id: 'climb', label: 'High-Altitude Climb', image: cypreliaClimbImg, alt: 'CYPRELIA V1 climbing toward stratospheric corridor' },
    ],
  },
];
const COMPANY_TICKER_ITEMS = [
  { name: 'Country Health', logo: countryHealthLogo, country: 'Düsseldorf, Deutschland', sector: 'Gesundheitswesen & Pharma' },
  { name: 'Instructis', logo: instructisLogo, country: 'Hyderabad, Indien', sector: 'Bildung & Karriere' },
];
const EXPERTISE_ITEMS = [
  {
    id: 'industrial-excellence',
    num: '01',
    caption: 'Industrielle Exzellenz',
    title: 'Ingenieurspräzision auf institutioneller Ebene',
    body: 'Wir entwerfen, bauen und betreiben Infrastruktur in zwölf Sektoren — von der Halbleiterfertigung bis zu sauberen Energienetzen. Unsere Tochtergesellschaften liefern industrielle Lösungen mit deutscher Ingenieurspräzision und verbinden fortschrittliche Fertigungskapazitäten mit nachhaltigen Praktiken auf globalen Märkten.',
    cta: 'Sektoren erkunden',
    ctaPath: '/sectors',
    image: semiSectorImg,
    badge1: 'Digitale Transformation',
    badge2: 'Präzisionsfertigung',
    badge3: 'Nachhaltige Innovation',
  },
  {
    id: 'healthcare-education',
    num: '02',
    caption: 'Gesundheitswesen & Bildung',
    title: 'Innovation im Gesundheitswesen und in der Bildung',
    body: 'Wir investieren in die Zukunft menschlichen Wohlergehens und Wissensaufbaus. Durch spezialisierte Tochtergesellschaften verbinden wir lebensrettende Medizintechnik mit moderner Bildungs- und Plattformtechnologie für globale Märkte.',
    cta: 'Initiativen entdecken',
    ctaPath: '/sectors',
    image: healthcareSectorImg,
    badge1: 'Medizintechnik & Pharma',
    badge2: 'Digitale Bildung',
    badge3: 'Skalierbare Gesundheitssysteme',
  },
  {
    id: 'global-presence',
    num: '03',
    caption: 'Globale Präsenz',
    title: 'Lokale Expertise, globale Infrastruktur',
    body: 'Mit Produktionsstätten in München und Dresden, Vertriebszentren in 22 europäischen Märkten und Standorten auf drei Kontinenten kombinieren wir tiefes lokales Wissen mit Ausführung im institutionellen Maßstab. Unsere Teams arbeiten weltweit in regulierten, präzisionskritischen Umgebungen.',
    cta: 'Unsere Büros',
    ctaPath: '/offices',
    image: heroBg3,
    badge1: '3 Kontinente',
    badge2: '22 DACH Märkte',
    badge3: 'Institutioneller Maßstab',
  },
];
const CASE_STUDIES = [
  {
    title: 'Meridian Microelectronics',
    subtitle: 'Fortschrittliche Halbleiterfertigung',
    tags: ['Halbleiter'],
    desc: 'Entwicklung von Power-Management-ICs der nächsten Generation und Automotive-Chips an den Standorten München und Dresden.',
    image: heroBg1,
    thumb: semiSectorImg,
    link: '/subsidiaries',
  },
  {
    title: 'Northvolt Power',
    subtitle: 'Zellfertigung der nächsten Generation',
    tags: ['EV & Batterie'],
    desc: 'Bereitstellung nachhaltiger Lithium-Ionen-Technologie für Automobil- und Netzspeicheranwendungen.',
    image: heroBg2,
    thumb: evSectorImg,
    link: '/subsidiaries',
  },
  {
    title: 'Everstone Energy',
    subtitle: 'Infrastruktur für saubere Energie',
    tags: ['Saubere Energie'],
    desc: 'Betrieb von 1,5 GW an sauberer Energiekapazität zur Beschleunigung des Net-Zero-Übergangs in europäischen Märkten.',
    image: heroBg3,
    thumb: financeSectorImg,
    link: '/subsidiaries',
  },
];
const DOMAINS_LIST = [
  {
    id: 'ev-battery',
    title: 'EV-Laden & Batterien',
    subtitle: 'EV Charging & Battery',
    companies: 'Everstone Energy, Northvolt Power',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'semiconductors',
    title: 'Halbleiter',
    subtitle: 'Semiconductors',
    companies: 'Meridian Microelectronics, Silicon Crest',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    id: 'car-manufacturing',
    title: 'Automobilbau',
    subtitle: 'Car Manufacturing',
    companies: 'Redford Automotive, Westbridge Motors',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.2 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    id: 'education',
    title: 'Bildung',
    subtitle: 'Education',
    companies: 'Instructis, Brighton Education, Clearpath',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: 'technology',
    title: 'Technologie & IT',
    subtitle: 'Technology & IT',
    companies: 'Skybridge Technologies, Arden Digital',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'finance',
    title: 'Finanzen & Investitionen',
    subtitle: 'Finance & Investment',
    companies: 'Sterling Financial, Harrington Capital',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    title: 'Gesundheitswesen & Pharma',
    subtitle: 'Healthcare & Pharma',
    companies: 'Country Health, Oakwell, Greenford',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'logistics',
    title: 'Logistik & Lieferkette',
    subtitle: 'Logistics & Supply Chain',
    companies: 'PrimeRoute Logistics, GlobalLink',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'retail',
    title: 'Einzelhandel & Konsumgüter',
    subtitle: 'Retail & Consumer',
    companies: 'PrimeMart Retail, UrbanBasket Stores',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'agriculture',
    title: 'Landwirtschaft & Lebensmittel',
    subtitle: 'Agriculture & Food',
    companies: 'Greenfield Agri, Harvest Hill Foods',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z" />
        <path d="M12 12c-2.5 0-5 2.5-5 5" />
        <path d="M12 12c2.5 0 5-2.5 5-5" />
      </svg>
    ),
  },
  {
    id: 'industrial',
    title: 'Industrie & Maschinenbau',
    subtitle: 'Industrial & Engineering',
    companies: 'Ironclad Engineering, Stonebridge',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M5 20V8l5 3V8l5 3V4h4v16" />
      </svg>
    ),
  },
  {
    id: 'media',
    title: 'Medien & Unterhaltung',
    subtitle: 'Media & Entertainment',
    companies: 'Northstar Entertainment, Silverline',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
];
const STATS = [
  { value: 216, prefix: '€', suffix: ' Million', label: 'Umsatz der Tochtergesellschaften' },
  { value: 22, prefix: '', suffix: '', label: 'Unternehmen in unserem Portfolio' },
  { value: 40, prefix: '+', suffix: '%', label: 'Wachstum gegenüber dem Vorjahr in Schlüsselsektoren' },
];

const MAIDEN_FLIGHT_AT = new Date('2027-11-05T00:00:00Z').getTime();
const WORLD_MAP_WIDTH = 1000;
const WORLD_MAP_HEIGHT = 520;
const worldFeature = feature(worldTopology, worldTopology.objects.countries);
const worldProjection = geoNaturalEarth1().fitSize([WORLD_MAP_WIDTH, WORLD_MAP_HEIGHT], worldFeature);
const worldPath = geoPath(worldProjection);
const worldGraticule = geoGraticule().step([30, 30]);
const routeCities = {
  frankfurt: [8.657, 50.1155],
  bangalore: [77.607, 12.975],
  sydney: [151.2093, -33.8688],
};

function getCountdown(targetTime) {
  const remaining = Math.max(0, targetTime - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function N444WorldMap({ destination }) {
  const origin = routeCities.frankfurt;
  const target = routeCities[destination];
  const interpolate = geoInterpolate(origin, target);
  const routeCoordinates = Array.from({ length: 61 }, (_, index) => interpolate(index / 60));
  const routePath = worldPath({ type: 'Feature', geometry: { type: 'LineString', coordinates: routeCoordinates } });
  const originPoint = worldProjection(origin);
  const targetPoint = worldProjection(target);

  return (
    <div className="n444xc-map" aria-label={`World map showing the Frankfurt to ${destination} flight route`}>
      <svg viewBox={`0 0 ${WORLD_MAP_WIDTH} ${WORLD_MAP_HEIGHT}`} role="img" aria-hidden="true">
        <rect className="n444xc-map-ocean" width={WORLD_MAP_WIDTH} height={WORLD_MAP_HEIGHT} />
        <path className="n444xc-map-graticule" d={worldPath(worldGraticule)} />
        <path className="n444xc-map-land" d={worldPath(worldFeature)} />
        <path className="n444xc-route-line" d={routePath} />
        <circle className="n444xc-map-marker-halo" cx={originPoint[0]} cy={originPoint[1]} r="12" />
        <circle className="n444xc-map-marker" cx={originPoint[0]} cy={originPoint[1]} r="5" />
        <circle className="n444xc-map-marker-halo" cx={targetPoint[0]} cy={targetPoint[1]} r="12" />
        <circle className="n444xc-map-marker" cx={targetPoint[0]} cy={targetPoint[1]} r="5" />
        <text className="n444xc-map-label" x={originPoint[0] + 14} y={originPoint[1] - 12}>Frankfurt</text>
        <text className="n444xc-map-label" x={targetPoint[0] + 14} y={targetPoint[1] - 12}>{destination === 'sydney' ? 'Sydney' : 'Bangalore'}</text>
      </svg>
      <span className="n444xc-map-distance">{destination === 'sydney' ? '16,601 KM' : '6,990 KM'}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ANIMATED COUNTER COMPONENT
   ═══════════════════════════════════════════ */
function AnimatedCounter({ value, prefix = '', suffix = '', isDecimal = false }) {
  const ref = useRef(null);
  const numRef = useRef(null);
  const hasAnimated = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const counter = { val: 0 };
          gsap.to(counter, {
            val: value,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              if (numRef.current) {
                const display = isDecimal
                  ? counter.val.toFixed(1)
                  : Math.floor(counter.val);
                numRef.current.textContent = `${prefix}${display}${suffix}`;
              }
            },
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, prefix, suffix, isDecimal]);
  return (
    <span ref={ref}>
      <span ref={numRef} className="data-value-num">
        {prefix}0{suffix}
      </span>
    </span>
  );
}
/* ═══════════════════════════════════════════
   MAIN HOME COMPONENT
   ═══════════════════════════════════════════ */
export default function Home() {
  const { t, lang } = useLanguage();
  const homeRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const aboutTextRef = useRef(null);

  /* Chatbot Floating Widget state */
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatName, setChatName] = useState('');
  const [chatEmail, setChatEmail] = useState('');
  const [chatMsg, setChatMsg] = useState('');
  const [chatSent, setChatSent] = useState(false);
  const [activeProductId, setActiveProductId] = useState('n444xc');
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [isSpecsModalOpen, setIsSpecsModalOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState('sydney');
  const [countdown, setCountdown] = useState(() => getCountdown(MAIDEN_FLIGHT_AT));

  const activeProduct = SHOWCASE_PRODUCTS.find((product) => product.id === activeProductId) || SHOWCASE_PRODUCTS[0];
  const activeProductIndex = SHOWCASE_PRODUCTS.findIndex((p) => p.id === activeProduct.id);
  const activeView = activeProduct.views?.[activeViewIndex] || activeProduct.views?.[0];

  const handleSelectProduct = (productId) => {
    setActiveProductId(productId);
    setActiveViewIndex(0);
  };

  const handlePrevProduct = () => {
    const prevIndex = (activeProductIndex - 1 + SHOWCASE_PRODUCTS.length) % SHOWCASE_PRODUCTS.length;
    setActiveProductId(SHOWCASE_PRODUCTS[prevIndex].id);
    setActiveViewIndex(0);
  };

  const handleNextProduct = () => {
    const nextIndex = (activeProductIndex + 1) % SHOWCASE_PRODUCTS.length;
    setActiveProductId(SHOWCASE_PRODUCTS[nextIndex].id);
    setActiveViewIndex(0);
  };

  useEffect(() => {
    if (!isSpecsModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSpecsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSpecsModalOpen]);

  useEffect(() => {
    const updateCountdown = () => setCountdown(getCountdown(MAIDEN_FLIGHT_AT));
    const countdownTimer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(countdownTimer);
  }, []);

  /* Hero Movement Parallax Removed */

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setChatSent(true);
    sendContactEmail({
      name: chatName,
      email: chatEmail,
      subject: 'Executive Desk Chat Inquiry',
      message: chatMsg
    });
    setTimeout(() => {
      setChatSent(false);
      setIsChatOpen(false);
      setChatName('');
      setChatEmail('');
      setChatMsg('');
    }, 2500);
  };

  /* Read expertise from admin-editable data; fall back to translation keys for unedited fields */
  const IMAGE_MAP = { semi_sector: semiSectorImg, healthcare_sector: healthcareSectorImg, hero_bg_everstone: heroBg3 };
  const adminExpertise = getExpertise();
  const expertiseItems = adminExpertise.map((item, idx) => {
    const fallbackCaptions = [t('exp_1_caption'), t('exp_2_caption'), t('exp_3_caption')];
    const fallbackTitles = [t('exp_1_title'), t('exp_2_title'), t('exp_3_title')];
    const fallbackBodies = [t('exp_1_body'), t('exp_2_body'), t('exp_3_body')];
    const fallbackCtas = [t('exp_1_cta'), t('exp_2_cta'), t('exp_3_cta')];
    return {
      id: item.id,
      num: item.num,
      caption: lang === 'en' ? (item.caption_en || fallbackCaptions[idx]) : (item.caption_de || fallbackCaptions[idx]),
      title: lang === 'en' ? (item.title_en || fallbackTitles[idx]) : (item.title_de || fallbackTitles[idx]),
      body: lang === 'en' ? (item.body_en || fallbackBodies[idx]) : (item.body_de || fallbackBodies[idx]),
      cta: lang === 'en' ? (item.cta_en || fallbackCtas[idx]) : (item.cta_de || fallbackCtas[idx]),
      ctaPath: item.ctaPath,
      image: item.imagePreview || IMAGE_MAP[item.imageKey] || semiSectorImg,
    };
  });

  /* Read stats from admin-editable data */
  const adminStats = getStats();
  const statsList = adminStats.map((stat, idx) => {
    const fallbackLabels = [t('stat_1_label'), t('stat_2_label'), t('stat_3_label')];
    return {
      value: stat.value,
      prefix: stat.prefix,
      suffix: stat.suffix,
      label: lang === 'en' ? (stat.label_en || fallbackLabels[idx]) : (stat.label_de || fallbackLabels[idx]),
    };
  });



  /* ════════════════════════════════════════
     MASTER GSAP ANIMATION SETUP
     ════════════════════════════════════════ */
  useEffect(() => {
    if (!homeRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      /* ── 1. Hero entrance sequence ── */
      const heroTL = gsap.timeline({ delay: 0.1 });
      heroTL
        .fromTo('.hero-bg-img',
          { opacity: 0 },
          { opacity: 1, duration: 2, ease: 'power2.out' }
        )
        .fromTo('.hero-title',
          { x: -120, opacity: 0, filter: 'blur(8px)' },
          { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power4.out' },
          0.3
        )
        .fromTo(['.hero-desc-wrap', '.hero-cta-btn'],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power4.out' },
          0.6
        );
      /* ── 2. Hero parallax on scroll ── */
      gsap.to('.hero-bg-img', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.hero-content', {
        y: -80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: '60% top',
          end: 'bottom top',
          scrub: true,
        },
      });

      /* ── 8. Data / Stats section ── */
      const dataTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.data-section',
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
      dataTL
        .fromTo('.data-title-wrap',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        )
        .fromTo('.data-item',
          { y: 60, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          0.2
        );
      /* ── 13. About horizontal scroll & overlay sequence ── */
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-scroll-section',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // 1. Giant text scrolls horizontally across the image (0 to 0.85)
      aboutTl.to('.about-scroll-text', {
        x: () => {
          const el = document.querySelector('.about-scroll-text');
          return el ? -(el.scrollWidth - window.innerWidth + window.innerWidth * 0.15) : -1500;
        },
        ease: 'none',
        duration: 0.85,
      }, 0);

      // 2. Giant text holds at full opacity until the horizontal scroll (0→0.85)
      // has fully revealed it — including the final words — then fades out.
      aboutTl.to('.about-scroll-text', {
        opacity: 0,
        duration: 0.12,
      }, 0.88);

      // 3. Right-side paragraph fades & slides in (0.5 to 1.3)
      aboutTl.fromTo('.about-split-overlay',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: 'power2.out', duration: 0.8 },
        0.5
      );

      /* ── 12. Footer letter reveal ── */
      gsap.fromTo('.footer-links-area',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
      gsap.fromTo('.footer-giant-letter',
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0, opacity: 1,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: '.footer-letters-wrap',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, homeRef);
    return () => ctx.revert();
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://www.zebrold.de/#corporation",
        "name": "Zebrold International Holdings Limited",
        "alternateName": [
          "Zebrold IHL",
          "Zebrold Group",
          "ZIHL",
          "Zebrold Holdings"
        ],
        "legalName": "Zebrold International Holdings Limited",
        "url": "https://www.zebrold.de",
        "logo": "https://www.zebrold.de/favicon.png",
        "image": "https://www.zebrold.de/favicon.png",
        "description": "Zebrold International Holdings Limited (Zebrold IHL) is a globally diversified German conglomerate headquartered in Frankfurt am Main, operating across 12 strategic sectors with 26 subsidiaries.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bockenheimer Landstrasse 17-19",
          "addressLocality": "Frankfurt am Main",
          "postalCode": "60325",
          "addressCountry": "DE"
        },
        "telephone": "+49 69 2100 4800",
        "email": "info@zebrold.de",
        "foundingDate": "2013",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 10000
        },
        "sameAs": [
          "https://www.linkedin.com/company/zebrold"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.zebrold.de/#website",
        "url": "https://www.zebrold.de/",
        "name": "Zebrold International Holdings Limited",
        "alternateName": ["Zebrold IHL", "Zebrold Group"],
        "publisher": {
          "@id": "https://www.zebrold.de/#corporation"
        }
      }
    ]
  };

  return (
    <div className="home-page" ref={homeRef}>
      <SEO 
        title="Zebrold International Holdings Limited (Zebrold IHL)"
        description="Official portal of Zebrold International Holdings Limited (Zebrold IHL). A globally diversified German conglomerate headquartered in Frankfurt am Main with EUR 216M revenue and 26 subsidiaries across 12 sectors."
        keywords="Zebrold, Zebrold IHL, Zebrold International Holdings Limited, Zebrold Group, Zebrold Holdings, ZIHL, Frankfurt conglomerate, German conglomerate, EV charging, semiconductors, finance, healthcare, industrial engineering"
        url="/"
        schemaData={schemaData}
      />
      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section
        className="hero-section"
      >
        <div className="hero-bg">
          <img src={heroSection1Img} alt="Zebrold International Holdings Limited Hero Background" className="hero-bg-img" loading="eager" width="1672" height="941" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="padding-global hero-padding-bottom-zero">
            <div className="container-large hero-layout">
              <div className="hero-copy">
                <h1 className="hero-title">
                  {t('hero_title')}
                </h1>
                <div className="hero-desc-wrap">
                  <p className="hero-desc">
                    {t('hero_desc')}
                  </p>
                </div>
                <Link to="/contact" className="button is-beige hero-cta-btn">
                  <span className="button-text">{t('hero_cta')} →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2: ABOUT US ═══════ */}
      <section className="home-about-intro" aria-labelledby="home-about-intro-title">
        <div className="home-about-intro-heading">
          <p className="home-about-intro-kicker">ABOUT US</p>
          <h2 id="home-about-intro-title">Engineered for a<br />Bolder Tomorrow</h2>
        </div>
        <div className="home-about-intro-copy">
          <p>
            Zebrold IHL is manufacturing one of the fastest and smartest aircrafts, with the N444XC and 400F currently in production. We are building the best things through advanced engineering, intelligent design and a relentless drive for innovation, shaping the future of global mobility and cargo.
          </p>
          <p>
            Beyond aviation, CYPRELIA V1 represents our vision in high-performance mobility - a sports car backed by one of the best engines in making, designed to deliver unmatched power, precision and an extraordinary driving experience.
          </p>
        </div>
        <span className="home-about-intro-rule" aria-hidden="true" />
      </section>

      {/* ═══════ SECTION 2: WORDMARK FEATURE ═══════ */}
      <section className="home-editable-section" aria-label="Made in Germany, perfected in South Korea">
        <div className="home-editable-text home-wordmark-wrap">
          <div className="home-quote-intro" aria-label="Aerospace quote">
            <blockquote>
              "Aircrafts are the modern test of human ambition. We are building one of the fastest pilotless aircraft in the world. The N444XC represents our vision to refurbish and redefine the future of flight."
            </blockquote>
            <cite>Hemendrah Kumar Sadamsetty — Chairman, Zebrold IHL</cite>
          </div>
          <div className="home-wordmark-lines" aria-label="Made in Germany Perfected in South Korea">
            <span className="home-wordmark-line line-one">Made in Germany</span>
            <span className="home-wordmark-line line-two">Perfected in Australia</span>
          </div>

          <section className="home-aircraft-image-section" aria-label="FlieganWing aircraft showcase">
            <img
              src={flieganWing400fImg}
              alt="FlieganWing 400F aircraft in flight"
              className="home-aircraft-image"
              loading="lazy"
            />
          </section>

          <section className="freighter-expertise-section" aria-labelledby="freighter-expertise-title">
            <div className="freighter-expertise-copy">
              <p className="freighter-expertise-kicker">FREIGHTERS</p>
              <h2 id="freighter-expertise-title">Elevate your cargo with FlieganWing expertise</h2>
              <span className="freighter-expertise-rule" aria-hidden="true" />
            </div>
            <div className="freighter-expertise-body">
              <p>
                Benefit from FlieganWing's extensive expertise in the freighter industry spanning decades, our diverse fleet caters to various cargo markets and meets the needs of cargo operators with a comprehensive selection of freighter aircraft and passenger-to-freighter (P2F) conversion options.
              </p>
              <p>
                Whether you specialise in pure cargo transportation or conduct mixed operations, FlieganWing offers the perfect freighter aircraft for your requirements, regardless of the size of goods you intend to ship.
              </p>
            </div>
          </section>

          <div className="home-showcase-panel" aria-label="Top products by Zebrold IHL">
            {/* Top Showcase Header */}
            <div className="home-showcase-header">
              <div className="home-showcase-header-left">
                <span className="home-showcase-kicker">
                  <span className="home-showcase-dot" aria-hidden="true" />
                  ZEBROLD AEROSPACE &bull; FLEET PORTFOLIO
                </span>
                <h3 className="home-showcase-title">High-Performance Aircraft Fleet</h3>
                <p className="home-showcase-subtitle">
                  Engineered for intercontinental range, main-deck heavy freight, and autonomous flight corridors.
                </p>
              </div>

              <div className="home-showcase-header-controls">
                <span className="home-showcase-counter">
                  <strong>0{activeProductIndex + 1}</strong>
                  <span> / 0{SHOWCASE_PRODUCTS.length}</span>
                </span>
                <div className="home-showcase-cycle-btns">
                  <button
                    type="button"
                    className="home-showcase-cycle-btn"
                    onClick={handlePrevProduct}
                    aria-label="Previous aircraft model"
                    title="Previous model"
                  >
                    &larr;
                  </button>
                  <button
                    type="button"
                    className="home-showcase-cycle-btn"
                    onClick={handleNextProduct}
                    aria-label="Next aircraft model"
                    title="Next model"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>

            <div className="home-showcase-stage">
              {/* Left: The Interactive Aerospace Viewport */}
              <div className="home-showcase-viewport-chassis">
                <div className="home-showcase-viewport-inner">
                  {/* HUD Top Bar */}
                  <div className="home-showcase-hud-top">
                    <div className="home-showcase-hud-badge">
                      <span className="home-showcase-hud-pulse" aria-hidden="true" />
                      <span>{activeProduct.badge}</span>
                    </div>
                    <div className="home-showcase-hud-telemetry">
                      <span className="home-showcase-hud-reg">{activeProduct.reg}</span>
                      <button
                        type="button"
                        className="home-showcase-hud-action-btn"
                        onClick={() => setIsSpecsModalOpen(true)}
                        aria-label="Open technical specifications"
                        title="Open Technical Dossier"
                      >
                        <span>SPECS</span>
                        <span className="hud-action-icon" aria-hidden="true">&#9679;</span>
                      </button>
                    </div>
                  </div>

                  {/* Aircraft Image Viewport */}
                  <div className="home-showcase-image-viewport">
                    <img
                      key={`${activeProduct.id}-${activeView?.id}`}
                      src={activeView?.image}
                      alt={activeView?.alt || `${activeProduct.name} aircraft`}
                      className="home-showcase-image"
                      loading="lazy"
                    />
                    <div className="home-showcase-viewport-overlay" />
                  </div>

                  {/* HUD Bottom Bar with Interactive View Angle Buttons */}
                  <div className="home-showcase-hud-bottom">
                    <div className="home-showcase-view-label">
                      <small>PERSPECTIVE</small>
                      <strong>{activeView?.label}</strong>
                    </div>

                    <div className="home-showcase-angle-switcher" role="tablist" aria-label="Perspective angles">
                      {activeProduct.views?.map((view, vIdx) => (
                        <button
                          type="button"
                          key={view.id}
                          role="tab"
                          aria-selected={vIdx === activeViewIndex}
                          className={`home-showcase-angle-btn ${vIdx === activeViewIndex ? 'is-active' : ''}`}
                          onClick={() => setActiveViewIndex(vIdx)}
                        >
                          <span>{view.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Specs Ribbon */}
                <div className="home-showcase-quick-specs" aria-label="Aircraft performance highlights">
                  <div className="home-quick-spec-item">
                    <span className="home-quick-spec-label">MAX RANGE</span>
                    <strong className="home-quick-spec-value">{activeProduct.specs.range}</strong>
                    <small className="home-quick-spec-sub">{activeProduct.specs.rangeNm}</small>
                  </div>
                  <div className="home-quick-spec-item">
                    <span className="home-quick-spec-label">CRUISE SPEED</span>
                    <strong className="home-quick-spec-value">{activeProduct.specs.speed}</strong>
                    <small className="home-quick-spec-sub">{activeProduct.specs.speedKmh}</small>
                  </div>
                  <div className="home-quick-spec-item">
                    <span className="home-quick-spec-label">CAPACITY</span>
                    <strong className="home-quick-spec-value">{activeProduct.specs.capacity}</strong>
                    <small className="home-quick-spec-sub">{activeProduct.specs.payload}</small>
                  </div>
                  <div className="home-quick-spec-item">
                    <span className="home-quick-spec-label">MTOW</span>
                    <strong className="home-quick-spec-value">{activeProduct.specs.mtow}</strong>
                    <small className="home-quick-spec-sub">{activeProduct.specs.wingspan}</small>
                  </div>
                </div>
              </div>

              {/* Right: Fleet Selection Tabs & CTAs */}
              <div className="home-showcase-products">
                <div className="home-showcase-list-header">
                  <p className="home-showcase-label">TOP PRODUCTS BY ZEBROLD IHL</p>
                  <span className="home-showcase-list-tag">SELECT AIRCRAFT</span>
                </div>

                <div className="home-showcase-list" role="tablist" aria-label="Zebrold products">
                  {SHOWCASE_PRODUCTS.map((product) => {
                    const isActive = product.id === activeProduct.id;
                    return (
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`home-showcase-item ${isActive ? 'is-active' : ''}`}
                        key={product.id}
                        onClick={() => handleSelectProduct(product.id)}
                      >
                        <div className="home-showcase-item-top">
                          <span className="home-showcase-meta">{product.meta}</span>
                          <span className="home-showcase-status-badge">{product.status}</span>
                        </div>
                        <div className="home-showcase-item-main">
                          <span className="home-showcase-name">{product.name}</span>
                          <span className="home-showcase-item-arrow" aria-hidden="true">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </span>
                        </div>
                        {isActive && (
                          <div className="home-showcase-item-desc-wrap">
                            <p className="home-showcase-item-desc">{product.desc}</p>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Action Buttons Bar */}
                <div className="home-showcase-actions">
                  <Link to={activeProduct.path} className="home-showcase-button home-showcase-button--primary">
                    <span>View model specs</span>
                    <span className="home-btn-icon-wrapper" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </Link>

                  <button
                    type="button"
                    className="home-showcase-button home-showcase-button--secondary"
                    onClick={() => setIsSpecsModalOpen(true)}
                  >
                    <span>Technical Dossier</span>
                    <span className="home-btn-icon-wrapper" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </span>
                  </button>

                  <Link
                    to={`/contact?subject=${encodeURIComponent(`Aircraft Inquiry: ${activeProduct.name}`)}`}
                    className="home-showcase-inquire-link"
                  >
                    <span>Request Commercial Consultation</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Dossier Modal */}
          {isSpecsModalOpen && (
            <div
              className="showcase-modal-backdrop"
              onClick={() => setIsSpecsModalOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="dossier-title"
            >
              <div className="showcase-modal-card" onClick={(e) => e.stopPropagation()}>
                <div className="showcase-modal-header">
                  <div className="showcase-modal-header-text">
                    <span className="showcase-modal-badge">{activeProduct.badge}</span>
                    <h3 id="dossier-title">{activeProduct.name} — Technical Dossier</h3>
                    <p>{activeProduct.category} &bull; Registration: {activeProduct.reg}</p>
                  </div>
                  <button
                    type="button"
                    className="showcase-modal-close"
                    onClick={() => setIsSpecsModalOpen(false)}
                    aria-label="Close specifications dossier"
                  >
                    &times;
                  </button>
                </div>

                <div className="showcase-modal-body">
                  <div className="showcase-modal-grid">
                    <div className="showcase-modal-section">
                      <h4>Performance &amp; Range</h4>
                      <dl className="showcase-modal-dl">
                        <div>
                          <dt>Maximum Range</dt>
                          <dd>{activeProduct.specs.range} ({activeProduct.specs.rangeNm})</dd>
                        </div>
                        <div>
                          <dt>Normal Cruise Speed</dt>
                          <dd>{activeProduct.specs.speed} ({activeProduct.specs.speedKmh})</dd>
                        </div>
                        <div>
                          <dt>Service Ceiling</dt>
                          <dd>{activeProduct.specs.ceiling}</dd>
                        </div>
                        <div>
                          <dt>Takeoff Thrust</dt>
                          <dd>{activeProduct.specs.thrust}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="showcase-modal-section">
                      <h4>Weights &amp; Capacities</h4>
                      <dl className="showcase-modal-dl">
                        <div>
                          <dt>Max Takeoff Weight (MTOW)</dt>
                          <dd>{activeProduct.specs.mtow}</dd>
                        </div>
                        <div>
                          <dt>Seating / Payload Capacity</dt>
                          <dd>{activeProduct.specs.capacity}</dd>
                        </div>
                        <div>
                          <dt>Max Cargo Payload</dt>
                          <dd>{activeProduct.specs.payload}</dd>
                        </div>
                        <div>
                          <dt>Fuel Capacity</dt>
                          <dd>{activeProduct.specs.fuelCapacity}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="showcase-modal-section">
                      <h4>Geometry &amp; Systems</h4>
                      <dl className="showcase-modal-dl">
                        <div>
                          <dt>Wingspan</dt>
                          <dd>{activeProduct.specs.wingspan}</dd>
                        </div>
                        <div>
                          <dt>Overall Length</dt>
                          <dd>{activeProduct.specs.length}</dd>
                        </div>
                        <div>
                          <dt>Tail Height</dt>
                          <dd>{activeProduct.specs.height}</dd>
                        </div>
                        <div>
                          <dt>Powerplant</dt>
                          <dd>{activeProduct.specs.engines}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="showcase-modal-overview">
                    <h4>Program Overview</h4>
                    <p>{activeProduct.desc}</p>
                  </div>
                </div>

                <div className="showcase-modal-footer">
                  <Link
                    to={activeProduct.path}
                    className="showcase-modal-btn showcase-modal-btn--primary"
                    onClick={() => setIsSpecsModalOpen(false)}
                  >
                    <span>Explore Full Aircraft Page</span>
                    <span className="showcase-btn-icon" aria-hidden="true">&nearr;</span>
                  </Link>
                  <Link
                    to={`/contact?subject=${encodeURIComponent(`Aircraft Inquiry: ${activeProduct.name}`)}`}
                    className="showcase-modal-btn showcase-modal-btn--secondary"
                    onClick={() => setIsSpecsModalOpen(false)}
                  >
                    <span>Inquire About This Aircraft</span>
                    <span className="showcase-btn-icon" aria-hidden="true">&#9993;</span>
                  </Link>
                  <button
                    type="button"
                    className="showcase-modal-btn showcase-modal-btn--ghost"
                    onClick={() => setIsSpecsModalOpen(false)}
                  >
                    Close Dossier
                  </button>
                </div>
              </div>
            </div>
          )}

          <section className="n444xc-flight-network" aria-labelledby="n444xc-flight-network-title">
            <div className="n444xc-flight-network-header">
              <p className="n444xc-kicker">FLIEGANWING / N444XC</p>
              <h2 id="n444xc-flight-network-title">Flight network</h2>
              <p>Track the route vision and countdown to the N444XC maiden flight.</p>
            </div>
            <div className="n444xc-countdown-card" aria-live="polite">
              <span>COUNTDOWN TO MAIDEN FLIGHT · LIVE</span>
              <div className="n444xc-countdown-values">
                <strong>{countdown.days}<small>DAYS</small></strong>
                <strong>{String(countdown.hours).padStart(2, '0')}<small>HOURS</small></strong>
                <strong>{String(countdown.minutes).padStart(2, '0')}<small>MINUTES</small></strong>
                <strong>{String(countdown.seconds).padStart(2, '0')}<small>SECONDS</small></strong>
              </div>
            </div>
            <div className="n444xc-route-tabs" role="tablist" aria-label="N444XC routes">
              <button type="button" role="tab" aria-selected={activeRoute === 'bangalore'} className={activeRoute === 'bangalore' ? 'is-active' : ''} onClick={() => setActiveRoute('bangalore')}>Frankfurt – Bangalore</button>
              <button type="button" role="tab" aria-selected={activeRoute === 'sydney'} className={activeRoute === 'sydney' ? 'is-active' : ''} onClick={() => setActiveRoute('sydney')}>Frankfurt – Sydney</button>
            </div>
            <N444WorldMap destination={activeRoute} />
          </section>

        </div>
      </section>

      {/* ═══════ IN THE NEWS ═══════ */}
      <section className="home-news-section">
        <div className="home-news-tab">{t('news_tab')}</div>
        <div className="padding-global padding-section-large">
          <div className="container-large">
            <div className="home-news-grid">
              {/* Top row */}
              <div className="home-news-row-top">
                <div className="home-news-card news-featured-card">
                  <div className="news-featured-image-side" style={getNewsSection().featured.imagePreview ? { backgroundImage: `url(${getNewsSection().featured.imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                    <div className="news-dots">
                      <span className="news-dot"></span>
                      <span className="news-dot active"></span>
                      <span className="news-dot"></span>
                    </div>
                  </div>
                  <div className="news-featured-content-side">
                    <div className="news-tag">{lang === 'en' ? (getNewsSection().featured.tag_en || t('news_tag_press')) : (getNewsSection().featured.tag_de || t('news_tag_press'))}</div>
                    <h3 className="news-title">{lang === 'en' ? (getNewsSection().featured.title_en || t('news_title_1')) : (getNewsSection().featured.title_de || t('news_title_1'))}</h3>
                    <div className="news-body-line">
                      <p className="news-desc">{lang === 'en' ? (getNewsSection().featured.desc_en || t('news_desc_1')) : (getNewsSection().featured.desc_de || t('news_desc_1'))}</p>
                    </div>
                    <div className="news-arrow">→</div>
                  </div>
                </div>
                <div className="home-news-card news-facts-card" style={getNewsSection().facts.imagePreview ? { backgroundImage: `url(${getNewsSection().facts.imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}>
                  <div className="news-tag">{lang === 'en' ? (getNewsSection().facts.tag_en || 'FACTS') : (getNewsSection().facts.tag_de || 'FAKTEN')}</div>
                  <h3 className="news-title-large">{lang === 'en' ? (getNewsSection().facts.title_en || 'Did You Know') : (getNewsSection().facts.title_de || 'Wussten Sie schon')}</h3>
                  <div className="news-body-line">
                    <p>{lang === 'en' ? (getNewsSection().facts.body_en || '') : (getNewsSection().facts.body_de || '')}</p>
                  </div>
                  <div className="news-reload-icon">↻</div>
                </div>
              </div>
              {/* Bottom row */}
              <div className="home-news-row-bottom">
                <div className="home-news-card news-social-card fb-card" style={getNewsSection().facebook.imagePreview ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${getNewsSection().facebook.imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' } : {}}>
                  <div className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div className="news-body-line">
                    <p>{lang === 'en' ? (getNewsSection().facebook.body_en || '') : (getNewsSection().facebook.body_de || '')}</p>
                    <p className="news-hashtags">{getNewsSection().facebook.hashtags || '#ZebroldGroups #InnovationSummit #FutureTech2026'}</p>
                  </div>
                  <p className="news-date">{lang === 'en' ? (getNewsSection().facebook.date_en || '3 months ago') : (getNewsSection().facebook.date_de || 'Vor 3 Monaten')}</p>
                  <div className="external-link-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </div>
                <div className="home-news-card news-social-card ig-card" style={getNewsSection().instagram.imagePreview ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${getNewsSection().instagram.imagePreview})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' } : {}}>
                  <div className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div className="news-body-line">
                    <p>{lang === 'en' ? (getNewsSection().instagram.body_en || '') : (getNewsSection().instagram.body_de || '')}</p>
                    <p className="news-hashtags">{getNewsSection().instagram.hashtags || '#ZebroldGroups #TechSummit #Innovation2026'}</p>
                  </div>
                  <p className="news-date">{lang === 'en' ? (getNewsSection().instagram.date_en || '3 months ago') : (getNewsSection().instagram.date_de || 'Vor 3 Monaten')}</p>
                  <div className="external-link-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="home-news-cta-wrap">
                <Link to="/news" className="home-news-pill-btn">
                  {t('news_all')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Contact Chatbot Widget */}
      {isChatOpen && (
        <div className="home-chat-widget">
          <div className="chat-widget-header">
            <div className="chat-widget-title-wrap">
              <span className="chat-online-dot" />
              <div>
                <h4 className="chat-widget-title">Zebrold Executive Desk</h4>
                <span className="chat-widget-subtitle">Usually replies in &lt; 5 mins</span>
              </div>
            </div>
            <button
              type="button"
              className="chat-widget-close"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close widget"
            >
              ✕
            </button>
          </div>

          <div className="chat-widget-body">
            {chatSent ? (
              <div className="chat-success-msg">
                <span className="success-icon">✓</span>
                <h4>Vielen Dank / Thank you!</h4>
                <p>Your inquiry has been logged. An executive will reach out shortly.</p>
              </div>
            ) : (
              <>
                <div className="chat-welcome-msg">
                  <p>👋 Hallo! How can our industrial management team assist you today?</p>
                </div>

                <div className="chat-options">
                  <a href="tel:+496912345670" className="chat-channel-btn">
                    <span className="channel-icon-badge" aria-hidden="true">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div>
                      <strong>Direct Call</strong>
                      <small>+49 (0) 69 1234 5670</small>
                    </div>
                  </a>

                  <a href="mailto:contact@zebrold.de" className="chat-channel-btn">
                    <span className="channel-icon-badge" aria-hidden="true">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 6-10 7L2 6" />
                      </svg>
                    </span>
                    <div>
                      <strong>Official Email</strong>
                      <small>contact@zebrold.de</small>
                    </div>
                  </a>
                </div>

                <form onSubmit={handleQuickSubmit} className="chat-quick-form">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="chat-input"
                    value={chatName}
                    onChange={(e) => setChatName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Business Email"
                    required
                    className="chat-input"
                    value={chatEmail}
                    onChange={(e) => setChatEmail(e.target.value)}
                  />
                  <textarea
                    placeholder="How can we assist your business?"
                    rows={2}
                    required
                    className="chat-input chat-textarea"
                    value={chatMsg}
                    onChange={(e) => setChatMsg(e.target.value)}
                  />
                  <button type="submit" className="chat-submit-btn">
                    <span>Send Inquiry</span>
                    <span className="chat-submit-arrow" aria-hidden="true">→</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
