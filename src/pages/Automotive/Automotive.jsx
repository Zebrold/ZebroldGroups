import SectorPage from '../../components/SectorPage/SectorPage';
import { sectorPages } from '../../data/sectorPages';

export default function Automotive() {
  return (
    <SectorPage
      page={sectorPages.automotive}
      seo={{
        title: 'Electrified Drivetrain & Series Automation | Zebrold Scolome',
        description:
          'Silicon-carbide traction packages and takted carbody assembly at Zebrold Scolome — high-volume automotive manufacturing discipline applied to rolling stock.',
        keywords:
          'Zebrold automotive, silicon carbide inverter, traction drive, EN 50155, carbody assembly, series manufacturing',
        url: '/automotive',
      }}
    />
  );
}
