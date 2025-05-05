import React from 'react';

const AboutUs = () => {
  const steps = [
    {
      title: 'Discover',
      description:
        'We start by deeply understanding your business goals, challenges, and target audience to uncover the most effective digital solutions.',
    },
    {
      title: 'Define',
      description:
        'Next, we outline a clear strategy, defining the scope, objectives, and success metrics to ensure alignment with your vision.',
    },
    {
      title: 'Design',
      description:
        'We craft intuitive, user-centric designs that not only look great but also provide seamless user experiences across all platforms.',
    },
    {
      title: 'Develop',
      description:
        'Our team of skilled developers brings the designs to life, building robust, scalable, and high-performing solutions.',
    },
    {
      title: 'Deploy',
      description:
        'Once developed, we rigorously test and deploy your solution, ensuring everything runs smoothly in a live environment.',
    },
    {
      title: 'Deliver',
      description:
        'Finally, we deliver a fully optimized and functional product, ready to drive results and support your business growth.',
    },
  ];

  const testimonials = [
    {
      name: 'Abdureuf Husein',
      title: 'Director of Melka Walini School',
      feedback:
        "Nile Technology Solution's expertise in web design is unparalleled. They transformed our Smart School Management website into a modern platform that is easy to navigate and visually appealing.",
    },
    {
      name: 'Eng Abdurehman Sh/Anwar',
      title: 'Former JUMSU President',
      feedback:
        "Nile Technology Solution exceeded our expectations with their exceptional web design skills. Our new website not only looks stunning but has also improved user engagement significantly.",
    },
    {
      name: 'Atham Ararso',
      title: 'Manager of Ararso Food Export PLC',
      feedback:
        'Working with Nile Technology Solution was a pleasure. They crafted a website that perfectly reflects our brand and has streamlined our online presence.',
    },
  ];

  return (
    <div className="text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">
          NILE: Navigating Innovation, Leading Excellence
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Our team is dedicated to helping businesses and organizations
          navigate the digital landscape with expertise and innovation. Let’s
          make your vision a reality together.
        </p>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our 6-D Process</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="p-6 border rounded-lg shadow bg-white">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 border rounded-lg shadow">
              <p className="italic mb-4">"{t.feedback}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600">{t.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-2">📍 Harar, Ethiopia</p>
        <p className="mb-2">📞 +251915137219</p>
        <p className="mb-2">📧 info@niletech.co</p>
      </section>
    </div>
  );
};

export default AboutUs;
