import SectorPage from '../../components/SectorPage/SectorPage';
import { sectorPages } from '../../data/sectorPages';

export default function Aerospace() {
  return (
    <SectorPage
      page={sectorPages.aerospace}
      seo={{
        title: 'Aerospace Structures & Turbomachinery | Zebrold Scolome',
        description:
          'Aerostructure metallurgy, high-temperature turbomachinery and composite engineering at Zebrold Scolome — the materials science behind a lighter, stiffer 350 km/h carbody.',
        keywords:
          'Zebrold aerospace, turbomachinery, aerostructures, EN 9100, composites, additive manufacturing, lightweight carbody',
        url: '/aerospace',
      }}
    />
  );
}
