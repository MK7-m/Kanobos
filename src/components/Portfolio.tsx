import { ExternalLink, Clock, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase, PortfolioItem } from '../lib/supabase';

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .order('display_order', { ascending: true })
        .limit(6);

      if (error) throw error;
      if (data) setPortfolioItems(data);
    } catch (error) {
      console.error('Error loading portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const mockPortfolio: PortfolioItem[] = [
    {
      project_name: 'TechStart Solutions',
      client_name: 'Sarah M.',
      industry: 'Technology Consulting',
      description: 'Modern consulting website with client portal, service showcase, and booking system.',
      completion_time_hours: 46,
      features: ['Custom Design', 'Client Portal', 'Online Booking', 'Blog'],
      testimonial: 'Our new website has generated 3x more leads in the first month. The 48-hour turnaround was incredible!',
      metrics: { leads_increase: '300%', traffic_increase: '450%', conversion_rate: '12%' },
      display_order: 1,
      is_featured: true
    },
    {
      project_name: 'Green Leaf Wellness',
      client_name: 'Michael R.',
      industry: 'Health & Wellness',
      description: 'Calming, professional website for a wellness center with appointment scheduling.',
      completion_time_hours: 44,
      features: ['Appointment System', 'Service Catalog', 'Testimonials', 'Contact Forms'],
      testimonial: 'The website perfectly captures our brand. Patients love the easy booking system!',
      metrics: { bookings_increase: '85%', mobile_traffic: '65%' },
      display_order: 2,
      is_featured: true
    },
    {
      project_name: 'Urban Eats Restaurant',
      client_name: 'Jessica L.',
      industry: 'Food & Beverage',
      description: 'Mouth-watering restaurant website with online ordering and menu showcase.',
      completion_time_hours: 47,
      features: ['Online Ordering', 'Interactive Menu', 'Reservation System', 'Gallery'],
      testimonial: 'Online orders doubled within two weeks. The design is stunning!',
      metrics: { online_orders: '+120%', reservations: '+95%' },
      display_order: 3,
      is_featured: false
    },
    {
      project_name: 'Precision Law Group',
      client_name: 'David K.',
      industry: 'Legal Services',
      description: 'Professional law firm website with practice areas, attorney profiles, and consultation booking.',
      completion_time_hours: 48,
      features: ['Attorney Profiles', 'Case Studies', 'Consultation Booking', 'Resource Library'],
      testimonial: 'We now have a website that matches our reputation. Client inquiries increased significantly.',
      metrics: { inquiries: '+180%', consultation_bookings: '+145%' },
      display_order: 4,
      is_featured: false
    },
    {
      project_name: 'BuildRight Construction',
      client_name: 'Tom A.',
      industry: 'Construction',
      description: 'Bold construction company website showcasing projects and services.',
      completion_time_hours: 45,
      features: ['Project Gallery', 'Quote Request', 'Service Pages', 'Testimonials'],
      testimonial: 'The portfolio showcase has helped us close bigger projects. Worth every penny!',
      metrics: { quote_requests: '+210%', avg_project_value: '+35%' },
      display_order: 5,
      is_featured: false
    },
    {
      project_name: 'Bright Minds Academy',
      client_name: 'Emma S.',
      industry: 'Education',
      description: 'Engaging educational website with course catalog and student enrollment.',
      completion_time_hours: 43,
      features: ['Course Catalog', 'Student Portal', 'Enrollment Forms', 'Blog'],
      testimonial: 'Enrollment has never been easier. Parents love how simple it is to navigate!',
      metrics: { enrollments: '+165%', parent_satisfaction: '96%' },
      display_order: 6,
      is_featured: false
    }
  ];

  const displayItems = portfolioItems.length > 0 ? portfolioItems : mockPortfolio;

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how we've helped businesses like yours establish a powerful online presence in just 48 hours.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayItems.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-emerald-400 hover:shadow-emerald-500/20"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-bold opacity-20">{item.project_name.charAt(0)}</div>
                    </div>
                  </div>
                  {item.is_featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{item.completion_time_hours} hours</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                        {item.project_name}
                      </h3>
                      <p className="text-sm text-slate-400">{item.industry}</p>
                    </div>
                    {item.website_url && (
                      <a
                        href={item.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full border border-slate-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {item.metrics && (
                    <div className="border-t border-slate-700 pt-4 mb-4">
                      <div className="flex items-center gap-4 text-sm">
                        {Object.entries(item.metrics).slice(0, 2).map(([key, value], idx) => (
                          <div key={idx} className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                            <span className="font-semibold text-emerald-400">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.testimonial && (
                    <div className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-emerald-400">
                      <p className="text-sm text-slate-300 italic mb-2">"{item.testimonial}"</p>
                      <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {item.client_name}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-emerald-500/30">
            <h3 className="text-2xl font-bold text-white mb-3">Your Success Story Starts Here</h3>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Join hundreds of businesses that have transformed their online presence in just 48 hours.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
