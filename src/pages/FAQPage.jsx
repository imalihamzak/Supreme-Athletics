import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

function FAQPage() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Header />
      <FAQ />
      <Footer />
    </div>
  );
}

export default FAQPage;

