import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const ClubEvents = () => {
  const events = [
    {
      id: 1,
      title: "Guest Speakers",
      //   Make sure to do this since the images doesn't populate when trying to add the image in the class utility manually
      image: "bg-[url(/public/firstEvent.jpeg)]",
      description:
        "Meet the Masters: Join our Guest Speaker Series featuring inspiring entrepreneurs and experts sharing invaluable information",
    },
    {
      id: 2,
      title: "Networking",
      image: "bg-[url(/public/secondEvent.jpeg)]",
      description:
        "Connect & Thrive: Network with fellow entrepreneurs in our dynamic hub. Forge valuable connections and fuel your journey to success!",
    },
    {
      id: 3,
      title: "Workshop",
      image: "bg-[url(/public/thirdEvent.jpeg)]",
      description:
        "Powerful Workshops: Elevate your entrepreneurial skills with interactive sessions. Unlock new growth possibilities!",
    },
    {
      id: 4,
      title: "Social Events",
      image: "bg-[url(/public/fourthEvent.jpeg)]",
      description:
        "Fun & Bonding: Join our social events for unforgettable moments outside entrepreneurship. Movies, bonfires, bowling, and more!",
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const handleEventClick = (eventId) => {
    setExpandedId((prevExpandedId) =>
      prevExpandedId === eventId ? null : eventId
    );
    return (
      <section
        id="Blogs"
        className="Tablet:grid Tablet:grid-cols-2 Tablet:gap-8 Tablet:self-center BigScreens:gap-x-14"
      >
        {events.map((item) => (
          <div
            className="flex flex-col mb-8 Tablet:w-[300px] MiniPC:w-[400px] BigScreens:w-[500px]"
            key={item.id}
          >
            <div
              className={`mb-2 h-[384px] ${item.image} bg-cover bg-center rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.4)]`}
            ></div>
            <div className="flex flex-col p-5 rounded-lg cursor-pointer shadow-[0_4px_4px_0px_rgba(0,0,0,0.4)]">
              <div
                className="flex  items-center justify-between "
                onClick={() => handleEventClick(item.id)}
              >
                <p className="text-lg">{item.title}</p>
                {expandedId === item.id ? (
                  <SlArrowUp className="text-2xl text-black" />
                ) : (
                  <SlArrowDown className="text-2xl text-black" />
                )}
              </div>
              {/* {eventStates.find((state) => state.id === item.id).showDescr ? ( */}
              <div
                className={`mt-5 ${
                  expandedId === item.id
                    ? "animate-dropdown"
                    : "animate-pullback"
                }`}
              >
                <div className="h-[2px] w-full bg-PrimaryColor mb-5" />
                <p className="text-black text-left text-lg">
                  {item.description}
                </p>
              </div>

              {/* )} */}
            </div>
          </div>
        ))}
      </section>
    );
  };
};

export default ClubEvents;

//  p-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.4)] rounded-lg rounded-t-none cursor-pointer
