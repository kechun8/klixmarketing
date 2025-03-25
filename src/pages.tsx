import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ArrowRight,
  Sparkles,
  BarChart3,
  LineChart,
  Shield,
  Target,
  Clock,
  DollarSign,
  Percent,
} from "lucide-react"
import { KlixLogo } from "@/components/logo"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <KlixLogo />
            <span className="text-xl font-semibold text-gray-900">Klix.ai</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#approach" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Approach
            </a>
            <a href="#comparison" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Comparison
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-5">Start Now</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-32 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          </div>
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <Badge className="mb-6 px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-50 rounded-full">
                AI-Powered Marketing
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
                The best product should <span className="text-blue-600">stand out</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-3xl mb-8">
                Not the biggest ad budget. Klix.ai helps your product get the visibility it deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-12">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Learn More
                </Button>
              </div>
              <p className="text-sm text-gray-500">2 weeks free. No registration required.</p>
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
                  If your product doesn&apos;t perform better as promised, you don&apos;t pay. It&apos;s that simple. We take the risk,
                  you get the results.
                </p>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">What is Klix.ai?</h2>
              <p className="text-xl text-gray-500 mb-8">
                We&apos;re the smart, scalable solution that elevates your product in online platforms. Instead of constantly
                paying for expensive ads, we offer one clear monthly fee.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 font-medium">
                <Check className="h-5 w-5" />
                <span>Only pay for growth. No results? No costs.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">What we stand for</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Our core values guide everything we do to ensure your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Simplicity</h3>
                <p className="text-gray-500">Like a clean design: immediately understandable and usable.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Efficiency</h3>
                <p className="text-gray-500">Maximum visibility with minimal effort.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-500">One monthly fee, without hidden costs or unexpected increases.</p>
              </div>
            </div>

            <div className="mt-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">What we aim to achieve</h2>
              <p className="text-xl text-gray-500">
                We want you to sell more and retain more margin. While traditional ads can escalate in costs, Klix.ai
                ensures a sustainable, lasting position higher in the rankings. No results? No payment.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">The Klix.ai difference</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                See how our approach compares to traditional advertising methods.
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
                      <span className="text-gray-500">Cost Structure</span>
                      <span className="font-medium text-blue-600">Fixed & Decreasing</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Risk Level</span>
                      <span className="font-medium text-blue-600">Minimal</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Long-term Value</span>
                      <span className="font-medium text-blue-600">Excellent</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-blue-600 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">ROI</span>
                      <span className="font-medium text-blue-600">Guaranteed</span>
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
                  <h3 className="text-2xl font-semibold text-gray-900">Traditional Ads</h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Cost Structure</span>
                      <span className="font-medium text-gray-500">High & Increasing</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[35%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Risk Level</span>
                      <span className="font-medium text-gray-500">High</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[25%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">Long-term Value</span>
                      <span className="font-medium text-gray-500">Poor</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[30%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500">ROI</span>
                      <span className="font-medium text-gray-500">Unpredictable</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Key Differentiators</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Predictable Costs</h4>
                  <p className="text-gray-500">
                    Fixed monthly fee that can decrease over time as your performance improves
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <LineChart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Growth</h4>
                  <p className="text-gray-500">Long-lasting results that continue even after you stop paying</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Zero Risk</h4>
                  <p className="text-gray-500">No results? No payment. We only succeed when you succeed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-24">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                A simple, effective process designed to maximize your results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Guidance</h3>
                <p className="text-gray-500">
                  Through a personal meeting or video call, we&apos;ll analyze your product performance together.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interim Check</h3>
                <p className="text-gray-500">
                  In the first month, we evaluate after two weeks. No growth? You pay nothing.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fixed Monthly Fee</h3>
                <p className="text-gray-500">One clear price that can decrease as your results improve.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Percent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Save up to 10x</h3>
                <p className="text-gray-500">
                  Thanks to our method, you benefit from more visibility without the high costs of traditional ads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Technology</h2>
              <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                Powered by cutting-edge AI and machine learning algorithms to optimize your product visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI-Powered Analytics</h3>
                <p className="text-gray-500 mb-6">
                  Our algorithms analyze market trends and consumer behavior in real-time to optimize your product
                  positioning.
                </p>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-blue-600 rounded-full"></div>
                </div>
                <div className="mt-2 text-sm text-right text-gray-500">85% more effective</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Predictive Modeling</h3>
                <p className="text-gray-500 mb-6">
                  Forecast market changes and adapt your strategy before your competitors even notice the shift.
                </p>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[92%] bg-blue-600 rounded-full"></div>
                </div>
                <div className="mt-2 text-sm text-right text-gray-500">92% accuracy rate</div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real-time Dashboard</h3>
                <p className="text-gray-500 mb-6">
                  Monitor your performance metrics with our intuitive dashboard that updates in real-time.
                </p>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[99%] bg-blue-600 rounded-full"></div>
                </div>
                <div className="mt-2 text-sm text-right text-gray-500">99.9% uptime</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">How Our Algorithm Works</h3>
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Data Collection</p>
                        <p className="text-gray-500">
                          We gather market data and analyze your product&apos;s current position
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Pattern Recognition</p>
                        <p className="text-gray-500">Our AI identifies patterns and opportunities for optimization</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Strategy Implementation</p>
                        <p className="text-gray-500">We implement targeted strategies to improve visibility</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-1">Continuous Optimization</p>
                        <p className="text-gray-500">We constantly refine our approach based on performance data</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-[300px] aspect-square">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[80%] h-[80%] rounded-full border-[1px] border-blue-200 animate-[spin_20s_linear_infinite]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[60%] h-[60%] rounded-full border-[1px] border-blue-300 animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[40%] h-[40%] rounded-full border-[1px] border-blue-400 animate-[spin_10s_linear_infinite]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[20%] h-[20%] rounded-full bg-blue-600 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Ready to reduce your marketing budget?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
              Let us put your product in the spotlight it deserves.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 h-12">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">2 weeks free. No registration required.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <KlixLogo className="w-8 h-8" />
                <h4 className="text-white font-semibold text-lg">Klix.ai</h4>
              </div>
              <p className="text-gray-400">
                Prinsengracht 123
                <br />
                1015 KD Amsterdam
              </p>
              <p className="text-gray-400 mt-2">
                KVK: 87654321
                <br />
                BTW: NL862611173B01
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">020 - 123 45 67</p>
              <p className="text-gray-400">info@klix.ai</p>
              <p className="text-gray-400 mt-2">Mon-Fri: 09:00 - 17:30</p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Klix.ai B.V. - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

