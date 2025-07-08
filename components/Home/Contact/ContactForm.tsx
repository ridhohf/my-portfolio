"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pesan berhasil dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="px-4 py-3 rounded bg-[#1a1124] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-3 rounded bg-[#1a1124] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        value={formData.message}
        onChange={handleChange}
        className="px-4 py-3 rounded bg-[#1a1124] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-800 text-white px-6 py-3 font-semibold rounded hover:bg-blue-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
