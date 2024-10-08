export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Anuj Pillai",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Niharika Mahajan",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Divakar Shukla",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Emraan Sayyed",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Jasmine Sandlas",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Alok Saxena",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Janhvi Khare",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Ananya Mishra",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};