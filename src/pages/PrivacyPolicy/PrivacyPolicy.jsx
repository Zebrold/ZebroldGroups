import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO/SEO';
import PageHero from '../../components/PageHero/PageHero';
import '../../styles/legal.css';

const UPDATED = '2026-09-01';

export default function PrivacyPolicy() {
  const { t, lang } = useLanguage();
  const de = lang === 'de';

  return (
    <div>
      <SEO
        title="Privacy Policy | Zebrold IHL"
        description="How Zebrold International Holdings Limited (Zebrold IHL) collects, uses and protects personal data under the GDPR."
        url="/privacy-policy"
      />

      <PageHero eyebrow={t('privacy_title')} title={t('privacy_title')} />

      <div className="pageBody">
        <div className="shell-narrow prose legal">
          <p className="legal__updated mono">
            {t('legal_updated')}: {UPDATED}
          </p>

          <p>
            {de
              ? 'Diese Erklärung beschreibt, wie Zebrold International Holdings Limited personenbezogene Daten verarbeitet, die über diese Website erhoben werden. Verarbeitungsgrundlage ist die Datenschutz-Grundverordnung (DSGVO).'
              : 'This statement describes how Zebrold International Holdings Limited processes personal data collected through this website. Processing is carried out under the General Data Protection Regulation (GDPR).'}
          </p>

          <h2>{de ? '1. Verantwortlicher' : '1. Controller'}</h2>
          <p>
            Zebrold International Holdings Limited (Zebrold IHL)
            <br />
            Bockenheimer Landstrasse 17-19, 60311 Frankfurt am Main, Hesse, {de ? 'Deutschland' : 'Germany'}
            <br />
            <a href="mailto:info@zebrold.de">info@zebrold.de</a>
          </p>
          <p className="legal__todo">
            {de
              ? 'Sofern ein Datenschutzbeauftragter benannt ist, sind dessen Kontaktdaten hier vor Veröffentlichung zu ergänzen.'
              : 'If a data protection officer has been appointed, their contact details must be added here before publication.'}
          </p>

          <h2>{de ? '2. Welche Daten wir verarbeiten' : '2. What data we process'}</h2>
          <h3>{de ? 'Kontakt- und Bewerbungsformulare' : 'Contact and application forms'}</h3>
          <p>
            {de
              ? 'Wenn Sie das Kontakt- oder Bewerbungsformular nutzen, verarbeiten wir die von Ihnen angegebenen Daten — Name, E-Mail-Adresse, gegebenenfalls Telefonnummer, Organisation und den Inhalt Ihrer Nachricht — ausschließlich zur Bearbeitung Ihres Anliegens.'
              : 'When you use the contact or application form we process the data you provide — name, email address, and where given your telephone number, organisation and the content of your message — solely in order to handle your enquiry.'}
          </p>
          <ul>
            <li>
              {de
                ? 'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).'
                : 'Legal basis: Art. 6(1)(b) GDPR (pre-contractual steps) or Art. 6(1)(f) GDPR (legitimate interest in responding to enquiries).'}
            </li>
            <li>
              {de
                ? 'Speicherdauer: bis zur abschließenden Bearbeitung, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen. Bewerbungsunterlagen werden in der Regel sechs Monate nach Abschluss des Verfahrens gelöscht.'
                : 'Retention: until your enquiry has been fully dealt with, unless statutory retention periods apply. Application materials are normally deleted six months after the process concludes.'}
            </li>
          </ul>

          <h3>{de ? 'Server-Logdaten' : 'Server log data'}</h3>
          <p>
            {de
              ? 'Beim Aufruf dieser Website erhebt der Hosting-Anbieter automatisch technische Zugriffsdaten wie IP-Adresse, Zeitpunkt der Anfrage, aufgerufene Seite und Browsertyp. Diese Daten dienen dem sicheren und stabilen Betrieb der Website.'
              : 'When this website is accessed, the hosting provider automatically records technical access data such as IP address, time of request, page requested and browser type. This data serves the secure and stable operation of the site.'}
          </p>

          <h3>{de ? 'Lokale Speicherung im Browser' : 'Local browser storage'}</h3>
          <p>
            {de
              ? 'Diese Website speichert Ihre Sprachauswahl (Deutsch oder Englisch) lokal in Ihrem Browser. Diese Information verlässt Ihr Gerät nicht und wird nicht zur Wiedererkennung oder zu Analysezwecken verwendet.'
              : 'This website stores your language preference (German or English) locally in your browser. That information does not leave your device and is not used to recognise you or for analytics.'}
          </p>

          <h2>{de ? '3. Empfänger und Auftragsverarbeiter' : '3. Recipients and processors'}</h2>
          <p>
            {de
              ? 'Zur Auslieferung der Website und zum Versand von Formularnachrichten setzen wir Dienstleister ein, die als Auftragsverarbeiter nach Art. 28 DSGVO für uns tätig werden. Eine Weitergabe Ihrer Daten zu anderen Zwecken findet nicht statt.'
              : 'We use service providers to deliver this website and to transmit form messages; they act for us as processors under Art. 28 GDPR. Your data is not passed on for any other purpose.'}
          </p>
          <p className="legal__todo">
            {de
              ? 'Die konkret eingesetzten Auftragsverarbeiter (Hosting, E-Mail-Versand) sind vor Veröffentlichung namentlich zu benennen.'
              : 'The specific processors used (hosting, email delivery) must be named here before publication.'}
          </p>

          <h2>{de ? '4. Ihre Rechte' : '4. Your rights'}</h2>
          <ul>
            <li>{de ? 'Auskunft über die verarbeiteten Daten (Art. 15)' : 'Access to the data processed (Art. 15)'}</li>
            <li>{de ? 'Berichtigung unrichtiger Daten (Art. 16)' : 'Rectification of inaccurate data (Art. 16)'}</li>
            <li>{de ? 'Löschung (Art. 17)' : 'Erasure (Art. 17)'}</li>
            <li>{de ? 'Einschränkung der Verarbeitung (Art. 18)' : 'Restriction of processing (Art. 18)'}</li>
            <li>{de ? 'Datenübertragbarkeit (Art. 20)' : 'Data portability (Art. 20)'}</li>
            <li>{de ? 'Widerspruch gegen die Verarbeitung (Art. 21)' : 'Objection to processing (Art. 21)'}</li>
          </ul>
          <p>
            {de
              ? 'Zur Ausübung dieser Rechte genügt eine Nachricht an '
              : 'To exercise these rights, a message to '}
            <a href="mailto:info@zebrold.de">info@zebrold.de</a>
            {de
              ? '. Unabhängig davon steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.'
              : ' is sufficient. You also have the right to lodge a complaint with a data protection supervisory authority.'}
          </p>

          <h2>{de ? '5. Änderungen dieser Erklärung' : '5. Changes to this statement'}</h2>
          <p>
            {de
              ? 'Wir passen diese Datenschutzerklärung an, wenn sich die Verarbeitung oder die Rechtslage ändert. Die jeweils aktuelle Fassung ist auf dieser Seite abrufbar.'
              : 'We update this privacy statement when our processing or the legal position changes. The current version is always available on this page.'}
          </p>
        </div>
      </div>
    </div>
  );
}
