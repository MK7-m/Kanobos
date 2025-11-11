import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface CalendarPickerProps {
  onSelectDateTime: (date: string, time: string) => void;
  selectedDate: string | null;
  selectedTime: string | null;
}

export default function CalendarPicker({ onSelectDateTime, selectedDate, selectedTime }: CalendarPickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState<{ [key: string]: any[] }>({});
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAvailabilityData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      generateTimeSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailabilityData = async () => {
    const { data: slots } = await supabase
      .from('availability_slots')
      .select('*')
      .eq('is_active', true);

    const { data: blocked } = await supabase
      .from('blocked_dates')
      .select('blocked_date');

    if (slots) {
      const slotsByDay: { [key: string]: any[] } = {};
      slots.forEach(slot => {
        if (!slotsByDay[slot.day_of_week]) {
          slotsByDay[slot.day_of_week] = [];
        }
        slotsByDay[slot.day_of_week].push(slot);
      });
      setAvailableSlots(slotsByDay);
    }

    if (blocked) {
      setBlockedDates(blocked.map(b => b.blocked_date));
    }
  };

  const generateTimeSlots = async (dateStr: string) => {
    setLoading(true);
    const date = new Date(dateStr);
    const dayOfWeek = date.getDay();

    const slots = availableSlots[dayOfWeek] || [];
    if (slots.length === 0) {
      setTimeSlots([]);
      setLoading(false);
      return;
    }

    const { data: existingAppointments } = await supabase
      .from('appointments')
      .select('appointment_time')
      .eq('appointment_date', dateStr)
      .neq('status', 'cancelled');

    const bookedTimes = new Set(
      existingAppointments?.map(a => a.appointment_time.substring(0, 5)) || []
    );

    const allSlots: TimeSlot[] = [];
    slots.forEach(slot => {
      const start = parseTime(slot.start_time);
      const end = parseTime(slot.end_time);

      let current = start;
      while (current < end) {
        const timeStr = formatTime(current);
        allSlots.push({
          time: timeStr,
          available: !bookedTimes.has(timeStr)
        });
        current += 30 * 60 * 1000;
      }
    });

    setTimeSlots(allSlots);
    setLoading(false);
  };

  const parseTime = (timeStr: string): number => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date.getTime();
  };

  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toTimeString().slice(0, 5);
  };

  const formatTimeDisplay = (time24: string): string => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const isDateAvailable = (date: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return false;

    const dateStr = date.toISOString().split('T')[0];
    if (blockedDates.includes(dateStr)) return false;

    const dayOfWeek = date.getDay();
    return availableSlots[dayOfWeek]?.length > 0;
  };

  const handleDateClick = (date: Date) => {
    if (!isDateAvailable(date)) return;
    const dateStr = date.toISOString().split('T')[0];
    onSelectDateTime(dateStr, '');
  };

  const handleTimeClick = (time: string) => {
    if (selectedDate) {
      const slot = timeSlots.find(s => s.time === time);
      if (slot && slot.available) {
        onSelectDateTime(selectedDate, time);
      }
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-600" />
            Select Date
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              type="button"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium min-w-[140px] text-center">{monthName}</span>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              type="button"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs font-semibold text-slate-500 py-2">
              {day}
            </div>
          ))}
          {days.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const dateStr = date.toISOString().split('T')[0];
            const isAvailable = isDateAvailable(date);
            const isSelected = selectedDate === dateStr;

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleDateClick(date)}
                disabled={!isAvailable}
                className={`
                  aspect-square rounded-lg text-sm font-medium transition-all
                  ${isSelected
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : isAvailable
                      ? 'bg-slate-100 hover:bg-emerald-100 text-slate-800 hover:text-emerald-800'
                      : 'bg-slate-50 text-slate-300 cursor-not-allowed'
                  }
                `}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-600" />
            Select Time
          </h3>
          {loading ? (
            <div className="text-center py-8 text-slate-500">Loading available times...</div>
          ) : timeSlots.length === 0 ? (
            <div className="text-center py-8 text-slate-500">No available times for this date</div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleTimeClick(slot.time)}
                  disabled={!slot.available}
                  className={`
                    py-3 px-2 rounded-lg text-sm font-medium transition-all
                    ${selectedTime === slot.time
                      ? 'bg-emerald-600 text-white shadow-lg scale-105'
                      : slot.available
                        ? 'bg-slate-100 hover:bg-emerald-100 text-slate-800 hover:text-emerald-800'
                        : 'bg-slate-50 text-slate-300 cursor-not-allowed opacity-50 line-through'
                    }
                  `}
                >
                  {formatTimeDisplay(slot.time)}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
