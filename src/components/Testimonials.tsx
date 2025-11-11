import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechStart Solutions',
      company: 'Technology Consulting',
      rating: 5,
      text: 'I was skeptical about the 48-hour promise, but they delivered! Our new website has generated 3x more leads in the first month. The design is modern, professional, and perfectly captures our brand. Worth every penny.',
      results: '300% increase in leads'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, Green Leaf Wellness',
      company: 'Health & Wellness',
      rating: 5,
      text: 'The booking system they integrated has transformed how we handle appointments. Patients love how easy it is to schedule online. The website perfectly captures the calming, professional atmosphere we wanted to convey.',
      results: '85% more bookings'
    },
    {
      name: 'Jessica Thompson',
      role: 'Owner, Urban Eats Restaurant',
      company: 'Food & Beverage',
      rating: 5,
      text: 'Our online orders doubled within two weeks of launching the new site. The design is absolutely stunning - the food photography and menu layout make everything look irresistible. Best investment we\'ve made this year.',
      results: '120% increase in online orders'
    },
    {
      name: 'David Kim',
      role: 'Partner, Precision Law Group',
      company: 'Legal Services',
      rating: 5,
      text: 'We finally have a website that matches our reputation. The professional design, easy navigation, and consultation booking system have significantly increased client inquiries. The team was responsive and understood our needs perfectly.',
      results: '180% more inquiries'
    },
    {
      name: 'Tom Anderson',
      role: 'CEO, BuildRight Construction',
      company: 'Construction',
      rating: 5,
      text: 'The portfolio showcase has helped us close bigger projects. Potential clients are impressed before we even meet them. The 48-hour turnaround meant we didn\'t miss out on opportunities while waiting for a website.',
      results: '35% higher project value'
    },
    {
      name: 'Emma Sullivan',
      role: 'Director, Bright Minds Academy',
      company: 'Education',
      rating: 5,
      text: 'Enrollment has never been easier! Parents love how simple it is to navigate and find information. The student portal integration was seamless. We went from outdated to cutting-edge in just 2 days.',
      results: '165% increase in enrollments'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Business Owners Nationwide
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from real businesses that chose our 48-hour website service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <Quote className="w-10 h-10 text-cyan-400 mb-4 opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-200 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-slate-700">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-3 py-2 text-sm text-cyan-400 font-semibold">
                  {testimonial.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Hundreds of Satisfied Clients</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Your success story could be next. Let's build something amazing together.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Start Your Project Now
          </button>
        </div>
      </div>
    </section>
  );
}
