import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah M.",
      goal: "Sustainable Fat Loss & Habit Building",
      result: "Lost 25 lbs over 4 months while learning sustainable eating habits",
      quote: "I've tried so many diets and workout programs. OSED was the first time I actually stuck with something. The consistency approach made so much sense, and I never felt like I was suffering. This is real transformation.",
      duration: "4 months"
    },
    {
      name: "Marcus T.",
      goal: "Strength & Muscle Building",
      result: "Gained 15 lbs of lean muscle, increased lifts by 30%",
      quote: "Dominic holds you accountable but in a respectful way. The programming is solid, nutrition guidance is practical. Most importantly—it works without feeling like a chore.",
      duration: "6 months"
    },
    {
      name: "Jessica R.",
      goal: "Post-Pregnancy Fitness Return",
      result: "Regained strength and confidence, built sustainable routine with family life",
      quote: "As a busy mom, I needed a coach who understood that life happens. OSED adapted my program when I needed it, and I never felt guilty for missing workouts. This is sustainable.",
      duration: "5 months"
    },
    {
      name: "David L.",
      goal: "CrossFit Performance Improvement",
      result: "Improved gymnastic capacity, increased work capacity, competitive success",
      quote: "The personalization is unmatched. Dominic didn't just give me a generic program—he understood my specific weaknesses and built progressions that actually got me stronger.",
      duration: "3 months (ongoing)"
    },
    {
      name: "Emily K.",
      goal: "Confidence & Consistency",
      result: "Built 6+ month consistency streak, gained energy and confidence",
      quote: "I'm not going to say it's easy, but it's simple. The daily actions are small, sustainable, and they compound. For the first time, I actually believe this will last.",
      duration: "7 months"
    },
    {
      name: "James P.",
      goal: "Lifestyle Change for Health",
      result: "Improved sleep, energy levels, overall health markers",
      quote: "This isn't about looking good in photos. It's about feeling good, having energy, and knowing you're taking care of yourself. OSED made that possible for me.",
      duration: "4 months"
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Real Results from Real Clients</h1>
          <p className="text-xl text-gray-300">
            Transformations built through consistency, discipline, and one step every day.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-black text-black" />
                  ))}
                </div>
                
                <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-3">Goal: {testimonial.goal}</p>
                
                <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-bold text-black mb-1">Result:</p>
                  <p className="text-sm text-gray-700 mb-3">{testimonial.result}</p>
                  <p className="text-xs text-gray-500">Timeline: {testimonial.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center">What's Typical</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-3xl font-bold mb-2 text-black">4-6 Weeks</h3>
              <p className="text-gray-600">Initial adaptations, habit formation begins, energy improvements</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-3xl font-bold mb-2 text-black">8-12 Weeks</h3>
              <p className="text-gray-600">Noticeable physical changes, habit integration, momentum building</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-3xl font-bold mb-2 text-black">16+ Weeks</h3>
              <p className="text-gray-600">Significant transformation, sustainable habits locked in, confidence</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Results vary by individual, starting point, and consistency. We measure progress in multiple ways—not just scale weight or appearance. Energy, confidence, strength, consistency, and how you feel matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Why Results Happen */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Why OSED Clients Get Results</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-bold mb-2">Personalization</h3>
              <p>
                No cookie-cutter programs. Your training, nutrition, and accountability structure are built around your life, not the other way around.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Sustainability Focus</h3>
              <p>
                We build methods you can maintain for years. This means slower initial changes, but exponential long-term results that actually stick.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Accountability</h3>
              <p>
                Weekly check-ins keep you consistent when motivation fades. Consistency is where results come from—every single time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Progressive Approach</h3>
              <p>
                We gradually increase challenge as you adapt. This builds capacity, prevents injury, and keeps you engaged long-term.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p>
                You learn the why behind every recommendation. This enables you to make good decisions independently and understand your program deeply.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Real Leadership</h3>
              <p>
                Dominic coaches based on 7+ years of real experience, not certification alone. You're learning from someone who's actually done this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Your Transformation Starts Here</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join clients who are building real, sustainable transformation through consistency and discipline.
          </p>
          <Link to="/contact" className="inline-block btn-primary-red">
            Apply for Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
