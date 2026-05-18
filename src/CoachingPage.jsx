import { Link } from 'react-router-dom'
import { Dumbbell, Apple, Target, BarChart3, Users, Award } from 'lucide-react'

export default function CoachingPage() {
  const services = [
    {
      icon: Dumbbell,
      title: "Personalized Workout Programming",
      description: "Custom training plans built around your goals, experience level, equipment, and schedule. Progressive overload designed for real-world consistency."
    },
    {
      icon: Apple,
      title: "Nutrition Coaching",
      description: "Practical nutrition guidance focused on sustainable eating habits, not restrictive dieting. We work with your preferences, not against them."
    },
    {
      icon: Target,
      title: "Goal Setting & Strategy",
      description: "Clear, achievable goals with a realistic roadmap. We break down big transformations into manageable steps you can actually maintain."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking & Adjustments",
      description: "Regular check-ins, progress analysis, and program adjustments based on real data. We track what matters and adapt as you progress."
    },
    {
      icon: Users,
      title: "Accountability & Support",
      description: "Weekly check-ins, coaching support, and accountability without shame. We're here to help you stay consistent when life gets hard."
    },
    {
      icon: Award,
      title: "Mindset & Habit Coaching",
      description: "Address the mental side of fitness—building discipline, managing setbacks, and creating sustainable habits that stick."
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">OSED Coaching</h1>
          <p className="text-xl text-gray-300">
            Personalized, sustainable coaching designed for real transformation.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-center">What You Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
                  <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">How OSED Coaching Works</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-3">Step 1: Application & Discovery Call</h3>
              <p className="text-gray-700">
                You apply and tell us about your goals, struggles, and commitment level. We schedule a consultation to see if we're a good fit and discuss your vision.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-3">Step 2: Program Design</h3>
              <p className="text-gray-700">
                We build your custom program—training plan, nutrition framework, and accountability structure—tailored to your life, not the other way around.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-3">Step 3: Onboarding & Education</h3>
              <p className="text-gray-700">
                Complete walkthrough of your program. We explain the why behind every recommendation so you understand the approach and can make good decisions.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-3">Step 4: Weekly Check-Ins</h3>
              <p className="text-gray-700">
                Regular communication, progress tracking, and adjustments based on data. We monitor adherence, progress, and adjustments needed.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-3">Step 5: Long-Term Transformation</h3>
              <p className="text-gray-700">
                Consistent progress, sustainable habits, and real transformation built through disciplined daily actions. This is your years-long journey, and we're here for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Expectations */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">What We Expect From You</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Commitment:</strong> Coaching works best when you're genuinely committed. We're looking for people ready to put in consistent effort, not people searching for shortcuts.
            </p>
            <p>
              <strong>Follow-Through:</strong> We'll give you a solid program. Your job is to execute it—day after day, week after week. Perfection isn't required; consistency is.
            </p>
            <p>
              <strong>Communication:</strong> Weekly check-ins matter. They keep you accountable and help us adjust based on what's actually working.
            </p>
            <p>
              <strong>Honesty:</strong> Tell us when things aren't working. Tell us when you struggled. Real coaching requires real information.
            </p>
            <p>
              <strong>Patience:</strong> Real transformation takes time. We're building sustainable systems, not looking for quick wins. Typical clients see significant progress in 12-16 weeks, but the real work is building lifetime habits.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-center">Who OSED Coaching Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold mb-4 text-green-700">Good Fit ✓</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're ready to be consistent</li>
                <li>• You want sustainable results</li>
                <li>• You're open to education</li>
                <li>• You value honesty over hype</li>
                <li>• You're committed to long-term growth</li>
                <li>• You want accountability</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold mb-4 text-red-700">Not a Fit ✗</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You want 6-week transformations</li>
                <li>• You're looking for the "best" diet</li>
                <li>• You want to avoid effort</li>
                <li>• You're not ready to commit</li>
                <li>• You don't want accountability</li>
                <li>• You're seeking magic solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">Do I need gym experience to start?</h3>
              <p className="text-gray-700">
                No. We work with all levels—complete beginners through advanced athletes. Your program is fully customized to your experience level, current fitness, available equipment, and goals. We'll teach you proper form and progression.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">Can complete beginners join?</h3>
              <p className="text-gray-700">
                Absolutely. If you've never worked out before, this is actually an ideal time to start with professional coaching. We'll build proper foundations from day one, preventing injuries and bad habits that take years to break.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">Is nutrition included in coaching?</h3>
              <p className="text-gray-700">
                Yes. Nutrition coaching is a core part of OSED. We provide practical guidance based on sustainable eating habits, your food preferences, and your lifestyle—not restrictive dieting or counting every calorie.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">How often do we check in?</h3>
              <p className="text-gray-700">
                Weekly. We have check-ins via email, messaging, or phone where we review your progress, discuss adherence, adjust the program if needed, and provide accountability. You're never alone in this.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">Do I need to count calories?</h3>
              <p className="text-gray-700">
                Not necessarily. We offer both tracking and intuitive eating approaches. Some clients benefit from understanding portion sizes initially; others do better with simple guidelines. We'll find what works best for you and your life.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">What if I have a busy schedule?</h3>
              <p className="text-gray-700">
                OSED is built for real life. Your program is customized around your schedule—whether you have 30 minutes or 90 minutes per week for training. We prioritize what matters most to your goals within the time you actually have.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">Is this sustainable long term?</h3>
              <p className="text-gray-700">
                Yes, that's the entire point. OSED isn't designed for 12 weeks of extreme effort. It's designed to build habits and systems you can maintain for years. Many clients continue past their initial commitment because it becomes part of their lifestyle.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">What if I travel or take a break?</h3>
              <p className="text-gray-700">
                We adapt. Your program can adjust for travel, injury recovery, or life changes. Flexibility is built in. Consistency means showing up 90% of the time, not 100% perfectly—life happens.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">How much does coaching cost?</h3>
              <p className="text-gray-700">
                Coaching packages vary based on your needs and the level of support you want. During your consultation, we'll discuss options, answer questions, and find a package that fits your goals and budget.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-2">What's the minimum commitment?</h3>
              <p className="text-gray-700">
                We typically recommend a minimum 12-week commitment. This gives us enough time to establish consistency, see meaningful progress, and demonstrate the OSED approach works. Many clients continue far beyond this because the results speak for themselves.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Is this a guarantee for results?</h3>
              <p className="text-gray-700">
                Nothing is guaranteed except this: if you follow the program and stay consistent, you will see results. Real transformation requires real work from you. We provide the plan, education, and accountability—you provide the consistency. That's the equation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Apply for coaching and let's discuss if OSED is right for you.
          </p>
          <Link to="/contact" className="inline-block btn-primary-red">
            Apply for Coaching
          </Link>
        </div>
      </section>
    </div>
  )
}
