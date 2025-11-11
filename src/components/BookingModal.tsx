import { X } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import CalendarPicker from './CalendarPicker';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const detectTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      if (!selectedDate || !selectedTime) {
        throw new Error('Please select a date and time');
      }

      const appointmentData = {
        name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        appointment_date: selectedDate,
        appointment_time: selectedTime,
        duration_minutes: 30,
        status: 'pending',
        notes: formData.notes || null
      };

      const { error: appointmentError } = await supabase
        .from('appointments')
        .insert(appointmentData);

      if (appointmentError) throw appointmentError;

      const leadData = {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        source: 'booking_calendar'
      };

      await supabase.from('leads').insert(leadData);

      try {
        const emailApiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-booking-email`;
        const emailResponse = await fetch(emailApiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.full_name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            appointment_date: selectedDate,
            appointment_time: selectedTime,
            notes: formData.notes
          })
        });

        const emailResult = await emailResponse.json();
        console.log('Email send result:', emailResult);

        if (!emailResponse.ok) {
          console.error('Email sending failed:', emailResult);
        }
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          company: '',
          notes: ''
        });
        setSelectedDate(null);
        setSelectedTime(null);
      }, 3000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    if (time) {
      setSelectedTime(time);
    }
  };

  const formatTimeDisplay = (time24: string): string => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl shadow-2xl border-2 border-slate-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">Book Your Free Strategy Call</h2>
            <p className="text-emerald-50 text-sm">30 minutes to discuss your website vision</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
              <p className="text-slate-300">
                We've sent a confirmation email to {formData.email}. Looking forward to speaking with you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors text-white placeholder:text-slate-500"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <CalendarPicker
                  onSelectDateTime={handleDateTimeSelect}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
              </div>

              {selectedDate && selectedTime && (
                <div className="bg-emerald-900/30 border-2 border-emerald-500/50 text-emerald-300 px-4 py-3 rounded-lg">
                  <p className="font-semibold">Selected: {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {formatTimeDisplay(selectedTime)}</p>
                  <p className="text-sm mt-1">Timezone: {detectTimezone()}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  What would you like to discuss?
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none text-white placeholder:text-slate-500"
                  placeholder="Tell us about your business and website goals..."
                />
              </div>

              {error && (
                <div className="bg-red-900/30 border-2 border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !selectedDate || !selectedTime}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {isSubmitting ? 'Booking...' : selectedDate && selectedTime ? 'Confirm Booking' : 'Select Date & Time to Continue'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
