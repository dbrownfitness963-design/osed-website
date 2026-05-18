import { useState } from 'react'
import { Mail, Instagram, Smartphone, Youtube } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    struggles: '',
    experience: '',
    commitment: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white section-padding">
        <div className="container-custom">
          <h1 className="text-5xl font-bold mb-4">Apply for Coaching</h1>
          <p className="text-xl text-gray-300">
            Let's talk about your goals and see if OSED is the right fit.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-bold">
                  ✓ Application received! We'll be in touch within 24-48 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="your@email.com"
                />
              </div>

              {/* Goal */}
              <div>
                <label className="block text-sm font-bold mb-2">What's Your Primary Goal? *</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select a goal</option>
                  <option value="fat-loss">Fat Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="strength">Strength</option>
                  <option value="general-health">General Health & Fitness</option>
                  <option value="athletic">Athletic Performance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Struggles */}
              <div>
                <label className="block text-sm font-bold mb-2">What's Your Biggest Struggle? *</label>
                <textarea
                  name="struggles"
                  value={formData.struggles}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="What's preventing you from achieving your goal?"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-bold mb-2">Fitness Experience Level *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select level</option>
                  <option value="beginner">Beginner (0-1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="competitive">Competitive</option>
                </select>
              </div>

              {/* Commitment */}
              <div>
                <label className="block text-sm font-bold mb-2">How Committed Are You? *</label>
                <select
                  name="commitment"
                  value={formData.commitment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select commitment level</option>
                  <option value="exploring">Just exploring</option>
                  <option value="somewhat">Somewhat committed</option>
                  <option value="very">Very committed</option>
                  <option value="all-in">All-in, ready to start</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold mb-2">Anything Else We Should Know?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Tell us more about yourself..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-primary-red"
              >
                Submit Application
              </button>

              <p className="text-xs text-gray-500 text-center">
                We'll review your application and be in touch within 24-48 hours. We're selective about who we work with—we want to ensure we're the right fit for your goals.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={24} />
                <h3 className="text-xl font-bold">Email</h3>
              </div>
              <a href="mailto:dbrownfitness963@gmail.com" className="text-black hover:underline">
                dbrownfitness963@gmail.com
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Response within 24 hours
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gray-600 transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-600 transition">
                  <Smartphone size={24} />
                </a>
                <a href="#" className="hover:text-gray-600 transition">
                  <Youtube size={24} />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Follow for content, tips, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">What Happens Next?</h2>
          <div className="space-y-6 text-gray-700">
            <div className="border-l-4 border-black pl-6 text-left">
              <h3 className="font-bold mb-2">1. Application Review</h3>
              <p>We review your application and goals to see if we're a good fit for your journey.</p>
            </div>
            <div className="border-l-4 border-black pl-6 text-left">
              <h3 className="font-bold mb-2">2. Discovery Call</h3>
              <p>We schedule a 20-30 minute consultation to discuss your vision, address questions, and explain the OSED approach.</p>
            </div>
            <div className="border-l-4 border-black pl-6 text-left">
              <h3 className="font-bold mb-2">3. Program Design</h3>
              <p>If we're a good fit, we build your personalized program—training, nutrition, accountability structure.</p>
            </div>
            <div className="border-l-4 border-black pl-6 text-left">
              <h3 className="font-bold mb-2">4. Onboarding</h3>
              <p>Complete walkthrough of your program. You understand the why behind everything.</p>
            </div>
            <div className="border-l-4 border-black pl-6 text-left">
              <h3 className="font-bold mb-2">5. Your Transformation Begins</h3>
              <p>One step every day. Consistency. Results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready?</h2>
          <p className="text-lg text-gray-300 mb-2">
            Apply above and let's get started.
          </p>
        </div>
      </section>
    </div>
  )
}
