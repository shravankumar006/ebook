function Contact() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white border border-gray-300 p-6 w-1/3 rounded-lg shadow-md">
          <h1 className="text-bold text-4xl text-black">Contact Us</h1>
          <form>
            <p className="text-black">Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded bg-white"
            />
  
            <p className="text-black">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded bg-white"
            />
  
            <p className="text-black">Message</p>
            <textarea
              name="message"
              rows="4"
              cols="50"
              placeholder="Enter your message"
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded bg-white"
            />
  
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-slate-900 duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;