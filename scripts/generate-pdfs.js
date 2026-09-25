import fs from 'fs';
import path from 'path';

function escapePdf(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function buildPdf(title, subtitle, meta, sections) {
  let stream = '';

  // Background Header Banner (Deep Burgundy #781c1c)
  stream += 'q\n';
  stream += '0.47 0.11 0.11 rg\n';
  stream += '0 680 612 112 re f\n';
  stream += 'Q\n';

  // Gold accent line
  stream += 'q\n';
  stream += '0.85 0.65 0.13 rg\n';
  stream += '0 676 612 4 re f\n';
  stream += 'Q\n';

  // Header Title
  stream += 'BT\n';
  stream += '/F2 18 Tf\n';
  stream += '1 1 1 rg\n';
  stream += '40 745 Td\n';
  stream += `(${escapePdf(title)}) Tj\n`;
  stream += 'ET\n';

  // Subtitle
  stream += 'BT\n';
  stream += '/F1 11 Tf\n';
  stream += '0.92 0.88 0.88 rg\n';
  stream += '40 722 Td\n';
  stream += `(${escapePdf(subtitle)}) Tj\n`;
  stream += 'ET\n';

  // Metadata (Bureau, Date, Classification)
  stream += 'BT\n';
  stream += '/F1 8 Tf\n';
  stream += '0.8 0.75 0.75 rg\n';
  stream += '40 695 Td\n';
  stream += `(${escapePdf(meta)}) Tj\n`;
  stream += 'ET\n';

  // Body content
  let y = 635;
  for (const sec of sections) {
    if (y < 120) break;

    // Section title
    stream += 'BT\n';
    stream += '/F2 11 Tf\n';
    stream += '0.47 0.11 0.11 rg\n';
    stream += `40 ${y} Td\n`;
    stream += `(${escapePdf(sec.heading.toUpperCase())}) Tj\n`;
    stream += 'ET\n';

    y -= 6;
    // Underline
    stream += `q 0.85 0.85 0.85 RG 0.75 w 40 ${y} m 572 ${y} l S Q\n`;
    y -= 16;

    for (const para of sec.paragraphs) {
      if (y < 80) break;
      stream += 'BT\n';
      stream += '/F1 9 Tf\n';
      stream += '0.2 0.2 0.2 rg\n';
      stream += `40 ${y} Td\n`;
      stream += `(${escapePdf(para)}) Tj\n`;
      stream += 'ET\n';
      y -= 14;
    }
    y -= 12;
  }

  // Footer separator & disclaimer
  stream += 'q 0.85 0.85 0.85 RG 0.5 w 40 45 m 572 45 l S Q\n';
  stream += 'BT\n';
  stream += '/F1 7 Tf\n';
  stream += '0.5 0.5 0.5 rg\n';
  stream += '40 32 Td\n';
  stream += '(ZEBROLD INTERNATIONAL HOLDINGS LIMITED · REGULATORY DISCLOSURE & INVESTOR RELATIONS · FRANKFURT & BENGALURU) Tj\n';
  stream += 'ET\n';

  const streamBuf = Buffer.from(stream, 'utf8');

  const catalogObj = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const pagesObj = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const pageObj = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 6 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> >>\nendobj\n';
  const font1Obj = '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';
  const font2Obj = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n';
  const contentObj = `6 0 obj\n<< /Length ${streamBuf.length} >>\nstream\n${stream}\nendstream\nendobj\n`;

  const bodyParts = [catalogObj, pagesObj, pageObj, font1Obj, font2Obj, contentObj];

  let header = '%PDF-1.4\n';
  let offsets = [];
  let currentOffset = Buffer.byteLength(header, 'utf8');

  let body = '';
  for (const part of bodyParts) {
    offsets.push(currentOffset);
    body += part;
    currentOffset += Buffer.byteLength(part, 'utf8');
  }

  let xref = `xref\n0 ${bodyParts.length + 1}\n0000000000 65535 f \n`;
  for (const o of offsets) {
    xref += `${String(o).padStart(10, '0')} 00000 n \n`;
  }

  let trailer = `trailer\n<< /Size ${bodyParts.length + 1} /Root 1 0 R >>\nstartxref\n${currentOffset}\n%%EOF\n`;

  return Buffer.from(header + body + xref + trailer, 'utf8');
}

const docsDir = path.resolve('public', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// 1. Q3 2026 Interim Statement
const q3Pdf = buildPdf(
  'Zebrold IHL — Q3 2026 Interim Financial Statement',
  'Commercial Performance, Corridor Contracts & Rolling Stock Delivery',
  'Document Ref: ZEB-FIN-2026-Q3 · Release Date: 12 August 2026 · Classification: Public Investor Report',
  [
    {
      heading: '1. Executive Performance Overview',
      paragraphs: [
        'Zebrold International Holdings Limited reports resilient third-quarter commercial performance, supported by continental',
        'trainset delivery expansions, turnkey EPC electrification milestones, and growing recurring revenues across the Scolome TwinOS',
        'predictive signalling division. Group revenues reached €1.62bn annualized, marking sustained double-digit growth across both',
        'European passenger modernization lines and Indian freight and regional transit networks.',
      ],
    },
    {
      heading: '2. Operating Margins & Segment Financials',
      paragraphs: [
        'Consolidated EBITDA margin expanded to 18.4%, driven by vertical supply-chain integration of silicon carbide (SiC) traction',
        'inverters and synchronized modular fabrication across Frankfurt, Kassel, and Bengaluru. Rolling stock accounted for 45% of',
        'turnover (€729m), Turnkey EPC and permanent way reached 25% (€405m), and Digital Transit systems delivered 18% (€291m).',
        'Depot lifecycle maintenance contracts expanded order book visibility to 30+ operational years.',
      ],
    },
    {
      heading: '3. Strategic Transnational Integration',
      paragraphs: [
        'Operational synchronization between German functional safety compliance (CENELEC EN 50126/50128/50129 SIL-4) and Indian RDSO',
        'telematics provers continues to yield structural competitive advantages in bidding for cross-border high-speed rail concessions.',
        'Working capital metrics improved by 14 days YoY following automated robotic sub-assembly commissioning in Kassel.',
      ],
    },
    {
      heading: '4. Capital Expenditure & Outlook',
      paragraphs: [
        'Full-year revenue guidance is affirmed in the range of €1.58bn to €1.65bn. Planned R&D expenditures remain targeted at hydrogen-hybrid',
        'traction prototypes and satellite-based ETCS Level 3 moving block signalling architectures.',
      ],
    },
  ]
);

// 2. Annual Report & ESG Impact Review
const esgPdf = buildPdf(
  'Zebrold IHL — Annual Report & ESG Impact Review 2025/26',
  'Audited Financials, Net-Zero Corridor Decarbonisation & Corporate Governance',
  'Document Ref: ZEB-ESG-2025-26 · Published: July 2026 · Global ESG Reporting Framework (GRI & EU Taxonomy Aligned)',
  [
    {
      heading: '1. Group Chairman & Directorate Letter',
      paragraphs: [
        'Fiscal year 2025/26 marked an inflection in continental rail procurement. As international transport authorities accelerate net-zero',
        'mandates, Zebrold International Holdings Limited delivered 142 electric and battery-hybrid trainsets, eliminating an estimated 480,000',
        'metric tonnes of CO2 equivalents compared with equivalent diesel-powered regional operations.',
      ],
    },
    {
      heading: '2. Environmental Sustainability & Material Stewardship',
      paragraphs: [
        'Every Scolome trainset achieves a verified 94.8% material recyclability rate at end-of-life under EN 45545 European directives.',
        'Our lightweight carbon-reinforced aluminium carbody shells reduce aerodynamic parasitic drag by 14%, enabling industry-leading',
        'energy efficiency metrics of 0.00 g CO2/pkm when paired with certified green grid electricity.',
      ],
    },
    {
      heading: '3. Bilateral Governance & Social Integrity',
      paragraphs: [
        'The dual-headquarters operational model in Germany and India fosters deep transnational skill transfer, maintaining a global',
        'technical workforce of over 3,400 specialized engineers, researchers, and field commissioning specialists. Zero lost-time injuries',
        'were logged across high-voltage testing lines during the reporting period.',
      ],
    },
    {
      heading: '4. Consolidated Financial Position & Shareholder Value',
      paragraphs: [
        'Net cash flows from operating activities rose to €218m. Return on capital employed (ROCE) reached 19.2%, demonstrating the superior',
        'capital efficiency of modular series train production compared to legacy bespoke manufacturing programs.',
      ],
    },
  ]
);

// 3. Scolome Fleet Delivery Pipeline 2026-32
const pipelinePdf = buildPdf(
  'Scolome Fleet Delivery Pipeline 2026–2032',
  'Platform Manifest, Order Book Backlog & International Commissioning Schedule',
  'Document Ref: ZEB-OPS-PIPE-2026 · Technical Dispatch · Classification: Public Release',
  [
    {
      heading: '1. Active Fleet Production Manifest',
      paragraphs: [
        'The Scolome rolling stock family spans four standardized, interoperable traction architectures designed for transnational gauge',
        'and electrification conditions: Scolome Apex 350 (High-Speed), Scolome Horizon (B-EMU Hybrid), Scolome Intercity Velox (Mainline),',
        'and the Scolome Urban Pulse (Metro & Suburban EMU).',
      ],
    },
    {
      heading: '2. Multi-Year Delivery Timeline & Backlog',
      paragraphs: [
        '• 2026–2027: 48 five-car battery-electric trainsets for northern EU regional routes; 12 Apex 350 trainsets entering dynamic route testing.',
        '• 2028–2029: 80 high-capacity suburban EMUs deployed across Western India freight-shared corridors with automated ETCS Level 2 signalling.',
        '• 2030–2032: Continental transnational express corridors connecting Central Europe and Mediterranean freight ports.',
      ],
    },
    {
      heading: '3. Depot Electrification & Full Lifecycle Support',
      paragraphs: [
        'All pipeline vehicle deliveries include complete turnkey depot fast-charging infrastructure, dynamic pantograph monitoring gantries,',
        'and guaranteed 30-year component availability under Zebrold AssetCare contractual commitments.',
      ],
    },
  ]
);

fs.writeFileSync(path.join(docsDir, 'Zebrold-Q3-2026-Interim-Statement.pdf'), q3Pdf);
fs.writeFileSync(path.join(docsDir, 'Zebrold-Annual-Report-ESG-2025-26.pdf'), esgPdf);
fs.writeFileSync(path.join(docsDir, 'Scolome-Fleet-Delivery-Pipeline-2026-32.pdf'), pipelinePdf);

console.log('Successfully generated all 3 investor PDFs in public/docs/');
