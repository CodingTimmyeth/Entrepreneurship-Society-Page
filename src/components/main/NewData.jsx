import React from "react";

const NewData = () => {
  const data = [
    {
      id: 1,
      title: "100 Million",
      subTitle: "New businessess every year",
    },
    {
      id: 2,
      title: "99.9%",
      subTitle: "Of businesses are small business",
    },
    // {
    //   id: 3,
    //   title: "305 Million",
    //   subTitle: "people are starting or running a new businesses worldwide.",
    // },
  ];
  return (
    <section
      className="text-white bg-PrimaryColor rounded-xl py-10 mb-16 Tablet:flex Tablet:py-0 text-center Tablet:my-10"
      id="Join!"
    >
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center mb-4 Tablet:flex-row Tablet:items-center Tablet:justify-end Tablet:mb-0 Tablet:w-[33.31%] Tablet:px-4 Tablet:py-8 Tablet:mr-4"
        >
          <div className="Tablet:flex Tablet:justify-center Tablet:w-full py-0">
            <div className="mb-3 Table:flex Tablet:flex-col Tablet:pr-4">
              <h1 className="text-4xl font-bold mb-2">{item.title}</h1>
              <div>
                <p className="text-md">{item.subTitle}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mb-5 Tablet:mb-0">
            <div className="w-[56px] h-[1px] bg-white Tablet:w-[1px] Tablet:h-[56px] Tablet:ml-4"></div>
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center mb-4 px-3 Tablet:mb-0 Desktop:p-0">
        <div className="">
          <h1 className="text-4xl font-bold mb-2">305 Million</h1>
          <div>
            <p className="text-md px-8 Tablet:px-0">
              people are starting or running a new businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewData;
