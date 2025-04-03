"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="bg-light-cream py-8">
        <div className="container-custom">
          <h1 className="heading-2 text-accent mb-6">تماس با ما</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
