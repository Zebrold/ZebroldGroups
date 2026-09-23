import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import PageHero from '../../components/PageHero/PageHero';
import '../../styles/legal.css';

const UPDATED = '2026-09-01';

export default function LegalNotice() {
  const { t, lang } = useLanguage();
  const de = lang === 'de';

  return (
    <div>
      <SEO
        title="Legal Notice | Zebrold Scolome"
        description="Legal notice and provider identification for Zebrold International Holdings Limited (Zebrold IHL), Frankfurt am Main."
        url="/legal-notice"
      />

      <PageHero eyebrow={t('legal_title')} title={t('legal_title')} />

      <div className="pageBody">
        <div className="shell-narrow prose legal">
          <p className="legal__updated mono">
            {t('legal_updated')}: {UPDATED}
          </p>

          <h2>{de ? 'Angaben gemäß § 5 TMG' : 'Information pursuant to § 5 TMG'}</h2>
          <p>
            Zebrold International Holdings Limited (Zebrold IHL)
            <br />
            Bockenheimer Landstrasse 17-19
            <br />
            60325 Frankfurt am Main
            <br />
            {de ? 'Deutschland' : 'Germany'}
          </p>

          <h2>{de ? 'Kontakt' : 'Contact'}</h2>
          <p>
            {de ? 'E-Mail' : 'Email'}: <a href="mailto:info@zebrold.de">info@zebrold.de</a>
          </p>

          <h2>{de ? 'Registereintrag und Vertretung' : 'Register entry and representation'}</h2>
          <p className="legal__todo">
            {de
              ? 'Die folgenden Angaben sind gesetzlich vorgeschrieben und müssen vor Veröffentlichung durch die tatsächlichen Registerdaten ersetzt werden:'
              : 'The following details are legally required and must be replaced with the actual register data before publication:'}
          </p>
          <ul>
            <li>{de ? 'Registergericht und Handelsregisternummer' : 'Register court and commercial register number'}</li>
            <li>{de ? 'Vertretungsberechtigte Geschäftsführung' : 'Authorised managing directors'}</li>
            <li>
              {de
                ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG'
                : 'VAT identification number pursuant to § 27a UStG'}
            </li>
            <li>
              {de
                ? 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV'
                : 'Person responsible for content pursuant to § 18 (2) MStV'}
            </li>
          </ul>

          <h2>{de ? 'Haftung für Inhalte' : 'Liability for content'}</h2>
          <p>
            {de
              ? 'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.'
              : 'As a service provider we are responsible for our own content on these pages under general law. We are not obliged, however, to monitor transmitted or stored third-party information or to investigate circumstances indicating unlawful activity. Obligations to remove or block the use of information under general law remain unaffected.'}
          </p>

          <h2>{de ? 'Haftung für Links' : 'Liability for links'}</h2>
          <p>
            {de
              ? 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.'
              : 'Our site contains links to external third-party websites over whose content we have no influence. The respective provider or operator of the linked pages is always responsible for their content. Should we become aware of any legal infringement, we will remove such links without delay.'}
          </p>

          <h2>{de ? 'Urheberrecht' : 'Copyright'}</h2>
          <p>
            {de
              ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.'
              : 'Content and works created by the site operators on these pages are subject to German copyright law. Reproduction, adaptation, distribution and any kind of exploitation beyond the limits of copyright require the written consent of the respective author or creator.'}
          </p>

          <h2>{de ? 'Streitbeilegung' : 'Dispute resolution'}</h2>
          <p>
            {de
              ? 'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.'
              : 'We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.'}
          </p>
        </div>
      </div>
    </div>
  );
}
