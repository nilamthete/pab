
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Professional Highlights Data (Strictly verified)
const HERO_HIGHLIGHTS = [
  {
    id: 1,
    title: 'Engineering',
    subtitle: 'B.E. Instrumentation (D.Y. Patil COE, Pune)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Academic Experience',
    subtitle: '5 Years as Assistant Professor (MET BKC, Nashik)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Institutional Leadership',
    subtitle: '15 Years as Executive Director (Gargi Group & GARTI)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V10" />
        <path d="M9 21V10" />
        <path d="M15 21V10" />
        <path d="M19 21V10" />
        <path d="M2 10h20" />
        <path d="M12 3L2 10h20L12 3z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Entrepreneurship',
    subtitle: 'Director — Aarya Innovtech (R&D & Product Innovation)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];





// Innovation & Strategic Focus (4 Distinct Executive Innovation Pillars)
const INNOVATION_PILLARS = [
  {
    id: '01',
    title: 'Civic Utility Enclosures & Ergonomics',
    category: 'HARDWARE ARCHITECTURE',
    action: 'Engineering Framework',
    description: 'Engineering vandal-proof, all-weather municipal structures built with heavy-duty structural steel, ergonomic human factors, and climate-resilient finishes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    tags: [
      'Vandal-Resistant Enclosures',
      'Human-Centered Ergonomics',
      'All-Weather Structural Integrity',
    ],
  },
  {
    id: '02',
    title: 'Sensor Automation & Cloud Diagnostics',
    category: 'SMART IOT & TELEMETRY',
    action: 'Automation Architecture',
    description: 'Integrating real-time sensor networks, GSM cloud telemetry, automated self-cleaning mechanisms, and instant fault detection for round-the-clock uptime.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    tags: [
      'GSM Remote Telemetry',
      'Automated Cleaning Logic',
      'Real-Time Fault Diagnostics',
    ],
  },
  {
    id: '03',
    title: 'Bio-Digestion & Circular Ecology',
    category: 'CLEANTECH & BIOTECH',
    action: 'CleanTech Systems',
    description: 'Developing decentralized biological digestion systems and accelerated composting to convert municipal waste safely into reusable organic byproducts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    tags: [
      'Zero-Discharge Bio-Enzymes',
      'Decentralized Waste Processing',
      'Circular Resource Recovery',
    ],
  },
  {
    id: '04',
    title: '100% Indigenous Tooling & Quality',
    category: 'INDIGENOUS MANUFACTURING',
    action: 'Quality Benchmarks',
    description: 'Driving end-to-end domestic manufacturing with precision tooling, stringent ISO benchmarks, and field-tested reliability across diverse Indian environments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    tags: [
      '100% Domestic Tooling & Dies',
      'ISO Quality Assurance',
      'High-Duty Municipal Compliance',
    ],
  },
];

// Category Filter Definitions (Matching Netflix/Showcase Style)
const PRODUCT_CATEGORIES = [
  { key: 'all', label: 'All Solutions', count: 8 },
  { key: 'sanitation', label: 'Sanitation & Hygiene', count: 3 },
  { key: 'clean-tech', label: 'Clean Tech & Recycling', count: 3 },
  { key: 'utilities', label: 'Public Utilities & Automation', count: 2 },
];

// Smart Hygiene & Public Utility Products (Aarya Innovtech Pvt. Ltd. — All 8 Solutions)
const PRODUCTS = [
  {
    id: 1,
    title: 'Electronic ECO Toilet',
    subtitle: 'Maintainable public toilet with automatic cleaning',
    categoryKey: 'sanitation',
    category: 'Smart Municipal Sanitation',
    image: '/smart_buddy_eco_toilet.png',
    fallbackImg: '/smart_buddy_e2t.png',
    desc: 'Electronic ECO Toilets are maintainable public toilets with self cleaning mechanisms. They support automatic flushing, automatic pre-flush, controlled entry, power backup, water backup, and women-friendly hygiene features.',
    badge: 'Flagship Utility',
    specs: ['Automatic Flushing', 'Pressurized Cleaning', 'Power & Water Backup'],
    details: {
      tagline: 'Maintainable public toilet with automatic cleaning',
      specsList: [
        { label: 'Major Features', val: 'Water saving, waste treatment, IoT monitoring, SMS intimation, surveillance, and anti-theft alarm.' },
        { label: 'Where It Can Be Installed', val: 'Highways, Malls, Airports, Railway Stations, Tourist Places, Smart City' },
        { label: 'Impact', val: 'Supports reduced open defecation, healthcare cost reduction, job creation, and environmental stewardship.' },
        { label: 'Variants', val: 'Push button, token or coin, smart card and coin, plus male and female community urinal variants.' },
      ],
      features: [
        'Automatic flushing and pre-flush',
        'Floor and wall pressurized cleaning',
        'Power and water backup',
        'Coin, smart-card, or push-button entry',
        'Women-friendly vending and incinerator options',
      ],
    },
  },
  {
    id: 2,
    title: 'Bio-Digester',
    subtitle: 'On-site waste treatment without sewer dependency',
    categoryKey: 'clean-tech',
    category: 'Zero-Waste Sanitation',
    image: '/bio_digester_tank.png',
    fallbackImg: '/bio_digester_tank.png',
    desc: 'Bio-Digester is a zero-waste on-site sanitation treatment system using anaerobic bio-digestion technology. It does not need a sewerage network or sewage treatment plant and can work as an independent system.',
    badge: 'Zero Sewer Dependency',
    specs: ['No Sewerage Needed', 'No Moving Parts', 'Effluent for Irrigation'],
    details: {
      tagline: 'On-site waste treatment without sewer dependency',
      specsList: [
        { label: 'Technology', val: 'Anaerobic Microbial Inoculum, also known as AMI or DRDO bacteria, with a Bio-Digester Tank.' },
        { label: 'Installation', val: 'Connected to the toilet outlet and installed either above or below the ground.' },
        { label: 'Hygiene', val: 'Reduces pathogens by more than 99% and organic matter by 99%.' },
        { label: 'Maintenance', val: 'No foul smell, no clogging, and no infestation of cockroaches or flies.' },
      ],
      features: [
        'No sewerage network required',
        'No sewage treatment plant required',
        'No moving parts',
        'No de-sludging or cleaning needed',
        'Effluent usable for irrigation and gardening',
      ],
    },
  },
  {
    id: 3,
    title: 'Organic Waste Composter',
    subtitle: 'Converts biodegradable waste into compost in 24-36 hours',
    categoryKey: 'clean-tech',
    category: 'Decentralized Composting',
    image: '/organic_waste_composter.png',
    fallbackImg: '/organic_waste_composter.png',
    desc: 'The Organic Waste Composter breaks down complex biodegradable waste into simpler forms and converts it into compost. It uses a geared motor for mixing and churning and a high speed motor to crush waste material.',
    badge: 'Rapid Composting',
    specs: ['Compost in 24-36 Hours', 'Fully Automatic', 'Zero Odor & Noise'],
    details: {
      tagline: 'Converts biodegradable waste into compost in 24-36 hours',
      specsList: [
        { label: 'Product Features', val: 'Compact, safe, easy to operate, and built for high quality organic compost output.' },
        { label: 'Area of Applications', val: 'Buildings, educational institutes, vegetable markets, small townships, marriage halls, malls, industries, and hotels.' },
        { label: 'Fabrication', val: 'Stainless steel or mild steel with epoxy coating fabrication for maximum durability.' },
        { label: 'Capacity Range', val: 'Standard profile capacities from 25 kg/day to 2000 kg/day.' },
      ],
      features: [
        'Entire composting process in one machine',
        'Compost ready within 24-36 hours',
        'No noise, no odor and no maintenance required',
        'Fully automatic yet compact',
        'In-built temperature management',
      ],
    },
  },
  {
    id: 4,
    title: 'PET Bottle Shredder',
    subtitle: 'Disposal and incentivized recycling for bottles, cans and Tetra Pak',
    categoryKey: 'recycling',
    category: 'Smart Recycling & RVM',
    image: '/pet_bottle_shredder.jpg',
    fallbackImg: '/smart_rvm.jpg',
    desc: 'PET Bottle Shredder helps recycle empty bottles, cans, and Tetra Pak waste with touch screen operation, object checking, and tracking features.',
    badge: 'Incentivized Recycling',
    specs: ['PET, Cans & Tetra Pak', 'Object Verification', 'E-Wallet Cashback'],
    details: {
      tagline: 'Disposal and incentivized recycling for bottles, cans and Tetra Pak',
      specsList: [
        { label: 'Product Features', val: 'Municipal waste disposal by shredding with object verification and safety protections.' },
        { label: 'Where It Can Be Installed', val: 'Bus stands, malls, airports, railway stations, tourist places, gardens, and events.' },
        { label: 'Advance Features', val: 'Touch screen, e-wallet cashback, app-based or cloud controlling, IoT integration, and live tracking.' },
        { label: 'Shredder Build', val: 'Two counter rotating shafts, mild steel body, and hardened special alloy steel cutter.' },
      ],
      features: [
        'Suitable for PET bottles, aluminium cans and Tetra Pak',
        'Object verification system',
        '21 inch user interactive touch screen',
        'E-wallet cashback',
        'IoT integration and 24X7 live machine tracking',
      ],
    },
  },
  {
    id: 5,
    title: 'Computer Kiosk',
    subtitle: 'Industrial interactive information terminal, public service & OEM computing kiosk',
    categoryKey: 'smart-kiosk',
    category: 'Interactive Self-Service Kiosks',
    image: '/computer_kiosk.webp',
    fallbackImg: '/computer_kiosk.jpg',
    desc: 'The Smart Buddy Computer Kiosk is a ruggedized interactive computing station built for 24/7 public service access, civic e-governance, digital information lookup, visitor management, and customized OEM industrial applications.',
    badge: '24/7 Industrial Grade',
    specs: ['24/7 Continuous Operation', 'IP65 Capacitive Touch', 'Vandal-Resistant Steel'],
    details: {
      tagline: 'Industrial interactive information terminal, public service & OEM computing kiosk',
      specsList: [
        { label: '24/7 Industrial Grade', val: 'Built with commercial grade motherboards, solid state storage, and silent heat dissipation.' },
        { label: 'Where It Can Be Installed', val: 'Smart city hubs, government e-Seva centers, airports, hospitals, and corporate receptions.' },
        { label: 'Vandal-Resistant Body', val: 'Heavy gauge steel body with tamper locks protects all computing hardware in unmonitored areas.' },
        { label: 'Custom OEM Integration', val: 'Can be configured with fingerprint scanners, smart card readers, metal keyboards, or webcams.' },
      ],
      features: [
        'Industrial-grade All-in-One computing engine rated for 24/7 continuous operation',
        'High-durability Capacitive Touchscreen with IP65 front splash and dust proofing',
        'Heavy-duty 1.6mm - 2.0mm mild steel enclosure with high-security tamper locks',
        'Custom peripheral bays: Fingerprint scanner, HD webcam, barcode scanner & printer',
        'Centralized Remote Device Management (RDM) supporting over-the-air software updates',
      ],
    },
  },
  {
    id: 6,
    title: 'Ticket Kiosk',
    subtitle: 'Automated self service ticketing and transit pass dispensing station',
    categoryKey: 'smart-kiosk',
    category: 'Automated Ticketing Stations',
    image: '/ticket_kiosk.jpeg',
    fallbackImg: '/ticket_kiosk.jpeg',
    desc: 'Smart Buddy Ticket Kiosks provide a rugged, high-speed automated ticketing solution for public transit, monuments, amusement parks, and parking facilities with interactive multi-touch display and thermal printing.',
    badge: 'Queue-Busting Speed',
    specs: ['Thermal Ticket Printer', 'UPI QR & Card POS', 'Sub-5s Dispensing'],
    details: {
      tagline: 'Automated self service ticketing and transit pass dispensing station',
      specsList: [
        { label: 'Queue-Busting Speed', val: 'Issues tickets in under 5 seconds, reducing counter congestion by up to 75%.' },
        { label: 'Applications', val: 'Metro stations, bus terminals, railway stations, monuments, and theme parks.' },
        { label: 'Payment Flexibility', val: 'Accepts UPI Dynamic QR, debit/credit cards, and optional cash/coin acceptors.' },
        { label: 'Cloud Telemetry', val: 'Live remote monitoring of machine health, ticket stock, and revenue analytics.' },
      ],
      features: [
        'High-speed 80mm/112mm thermal ticket printer with auto-cutter',
        '19" / 21.5" Full HD industrial touchscreen with toughened glass',
        'Multi-mode payments: UPI QR code, card POS, and cash/coin options',
        '1D/2D Barcode & QR scanner for ticket validation and mobile passes',
        'Vandal-resistant CRCA steel cabinet with epoxy powder coating',
      ],
    },
  },
  {
    id: 7,
    title: 'Health Kiosk',
    subtitle: 'Automated public health screening, vital signs and telemedicine station',
    categoryKey: 'telehealth',
    category: 'Public Telehealth & Diagnostics',
    image: '/health_kiosk.jpeg',
    fallbackImg: '/health_kiosk.jpeg',
    desc: 'The Smart Buddy Health Kiosk is a comprehensive automated telemedicine and vital-screening station enabling individuals to quickly check Blood Pressure, BMI, Pulse, SpO2, and Body Temperature in under 3-5 minutes.',
    badge: 'Clinical-Grade Screening',
    specs: ['6+ Vital Parameters', 'Tele-Consultation HD Kit', 'Instant Digital Reports'],
    details: {
      tagline: 'Automated public health screening, vital signs and telemedicine station',
      specsList: [
        { label: 'Rapid Vital Checkups', val: 'Completes 6+ vital parameters in under 3 minutes with automated step-by-step guidance.' },
        { label: 'Where It Can Be Installed', val: 'Corporate campuses, primary healthcare centers (PHC), clinics, transit hubs, and gyms.' },
        { label: 'Tele-Consultation Ready', val: 'Connects patients directly to doctors via live video call with real-time vitals transmission.' },
        { label: 'Medical-Grade Accuracy', val: 'CE and ISO certified sensors calibrated for clinical-grade reliability.' },
      ],
      features: [
        'Automated checkup for Blood Pressure, SpO2, Pulse, BMI & Body Temperature',
        'Clinically accurate medical-grade digital sensors with instant printed slips',
        'Integrated Telemedicine consultation kit with HD camera and microphone',
        'Digital reports delivered instantly via WhatsApp, SMS, and secure cloud link',
        'HIPAA-compliant encrypted architecture with multilingual voice guidance',
      ],
    },
  },
  {
    id: 8,
    title: 'Water ATM Kiosk',
    subtitle: 'Automated 24/7 safe drinking water dispenser with multi-stage RO & smart payments',
    categoryKey: 'clean-tech',
    category: 'Automated Water Dispensing',
    image: '/water_atm_kiosk.png',
    fallbackImg: '/water_atm_kiosk.png',
    desc: 'The Smart Buddy Water ATM Kiosk is an automated, coin/card/UPI-operated drinking water dispensing station integrating multi-stage RO and UV purification with smart volumetric flow metering.',
    badge: '24/7 Safe Drinking Water',
    specs: ['Multi-Stage RO + UV', 'Coin, Card & UPI QR', 'IS 10500 Potable Water'],
    details: {
      tagline: 'Automated 24/7 safe drinking water dispenser with multi-stage RO & smart payments',
      specsList: [
        { label: 'Pure & Certified Water', val: 'Produces potable water conforming strictly to IS 10500 drinking water quality standards.' },
        { label: 'Where It Can Be Installed', val: 'Railway stations, bus depots, rural gram panchayats, pilgrimage centers, and public parks.' },
        { label: 'Cashless & Coin Options', val: 'Users can dispense water using coins (Rs. 1, 2, 5, 10), prepaid smart cards, or UPI QR.' },
        { label: 'Live GSM Telemetry', val: 'Monitors TDS, total dispensing volume, filter replacement schedules, and revenue remotely.' },
      ],
      features: [
        'Multi-stage industrial purification: Sand filter, Carbon, RO Membrane & UV Chamber',
        'Smart multi-payment support: Multi-coin acceptor, RFID Smart Card tap & UPI QR code',
        'Food-grade Stainless Steel (SS 304) dispensing chamber and anti-bacterial nozzles',
        'Programmable dispensing: 250ml cup, 1L bottle, 5L can, and 20L jar filling options',
        'GSM/GPRS IoT cloud controller reporting real-time TDS, water volume, and daily revenue',
      ],
    },
  },
  {
    id: 9,
    title: 'Printing Kiosk',
    subtitle: 'Automated 24/7 self-service document printing, scanning & photocopying station',
    categoryKey: 'smart-kiosk',
    category: 'Automated Document Printing',
    image: '/printing_kiosk.png',
    fallbackImg: '/printing_kiosk.png',
    desc: 'The Smart Buddy Printing Kiosk provides an automated self-service document solution allowing users to upload documents via WhatsApp, cloud storage, USB drives, or email and complete secure, high-speed laser printing, scanning, or copying with instant digital UPI payments.',
    badge: 'Self-Service Printing',
    specs: ['WhatsApp & Cloud Upload', 'Crisp B&W & Color Laser', '100% Cryptographic Privacy'],
    details: {
      tagline: 'Automated 24/7 self-service document printing, scanning & photocopying station',
      specsList: [
        { label: 'Print from Anywhere', val: 'Upload files on WhatsApp or web and simply scan your personal QR code at the kiosk to print.' },
        { label: 'Where It Can Be Installed', val: 'Universities, colleges, libraries, district courts, government e-Seva centers, and co-working spaces.' },
        { label: 'Zero Privacy Risk', val: 'Files are processed in encrypted memory and erased automatically once printed.' },
        { label: 'High Paper Capacity', val: 'Dual lockable paper cassettes holding up to 2,500 sheets with automated low-paper cloud alerts.' },
      ],
      features: [
        'High-speed commercial Laser printing: A4/Legal in crisp Black & White and Full Color',
        'Omnichannel document upload: WhatsApp chatbot, Web URL, Google Drive, and USB',
        'Instant contactless payment: Integrated Dynamic UPI QR code, Cards, and RFID smart card',
        '600 DPI Optical Flatbed & 50-sheet ADF scanner for instant copying and scanning',
        '100% Data Privacy: Automatic cryptographic session wiping immediately after printing',
      ],
    },
  },
  {
    id: 10,
    title: 'Food Kiosk',
    subtitle: 'Interactive self-ordering, menu browsing & contactless payment kiosk',
    categoryKey: 'smart-kiosk',
    category: 'Interactive Food Self-Ordering',
    image: '/food_kiosk.jpeg',
    fallbackImg: '/food_kiosk.jpeg',
    desc: 'The Smart Buddy Food Kiosk is an interactive self-ordering and POS payment station designed for Quick Service Restaurants (QSR), food courts, cafeterias, and theme parks. It streamlines order taking, reduces customer wait times, and eliminates ordering errors.',
    badge: 'Interactive Self-Ordering',
    specs: ['Under 60s Ordering', 'POS & KDS Kitchen Sync', 'Dynamic Upselling'],
    details: {
      tagline: 'Interactive self-ordering, menu browsing & contactless payment kiosk',
      specsList: [
        { label: 'Eliminate Queue Lines', val: 'Guests browse, customize ingredients, and pay in under 60 seconds without standing in counter queues.' },
        { label: 'Where It Can Be Installed', val: 'QSR chains, mall food courts, corporate cafeterias, airport lounges, and university canteens.' },
        { label: 'Higher Average Spend', val: 'Automated high-res imagery and combo add-on prompts consistently increase ticket size.' },
        { label: 'Seamless Kitchen Sync', val: 'Orders route directly to kitchen display screens (KDS) and printers with zero communication error.' },
      ],
      features: [
        'Vibrant 21.5", 27", or 32" Full HD portrait touchscreen displaying rich visual menus',
        'Integrated heavy-duty thermal receipt printer issuing instant order and token slips',
        'Multi-payment acceptance: Dynamic UPI QR code, EMV Card POS, and NFC contactless',
        'Seamless real-time integration with POS billing software and Kitchen Display Systems (KDS)',
        'Intelligent digital upselling & combo suggestions increasing average order spend by 15-25%',
      ],
    },
  },
  {
    id: 11,
    title: 'Sanitary Vending Machine',
    subtitle: 'Automated wall-mounted sanitary napkin dispenser for public, school & corporate restrooms',
    categoryKey: 'sanitation',
    category: 'Hygiene & Sanitary Dispensing',
    image: '/sanitary_vending_machine.jpeg',
    fallbackImg: '/sanitary_vending.jpg',
    desc: 'The Smart Buddy Sanitary Vending Machine is an automated wall-mountable dispensing unit designed to provide women with immediate, dignified, and 24/7 access to sanitary napkins with multi-coin and UPI QR payments.',
    badge: '24/7 Dignified Access',
    specs: ['Multi-Coin & UPI QR', 'Anti-Theft Spiral Drop', 'Battery & Solar Backup'],
    details: {
      tagline: 'Automated wall-mounted sanitary napkin dispenser for public, school & corporate restrooms',
      specsList: [
        { label: '24/7 Restroom Access', val: 'Provides immediate, discreet access to quality sanitary pads without reliance on staff.' },
        { label: 'Where It Can Be Installed', val: 'Electronic ECO Toilets, schools, colleges, universities, corporate offices, and transit hubs.' },
        { label: 'Anti-Theft Drop Gate', val: 'Secure internal mechanical interlock guarantees only one napkin dispenses per valid token/coin.' },
        { label: 'Battery & Solar Ready', val: 'Equipped with internal battery backup ensuring uninterrupted dispensing during power cuts.' },
      ],
      features: [
        'Multiple payment modes: Multi-coin validator (Rs. 5, 10), token, push-button, or UPI QR',
        'Robust 1.2mm - 1.6mm cold-rolled mild steel cabinet with anti-corrosion powder coating',
        'High-visibility stock inspection window with Low-Stock / Empty LED warning indicator',
        'Precision motorized anti-theft dispensing spiral ensuring exactly one napkin per transaction',
        'Storage capacity models: 25, 50, 75, and 100+ sanitary pads (multi-brand support)',
      ],
    },
  },
  {
    id: 12,
    title: 'Food Vending Machine',
    subtitle: 'Automated 24/7 refrigerated snacks, beverages & packaged foods dispenser',
    categoryKey: 'vending',
    category: 'Automated Food & Beverage Dispensing',
    image: '/food_vending_machine.png',
    fallbackImg: '/smart_vending.jpg',
    desc: 'The Smart Buddy Food & Beverage Vending Machine is a high-capacity, climate-controlled automated vending station delivering cold canned drinks, bottled water, snacks, sandwiches, and packaged foods around the clock with seamless cashless payments.',
    badge: 'Climate-Controlled 24/7',
    specs: ['Dual-Zone Cooling', 'Infrared Drop Sensors', 'Cashless UPI & Card POS'],
    details: {
      tagline: 'Automated 24/7 refrigerated snacks, beverages & packaged foods dispenser',
      specsList: [
        { label: 'Dual-Zone Cooling', val: 'Precision eco-friendly refrigeration keeps drinks ice-cold and snacks fresh in independent temperature zones.' },
        { label: 'Where It Can Be Installed', val: 'Hospitals, IT parks, airports, educational campuses, transit hubs, and commercial complexes.' },
        { label: '100% Guaranteed Dispense', val: 'Optical drop sensor monitors product fall; if an item fails to drop, the user is never charged.' },
        { label: 'Cloud Inventory Alerts', val: 'Receive automated smartphone alerts for restocking, temperature fluctuations, and daily sales.' },
      ],
      features: [
        'Dual-zone precision refrigeration keeping drinks at 3-6°C and snacks at 12-18°C',
        'Cashless digital payments: Dynamic UPI QR code, Bharat QR, Credit/Debit Cards & RFID',
        'Infrared drop-sensor detection guarantees 100% successful product dispense or instant refund',
        'Cloud-based IoT telemetry providing real-time inventory counts, temperature & sales analytics',
        'Modular adjustable dual-spiral & conveyor trays accommodating cans, bottles, chips & snacks',
      ],
    },
  },
];

// Strategic Domains of Executive Expertise (Verified from Director Profile)
const EXPERTISE_AREAS = [
  {
    id: 1,
    num: '01',
    title: 'Innovative Product Design',
    category: 'PRODUCT DESIGN',
    desc: 'Focuses on designing innovative products that address practical needs in hygiene, sanitation, and public utility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: 2,
    num: '02',
    title: 'Research & Development Strategy',
    category: 'RESEARCH & DEVELOPMENT',
    desc: "Involves guiding research activities, product development strategy, and the company's technical vision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    num: '03',
    title: 'Sales & Marketing',
    category: 'SALES & MARKETING',
    desc: 'Focuses on sales, marketing, product promotion, and business development activities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: 4,
    num: '04',
    title: 'Overall Company Operations',
    category: 'COMPANY OPERATIONS',
    desc: "Responsible for overseeing the company's overall operations and coordinating business activities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

// Executive Stage Honors with Verified Event Photographs
const STAGE_AWARDS_DATA = [
  {
    id: 'stage-1',
    image: '/award_fadnavis_global_impact.png',
    badge: 'Conferred by Dy. CM Devendra Fadnavis',
    kicker: '01 · NATIONAL RECOGNITION',
    title: 'Sakal Global Impact Forum National Recognition',
    recipient: 'Conferred directly to Mr. Prashant Ashok Bachhav',
    dignitary: 'Presented on stage by Shri Devendra Fadnavis (Hon. Deputy Chief Minister of Maharashtra)',
    event: 'Sakal Global Impact Forum',
  },
  {
    id: 'stage-2',
    image: '/award_certificate_presentation.png',
    badge: 'Stage Citation 2024',
    kicker: '02 · NATIONAL RECOGNITION',
    title: 'Certificate Presentation at Global Impact Forum',
    recipient: 'Conferred directly to Mr. Prashant Ashok Bachhav',
    dignitary: 'Ceremonial Stage Presentation at Global Impact Forum 2024',
    event: 'Global Impact Forum Stage',
  },
  {
    id: 'stage-3',
    image: '/award_felicitation_memento.jpg',
    badge: 'Udyog Bharati Program',
    kicker: '03 · STATE RECOGNITION',
    title: 'Udyog Bharati Recognition & Felicitation',
    recipient: 'Conferred directly to Mr. Prashant Ashok Bachhav',
    dignitary: 'Ceremonial Felicitation at Udyog Bharati Program',
    event: 'Udyog Bharati Program Stage',
  }
];

// Executive Awards & Recognition (Verified from Director Profile)
const AWARDS_DATA = [
  {
    id: 'award-1',
    name: 'Gras Rout Innovators',
    badge: 'PROFILE RECOGNITION',
    recipient: 'Conferred directly to Mr. Prashant Ashok Bachhav',
    description: 'Grassroots innovation honor recognizing groundbreaking technological solutions and industry contribution.',
    verification: 'Personal honor documented in verified profile',
    pillText: 'Official Director Recognition',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1h12v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34" />
        <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" />
      </svg>
    ),
  },
  {
    id: 'award-2',
    name: 'Samaj Bhushan Puraskar',
    badge: 'PROFILE RECOGNITION',
    recipient: 'Conferred directly to Mr. Prashant Ashok Bachhav',
    description: 'Eminent societal honor conferred for exemplary leadership, technological philanthropy, and community contribution.',
    verification: 'Personal honor documented in verified profile',
    pillText: 'Official Director Recognition',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1 .45-1 1v1h12v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1v-2.34" />
        <path d="M6 4h12v7a6 6 0 0 1-12 0V4z" />
      </svg>
    ),
  },
  {
    id: 'award-3',
    name: 'Institution Building',
    badge: 'INSTITUTION BUILDING',
    recipient: 'Gargi College of Wine Technology & GARTI Development',
    description: 'Key leadership contribution to the institutional development and growth of Gargi College of Wine Technology and GARTI.',
    verification: 'Documented in Journey Profile & Institutional Archives',
    pillText: 'Institutional Pioneer Contribution',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V10" />
        <path d="M9 21V10" />
        <path d="M15 21V10" />
        <path d="M19 21V10" />
        <path d="M2 10h20" />
        <path d="M12 3L2 10h20L12 3z" />
      </svg>
    ),
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [photoError, setPhotoError] = useState(false);
  const [isPhotoFit, setIsPhotoFit] = useState(false);

  // Product Showcase Modal State
  const [activeProductModal, setActiveProductModal] = useState(null);

  // Award Photo Lightbox Modal State
  const [activeAwardModal, setActiveAwardModal] = useState(null);

  // Interactive Tabbed Dossier State (About Section)
  const [aboutActiveTab, setAboutActiveTab] = useState('overview');

  // Seamless right-to-left infinite marquee list (12 products duplicated once for smooth 60fps loop)
  const marqueeList = [...PRODUCTS, ...PRODUCTS];

  // Manage body scroll lock and escape key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveProductModal(null);
        setActiveAwardModal(null);
      }
    };
    if (activeProductModal || activeAwardModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeProductModal, activeAwardModal]);

  const handleInquireProduct = (product) => {
    setFormData(prev => ({
      ...prev,
      subject: `Inquiry: ${product.title} (${product.category})`
    }));
    setActiveProductModal(null);
    const target = document.getElementById('contact');
    if (target) {
      const navbar = document.querySelector('.navbar-header');
      const navOffset = navbar ? navbar.offsetHeight + 15 : 110;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      setActiveSection('contact');
    }
  };

  // Handle sticky navbar background and active scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'innovation', 'product', 'expertise', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle direct load with hash (e.g. #achievements) to prevent navbar overlap
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          const navbar = document.querySelector('.navbar-header');
          const navOffset = navbar ? navbar.offsetHeight + 15 : 110;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  // High-performance IntersectionObserver for simple, attractive & professional scroll-reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    const cards = document.querySelectorAll('.scroll-reveal-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler with offset
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      const navbar = document.querySelector('.navbar-header');
      const navOffset = navbar ? navbar.offsetHeight + 25 : 120;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const recipient = 'rnd@theaaryatechnologies.com';
    const emailSubject = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `Official Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Executive Inquiry / Contact Form Details:\n\n` +
      `• Full Name: ${formData.name}\n` +
      `• Email Address: ${formData.email}\n` +
      `• Subject / Purpose: ${formData.subject}\n\n` +
      `• Message:\n${formData.message}\n\n` +
      `---\nSent via Prashant Ashok Bachhav Portfolio`
    );

    // Direct mail launch to official corporate email
    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className="portfolio-wrapper">
      {/* =========================================================================
          1. NAVBAR — ELEGANT, PREMIUM & STICKY
          ========================================================================= */}
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo / Brand Name with Smart Buddy Badge on the far left */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => scrollToSection(e, 'home')}
            aria-label="Prashant Bachhav Home"
          >
            <div className="navbar-logo-badge" title="Smart Buddy® — Innovative Public Hygiene & Automation">
              <img
                src="/smart_buddy_cropped.png"
                alt="Smart Buddy Logo"
                className="navbar-smart-buddy-logo"
              />
            </div>
            <div className="brand-text-group">
              <span className="brand-name">PRASHANT BACHHAV</span>
              <span className="brand-subtitle">DIRECTOR • AARYA INNOVTECH</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <a
                  href="#home"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'about')}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#innovation"
                  className={`nav-link ${activeSection === 'innovation' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'innovation')}
                >
                  Innovation
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className={`nav-link ${activeSection === 'product' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'product')}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className={`nav-link ${activeSection === 'expertise' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'expertise')}
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'achievements')}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Direct Contact Info & "Let's Connect" CTA Button */}
          <div className="navbar-actions">
            <div className="navbar-direct-contacts">
              <a
                href="tel:+918806796868"
                className="nav-contact-item nav-phone-item"
                title="Call Mr. Prashant Bachhav (+91 8806796868)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-contact-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className="nav-contact-text">
                  <span className="nav-contact-label">Ph.:</span>
                  <span className="nav-contact-value">+91 8806796868</span>
                </div>
              </a>

              <a
                href="mailto:rnd@theaaryatechnologies.com"
                className="nav-contact-item nav-email-item"
                title="Email Mr. Prashant Bachhav (rnd@theaaryatechnologies.com)"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-contact-icon">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div className="nav-contact-text">
                  <span className="nav-contact-label">Email:</span>
                  <span className="nav-contact-value">rnd@theaaryatechnologies.com</span>
                </div>
              </a>
            </div>

            {/* Mobile Quick Action Buttons: Phone & Email (Replacing Connect button on mobile) */}
            <div className="mobile-nav-quick-actions">
              <a
                href="tel:+918806796868"
                className="mobile-quick-btn mobile-quick-phone"
                aria-label="Call Mr. Prashant Bachhav (+91 8806796868)"
                title="Call +91 8806796868"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>

              <a
                href="mailto:rnd@theaaryatechnologies.com"
                className="mobile-quick-btn mobile-quick-email"
                aria-label="Email Mr. Prashant Bachhav (rnd@theaaryatechnologies.com)"
                title="Email rnd@theaaryatechnologies.com"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>

            <a
              href="#contact"
              className="navbar-cta-btn"
              onClick={(e) => scrollToSection(e, 'contact')}
            >
              <span className="cta-full-text">Let's Connect</span>
              <span className="cta-short-text">Connect</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className={`hamburger-btn ${isMenuOpen ? 'is-active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-inner">
            <div className="mobile-director-banner">
              <span className="mobile-badge">Executive Portfolio</span>
              <h4>Mr. Prashant Ashok Bachhav</h4>
              <p>Director • Aarya Innovtech Pvt. Ltd., Nashik</p>
            </div>
            <ul className="mobile-nav-list">
              <li>
                <a
                  href="#home"
                  className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'home')}
                >
                  <span>Home</span>
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'about')}
                >
                  <span>About</span>
                  <span className="arrow">→</span>
                </a>
              </li>

              <li>
                <a
                  href="#innovation"
                  className={`mobile-nav-link ${activeSection === 'innovation' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'innovation')}
                >
                  <span>Innovation</span>
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className={`mobile-nav-link ${activeSection === 'product' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'product')}
                >
                  <span>Product</span>
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className={`mobile-nav-link ${activeSection === 'expertise' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'expertise')}
                >
                  <span>Expertise</span>
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className={`mobile-nav-link ${activeSection === 'achievements' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'achievements')}
                >
                  <span>Achievements</span>
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  <span>Contact</span>
                  <span className="arrow">→</span>
                </a>
              </li>
            </ul>
            {/* Quick Direct Contacts after Contact in Mobile Menu */}
            <div className="mobile-quick-contacts">
              <a href="tel:+918806796868" className="mobile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Ph.: +91 8806796868</span>
              </a>
              <a href="mailto:rnd@theaaryatechnologies.com" className="mobile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email: rnd@theaaryatechnologies.com</span>
              </a>
              <a
                href="https://www.instagram.com/prashant___bachhav?vrfl=MTh5MHZieTVqNmVuMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-contact-item"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram: @prashant___bachhav</span>
              </a>
            </div>

            <div className="mobile-drawer-footer">
              <a
                href="#contact"
                className="mobile-cta-btn"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. HOME PAGE — HERO SECTION (FULL SCREEN BACKGROUND WITH OVERLAID TEXT)
          ========================================================================= */}
      <section id="home" className="hero-section hero-with-bg">
        <div className="hero-bg-overlay" aria-hidden="true"></div>

        <div className="hero-container">
          {/* Mobile-Only Top Stage Photo Banner (Hidden on Desktop) */}
          <div className="hero-mobile-stage-banner" aria-label="Mr. Prashant Ashok Bachhav on stage">
            <img
              src="/hero-bg-mobile.jpg"
              alt="Mr. Prashant Ashok Bachhav speaking at ICMAI on stage"
              className="hero-mobile-stage-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-mobile-stage-gradient" aria-hidden="true"></div>
            <div className="hero-mobile-stage-pill" aria-hidden="true">
              <span>Director • Aarya Innovtech</span>
            </div>
          </div>

          {/* Executive Information Column */}
          <div className="hero-text-column">
            {/* Main heading */}
            <h1 className="hero-main-heading">
              Mr. Prashant Ashok Bachhav
            </h1>

            {/* Introductory label below name */}
            <div className="hero-intro-label">
              <span className="label-emblem">✦</span>
              <span className="label-text">DIRECTOR • INNOVATOR • ENTREPRENEUR</span>
            </div>

            {/* Professional tagline */}
            <p className="hero-tagline">
              “Building Institutions. Engineering Innovation.”
            </p>

            {/* Introduction paragraph */}
            <p className="hero-introduction">
              Mr. Prashant Ashok Bachhav is the Director of Aarya Innovtech Pvt. Ltd., Nashik. His professional background includes institutional leadership, innovative product design, research and development, sales and marketing, and overall company operations.
            </p>

            {/* Professional highlights cards */}
            <div className="hero-highlights-grid">
              {HERO_HIGHLIGHTS.map((item) => (
                <div key={item.id} className="highlight-card">
                  <div className="highlight-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="highlight-content">
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a
                href="#innovation"
                className="btn-primary-gold"
                onClick={(e) => scrollToSection(e, 'innovation')}
              >
                <span>Explore Innovations</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href="#contact"
                className="btn-secondary-maroon"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <span>Let's Connect</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ABOUT SECTION — EXECUTIVE PROFILE & VERIFIED BACKGROUND
          ========================================================================= */}
      <section id="about" className="section about-section">
        <div className="section-container">
          {/* Main Section Header */}
          <div className="section-header">
            <h2 className="section-title">About Mr. Prashant Ashok Bachhav</h2>
            <div className="section-title-line"></div>
          </div>

          {/* INTERACTIVE EXECUTIVE DOSSIER (TABBED ARCHITECTURE) */}
          <div className="about-dossier-wrapper">
            {/* Segmented Tab Navigation Bar */}
            <div className="about-dossier-nav" role="tablist" aria-label="Executive Background Tabs">
              <button
                type="button"
                role="tab"
                aria-selected={aboutActiveTab === 'overview'}
                className={`about-dossier-tab ${aboutActiveTab === 'overview' ? 'is-active' : ''}`}
                onClick={() => setAboutActiveTab('overview')}
              >
                <span className="dossier-tab-num">01</span>
                <span className="dossier-tab-label">Executive Overview</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={aboutActiveTab === 'corporate'}
                className={`about-dossier-tab ${aboutActiveTab === 'corporate' ? 'is-active' : ''}`}
                onClick={() => setAboutActiveTab('corporate')}
              >
                <span className="dossier-tab-num">02</span>
                <span className="dossier-tab-label">Corporate Journey</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={aboutActiveTab === 'education'}
                className={`about-dossier-tab ${aboutActiveTab === 'education' ? 'is-active' : ''}`}
                onClick={() => setAboutActiveTab('education')}
              >
                <span className="dossier-tab-num">03</span>
                <span className="dossier-tab-label">Education & Academia</span>
              </button>
            </div>

            {/* Tab Panels Container */}
            <div className="about-dossier-panel-container">
              {/* TAB 1: EXECUTIVE OVERVIEW */}
              {aboutActiveTab === 'overview' && (
                <div className="dossier-panel dossier-panel-overview animate-fade-in" role="tabpanel">
                  <div className="dossier-panel-header">
                    <div className="dossier-meta-pills">
                      <span className="dossier-pill-gold">Director • Aarya Innovtech Pvt. Ltd.</span>
                      <span className="dossier-pill-glass">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="meta-pin-icon">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Nashik, Maharashtra, India
                      </span>
                      <span className="dossier-pill-highlight">20+ Yrs Leadership</span>
                    </div>
                  </div>

                  <div className="dossier-quote-box">
                    <p className="dossier-quote-text">
                      “Spearheading indigenous hardware innovation, smart municipal sanitation automation, and IoT infrastructure across India.”
                    </p>
                  </div>

                  <p className="dossier-bio-lead">
                    Mr. Prashant Ashok Bachhav serves as the Director of <strong>Aarya Innovtech Pvt. Ltd. (Smart Buddy)</strong>. With an engineering foundation in instrumentation and over two decades of multidisciplinary expertise spanning corporate direction, higher academic mentorship, and technology entrepreneurship, he drives cutting-edge IoT innovations for smart cities and public infrastructure.
                  </p>

                  <div className="dossier-metrics-strip">
                    <div className="dossier-metric-item">
                      <span className="dossier-metric-val">20+ Yrs</span>
                      <span className="dossier-metric-lbl">Multidisciplinary Experience</span>
                    </div>
                    <div className="dossier-metric-divider"></div>
                    <div className="dossier-metric-item">
                      <span className="dossier-metric-val">15 Yrs</span>
                      <span className="dossier-metric-lbl">Executive Leadership (Gargi Group)</span>
                    </div>
                    <div className="dossier-metric-divider"></div>
                    <div className="dossier-metric-item">
                      <span className="dossier-metric-val">5 Yrs</span>
                      <span className="dossier-metric-lbl">Higher Academia (MET BKC)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CORPORATE JOURNEY */}
              {aboutActiveTab === 'corporate' && (
                <div className="dossier-panel dossier-panel-grid animate-fade-in" role="tabpanel">
                  <div className="dossier-journey-card">
                    <div className="journey-card-top">
                      <span className="journey-badge-active">Current Enterprise</span>
                      <span className="journey-tenure-tag">2019 – Present</span>
                    </div>
                    <h3 className="journey-title">Director</h3>
                    <h4 className="journey-company">Aarya Innovtech Pvt. Ltd. (Smart Buddy®)</h4>
                    <p className="journey-desc">
                      Directs the innovation pipeline, electronic hardware R&D, product manufacturing, and corporate operations for proprietary IoT public sanitation and municipal automation systems.
                    </p>
                    <div className="journey-highlights-list">
                      <span className="journey-highlight-chip">Product Innovation & R&D</span>
                      <span className="journey-highlight-chip">IoT Sanitation Hardware</span>
                      <span className="journey-highlight-chip">Municipal Automation</span>
                    </div>
                  </div>

                  <div className="dossier-journey-card">
                    <div className="journey-card-top">
                      <span className="journey-badge-corporate">Corporate Leadership</span>
                      <span className="journey-tenure-tag">15 Years Tenure</span>
                    </div>
                    <h3 className="journey-title">Executive Director</h3>
                    <h4 className="journey-company">Gargi Group of Industries</h4>
                    <p className="journey-desc">
                      Served 15 years as Executive Director, spearheading landmark institutional establishments, academic infrastructure, and research development programs in Nashik.
                    </p>
                    <div className="journey-highlights-list">
                      <span className="journey-highlight-chip">Gargi College of Wine Technology</span>
                      <span className="journey-highlight-chip">GARTI Research Institute</span>
                      <span className="journey-highlight-chip">Executive Administration</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: EDUCATION & ACADEMIA */}
              {aboutActiveTab === 'education' && (
                <div className="dossier-panel dossier-panel-grid animate-fade-in" role="tabpanel">
                  <div className="dossier-journey-card">
                    <div className="journey-card-top">
                      <span className="journey-badge-academic">Higher Academia</span>
                      <span className="journey-tenure-tag">5 Years Mentorship</span>
                    </div>
                    <h3 className="journey-title">Assistant Professor</h3>
                    <h4 className="journey-company">MET Institute of Engineering</h4>
                    <p className="journey-desc">
                      Served as Assistant Professor at Bhujbal Knowledge City, Nashik for 5 years, teaching advanced engineering subjects, guiding students in applied technical projects, and bridging academia with industry.
                    </p>
                    <div className="journey-highlights-list">
                      <span className="journey-highlight-chip">5 Years Teaching</span>
                      <span className="journey-highlight-chip">Engineering Mentorship</span>
                      <span className="journey-highlight-chip">Technical Guidance</span>
                    </div>
                  </div>

                  <div className="dossier-journey-card">
                    <div className="journey-card-top">
                      <span className="journey-badge-edu">Engineering Foundation</span>
                      <span className="journey-tenure-tag">Graduation: 2000</span>
                    </div>
                    <h3 className="journey-title">B.E. Instrumentation</h3>
                    <h4 className="journey-company">D.Y. Patil College of Engineering, Pune</h4>
                    <p className="journey-desc">
                      Earned Bachelor of Engineering in Instrumentation with distinction, building a deep analytical foundation in sensors, control systems, industrial automation, and embedded electronic architecture.
                    </p>
                    <div className="journey-highlights-list">
                      <span className="journey-highlight-chip">Instrumentation & Control</span>
                      <span className="journey-highlight-chip">Process Automation</span>
                      <span className="journey-highlight-chip">Pune University Alumni</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================================
          INNOVATION SECTION — VERIFIED FOUR CONTENT CARDS
          ========================================================================= */}
      <section id="innovation" className="section innovation-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-kicker">AARYA INNOVTECH PVT. LTD.</span>
            <h2 className="section-title">Innovation, R&D & Indigenous Solutions</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="innovations-grid">
            {INNOVATION_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="innovation-card executive-card"
              >
                <div className="innovation-card-top">
                  <span className="innovation-num-badge">{pillar.id}</span>
                </div>

                <div className="innovation-card-body">
                  <h3 className="innovation-card-title">{pillar.title}</h3>
                  <p className="innovation-card-desc">{pillar.description}</p>
                </div>

                <div className="innovation-tags-container">
                  {pillar.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="innovation-tag-item">
                      <span className="tag-dot">✦</span> {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT SECTION — AARYA INNOVTECH PRODUCTS & SOLUTIONS
          Clean Animated Product Showcase (Image & Description Only)
          ========================================================================= */}
      <section id="product" className="section product-section">
        <div className="section-container product-header-container">
          <div className="section-header">
            <h2 className="section-title">Product &amp; Solutions</h2>
            <div className="section-title-line"></div>
          </div>
        </div>

        {/* Full-width continuous marquee (Edge-to-Edge Right to Left) */}
        <div className="products-marquee-viewport">
          <div className="products-marquee-track">
            {marqueeList.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="product-card pure-showcase-card marquee-card"
              >
                {/* Top Thumbnail Wrapper with Hover Shimmer & Zoom */}
                <div className="product-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-img"
                    loading="lazy"
                    onError={(e) => {
                      if (e.target.src !== item.fallbackImg) {
                        e.target.src = item.fallbackImg;
                      }
                    }}
                  />
                  <div className="product-img-gleam"></div>
                </div>

                {/* Card Content Body: Title, Subtitle, Description & Read More */}
                <div className="product-info pure-info">
                  <h3 className="product-card-title">{item.title}</h3>
                  {item.subtitle && <p className="product-card-subtitle">{item.subtitle}</p>}
                  <p className="product-desc pure-desc">{item.desc}</p>

                  <button
                    type="button"
                    className="product-read-more-btn"
                    onClick={() => setActiveProductModal(item)}
                    aria-label={`Read more about ${item.title}`}
                  >
                    <span>Read More</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="read-more-arrow">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT DETAIL MODAL (Read More Popup)
          ========================================================================= */}
      {activeProductModal && (
        <div
          className="product-modal-backdrop"
          onClick={() => setActiveProductModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          <div
            className="product-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveProductModal(null)}
              aria-label="Close product details"
            >
              ✕
            </button>

            {/* Modal Content Grid */}
            <div className="product-modal-grid">
              {/* Left Column: Product Photo & Badges */}
              <div className="product-modal-media">
                <div className="modal-img-wrapper">
                  <img
                    src={activeProductModal.image}
                    alt={activeProductModal.title}
                    className="modal-product-img"
                    onError={(e) => {
                      if (e.target.src !== activeProductModal.fallbackImg) {
                        e.target.src = activeProductModal.fallbackImg;
                      }
                    }}
                  />
                </div>
                {activeProductModal.badge && (
                  <div className="modal-badge-tag">
                    ✦ {activeProductModal.badge}
                  </div>
                )}
              </div>

              {/* Right Column: Complete Technical Details */}
              <div className="product-modal-body">
                <span className="modal-category-kicker">
                  {activeProductModal.category}
                </span>
                <h3 id="modal-product-title" className="modal-title">
                  {activeProductModal.title}
                </h3>
                {activeProductModal.subtitle && (
                  <p className="modal-subtitle">{activeProductModal.subtitle}</p>
                )}

                <div className="modal-divider"></div>

                <p className="modal-full-desc">
                  {activeProductModal.desc}
                </p>

                {/* Key Features Checklist */}
                {activeProductModal.details?.features && (
                  <div className="modal-features-section">
                    <h4 className="modal-section-heading">Key Features &amp; Capabilities</h4>
                    <ul className="modal-features-list">
                      {activeProductModal.details.features.map((feature, fIdx) => (
                        <li key={fIdx} className="modal-feature-item">
                          <span className="feature-check-icon">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Specifications */}
                {activeProductModal.details?.specsList && (
                  <div className="modal-specs-section">
                    <h4 className="modal-section-heading">Engineering Specifications</h4>
                    <div className="modal-specs-grid">
                      {activeProductModal.details.specsList.map((spec, sIdx) => (
                        <div key={sIdx} className="modal-spec-row">
                          <span className="spec-label">{spec.label}:</span>
                          <span className="spec-val">{spec.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Footer Actions */}
                <div className="modal-action-footer">
                  <button
                    type="button"
                    className="btn-modal-inquire"
                    onClick={() => handleInquireProduct(activeProductModal)}
                  >
                    <span>Inquire About Solution</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="btn-modal-close"
                    onClick={() => setActiveProductModal(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          EXPERTISE SECTION — STRATEGIC EXECUTIVE DOMAINS
          ========================================================================= */}
      <section id="expertise" className="section expertise-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-kicker">EXECUTIVE COMPETENCIES</span>
            <h2 className="section-title">Strategic Domains of Executive Expertise</h2>
            <div className="section-title-line"></div>
          </div>

          {/* Full Screen Seamless Executive Editorial Board */}
          <div className="expertise-editorial-board">
            {EXPERTISE_AREAS.map((area, idx) => (
              <div
                key={area.id}
                className="expertise-editorial-col scroll-reveal-card"
                style={{ '--card-delay': `${idx * 0.1 + 0.06}s` }}
              >
                <div className="editorial-col-accent-line"></div>
                <div className="editorial-col-header">
                  <span className="editorial-number">{area.num}</span>
                  <div className="editorial-icon-badge">{area.icon}</div>
                </div>

                <div className="editorial-tag-row">
                  <span className="editorial-tag-label">{area.category}</span>
                  <span className="editorial-tag-divider"></span>
                </div>

                <p className="editorial-col-desc">{area.desc}</p>

                <div className="editorial-col-bottom-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. ACHIEVEMENTS SECTION (Verified Profile Executive Awards)
          ========================================================================= */}
      <section id="achievements" className="section achievements-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Global Impact Forum and Udyog Bharati recognition moments</h2>
          </div>

          {/* Stage Photographic Honors Showcase (3 Real Event Photos) */}
          <div className="stage-awards-grid">
            {STAGE_AWARDS_DATA.map((item) => (
              <div
                key={item.id}
                className="stage-award-card"
                onClick={() => setActiveAwardModal(item)}
                tabIndex={0}
                role="button"
                aria-label={`View award details for ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveAwardModal(item);
                  }
                }}
              >
                <div className="stage-award-top-bar">
                  <span className="stage-award-kicker-tag">{item.kicker}</span>
                </div>

                <div className="stage-award-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="stage-award-img"
                    loading="lazy"
                  />
                </div>

                <div className="stage-award-content">
                  <h3 className="stage-award-title">{item.title}</h3>
                  <div className="stage-award-dignitary-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dignitary-mini-icon">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="stage-award-dignitary">{item.dignitary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Accolades Subheader */}
          <div className="achievements-sub-header">
            <div className="achievements-sub-line-left"></div>
            <div className="achievements-sub-badge">
              <span className="achievements-sub-sparkle">✦</span>
              <span>VERIFIED PROFILE RECOGNITIONS</span>
            </div>
            <div className="achievements-sub-line-right"></div>
          </div>

          {/* Executive Prestige Honors List (3 Cards in ONE ROW) */}
          <div className="prestige-honors-list">
            {AWARDS_DATA.map((award, idx) => (
              <div key={award.id} className="prestige-honor-row" style={{ '--row-idx': idx }}>
                {/* Header: Number + Medallion Icon on Left, Category Tag on Right */}
                <div className="honor-card-header">
                  <div className="honor-header-left">
                    <span className="honor-number">{`0${idx + 1}`}</span>
                    <div className="honor-gold-crest" title={award.name}>
                      {award.icon}
                    </div>
                  </div>
                  <span className="honor-category-tag">{award.badge}</span>
                </div>

                {/* Content: Title, Recipient & Description */}
                <div className="honor-content-col">
                  <h3 className="honor-main-title">{award.name}</h3>
                  <span className="honor-recipient-text">{award.recipient}</span>
                  <p className="honor-narrative">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAGE AWARD LIGHTBOX MODAL (Big Photo & Information Display)
          ========================================================================= */}
      {activeAwardModal && (
        <div
          className="award-modal-backdrop"
          onClick={() => setActiveAwardModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-award-title"
        >
          <div
            className="award-modal-container award-modal-large"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="award-modal-close-btn"
              onClick={() => setActiveAwardModal(null)}
              aria-label="Close photo preview"
            >
              ✕
            </button>

            {/* Big Prominent Stage Photo Frame (Clear, 100% Unobstructed) */}
            <div className="award-modal-big-photo-frame">
              <img
                src={activeAwardModal.image}
                alt={activeAwardModal.title}
                className="award-modal-big-img"
              />
            </div>

            {/* Only Important Information Below Photo */}
            <div className="award-modal-info-panel">
              <h3 id="modal-award-title" className="award-modal-title">
                {activeAwardModal.title}
              </h3>

              <div className="award-modal-dignitary-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="award-dignitary-icon">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <div className="award-dignitary-text-group">
                  <span className="award-dignitary-label">PRESENTATION &amp; FELICITATION</span>
                  <p className="award-dignitary-name">{activeAwardModal.dignitary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          8. CONTACT SECTION
          ========================================================================= */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Connect with Mr. Prashant Ashok Bachhav</h2>
          </div>

          <div className="contact-layout-grid">
            {/* Contact Details Column */}
            <div className="contact-info-panel">
              <div className="panel-accent-bar"></div>
              <h3 className="contact-panel-heading">Director’s Office</h3>
              <p className="contact-panel-intro">
                Official executive desk and administrative liaison at corporate headquarters.
              </p>

              <div className="contact-methods">
                <div className="contact-method-card">
                  <div className="contact-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-label">Corporate Headquarters</span>
                    <strong className="contact-value">Aarya Innovtech Pvt. Ltd.</strong>
                    <span className="contact-sub">Nashik, Maharashtra, India</span>
                  </div>
                </div>

                <a href="tel:+918806796868" className="contact-method-card contact-link-card">
                  <div className="contact-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-label">Direct Phone</span>
                    <strong className="contact-value">+91 88067 96868</strong>
                    <span className="contact-sub">Official Corporate Line</span>
                  </div>
                </a>

                <a href="mailto:rnd@theaaryatechnologies.com" className="contact-method-card contact-link-card">
                  <div className="contact-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-label">Official Email</span>
                    <strong className="contact-value">rnd@theaaryatechnologies.com</strong>
                    <span className="contact-sub">R&D & Corporate Office</span>
                  </div>
                </a>

                {/* Official LinkedIn Connection Card */}
                <a
                  href="https://www.linkedin.com/in/smart-buddy-777842242?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-card contact-link-card contact-linkedin-card"
                  title="Connect with Smart Buddy on LinkedIn"
                >
                  <div className="contact-icon-box linkedin-icon-box">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-label">Official LinkedIn</span>
                    <strong className="contact-value">Smart Buddy on LinkedIn</strong>
                    <span className="contact-sub">Professional Network & Updates</span>
                  </div>
                </a>

                {/* Official Instagram Profile Card */}
                <a
                  href="https://www.instagram.com/prashant___bachhav?vrfl=MTh5MHZieTVqNmVuMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method-card contact-link-card contact-instagram-card"
                  title="Follow Prashant Bachhav on Instagram (@prashant___bachhav)"
                >
                  <div className="contact-icon-box instagram-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-label">Official Instagram</span>
                    <strong className="contact-value">@prashant___bachhav</strong>
                    <span className="contact-sub">Instagram Profile & Updates</span>
                  </div>
                </a>

                <div className="contact-method-card">
                  <div className="contact-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div className="contact-detail">
                    <span className="contact-label">Executive Designation</span>
                    <strong className="contact-value">Director — Aarya Innovtech Pvt.&nbsp;Ltd.</strong>
                    <span className="contact-sub">R&D & Corporate Leadership</span>
                  </div>
                </div>
              </div>

              <div className="aarya-affiliation-badge">
                <img src="/aarya-logo.png" alt="Aarya Innovtech Pvt. Ltd." className="affiliation-logo" onError={(e) => e.target.style.display = 'none'} />
                <div className="affiliation-text">
                  <strong>Aarya Innovtech Pvt. Ltd.</strong>
                  <span>Ideas Engineered into Reality • Nashik</span>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="contact-form-panel">
              <div className="panel-accent-bar"></div>
              <h3 className="form-panel-title">Send a Direct Communication</h3>
              <p className="form-panel-intro">
                Official institutional inquiries, project proposals, or corporate messaging.
              </p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <div className="success-icon">✓</div>
                  <h4>Communication Sent Successfully</h4>
                  <p>Thank you for reaching out. The Director’s office will review your message promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="executive-form">
                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject / Purpose *</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Institutional Collaboration / Technical Inquiry"
                    />
                  </div>

                  <div className="form-field form-field-message">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      rows="3"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the details of your inquiry or proposal..."
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <span>Send Official Message</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FOOTER — CENTERED EXECUTIVE FORMAT (IMAGE-MATCHED)
          ========================================================================= */}
      <footer className="footer">
        <div className="footer-container">
          {/* Logo badge kept intact as requested */}
          <div className="footer-logo-badge" title="Smart Buddy® — Innovative Public Hygiene & Automation">
            <img
              src="/smart_buddy_cropped.png"
              alt="Smart Buddy Logo"
              className="footer-smart-buddy-logo"
            />
          </div>

          {/* Centered Brand Name with Gold Dot */}
          <h2 className="footer-brand-title">
            PRASHANT BACHHAV<span className="footer-brand-dot">.</span>
          </h2>

          {/* Centered Subtitle / Domains */}
          <p className="footer-subtitle">
            Director, Aarya Innovtech Pvt. Ltd. • R&D Strategy • Product Innovation • Indigenous Utilities
          </p>

          {/* Centered Horizontal Navigation Links */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="#innovation" onClick={(e) => scrollToSection(e, 'innovation')}>Innovation</a>
            <a href="#product" onClick={(e) => scrollToSection(e, 'product')}>Product</a>
            <a href="#expertise" onClick={(e) => scrollToSection(e, 'expertise')}>Expertise</a>
            <a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>Achievements</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </nav>

          {/* Centered Direct Contact & Social Connect Links (Phone, Email, LinkedIn, Instagram) */}
          <div className="footer-social-row">
            <a
              href="tel:+918806796868"
              className="footer-social-btn footer-phone-btn"
              title="Call Mr. Prashant Ashok Bachhav: +91 88067 96868"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 88067 96868</span>
            </a>

            <a
              href="mailto:rnd@theaaryatechnologies.com"
              className="footer-social-btn footer-email-btn"
              title="Email Mr. Prashant Ashok Bachhav: rnd@theaaryatechnologies.com"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>rnd@theaaryatechnologies.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/smart-buddy-777842242?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn footer-linkedin-btn"
              title="Connect with Smart Buddy on LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.65 1.65 0 0 0-1.66-1.66Z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/prashant___bachhav?vrfl=MTh5MHZieTVqNmVuMg=="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn footer-instagram-btn"
              title="Follow Prashant Bachhav on Instagram (@prashant___bachhav)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Follow on Instagram</span>
            </a>
          </div>

          {/* Centered Copyright */}
          <p className="footer-copyright">
            © {new Date().getFullYear()} Mr. Prashant Ashok Bachhav. All rights reserved. Director, Aarya Innovtech Pvt. Ltd., Nashik.
          </p>
        </div>
      </footer>
    </div>
  );
}
