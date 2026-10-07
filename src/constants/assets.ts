/**
 * Media assets from Cloudflare R2 bucket: website-datein/energie-nach-plan/
 * Plus curated architectural assets
 */
const R2_BASE = 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/energie-nach-plan';

export const ASSETS = {
  // Brand Logo & Favicon
  logo: `${R2_BASE}/energie-nach-plan-logo-lang_02.webp`,
  logoWhite: `${R2_BASE}/energie-nach-plan-logo-white.webp`,
  favicon: `${R2_BASE}/energie-nach-plan-flavicon_01.webp`,

  // Cloudflare R2 Assets
  heroCutaway: `${R2_BASE}/Hero_energie_nach_plan_01%20(3).webp`,
  heroBanner: `${R2_BASE}/Energie-nach-Plan_01.webp`,
  planingDetail: `${R2_BASE}/Energie-nach-Plan_02.webp`,
  consultingScene: `${R2_BASE}/Energie-nach-Plan_03.webp`,
  heatpumpExterior: `${R2_BASE}/Energie-nach-Plan_04.webp`,
  foundersConsulting: `${R2_BASE}/Energie-nach-Plan_05.webp`,
  boilerRoomCheck: `${R2_BASE}/Energie-nach-Plan_06.webp`,
  energyAudit: `${R2_BASE}/Energie-nach-Plan_07.webp`,
  founderNico: `${R2_BASE}/Energie-nach-Plan_08.webp`,
  founderJan: `${R2_BASE}/Energie-nach-Plan_09.webp`,
  measurementDevice: `${R2_BASE}/Energie-nach-Plan_10.webp`,
  modernHeatingSystem: `${R2_BASE}/Energie-nach-Plan_11.webp`,
  buildingBlueprint: `${R2_BASE}/Energie-nach-Plan_12.webp`,
  renovationHighRes1: `${R2_BASE}/Energie-nach-Plan_14.webp`,
  renovationHighRes2: `${R2_BASE}/Energie-nach-Plan_15.webp`,

  // High-Resolution Curated Unsplash Photos for complementary sections
  residentialArchitecture: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  commercialArchitecture: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  heatPumpDetail: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80',
  tgaEngineering: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
  houseInspection: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80',
  meetingHandshake: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',

  // Sanierungsfallen: Authentische, maßgeschneiderte Fotografie (Photorealistisch & detailgetreu)
  trapHeatingAltbau: '/images/falle_01_altbau_waermepumpe.webp',
  trapFundingBureaucracy: '/images/falle_02_foerderung_papierkram.webp',
  trapSalesPressure: '/images/falle_03_markenbindung_beratung.webp',

  // Referenzprojekte: Hochwertige, passende Architektur- und Sanierungsfotos
  referenceSingleFamily: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  referenceApartmentWeg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
  referenceRoofRenovation: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
  referenceCommercialClinic: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',

  // Hero-Bühnen der 4 Leistungs-Unterseiten (Neu vom Nutzer bereitgestellte transparente Meistergrafiken)
  subpageHeroKomplettpaket: '/images/hero_subpage_komplettpaket_02.webp',
  subpageHeroFoerdermittel: '/images/hero_subpage_foerdermittel_01.webp',
  subpageHeroHausverwaltungen: '/images/hero_subpage_hausverwaltungen_02.webp',
  subpageHeroTgaPlanung: '/images/hero_subpage_tga_planung.webp',

  // Gründer-Porträts (Gemeinsames Duo-Studio-Porträt & Einzelfreisteller)
  foundersDuoPortrait: '/images/founders_duo_portrait.webp',
  founderNicoCutout: '/images/founder_nico_cutout.webp',
  founderJanCutout: '/images/founder_jan_cutout.webp',

  // Offizielles Klimaschutz e.V. Partner-Logo (R2)
  klimaschutzLogo: 'https://pub-b33108412309406a9a941ddc51e9a5b9.r2.dev/energie-nach-plan/Energie-nach-Plan_06.webp',

  // 3 Phasen Komplettpaket Sanierung (Echte Fotografie)
  phaseAnalyseIsfp: '/images/phase_01_analyse_isfp.webp',
  phaseFoerderantrag: '/images/phase_02_foerderantrag.webp',
  phaseAbnahmeBauleitung: '/images/phase_03_abnahme_bauleitung.webp'
};

export const COMPANY_INFO = {
  name: 'Energie nach Plan GbR',
  subname: 'Nico Heidemann & Jan Osmer',
  address: 'Weserweg 38 B',
  zipCity: '31623 Drakenburg',
  region: 'Landkreis Nienburg / Mittelweser & Umgebung',
  phone: '05024 9814023',
  phoneClean: '+4950249814023',
  email: 'post@energie-nach-plan.de',
  hours: 'Mo – Fr: 08:00 – 17:00 Uhr (Vor-Ort-Termine nach Vereinbarung)',
  googleMapsUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47b0f3429fbaf879:0x302ecc19e1f795da?sa=X&ved=1t:8290&ictx=111',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJefi6n0LzsEcR2pX34RnMLjA'
};
