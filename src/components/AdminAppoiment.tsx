import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { 
  Trash2, 
  PlusCircle, 
  ChevronDown, 
  ChevronUp, 
  Loader2,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Stethoscope,
  Home,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface Appointment {
  id: number;
  name: string;
  phone: string;
  email: string;
  gender: string;
  location: string;
  treatment: string;
  date: Date;
  time: string;
  room: string;
  status: 'confirmed' | 'pending' | 'completed';
}

const AdminAppointmentPanel = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [form, setForm] = useState<Omit<Appointment, "id" | "status">>({
    name: "",
    phone: "",
    email: "",
    gender: "",
    location: "",
    treatment: "",
    date: new Date(),
    time: "",
    room: "",
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const rooms = ["Room A", "Room B", "Room C"];
  const locations = ["Anna Nagar", "RA Puram", "Katupakkam"];
  const treatments = ["Abhyanga", "Shirodhara", "Panchakarma", "Swedish Massage", "Deep Tissue"];
  const times = ["09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setForm({ ...form, date });
  };

  const addAppointment = async () => {
    if (!form.name || !form.phone || !form.location || !form.treatment || !form.time) {
      alert("Please fill all required fields.");
      return;
    }

    setIsAdding(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const newAppointment: Appointment = {
      id: Date.now(),
      ...form,
      status: 'pending'
    };

    setAppointments([...appointments, newAppointment]);
    setForm({
      name: "",
      phone: "",
      email: "",
      gender: "",
      location: "",
      treatment: "",
      date: new Date(),
      time: "",
      room: "",
    });
    setIsAdding(false);
  };

  const deleteAppointment = async (id: number) => {
    setDeletingId(id);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600));
    setAppointments(appointments.filter((a) => a.id !== id));
    setDeletingId(null);
  };

  const assignRoom = (id: number, room: string) => {
    setAppointments(
      appointments.map((a) => (a.id === id ? { ...a, room } : a))
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle size={14} className="mr-1" />;
      case 'pending': return <AlertCircle size={14} className="mr-1" />;
      case 'completed': return <CheckCircle size={14} className="mr-1" />;
      default: return null;
    }
  };

  const AppointmentCard = ({ appointment, index }: { appointment: Appointment, index: number }) => (
    <div 
      className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {appointment.name.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-gray-900 text-lg">{appointment.name}</h3>
              <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)} mt-1`}>
                {getStatusIcon(appointment.status)}
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </div>
            </div>
          </div>
          <button
            className={`p-2 rounded-xl transition-all duration-300 ${
              deletingId === appointment.id 
                ? 'bg-red-100 text-red-600' 
                : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
            }`}
            onClick={() => deleteAppointment(appointment.id)}
            disabled={deletingId === appointment.id}
          >
            {deletingId === appointment.id ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Trash2 size={18} />
            )}
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-3 text-indigo-500" />
            <span className="font-medium">{appointment.phone}</span>
          </div>
          
          {appointment.email && (
            <div className="flex items-center text-gray-600">
              <Mail size={16} className="mr-3 text-indigo-500" />
              <span>{appointment.email}</span>
            </div>
          )}

          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-3 text-indigo-500" />
            <span>{appointment.date.toLocaleDateString()}</span>
            <Clock size={16} className="ml-4 mr-2 text-indigo-500" />
            <span>{appointment.time}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-3 text-indigo-500" />
            <span>{appointment.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Stethoscope size={16} className="mr-3 text-indigo-500" />
            <span>{appointment.treatment}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Home size={16} className="mr-3 text-indigo-500" />
            <select
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              value={appointment.room}
              onChange={(e) => assignRoom(appointment.id, e.target.value)}
            >
              <option value="">Select Room</option>
              {rooms.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Appointment Management
          </h1>
          <p className="text-gray-600 text-lg">
            Streamline your healthcare appointments with ease
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              {appointments.length} appointment{appointments.length !== 1 ? 's' : ''} active
            </span>
          </div>
        </div>

        {/* Add Appointment Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8 animate-slide-up">
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-500 text-white"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                <PlusCircle size={20} />
              </div>
              <div className="text-left">
                <h2 className="font-bold text-lg">Add New Appointment</h2>
                <p className="text-indigo-100 text-sm">Create a new patient appointment</p>
              </div>
            </div>
            <div className={`transform transition-transform duration-300 ${isCollapsed ? '' : 'rotate-180'}`}>
              <ChevronDown className="text-white" size={24} />
            </div>
          </button>
          
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isCollapsed ? 'max-h-0' : 'max-h-[1000px]'
          }`}>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Name Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <User size={16} className="mr-2 text-indigo-500" />
                    Patient Name *
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    placeholder="Enter full name"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Phone size={16} className="mr-2 text-indigo-500" />
                    Phone Number *
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    placeholder="Enter phone number"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Mail size={16} className="mr-2 text-indigo-500" />
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    placeholder="Enter email address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleFormChange}
                  />
                </div>

                {/* Gender Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <User size={16} className="mr-2 text-indigo-500" />
                    Gender
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    name="gender"
                    value={form.gender}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Location Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <MapPin size={16} className="mr-2 text-indigo-500" />
                    Location *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    name="location"
                    value={form.location}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Location</option>
                    {locations.map((loc) => (
                      <option key={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                {/* Treatment Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Stethoscope size={16} className="mr-2 text-indigo-500" />
                    Treatment *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    name="treatment"
                    value={form.treatment}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Treatment</option>
                    {treatments.map((treatment) => (
                      <option key={treatment}>{treatment}</option>
                    ))}
                  </select>
                </div>

                {/* Date Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Calendar size={16} className="mr-2 text-indigo-500" />
                    Date *
                  </label>
                  <DatePicker
                    selected={form.date}
                    onChange={handleDateChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    minDate={new Date()}
                    placeholderText="Select appointment date"
                  />
                </div>

                {/* Time Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Clock size={16} className="mr-2 text-indigo-500" />
                    Time *
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    name="time"
                    value={form.time}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Time</option>
                    {times.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Room Field */}
                <div className="group">
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Home size={16} className="mr-2 text-indigo-500" />
                    Room Assignment
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 group-hover:border-indigo-300"
                    name="room"
                    value={form.room}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Room</option>
                    {rooms.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={addAppointment} 
                  className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-105"
                  disabled={isAdding}
                >
                  {isAdding ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Creating Appointment...
                    </>
                  ) : (
                    <>
                      <PlusCircle className="mr-2" size={20} />
                      Create Appointment
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments Display */}
        {isMobile ? (
          /* Mobile Card Layout */
          <div className="space-y-4">
            {appointments.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center animate-fade-in">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} className="text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No appointments yet</h3>
                <p className="text-gray-500 mb-6">Create your first appointment to get started</p>
                <button 
                  onClick={() => setIsCollapsed(false)}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Add First Appointment
                </button>
              </div>
            ) : (
              appointments.map((appointment, index) => (
                <AppointmentCard key={appointment.id} appointment={appointment} index={index} />
              ))
            )}
          </div>
        ) : (
          /* Desktop Table Layout */
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-slide-up">
            <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">All Appointments</h3>
              <p className="text-gray-600 text-sm mt-1">Manage and track all patient appointments</p>
            </div>
            
            {appointments.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar size={32} className="text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No appointments scheduled</h3>
                <p className="text-gray-500 mb-6">Start by creating your first appointment above</p>
                <button 
                  onClick={() => setIsCollapsed(false)}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Create First Appointment
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">#</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Patient</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Schedule</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Treatment</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Room</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {appointments.map((appointment, index) => (
                      <tr 
                        key={appointment.id} 
                        className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-semibold text-gray-900">{appointment.name}</div>
                          {appointment.gender && (
                            <div className="text-sm text-gray-500">{appointment.gender}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{appointment.phone}</div>
                          {appointment.email && (
                            <div className="text-sm text-gray-500">{appointment.email}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{appointment.date.toLocaleDateString()}</div>
                          <div className="text-sm text-gray-500">{appointment.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {appointment.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                            <Stethoscope size={12} className="mr-1" />
                            {appointment.treatment}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                            value={appointment.room}
                            onChange={(e) => assignRoom(appointment.id, e.target.value)}
                          >
                            <option value="">Select Room</option>
                            {rooms.map((r) => (
                              <option key={r}>{r}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                            {getStatusIcon(appointment.status)}
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            className={`p-2 rounded-xl transition-all duration-300 ${
                              deletingId === appointment.id 
                                ? 'bg-red-100 text-red-600' 
                                : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                            }`}
                            onClick={() => deleteAppointment(appointment.id)}
                            disabled={deletingId === appointment.id}
                          >
                            {deletingId === appointment.id ? (
                              <Loader2 size={18} className="animate-spin" />
                            ) : (
                              <Trash2 size={18} />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
          animation-fill-mode: both;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminAppointmentPanel;
