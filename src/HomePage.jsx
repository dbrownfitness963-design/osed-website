import { Link } from 'react-router-dom'
import { CheckCircle, Zap, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl">
            {/* Logo & Branding */}
            <div className="mb-8 flex items-center gap-4">
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Arrow icon - upward trending */}
                <g>
                  {/* Gray diagonal stripes */}
                  <path d="M 30 60 L 50 40 L 70 20" stroke="#B0B0B0" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M 25 65 L 45 45 L 65 25" stroke="#B0B0B0" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M 35 55 L 55 35 L 75 15" stroke="#B0B0B0" strokeWidth="6" strokeLinecap="round" fill="none" />
                  {/* Red accent */}
                  <path d="M 55 35 L 65 25 L 75 35" stroke="#C41E3A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* Arrowhead */}
                  <path d="M 75 15 L 85 20 L 78 25" stroke="#B0B0B0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </svg>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">OSED</h2>
                <p className="text-lg text-gray-300">ONE STEP EVERYDAY</p>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">You're Tired of Restarting.<br/>It's Time to Build It Once.</h1>
            <p className="text-xl text-gray-300 mb-4">
              Elite fitness and nutrition coaching for people who want real, lasting transformation—not shortcuts.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Stop the cycle of motivation and burnout. OSED builds sustainable transformation through consistency, discipline, and the compound power of small daily improvements that actually last.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact" className="btn-primary-red">
                Apply for Coaching
              </Link>
              <Link to="/about" className="btn-secondary border border-gray-400">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">The Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">You've Been Here Before</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Starting and restarting the same fitness journey repeatedly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Following extreme diets that you can't sustain</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Feeling overwhelmed by conflicting fitness advice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Burning out from intense workouts and restrictive eating</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Lacking accountability and consistency</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                The fitness industry thrives on extremes. It promises transformation in 30 days with impossible methods that don't last.
              </p>
              <p className="text-gray-700 mb-4">
                The result? Burnout, frustration, and another failed attempt.
              </p>
              <p className="font-bold text-black">
                There's a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Most Fitness Plans Fail</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-8 rounded-lg border border-gray-300">
              <p className="text-lg text-gray-800 mb-4">
                The fitness industry thrives on extremes. It sells you:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>30-day transformations (impossible without destruction)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Crash diets and extreme workouts (unsustainable)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Motivation as the foundation (it always fades)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Ignoring life, relationships, and balance</span>
                </li>
              </ul>
              <p className="text-gray-800 font-semibold">
                Result: Burnout in 8 weeks. Another restart in 3 months. The cycle never ends.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center">Why OSED Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Systems > Motivation</h3>
              <p className="text-gray-600">
                We build disciplined systems that work even when motivation disappears. Your success doesn't depend on feeling inspired.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Long-Term > Quick Fixes</h3>
              <p className="text-gray-600">
                Real transformation takes time. We focus on sustainable progress that compounds into extraordinary results over years.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Life Enhancement</h3>
              <p className="text-gray-600">
                Fitness supports your life, it doesn't control it. Build habits that strengthen you without sacrificing what matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The OSED Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">The OSED Process</h2>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            How sustainable transformation actually works. This is the path we build with every client.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-l-4 border-red-600 pl-8 py-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Build Consistency</h3>
                  <p className="text-gray-700 mb-3">
                    We start by creating sustainable habits and realistic structure. Not perfection—consistency. We assess your current life, establish what you can actually maintain, and build a foundation that doesn't break.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Duration: Weeks 1-4 | Focus: Systems over sensation
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-gray-400 pl-8 py-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gray-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Create Momentum</h3>
                  <p className="text-gray-700 mb-3">
                    With consistency established, we gradually improve training quality, nutrition habits, recovery practices, and discipline. Small improvements compound. You start feeling stronger, more energetic, more capable.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Duration: Weeks 4-12 | Focus: Progressive improvement
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-black pl-8 py-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Long-Term Transformation</h3>
                  <p className="text-gray-700 mb-3">
                    Temporary motivation becomes permanent lifestyle change. Your habits are automatic. Your discipline is strong. Your results are undeniable. What once required effort is now just who you are.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Duration: Month 3+ | Focus: Mastery and lifestyle
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 rounded-lg mt-12 text-center">
            <p className="text-lg mb-2">
              "This isn't about motivation. It's about building the systems that make transformation inevitable."
            </p>
            <p className="text-gray-300">— The OSED Philosophy</p>
          </div>
        </div>
      </section>

      {/* The OSED Philosophy Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">The OSED Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Consistency Over Intensity</h3>
              <p className="text-gray-600">
                Small, sustainable actions repeated daily outperform sporadic extreme efforts.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Long-Term Thinking</h3>
              <p className="text-gray-600">
                Real transformation takes time. We focus on sustainable progress, not quick fixes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Life-Supporting Fitness</h3>
              <p className="text-gray-600">
                Fitness should support your life, not control it. Balance is everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily OSED Mindset Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">The OSED Mindset</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful daily reminders that build mental discipline and deepen your commitment to lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mindset Card 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
              <h3 className="text-2xl font-bold text-black mb-3">One Step Today</h3>
              <p className="text-gray-700">
                Progress doesn't require perfection. It requires consistency.
              </p>
            </div>

            {/* Mindset Card 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
              <h3 className="text-2xl font-bold text-black mb-3">Systems > Motivation</h3>
              <p className="text-gray-700">
                Build the systems so motivation doesn't matter.
              </p>
            </div>

            {/* Mindset Card 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
              <h3 className="text-2xl font-bold text-black mb-3">Discipline is Freedom</h3>
              <p className="text-gray-700">
                Show up even when you don't feel like it. That's when growth happens.
              </p>
            </div>

            {/* Mindset Card 4 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors">
              <h3 className="text-2xl font-bold text-black mb-3">Compound Over Time</h3>
              <p className="text-gray-700">
                Small daily actions build extraordinary results over years.
              </p>
            </div>

            {/* Mindset Card 5 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-red-600 transition-colors md:col-span-2">
              <h3 className="text-2xl font-bold text-black mb-3">Progress Over Perfection</h3>
              <p className="text-gray-700">
                Excellence is built through imperfection, repeated consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Meet Dominic Brown</h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
              <p className="text-lg text-gray-700">
                <strong>7+ years in fitness</strong> | CrossFit competition | Competitive bodybuilding | Strength training obsessive
              </p>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-2">The Turning Point</h3>
                <p className="text-gray-700">
                  I watched the fitness industry closely—from inside the gym culture, inside the misinformation, inside the extremes. I saw talented people cycle through the same pattern: intense programs, crash diets, 8 weeks of discipline, complete burnout, months of nothing, restart the cycle.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">What I Realized</h3>
                <p className="text-gray-700">
                  Consistency wasn't boring. Consistency was powerful. The people who transformed weren't the ones following the most intense programs. They were the ones who actually showed up, week after week, month after month. They rejected the extreme culture and built sustainable systems instead.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Why I Started OSED</h3>
                <p className="text-gray-700">
                  I got tired of empty promises and unsustainable methods. I wanted to build something real—coaching based on honesty, discipline, and principles that actually work long-term. OSED is my commitment to helping people get off the restart cycle forever.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded border border-gray-300">
                <p className="text-gray-800">
                  <strong>My mission:</strong> Help you achieve transformation through consistency, patience, and one step at a time. Not through shortcuts. Not through extremes. Through the power of showing up and building something that lasts.
                </p>
              </div>

              <div className="text-center">
                <Link to="/about" className="inline-block btn-primary">
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="section-padding bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-black">Start Your OSED Journey Free</h2>
              <p className="text-xl text-gray-700">
                Get instant access to our proven framework for building sustainable habits and breaking the restart cycle—no credit card required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-lg">📋</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">OSED Consistency Blueprint</h3>
                <p className="text-gray-600 text-sm">The complete system for building habits that last</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-lg">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">7-Day Momentum Kickstart</h3>
                <p className="text-gray-600 text-sm">Jump-start your transformation with daily actions</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-lg">💪</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Beginner Fitness Foundation</h3>
                <p className="text-gray-600 text-sm">Everything you need to get started, the right way</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-red-600 text-center">
              <h3 className="text-2xl font-bold text-black mb-3">Get the OSED Consistency Blueprint</h3>
              <p className="text-gray-700 mb-6">
                Join hundreds of people building real transformation. Discover the exact system we use to help clients break the restart cycle and build habits that last.
              </p>
              <Link to="/contact" className="inline-block btn-primary-red">
                Get Free Guide
              </Link>
              <p className="text-xs text-gray-500 mt-4">
                No spam. No sharing. Just real value delivered to your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join people who are building real, sustainable transformation through consistency and discipline.
          </p>
          <Link to="/contact" className="inline-block btn-primary-red">
            Apply for Coaching Today
          </Link>
        </div>
      </section>
    </div>
  )
}
