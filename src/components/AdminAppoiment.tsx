import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Trash2, PlusCircle, ChevronDown, ChevronUp, Loader2 } from "lucide-react";

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
}

const AdminAppointmentPanel = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [form, setForm] = useState<Omit<Appointment, "id">>({
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

  const rooms = ["Room A", "Room B", "Room C"];
  const locations = ["Anna Nagar", "RA Puram", "Katupakkam"];
  const treatments = ["Abhyanga", "Shirodhara", "Panchakarma", "Swedish Massage", "Deep Tissue"];
  const times = ["09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM"];

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
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newAppointment: Appointment = {
      id: Date.now(),
      ...form,
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  const assignRoom = (id: number, room: string) => {
    setAppointments(
      appointments.map((a) => (a.id === id ? { ...a, room } : a))
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Appointment Management
        </span>
        <span className="ml-auto text-sm font-normal text-gray-500">
          {appointments.length} appointment{appointments.length !== 1 ? 's' : ''}
        </span>
      </h2>

      {/* Add Appointment Form */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 transition-all duration-300">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-colors"
        >
          <div className="flex items-center">
            <PlusCircle className="mr-3 text-blue-600" size={20} />
            <span className="font-semibold text-gray-700">Add New Appointment</span>
          </div>
          {isCollapsed ? <ChevronDown className="text-gray-500" /> : <ChevronUp className="text-gray-500" />}
        </button>
        
        <div className={`px-5 pb-5 ${isCollapsed ? 'hidden' : 'block'} transition-all duration-300`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name *</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Full Name"
                name="name"
                value={form.name}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleFormChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch *</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                name="location"
                value={form.location}
                onChange={handleFormChange}
              >
                <option value="">Select Branch</option>
                {locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Treatment *</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                name="treatment"
                value={form.treatment}
                onChange={handleFormChange}
              >
                <option value="">Select Treatment</option>
                {treatments.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <DatePicker
                selected={form.date}
                onChange={handleDateChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                minDate={new Date()}
                placeholderText="Select Date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                name="room"
                value={form.room}
                onChange={handleFormChange}
              >
                <option value="">Assign Room</option>
                {rooms.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button 
              onClick={addAppointment} 
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center disabled:opacity-70"
              disabled={isAdding}
            >
              {isAdding ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <PlusCircle className="mr-2" size={18} />
                  Add Appointment
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-5 bg-gradient-to-r from-blue-50 to-teal-50">
          <h3 className="font-semibold text-gray-700">All Appointments</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Treatment</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((a, index) => (
                <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.date.toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.treatment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <select
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md transition"
                      value={a.room}
                      onChange={(e) => assignRoom(a.id, e.target.value)}
                    >
                      <option value="">Not assigned</option>
                      {rooms.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-full transition-colors"
                      onClick={() => deleteAppointment(a.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {appointments.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-6 py-4 text-center text-sm text-gray-500">
                    No appointments found. Add your first appointment above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAppointmentPanel;