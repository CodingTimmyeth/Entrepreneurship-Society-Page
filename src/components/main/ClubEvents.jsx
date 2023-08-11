import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

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

  const [eventStates, setEventStates] = useState(
    events.map((event) => ({ id: event.id, showDescr: false }))
  );

  const handleEventClick = (eventId) => {
    setEventStates((prevStates) =>
      prevStates.map((prevState) =>
        prevState.id === eventId
          ? { ...prevState, showDescr: !prevState.showDescr }
          : prevState
      )
    );
  };
  return (
    <section>
      <div className="mb-10">
        <h1 className="font-bold text-2xl mb-3">About the Club</h1>
        <p>
          A community of aspiring entrepreneurs who share the goal of starting
          and growing their businesses.
        </p>
      </div>
      {/* Club Events */}

      {events.map((item) => (
        <div className="flex flex-col mb-8 " key={item.id}>
          <div
            className={`mb-2 h-[384px] ${item.image} bg-cover bg-center rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.4)]`}
          ></div>
          <div className="flex flex-col p-5 shadow-[0_4px_4px_0_rgba(0,0,0,0.4)] rounded-lg cursor-pointer">
            <div
              className="flex items-center justify-between"
              onClick={() => handleEventClick(item.id)}
            >
              <p className="text-lg">{item.title}</p>
              <SlArrowDown className="text-2xl text-black" />
            </div>
            {eventStates.find((state) => state.id === item.id).showDescr && (
              <p className="text-black text-left text-lg mt-5">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ClubEvents;
