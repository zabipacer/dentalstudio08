import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// The layout with Navbar and Footer
import App from "./App"; // The home page
 // Species detail page
import Layout from "./Layout";
import TeethScalingPolishingPage from "./pages/Polishing";
import FluorideTreatment from "./pages/Fluoride";
import TeethWhiteningPage from "./pages/TeethWHite";
import SmileMakeoverLandingPage from "./pages/SmileMakeover";
import DentalVeneersPage from "./pages/Veneers";
import DentalFillingsLandingPage from "./pages/DentalFillings";
import DentalCrownsBridgesLandingPage from "./pages/DentalCrown";
import DentalImplantsLandingPage from "./pages/DentalImplantsFaisalabad";
import BracesAndAlignersLandingPage from "./pages/Braces";
import RootCanalLandingPage from "./pages/RootCanal";
import WisdomToothExtractionLandingPage from "./pages/WisdomTooth";
import PediatricDentistryLandingPage from "./pages/Pediatric";
import GumDiseaseTreatment from "./pages/GumDisease";
import EmergencyDentistFaisalabad from "./pages/Emergency";
import MaxillofacialSurgeryFaisalabad from "./pages/Maxillofacial";
import TMJTreatmentFaisalabad from "./pages/Tmj";
import DentalCheckupLandingPage from "./pages/DentalCeckup";
import ServicePage from "./pages/Servicepage";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />, // Always show Layout (with Navbar & Footer)
    children: [
      {
        path: "/", // Home route
        element: <App />, // Show App component in the Layout
      },
  {
    path: "/scaling-and-polishing-in-faisalabad", // Home route
    element: <TeethScalingPolishingPage />, // Show App component in the Layout

  },

  {
    path: "/Fluoride-Treatment-in-faisalabad", // Home route
    element: <FluorideTreatment />, // Show App component in the Layout

  },
  {
    path: "/Teeth-whitening-in-faisalabad", // Home route
    element: <TeethWhiteningPage />, // Show App component in the Layout

  },
  {
    path: "/Smile-Makeover-faisalabad", // Home route
    element: <SmileMakeoverLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/veneers-faisalabad", // Home route
    element: <DentalVeneersPage />, // Show App component in the Layout

  },
  {
    path: "/Dental-Fillings-faisalabad", // Home route
    element: <DentalFillingsLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/Dental-Crown-Bridges-Faisalabad", // Home route
    element: <DentalCrownsBridgesLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/Dental-implants-Faisalabad", // Home route
    element: <DentalImplantsLandingPage />, // Show App component in the Layout

  }, 
  {
    path: "/braces-aligners-faisalabad", // Home route
    element: <BracesAndAlignersLandingPage/>, // Show App component in the Layout

  }, 
  {
    path: "/root-canal-faisalabad", // Home route
    element: <RootCanalLandingPage/>, // Show App component in the Layout

  }, 
  {
    path: "/wisdom-tooth-extraction", // Home route
    element: <WisdomToothExtractionLandingPage/>, // Show App component in the Layout

  },
  {
    path: "/kids-dentist-faisalabad", // Home route
    element: <PediatricDentistryLandingPage/>, // Show App component in the Layout

  }, 
  {
    path: "/gum-disease-treatment", // Home route
    element: <GumDiseaseTreatment/>, // Show App component in the Layout

  },
  {
    path: "/emergency-dentist-faisalabad", // Home route
    element: <EmergencyDentistFaisalabad/>, // Show App component in the Layout

  }, 
  {
    path: "/maxillofacial-surgery", // Home route
    element: <MaxillofacialSurgeryFaisalabad/>, // Show App component in the Layout

  }, 
  {
    path: "/tmj-treatment-faisalabad", // Home route
    element: <TMJTreatmentFaisalabad/>, // Show App component in the Layout

  }, 
  {
    path: "/dental-checkup-faisalabad", // Home route
    element: <DentalCheckupLandingPage/>, // Show App component in the Layout

  },
  {
    path:"/services/:slug",
    element:<ServicePage/>
  }  // Add more routes here as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);