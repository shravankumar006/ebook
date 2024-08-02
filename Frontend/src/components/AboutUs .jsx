import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us p-8 bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="mb-4">Welcome to ANSH STORE!</p>
      <p className="mb-6">
        At ANSH STORE, we believe in the transformative power of books. Whether
        you're a lifelong reader or just beginning your literary journey, our
        mission is to provide you with a diverse selection of books that
        inspire, entertain, and educate.
      </p>

      <h2 className="text-3xl font-semibold mb-2">Who We Are</h2>
      <p className="mb-6">
        Founded in [Year], ANSH STORE started as a small local bookstore with a
        big dream—to create a space where book lovers from all walks of life
        could find their next great read. Today, we've grown into a thriving
        online community that reaches readers around the globe.
      </p>

      <h2 className="text-3xl font-semibold mb-2">Our Collection</h2>
      <p className="mb-6">
        We pride ourselves on offering a wide range of genres to suit every
        reader's taste. From the latest bestsellers and timeless classics to
        niche genres and independent publications, we strive to curate a
        collection that reflects the rich diversity of the literary world.
      </p>

      <h2 className="text-3xl font-semibold mb-2">Our Values</h2>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          <strong>Passion for Books</strong>: We are passionate about books and
          dedicated to fostering a love of reading in our community.
        </li>
        <li className="mb-2">
          <strong>Customer Satisfaction</strong>: Your satisfaction is our top
          priority. We are committed to providing exceptional service and a
          seamless shopping experience.
        </li>
        <li className="mb-2">
          <strong>Diversity and Inclusion</strong>: We believe in the importance
          of diverse voices and stories. Our selection includes books from
          authors of various backgrounds, cultures, and perspectives.
        </li>
        <li className="mb-2">
          <strong>Community Engagement</strong>: We value our community of
          readers and regularly host events, book clubs, and discussions to
          bring book lovers together.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-2">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">
          <strong>Curated Selection</strong>: Our team of book enthusiasts
          carefully selects each title to ensure we offer only the best.
        </li>
        <li className="mb-2">
          <strong>Convenience</strong>: Shop from the comfort of your home with
          our easy-to-navigate website and fast, reliable shipping.
        </li>
        <li className="mb-2">
          <strong>Personalized Recommendations</strong>: Our recommendation
          engine and knowledgeable staff are here to help you find the perfect
          book.
        </li>
        <li className="mb-2">
          <strong>Support for Authors</strong>: We support both established and
          emerging authors, providing a platform for their voices to be heard.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mb-2">Join Our Community</h2>
      <p className="mb-6">
        At ANSH STORE, we’re more than just a bookstore—we’re a community of
        readers who share a love for literature. Follow us on social media, sign
        up for our newsletter, and join our book clubs to stay connected and
        engaged with fellow book lovers.
      </p>
      <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link> 
      <p className="mb-6">
        Thank you for choosing ANSH STORE. We look forward to sharing the joy of
        reading with you!
      </p>
      <p>
        <strong>Happy Reading,</strong>
        <br />
        The ANSH STORE Team
      </p>
         
    </div>
    
  );
};

export default AboutUs;
