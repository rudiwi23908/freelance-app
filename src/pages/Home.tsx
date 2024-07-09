import React from "react";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section>
        <h1>Welcome to Freelance Marketplace</h1>
        <button>Post a Job</button>
        <button>Find Freelancers</button>
      </section>
      <section>
        <h2>Features</h2>
        <p>Feature 1, Feature 2, Feature 3...</p>
      </section>
      <section>
        <h2>Testimonials</h2>
        <p>Testimonial 1, Testimonial 2...</p>
      </section>
      <footer>
        <p>Contact Information, Social Media Links...</p>
      </footer>
    </div>
  );
};

export default Home;
