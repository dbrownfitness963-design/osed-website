import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">About OSED</h1>
          <p className="text-xl text-gray-300">
            Understanding the mission, philosophy, and commitment behind the brand.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              OSED exists to help people achieve sustainable fitness and nutrition transformation through the power of consistency, discipline, and small daily improvements.
            </p>
            <p>
              We believe in honest coaching—no shortcuts, no fake transformations, no extreme methods that don't last. Real results come from real work, applied consistently over time.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Dominic Brown - Head Coach & Founder</h2>
          <div className="space-y-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-600">
              <p className="font-bold text-gray-900 mb-2">The Story Behind OSED</p>
              <p>
                I watched the fitness industry from the inside—deeply. 7+ years through CrossFit competition, bodybuilding contests, strength training, coaching others. And I saw something that frustrated me deeply: the same broken cycle repeating for everyone.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">What I Saw</p>
              <p>
                Talented people would commit hard for 6-8 weeks. Intense workouts, strict diets, daily discipline. Results came. Then burnout hit. They'd stop. Months later, they'd restart. The same cycle. Different year. No permanent progress.
              </p>
              <p className="mt-3">
                The fitness industry profited from this cycle. Sell intensity. Sell extremes. Guarantee results "if you just follow this." People burn out. New year, new program, new promise. Repeat.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">The Turning Point</p>
              <p>
                I realized the people who actually transformed weren't following the most intense programs. They were the ones who showed up consistently. Who rejected the extreme culture. Who built sustainable systems instead of relying on motivation. Their progress was slower initially—but it compounded. And it never stopped.
              </p>
              <p className="mt-3">
                Consistency wasn't boring. Consistency was powerful.
              </p>
            </div>

            <div>
              <p className="font-bold text-gray-900 mb-2">Why I Started OSED</p>
              <p>
                I got tired of watching people fail because they were following a broken model. I wanted to build something real—coaching that respects intelligence, honors real life, and actually works long-term. Coaching based on honest principles, not hype.
              </p>
              <p className="mt-3">
                OSED was built on one simple truth: <strong>Transformation isn't about being perfect. It's about being consistent.</strong>
              </p>
            </div>

            <div className="bg-gradient-to-r from-black to-gray-900 text-white p-6 rounded-lg">
              <p className="font-bold mb-2">My Commitment to You</p>
              <p>
                Every recommendation I make is based on what actually works, what's sustainable, and what supports your life. I coach people, not transformations. I build habits that last, not programs that burn you out.
              </p>
              <p className="mt-3 text-gray-300">
                You deserve coaching that respects your time, your goals, and your journey. That's what OSED delivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Discipline</h3>
              <p className="text-gray-600">
                Discipline is the foundation of sustainable transformation. Not punishment, but the commitment to show up consistently, even when motivation fades.
              </p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                No fake transformations. No exaggerated claims. Real results, real progress, real people achieving real goals through honest work.
              </p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Fitness should enhance your life, not consume it. We build methods you can maintain for years, not crash programs that burn out.
              </p>
            </div>
            <div className="border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-3">Long-Term Thinking</h3>
              <p className="text-gray-600">
                Massive outcomes are built through small actions repeated consistently. We think in years, not weeks. Progress, not perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OSED Philosophy Deep Dive */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">The OSED Approach</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Consistency Over Intensity</h3>
              <p className="text-gray-700">
                The most intense program is worthless if you quit in 6 weeks. We focus on methods you can sustain for years. Small daily actions compound into extraordinary results—this is scientific fact and lived experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Personalization With Structure</h3>
              <p className="text-gray-700">
                Your life is unique. Your coaching should be too. We provide structured, proven methods adapted to your life, goals, preferences, and constraints—not generic programs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Progressive Overload</h3>
              <p className="text-gray-700">
                Real transformation requires progressive challenge. We gradually increase difficulty, volume, or intensity as you adapt—building capacity without burnout.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Accountability Without Shame</h3>
              <p className="text-gray-700">
                Accountability matters. But so does compassion. We hold you to your goals while understanding that life happens. Progress over perfection.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Education & Autonomy</h3>
              <p className="text-gray-700">
                I teach you the principles, not just the programs. You'll understand why you're doing what you're doing, enabling you to make good decisions independently long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With OSED?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            If this approach resonates with you, let's connect. Apply for coaching to see if we're a good fit.
          </p>
          <Link to="/contact" className="inline-block btn-primary-red">
            Apply for Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
