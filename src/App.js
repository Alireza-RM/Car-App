import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FilterCar from "./components/FilterCar";
import DetailesCar from "./components/DetailesCar";
import RentalCar from "./components/RentalCar";
import UserPanel from "./components/UserPanel";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userpanel" element={<UserPanel />} />
        <Route path="/filtercar" element={<FilterCar />} />
        <Route path="/rentalcar/:id" element={<RentalCar />} />
        <Route path="/detailescar/:id?" element={<DetailesCar />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// filterCar
// detailcar
// rentalCar
// userPanel
