import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Check,
  Sparkles,
  BarChart3,
  LineChart,
  Shield,
  Target,
  Clock,
  DollarSign,
  Percent,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <a href="#home">
            <span className="text-xl font-semibold text-gray-900">Klix.ai</span>
            </a>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#approach" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors text-center">
              Aanpak
            </a>
            <a href="#comparison" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Vergelijking
            </a>
          </nav>
          <a href="#contact">
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-5">Start nu</Button>
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 md:py-40 relative overflow-hidden" id="home">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          </div>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <Badge className="mb-6 px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-50 rounded-full">
                AI-Powered Marketing
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
                Het beste product moet <span className="text-blue-600">opvallen</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl mb-8">
                Niet het grootste advertentiebudget. Klix.ai verbetert je product zichtbaarheid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-12">
                    Direct starten
                  </Button>
                </a>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Learn More
                </Button> */}
              </div>
              <p className="text-sm text-gray-500">2 weken gratis. Geen registratie nodig.</p>
              
              {/* YouTube Video Embed */}
              <div className="mt-12 w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2_UPlgvJf20?si=T_fYlQOBvwWDresB" 
                  title="Klix.ai Promotional Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center mb-20">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">No cure, no pay</h2>
                <p className="text-xl text-gray-500">
                  Scoort je product niet beter zoals beloofd? Dan betaal je niet. Zo simpel is het. Wij nemen het risico, jij krijgt de resultaten.
                </p>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Wat is Klix.ai?</h2>
              <p className="text-xl text-gray-500 mb-8">
                Wij zijn de slimme, schaalbare oplossing die jouw product hoger in online platformen brengt. In plaats van telkens te betalen voor dure advertenties, bieden wij één helder maandtarief.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <Check className="h-5 w-5" />
                <span>Betaal alleen voor groei. Geen resultaat? Geen kosten.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Waar we voor staan</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Onze kernwaarden vormen de basis van jouw succes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eenvoud</h3>
                <p className="text-gray-500">Wij doen het werk, u ziet de resultaten.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Efficiëntie</h3>
                <p className="text-gray-500">Maximum zichtbaarheid met minimale inspanning.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transparantie</h3>
                <p className="text-gray-500">Een maandtarief, zonder verborgen kosten of onverwachte stijgingen.</p>
              </div>
            </div>

            <div className="mt-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Wat willen we bereiken?</h2>
              <p className="text-xl text-gray-500">
                Wij willen dat jij meer verkoopt én meer marge overhoudt. Terwijl traditionele advertenties kunnen oplopen in kosten, zorgt Klix.ai voor een duurzame, blijvende positie hoger in de ranking. Geen resultaat? Geen betaling.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Vergelijking</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
               Bekijk hoe onze aanpak zich verhoudt tot traditionele reclamemethoden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Klix.ai</h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Kosten</span>
                      <span className="font-medium text-blue-600">Vast en kan dalen</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Risico</span>
                      <span className="font-medium text-blue-600">Alleen bij succes</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Duurzaamheid</span>
                      <span className="font-medium text-blue-600">Blijvende resultaten</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">ROI</span>
                      <span className="font-medium text-blue-600">Gegarandeerd</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[100%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Traditionele advertenties</h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Kosten</span>
                      <span className="font-medium text-gray-500">Hoog en doorlopend</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[35%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Risico</span>
                      <span className="font-medium text-gray-500">Altijd betalen</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[25%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Duurzaamheid</span>
                      <span className="font-medium text-gray-500">Korte termijn</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[30%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">ROI</span>
                      <span className="font-medium text-gray-500">Onvoorspelbaar</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Belangrijkste verschillen</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Voorspelbare kosten</h4>
                  <p className="text-gray-500">
                    Eén duidelijke prijs, die kan dalen naarmate jouw resultaten stijgen.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <LineChart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Duurzame groei</h4>
                  <p className="text-gray-500">Blijvende resultaten die zichzelf voortzetten zelfs na het stoppen met betalen</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Geen risico</h4>
                  <p className="text-gray-500">Geen resultaat? Geen betaling. Wij slagen alleen als u slaagt.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Onze aanpak</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Een eenvoudige, effectieve proces ontworpen om jouw resultaten te maximaliseren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategische begeleiding</h3>
                <p className="text-gray-500">
                  Via een persoonlijke meeting of videocall kijken we samen naar je productprestaties.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tussentijdse evaluatie</h3>
                <p className="text-gray-500">
                  In de eerste maand, evalueren we de resultaten na twee weken. Geen groei? Geen betaling.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vaste maandprijs</h3>
                <p className="text-gray-500">Eén duidelijke prijs, die kan dalen naarmate jouw resultaten stijgen.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Percent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bespaar tot 10x</h3>
                <p className="text-gray-500">
                  Dankzij onze methode profiteer je van meer zichtbaarheid zonder de hoge kosten van traditionele advertenties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Onze technologie</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Aangedreven door geavanceerde AI- en machine learning-algoritmen om de zichtbaarheid van uw product te optimaliseren.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI-Powered SEO</h3>
                <p className="text-gray-500 mb-6">
                  Onze slimme algoritmes bouwen actief hoogwaardige backlinks op om je zoekresultaten te verbeteren. Hierdoor stijgt uw positie in de ranking.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sneller en effectiever dan uw concurrenten</h3>
                <p className="text-gray-500 mb-6">
                  Door continue optimalisatie en toepassing van de nieuwste SEO-strategieën, blijf je de markt voor.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inzicht in resultaten</h3>
                <p className="text-gray-500 mb-6">
                  Alle prestaties kunt u zelf in uw verkoop account inzien. Wij analyseren, sturen bij en zorgen voor groei.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm col-span-1 md:col-span-3">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hoe onze algoritme werkt</h3>
                    <ol className="space-y-6">
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          1
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Data Collection</p>
                          <p className="text-gray-500">
                            We verzamelen data en analyseren de huidige positie van uw product.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          2
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Patroonherkenning</p>
                          <p className="text-gray-500">Onze AI identificeert patronen en mogelijkheden voor optimalisatie</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          3
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Strategie implementatie</p>
                          <p className="text-gray-500">We implementeren doelgerichte strategieën om uw product zichtbaarheid te verbeteren</p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          4
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">Continue optimalisatie</p>
                          <p className="text-gray-500">We blijven onze aanpak aanpassen op basis van data en de laatste trends</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
                    <div className="relative w-full max-w-[400px] aspect-square">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[70%] h-[70%] rounded-full border-2 border-blue-200 animate-[spin_20s_linear_infinite]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[55%] h-[55%] rounded-full border-2 border-blue-300 animate-[spin_15s_linear_infinite_reverse]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[35%] h-[35%] rounded-full border-2 border-blue-400 animate-[spin_10s_linear_infinite]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[15%] h-[15%] rounded-full bg-blue-600 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24" id="contact">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Klaar om uw marketingbudget te verminderen?</h2>
            <div className="container max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Neem contact met ons op</h2>
              <p className="text-xl text-gray-500 mb-8">
                We zouden graag van u horen! Vul het formulier hieronder in.
              </p>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="ad9e0091-7e96-4771-ad68-11c1cb13a14e"/>
                <input
                  type="text"
                  name="name"
                  placeholder="Naam"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white "
                />
                <textarea
                  name="message"
                  placeholder="Bericht"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white "
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                >
                  Verzenden
                </button>
              </form>
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
                2907 JG  Capelle aan den IJssel
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
                <Link href="/terms-conditions" className="block text-gray-400 hover:text-white transition-colors">
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
  )
}

