import React from "react";

const StudentBus = () => {
  return (
    <section>
      <div className="mb-10">
        <h1 className="mb-3 text-2xl font-bold px-11">
          Learn About Student Businesses
        </h1>
        <p className="px-10">
          See what kinds of businesses we help students with!
        </p>
      </div>
      {/* Student Businesses */}
      <div className="text-white bg-PrimaryColor rounded-xl mb-16 p-6 text-left">
        <p className="mb-4">
          "His quality of work is excellent! I prefer Mehedi in every important
          work of design. He is working fast, clean and present great usability
          results."
        </p>
        <p className="font-bold text-xl">Kumni - Queuethehype</p>
      </div>
      <div className="text-white bg-PrimaryColor rounded-xl mb-16 p-6 text-left">
        <p className="mb-4">
          I couldn't ask for a better Designer. Communication was 200% and this
          went above my expectations. <br /> <br />
          He threw in some additional perks for me. I will definitely be working
          with him for future projects. Happy and very satisfied customer
        </p>
        <p className="font-bold text-xl">Ryanne - Reseller</p>
      </div>
      <div className="text-white bg-PrimaryColor rounded-xl mb-16 p-6 text-left">
        <p className="mb-4">
          Mehedi has worked with us on many projects and has always come
          through. Mehedi is professional with an eye for detail and makes his
          deadlines. <br /> <br /> His work is always outstanding and uses a lot
          of his own creativity and understands us and our projects with simple
          direction. <br /> <br />
          He is easy to work with an responds quickly to any request we have
          ever had.
        </p>
        <p className="font-bold text-xl">Geoff Crutcher</p>
      </div>
    </section>
  );
};

export default StudentBus;