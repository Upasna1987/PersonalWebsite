import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen p-8 space-y-16">
      {/* Introduction Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg">
          I'm Upasana, a passionate UX researcher and marketing analytics expert with extensive experience in driving user engagement and growth. Over the years, I've worked with top-tier companies like DBS, Foodpanda, and OKX, leveraging user insights to shape impactful strategies. My approach is centered on empathy and understanding user needs to create solutions that resonate deeply with audiences. Whether you're seeking strategic research, user-centered design, or marketing analytics, I'm here to help you elevate your business.
        </p>
      </section>

      {/* Services/Courses Offered Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>UX Research & Strategy: Tailored research to understand user behaviors, preferences, and pain points, leading to actionable insights that drive product development and marketing strategies.</li>
          <li>Marketing Analytics: Data-driven marketing strategies that optimize customer engagement, conversions, and retention. I provide in-depth analysis and actionable recommendations for measurable growth.</li>
          <li>Content Strategy Consultation: Guidance on creating compelling content that resonates with your target audience, with a focus on maximizing engagement and conversion.</li>
          <li>B2B Research & Consultation: Leveraging user research to build stronger B2B relationships and strategies. I specialize in helping businesses cater to both B2B clients and end consumers.</li>
          <li>Hindi Language Lessons: A personalized, child-led approach to learning Hindi for children aged 2 to 5 years, focusing on fun, interactive activities that ensure children enjoy learning.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
          "Upasna's UX research skills have been transformative. Her insights helped us improve user engagement and significantly boosted our customer retention."
          <br />— Priya, ExploreMaps
        </blockquote>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-4">
          "Working with Upasna was a game-changer. Her research expertise helped us refine our strategies, leading to a measurable increase in customer engagement."
          <br />— Travel Agency
        </blockquote>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic">
          "I gained invaluable insights from Upasna's AI for Research Masterclass. The session was highly engaging and informative, and now I feel more confident in integrating AI tools into my research process."
          <br />— Sanjana, Workshop Attendee
        </blockquote>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">Interested in working together? Contact me today!</p>
        <a href="/contact" className="bg-blue-500 text-white p-2 rounded">Contact Me</a>
      </section>
    </div>
  );
};

export default App; 