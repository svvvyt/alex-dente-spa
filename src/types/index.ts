export interface Specialist {
  name: string;
  position: string;
  experience: string;
  short_description: string;
  full_description: string[];
  image: string;
  specializations: string[];
}

// YMapsWidget
export interface IMapObject {
  iframeSrc: string;
  width?: string;
  height?: string;
}

// Appointment form fields
export interface AppointmentDataValues {
  name: string;
  phone: string;
  date: string;
  time: string;
  service?: string;
}
