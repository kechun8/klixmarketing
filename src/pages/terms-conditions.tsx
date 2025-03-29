import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <span className="text-xl font-semibold text-gray-900">Klix.ai</span>
            </Link>
          </div>
          <Link href="/">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Terug naar home
            </button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-semibold text-gray-900 mb-4">Algemene Voorwaarden Klix Marketing</h1>
              <p className="text-gray-500">Versiedatum: 28-03-2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten van Klix Marketing (hierna &quot;Klix.ai&quot; of &quot;wij&quot;), handelend onder de productnaam Klix.ai, gevestigd te Rigoletto 253 Capelle aan den IJssel 2907 JG, ingeschreven bij de Kamer van Koophandel onder nummer 96245719. Door gebruik te maken van onze diensten of een overeenkomst met ons te sluiten, ga je akkoord met deze voorwaarden.
              </p>

              {/* Section 1 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">1. Diensten en Werkwijze</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1.1 Softwareoplossing voor marketplaces</h3>
                  <p className="text-gray-600">
                    Klix.ai is een softwareoplossing van Klix Marketing, gericht op het vergroten van de zichtbaarheid van verkooppagina&lsquo;s op diverse online marketplaces. Het doel is dat jouw producten sneller gevonden worden door de juiste doelgroep, wat leidt tot meer bezoekers en hogere verkoopcijfers.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1.2 Gerichte promotie en relevante verwijzingen</h3>
                  <p className="text-gray-600">
                    Onze werkwijze omvat onder meer het creëren en plaatsen van koppelingen op externe bronnen, zodat jouw verkooppagina&lsquo;s op een natuurlijke en waardevolle manier onder de aandacht komen. Deze strategie is datagedreven: we volgen continu de prestaties en sturen direct bij als dat nodig is.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1.3 Schaalbaar en duurzaam</h3>
                  <p className="text-gray-600">
                    Klix.ai richt zich op lange termijnresultaten. Wanneer blijkt dat een bepaalde aanpak succesvol is, kunnen we deze verder uitbreiden voor nóg meer bereik. Wij geloven in een veilige, transparante en resultaatgerichte werkwijze, zodat je kunt rekenen op duurzame groei in zichtbaarheid en omzet.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1.4 Geen garanties, wel inspanning</h3>
                  <p className="text-gray-600">
                    Wij zetten ons volledig in om de zichtbaarheid en prestaties van je verkooppagina&lsquo;s te verbeteren, maar kunnen geen absolute garantie geven op specifieke posities of zoekresultaten, aangezien marketplace-algoritmes en andere factoren buiten onze controle vallen. We verlenen daarom een inspanningsverplichting en geen resultaatsverplichting.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">2. Offertes en Overeenkomsten</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Offertes en geldigheidsduur</h3>
                  <p className="text-gray-600">
                    Alle offertes van Klix Marketing (in het kader van Klix.ai) zijn vrijblijvend en hebben, tenzij anders vermeld, een geldigheid van 30 dagen. Een offerte vervalt automatisch na die termijn. Je kunt een offerte schriftelijk of elektronisch accepteren, waarna Klix een bevestiging stuurt. Pas op dat moment komt een overeenkomst tot stand.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Wijzigingen</h3>
                  <p className="text-gray-600">
                    Wil je tijdens de looptijd van de overeenkomst de opdracht of omvang wijzigen? Dan bespreken we eerst de gevolgen voor prijs, planning of resultaten. Een wijziging is pas bindend als beide partijen deze schriftelijk zijn overeengekomen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3 Looptijd en opzegtermijn</h3>
                  <p className="text-gray-600">
                    Tenzij anders is overeengekomen, wordt een overeenkomst aangegaan voor onbepaalde tijd. Je kunt de samenwerking maandelijks beëindigen, met een opzegtermijn van één maand. Opzegging dient schriftelijk (per e-mail volstaat) te gebeuren.
                  </p>
                </div>
              </div>

              {/* Continue with sections 3-9 in the same format */}
              {/* Section 3 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">3. Verplichtingen van de Klant</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Aanleveren informatie</h3>
                  <p className="text-gray-600">
                    Je zorgt ervoor dat Klix tijdig beschikt over alle relevante gegevens en materialen, inclusief toegangsgegevens, statistieken of content. Zonder de juiste informatie kunnen we onze softwareoplossing en dienstverlening niet optimaal inzetten, wat de resultaten kan beïnvloeden.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Rechtmatig gebruik</h3>
                  <p className="text-gray-600">
                    Alle teksten, afbeeldingen, logo&lsquo;s en andere materialen die je aan Klix verstrekt, moeten rechtmatig verkregen zijn (dus geen inbreuk op auteurs- of merkrechten). Je vrijwaart Klix van mogelijke aanspraken van derden die betrekking hebben op het door jou aangeleverde materiaal.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Feedback en samenwerking</h3>
                  <p className="text-gray-600">
                    We werken graag nauw met je samen. Het is belangrijk dat je eventuele feedback of goedkeuring op tijd geeft, zodat we onze werkzaamheden niet hoeven te onderbreken. Vlotte communicatie leidt doorgaans tot de beste resultaten.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">4. Tarieven en Betaling</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Vast tarief of pakketprijs</h3>
                  <p className="text-gray-600">
                    Onze diensten worden doorgaans aangeboden tegen een vast tarief per maand, tenzij we een project- of pakketprijs zijn overeengekomen. Alle tarieven zijn exclusief btw, tenzij anders vermeld.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Facturatie en betaling</h3>
                  <p className="text-gray-600">
                    Klix stuurt de factuur elektronisch, meestal op maandelijkse basis. De betalingstermijn is 14 dagen na de factuurdatum, tenzij schriftelijk anders afgesproken.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3 Niet tijdige betaling</h3>
                  <p className="text-gray-600">
                    Blijft betaling uit na de vervaldatum, dan ontvang je eerst een herinnering. Als er vervolgens nog niet is betaald, kan Klix wettelijke rente en incassokosten in rekening brengen. Ook kunnen we de dienstverlening tijdelijk opschorten of de overeenkomst beëindigen bij stelselmatige wanbetaling.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4.4 Prijswijzigingen</h3>
                  <p className="text-gray-600">
                    Klix mag zijn tarieven periodiek aanpassen (bijvoorbeeld bij inflatie of veranderende marktomstandigheden). We informeren je ten minste 30 dagen van tevoren. Als je het niet eens bent met de nieuwe tarieven, kun je de overeenkomst binnen de opzegtermijn beëindigen.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">5. Aansprakelijkheid</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Inspanningsverplichting</h3>
                  <p className="text-gray-600">
                    Klix zal zich altijd inspannen om de overeengekomen diensten volgens de laatste inzichten en best practices uit te voeren. We kunnen echter geen garantie geven op specifieke rankingposities of absolute verkeerscijfers, gezien externe factoren en algoritmes van marketplaces.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 Beperking van aansprakelijkheid</h3>
                  <p className="text-gray-600">
                    Klix is niet aansprakelijk voor indirecte schade, zoals gederfde winst, omzetderving of gevolgschade. Mocht Klix om welke reden dan ook wel aansprakelijk worden gehouden voor directe schade, dan is deze aansprakelijkheid beperkt tot maximaal het bedrag dat je in de drie maanden voorafgaand aan de schadeveroorzakende gebeurtenis aan Klix hebt betaald.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5.3 Overmacht</h3>
                  <p className="text-gray-600">
                    In geval van overmacht (bijv. storingen in de infrastructuur, pandemie, overheidsmaatregelen of ingrijpende wijzigingen in marketplace-algoritmes) kan Klix zijn verplichtingen geheel of gedeeltelijk opschorten zolang de overmacht voortduurt. Wij zijn in zo&lsquo;n situatie niet schadeplichtig.
                  </p>
                </div>
              </div>

              {/* Remaining sections */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">6. Vertrouwelijkheid en Privacy</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1 Vertrouwelijke informatie</h3>
                  <p className="text-gray-600">
                    Zowel Klix als jij gaan vertrouwelijk om met elkaars bedrijfs- en persoonsgegevens. Gevoelige informatie, zoals inloggegevens en interne cijfers, wordt niet met derden gedeeld, tenzij dit nodig is voor het uitvoeren van de opdracht en er expliciete toestemming is gegeven.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2 Privacy en data</h3>
                  <p className="text-gray-600">
                    Als wij toegang krijgen tot persoonsgegevens (bijvoorbeeld van jouw klanten of leads), dan behandelen we die volgens de geldende privacywetgeving. We nemen passende maatregelen om deze data te beveiligen en gebruiken ze alleen voor de afgesproken doeleinden. Zie onze aparte Privacyverklaring op klixmarketing.nl voor meer details.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">7. Beëindiging</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">7.1 Opzegging</h3>
                  <p className="text-gray-600">
                    Beide partijen kunnen de overeenkomst na de eventuele minimumduur maandelijks opzeggen, met inachtneming van een opzegtermijn van één maand. Dit kan schriftelijk, bijvoorbeeld per e-mail. Eventuele openstaande facturen blijven uiteraard verschuldigd.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">7.2 Directe beëindiging</h3>
                  <p className="text-gray-600">
                    In geval van een ernstige tekortkoming die niet binnen een redelijke termijn wordt hersteld na een schriftelijke ingebrekestelling, mag de andere partij de overeenkomst direct beëindigen. Bij faillissement of surseance van betaling van de klant kan Klix de overeenkomst per direct opzeggen of opschorten.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">8. Toepasselijk Recht en Geschillen</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">8.1 Nederlands recht</h3>
                  <p className="text-gray-600">
                    Op alle rechtsverhoudingen met Klix is Nederlands recht van toepassing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">8.2 Geschillenbeslechting</h3>
                  <p className="text-gray-600">
                    Eventuele geschillen proberen we eerst in goed overleg op te lossen. Lukt dat niet, dan leggen we het voor aan de bevoegde rechter in het arrondissement waar Klix is gevestigd.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">9. Slotbepalingen</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">9.1 Wijzigingen in deze voorwaarden</h3>
                  <p className="text-gray-600">
                    Klix kan deze algemene voorwaarden wijzigen. We kondigen wijzigingen ruim voor inwerkingtreding aan. Als je het niet eens bent met de aangepaste voorwaarden, kun je de overeenkomst opzeggen met inachtneming van de gebruikelijke opzegtermijn.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">9.2 Scheiding van bepalingen</h3>
                  <p className="text-gray-600">
                    Als een bepaling in deze voorwaarden ongeldig of niet-afdwingbaar blijkt, blijven de overige bepalingen volledig van kracht. We vervangen de ongeldige bepaling door een geldige bepaling die de bedoeling zoveel mogelijk benadert.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contactinformatie</h2>
                <p className="text-gray-600">Klix Marketing (Handelend onder de productnaam Klix.ai)</p>
                <p className="text-gray-600">Adres: Rigoletto 253, 2907 JG Capelle aan den IJssel</p>
                <p className="text-gray-600">KvK: 96245719</p>
                <p className="text-gray-600">E-mail: info@klixmarketing.nl</p>
                <p className="text-gray-600">Website: <a href="https://www.klixmarketing.nl" className="text-blue-600 hover:underline">https://www.klixmarketing.nl</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h4 className="text-white font-semibold text-lg">Klix.ai</h4>
              </div>
              <p className="text-gray-400">
                Rigoletto 253
                <br />
                2907 JG Capelle aan den IJssel
              </p>
              <p className="text-gray-400 mt-2">
                KVK: 96245719
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">Telefoon: +31 6 44337743</p>
              <p className="text-gray-400">Email: info@klixmarketing.nl</p>
              <p className="text-gray-400 mt-2">Mon-Fri: 09:00 - 17:30</p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Links</h4>
              <div className="space-y-2">
                <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Klix.ai - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}