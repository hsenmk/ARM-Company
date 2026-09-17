

// import { useState } from "react";
import React, { useState } from 'react'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const locationUrl =
    "https://www.google.com/maps?q=33.84907531738281,35.512901306152344";

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormStatus("Sending...");

    const form = event.target;
    const formData = new FormData(form);

formData.append(
  "access_key",
  "8cd6be03-fd5d-4027-8f2c-76d6c68092d4"
);

    formData.append(
      "subject",
      "New Contact Message - ARM Company"
    );

    formData.append(
      "from_name",
      "ARM Company Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setFormStatus(
          "Thank you! Your message has been sent successfully."
        );

        form.reset();
      } else {
        setFormStatus(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setFormStatus(
        "Something went wrong. Please check your internet connection and try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a
  href="#home"
  className="flex items-center"
>
 <img
  src="/images/arm-logo.png"
  alt="ARM Company"
  className="h-8 w-auto object-contain"
  style={{ maxWidth: "120px" }}
/>
</a>

          {/* Desktop Navigation */}
          <nav className="hidden gap-8 md:flex">

            <a
              href="#home"
              className="text-sm uppercase tracking-wider transition hover:text-gray-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm uppercase tracking-wider transition hover:text-gray-400"
            >
              About
            </a>

            <a
              href="#brands"
              className="text-sm uppercase tracking-wider transition hover:text-gray-400"
            >
              Brands
            </a>

         
            <a
              href="#location"
              className="text-sm uppercase tracking-wider transition hover:text-gray-400"
            >
              Location
            </a>

            <a
              href="#contact"
              className="text-sm uppercase tracking-wider transition hover:text-gray-400"
            >
              Contact
            </a>

          </nav>

          {/* Mobile Menu Button */}
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="flex h-11 w-11 items-center justify-center border border-white/20 text-xl transition hover:border-white hover:bg-white hover:text-black md:hidden"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
>
  {menuOpen ? "✕" : "☰"}
</button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
  <nav className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
    <div className="mx-auto flex max-w-7xl flex-col gap-1">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-yellow-500"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-yellow-500"
      >
        About
      </a>

      <a
        href="#brands"
        onClick={() => setMenuOpen(false)}
        className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-yellow-500"
      >
        Brands
      </a>

      <a
        href="#location"
        onClick={() => setMenuOpen(false)}
        className="border-b border-white/10 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-yellow-500"
      >
        Location
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="py-4 text-sm font-semibold uppercase tracking-[0.2em] transition hover:text-yellow-500"
      >
        Contact
      </a>

    </div>
  </nav>
)}

      </header>




{/* ================= HERO ================= */}
<section
  id="home"
  className="relative flex min-h-screen items-center overflow-hidden bg-black"
>
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2000&q=85"
    alt="Motorcycle"
    className="absolute inset-0 h-full w-full object-cover object-center sm:object-right"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/65"></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

  {/* Hero Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-32 lg:px-12">

    <div className="max-w-4xl">

      {/* Since 1948 */}
      <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
        <span className="h-px w-8 bg-yellow-500 sm:w-12"></span>

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500 sm:text-sm sm:tracking-[0.3em]">
          Since 1948
        </p>
      </div>

      {/* Company Name */}
      <h1 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
        ARM
        <span className="block text-yellow-500">
          Company
        </span>
      </h1>

      {/* Main Message */}
      <h2 className="mt-5 max-w-2xl text-xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl">
        Built For The Ride.
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-xl text-sm leading-6 text-gray-300 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
        A trusted name in Lebanon's motorcycle and bicycle industry,
        connecting riders with quality motorcycles, bicycles, parts,
        and leading international brands.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">

        <a
          href="#brands"
          className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-4 text-sm font-bold uppercase tracking-wider !text-black transition duration-300 hover:bg-yellow-500 sm:w-auto sm:px-7"
        >
          Explore Our Brands
        </a>

        <a
          href="#contact"
          className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-4 text-sm font-bold uppercase tracking-wider !text-black transition duration-300 hover:bg-yellow-500 sm:w-auto sm:px-7"
        >
          Contact Us
        </a>

      </div>

      {/* Bottom Information */}
      <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/20 pt-6 sm:mt-16 sm:grid-cols-3 sm:gap-8">

        <div>
          <p className="text-2xl font-bold text-white">
            1948
          </p>

          <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
            Established
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-white">
            Lebanon
          </p>

          <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
            Our Home
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-yellow-500">
            ARM
          </p>

          <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
            Built For The Ride
          </p>
        </div>

      </div>

    </div>

  </div>
</section>






      {/* ================= ABOUT ================= */}
{/* ================= ABOUT ================= */}

<section
  id="about"
  className="bg-white py-16 text-black sm:py-24 md:py-32"
>
  <div className="mx-auto max-w-7xl px-5 sm:px-6">

    <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16">

      {/* About Text */}
      <div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.25em]">
          About ARM Company
        </p>

        <h2 className="text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
          A Legacy
          <br />
          <span className="text-yellow-500">
            Since 1948.
          </span>
        </h2>

        <div className="mt-7 space-y-5 sm:mt-8">

          <p className="text-sm leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Founded in 1948 by{" "}
            <strong className="font-bold text-black">
              Ahmad Rida Akil Almokdad
            </strong>
            , ARM Company began its journey in the bicycle industry
            and has grown through decades of experience and dedication.
          </p>

          <p className="text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            From trading bicycles in its early years to entering
            motorcycle manufacturing in 1964, the company continued
            to evolve with the two-wheeler industry in Lebanon.
          </p>

          <p className="text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Following the involvement of{" "}
            <strong className="font-bold text-black">
              Hadi Ahmad Almokdad
            </strong>
            , the company continued to advance its presence in the
            motorcycle industry.
          </p>

          <p className="text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Today,{" "}
            <strong className="font-bold text-black">
              Husssein Hadi Almokdad
            </strong>{" "}
            leads the company, continuing its legacy and guiding
            ARM Company into the future.
          </p>

        </div>

      </div>




      {/* Company Timeline */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        <div className="border border-gray-200 p-6 transition duration-300 hover:border-yellow-500 sm:p-8">
          <div className="text-4xl font-bold sm:text-5xl">
            1948
          </div>

          <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
            Founded
          </p>
        </div>


        <div className="border border-gray-200 p-6 transition duration-300 hover:border-yellow-500 sm:p-8">
          <div className="text-4xl font-bold sm:text-5xl">
            1950
          </div>

          <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
            Bicycle Trading
          </p>
        </div>


        <div className="border border-gray-200 p-6 transition duration-300 hover:border-yellow-500 sm:p-8">
          <div className="text-4xl font-bold sm:text-5xl">
            1964
          </div>

          <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
            Motorcycle Manufacturing
          </p>
        </div>


        <div className="border border-gray-200 p-6 transition duration-300 hover:border-yellow-500 sm:p-8">
          <div className="text-4xl font-bold sm:text-5xl">
            Today
          </div>

          <p className="mt-3 text-sm uppercase tracking-wider text-gray-500">
            Continuing the Legacy
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* ================= BRANDS ================= */}
<section
  id="brands"
  className="bg-black py-24 md:py-32"
>
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="max-w-3xl">

      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
        ARM Company
      </p>

<h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-6xl">        Our{" "}
        <span className="text-yellow-500">
          Brands
        </span>
      </h2>

<p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">        Discover the brands available through ARM Company.
      </p>

    </div>


    {/* Brand Cards */}
<div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 md:grid-cols-3 md:gap-6">     
{/* ================= VESRAH ================= */}
<div className="group w-full overflow-hidden border border-white/10 bg-gray-950 transition duration-500 hover:border-yellow-500">
  <div className="flex justify-center pt-8">

   


<img
  src="/images/vesrah_image.png"
  alt="Vesrah motorcycle products"
  className="h-44 w-44 aspect-square rounded-full border-4 border-white/10 object-cover overflow-hidden transition duration-700 group-hover:scale-105 group-hover:border-yellow-500 sm:h-52 sm:w-52 md:h-64 md:w-64"
 />




  </div>

  <div className="p-6 text-center sm:p-7">


    <h3 className="mt-2 text-2xl font-bold tracking-tight text-yellow-500">
      Vesrah
    </h3>

    <p className="mt-4 text-sm leading-6 text-gray-400">
      Vesrah is a Japanese manufacturer specializing in
      high-quality motorcycle brake pads and braking
      components, trusted by riders for performance
      and reliability.
    </p>

  </div>

</div>



{/* ================= T.K.R.J. ================= */}
<div className="group w-full overflow-hidden border border-white/10 bg-gray-950 transition duration-500 hover:border-yellow-500">
  <div className="flex justify-center pt-8">

    <img
  src="/images/images%20(2).png"
  alt="T.K.R.J. motorcycle pistons"
  className="h-44 w-44 aspect-square rounded-full border-4 border-white/10 object-cover overflow-hidden transition duration-700 group-hover:scale-105 group-hover:border-yellow-500 sm:h-52 sm:w-52 md:h-64 md:w-64"
/>
  </div>

  <div className="p-6 text-center sm:p-7">


    <h3 className="mt-2 text-2xl font-bold tracking-tight text-yellow-500">
      T.K.R.J.
    </h3>

    <p className="mt-4 text-sm leading-6 text-gray-400">
      T.K.R.J. specializes in high-quality motorcycle
      pistons, engineered for reliable performance,
      durability, and efficient engine operation.
    </p>

  </div>

</div>



{/* ================= OBOR TIRES ================= */}
<div className="group w-full overflow-hidden border border-white/10 bg-gray-950 transition duration-500 hover:border-yellow-500">
  <div className="flex justify-center pt-8">

    <img
  src="/images/images.png"
  alt="OBOR Tires"
  className="h-44 w-44 aspect-square rounded-full border-4 border-white/10 object-contain overflow-hidden transition duration-700 group-hover:scale-105 group-hover:border-yellow-500 sm:h-52 sm:w-52 md:h-64 md:w-64"
/>

  </div>

  <div className="p-6 text-center sm:p-7">

    <h3 className="mt-2 text-2xl font-bold tracking-tight text-yellow-500">
      OBOR Tires
    </h3>

    <p className="mt-4 text-sm leading-6 text-gray-400">
      OBOR Tires provides high-quality motorcycle and
      vehicle tires engineered for dependable performance,
      durability, and excellent road grip.
    </p>

  </div>

</div>
    </div>
  </div>
</section>




      {/* ================= LOCATION ================= */}
<section
  id="location"
  className="bg-gray-950 py-16 sm:py-20 md:py-32"
>
        <div className="mx-auto max-w-7xl px-6">

<div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12">            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                Visit Us
              </p>

<h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-6xl">                Our
                <br />
                Location
              </h2>

<p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:mt-7 sm:text-base sm:leading-7">                Come visit ARM Company and discover our brands in person.
              </p>


<div className="mt-8 space-y-6 sm:mt-10 sm:space-y-7">                {/* Address */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Address
                  </p>

                  <p
                    className="mt-2 text-center text-lg"
                    dir="rtl"
                  >
                    حارة حريك شارع عبد النور
                  </p>

                  <p className="mt-1 text-center text-gray-400">
                    Lebanon
                  </p>

                </div>


                {/* Coordinates */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Coordinates
                  </p>

                  <p className="mt-2 text-sm text-gray-400 sm:text-base">
  33.8490753, 35.5129013
</p>

                </div>


                {/* Opening Hours */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Opening Hours
                  </p>

                  <p className="mt-2 text-lg">
                    Monday - Friday
                  </p>

                  <p className="text-gray-400">
                    8:00 AM - 6:00 PM
                  </p>
                  <p className="mt-2 text-lg">
                    saturday
                  </p>

                  <p className="text-gray-400">
                    8:00 AM - 4:00 PM
                  </p>

                </div>

              </div>


      <a
  href={locationUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold !text-black transition hover:bg-gray-200 sm:mt-0 sm:w-auto"
>
  Get Directions
</a>

            </div>


            {/* Map */}
<div className="overflow-hidden border border-white/10 bg-black shadow-2xl">
              <iframe
                title="ARM Company Location"
                src="https://www.google.com/maps?q=33.84907531738281,35.512901306152344&z=17&hl=en&output=embed"
className="h-[350px] w-full border-0 sm:h-[400px] md:h-[450px]"                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
<section
  id="contact"
  className="bg-black py-16 sm:py-20 md:py-32"
>
        <div className="mx-auto max-w-7xl px-6">

<div className="grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-16">            {/* Contact Information */}
            <div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                Get In Touch
              </p>

<h2 className="text-3xl font-bold uppercase sm:text-4xl md:text-6xl">                Contact
                <br />
                ARM Company
              </h2>

<p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:mt-7 sm:text-base sm:leading-7">                Have a question about our brands or want to learn
                more about ARM Company? Send us a message and our team
                will get back to you.
              </p>


              <div className="mt-10 space-y-7">

                {/* Email */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:mokdadhsein5@gmail.com"
                    className="mt-2 block text-lg transition hover:text-gray-400"
                  >
                   mokdadhsein5@gmail.com
                  </a>

                </div>


                {/* Phone */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+96170400920"
                    className="mt-2 block text-lg transition hover:text-gray-400"
                  >
                    +961 70 400 920
                  </a>

                </div>


                {/* WhatsApp */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/+96170400920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-lg transition hover:text-gray-400"
                  >
                    Chat with us on WhatsApp
                  </a>

                </div>


                {/* Location */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Location
                  </p>

                  <p
                    className="mt-2 text-lg"
                    dir="rtl"
                  >
                    حارة حريك شارع عبد النور
                  </p>

                </div>

              </div>

            </div>


            {/* Contact Form */}
            <div>

            <form
  onSubmit={handleSubmit}
  className="border border-white/10 bg-gray-950 p-6 sm:p-8 md:p-10"
>
                {/* Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium uppercase tracking-wider text-gray-400"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
className="w-full rounded-none border border-white/10 bg-black px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"                  />

                </div>


                {/* Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium uppercase tracking-wider text-gray-400"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
className="w-full rounded-none border border-white/10 bg-black px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"                  />

                </div>


                {/* Subject */}
                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium uppercase tracking-wider text-gray-400"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="customer_subject"
                    required
                    placeholder="What would you like to ask?"
className="w-full rounded-none border border-white/10 bg-black px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"                  />

                </div>


                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium uppercase tracking-wider text-gray-400"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="7"
                    placeholder="Write your message here..."
className="w-full resize-none rounded-none border border-white/10 bg-black px-5 py-4 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  disabled={formStatus === "Sending..."}
                  className="w-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {formStatus === "Sending..."
                    ? "Sending..."
                    : "Send Message"}
                </button>


                {/* Form Status */}
                {formStatus && formStatus !== "Sending..." && (
                  <p
                    className={`text-center text-sm ${
                      formStatus.includes("successfully")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {formStatus}
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </section>


     {/* ================= FOOTER ================= */}
<footer className="border-t border-white/10 bg-black px-6 py-12">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-10 md:grid-cols-3">

      {/* Company */}
      <div>
        <a
          href="#home"
          className="text-xl font-bold tracking-[0.25em]"
        >
          ARM COMPANY
        </a>

        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
          Motorcycles. Performance. Passion.
          <br />
          A legacy built since 1948.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          Quick Links
        </p>

        <div className="mt-5 flex flex-col gap-3">
          <a
            href="#home"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#brands"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Brands
          </a>

          <a
            href="#location"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Location
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          Contact
        </p>

        <div className="mt-5 space-y-4">

          {/* Phone */}
          <a
            href="tel:+96170400920"
            className="block text-sm text-gray-400 transition hover:text-white"
          >
            +961 70 400 920
          </a>

          {/* Email */}
          <a
            href="mailto:mokdadhsein5@gmail.com"
            className="block break-all text-sm text-gray-400 transition hover:text-white"
          >
mokdadhsein5@gmail.com          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+96170400920"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 transition duration-300 hover:border-yellow-500">
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="h-full w-full object-cover"
              />
            </span>

            <span>WhatsApp</span>
          </a>


{/* WeChat */}
<a
  href="#"
  className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-white"
>
  <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 transition duration-300 hover:border-yellow-500">
    <img
      src="/images/wechat.png"
      alt="WeChat"
      className="h-full w-full object-cover"
    />
  </span>

  <span>WeChat</span>
</a>





        </div>

        {/* Social Media */}
        <div className="mt-8">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Follow Us
          </p>

          <div className="mt-5 flex items-center gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/armalmokdad?stkn=em5nNHQ3NnNtYTAz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ARM Company Instagram"
              className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-500 bg-black p-1 transition duration-300 hover:scale-110 hover:bg-yellow-500"
            >
              <img
                src="/images/insta.png"
                alt="Instagram"
                className="h-full w-full rounded-full object-cover"
              />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@arm_mokadad1964?_r=1&_t=ZS-99mw7rIVLEL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ARM Company TikTok"
              className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-yellow-500 bg-black p-1 transition duration-300 hover:scale-110 hover:bg-yellow-500"
            >
              <img
                src="/images/tiktok.png"
                alt="TikTok"
                className="h-full w-full rounded-full object-cover"
              />
            </a>


          </div>

        </div>
      </div>

    </div>


{/* Bottom Bar */}
<div className="mt-12 border-t border-white/10 pt-6">

  <div className="flex min-h-[80px] items-center justify-center">
    <p className="text-center text-xs font-medium tracking-wide text-gray-500 sm:text-sm">
      © {new Date().getFullYear()} ARM Company. All rights reserved.
      <span className="mx-2 text-gray-700">•</span>
      Lebanon
    </p>
  </div>

</div>

  </div>
</footer>
    </div>
  );
}


export default App