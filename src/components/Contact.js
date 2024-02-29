import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id="contact" className="relative">
        <div className="container px-4 py-10 mx-auto flex flex-wrap sm:flex-nowrap">
          <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div className=" relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold  tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:nickg8928@gmail.com" className="text-indigo-400 leading-relaxed">nickg8928@gmail.com</a>
                <h2 className="font-semibold  tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">8928145452</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
