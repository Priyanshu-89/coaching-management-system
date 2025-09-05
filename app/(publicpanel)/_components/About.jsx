"use client";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/about.png" // replace with your own image in /public
            alt="About Coaching"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            At <strong>CoachingHub</strong>, we believe in empowering students 
            with the right guidance, tools, and resources to achieve success. 
            Our experienced faculty, modern teaching methods, and personalized 
            mentorship ensure that every learner unlocks their full potential.
          </p>
          <p className="mt-3 text-lg text-gray-600 leading-relaxed">
            From academic coaching to competitive exam preparation, we have 
            designed programs that fit every student’s journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
