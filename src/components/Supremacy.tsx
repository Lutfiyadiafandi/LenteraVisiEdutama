const Supremacy = () => {
  const whys = [
    {
      id: 1,
      title: "Adaptif dengan kurikulum merdeka",
      desc: "Lorem ipsum dolor sit amet consectetur. Nibh consectetur praesent a auctor nisl sollicitudin blandit.",
    },
    {
      id: 2,
      title: "100% Pengajar dari PTN unggulan & favorit",
      desc: "Lorem ipsum dolor sit amet consectetur. Nibh consectetur praesent a auctor nisl sollicitudin blandit.",
    },
    {
      id: 3,
      title: "Full pembelajaran tatap muka & bonus live class",
      desc: "Lorem ipsum dolor sit amet consectetur. Nibh consectetur praesent a auctor nisl sollicitudin blandit.",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto pt-[200px] sm:-mt-80 lg:mt-0">
      <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-semibold text-neutral800 px-2 xl:px-0">
        Kenapa Lentera Visi Edutama
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 py-10">
        {whys.map(({ id, title, desc }) => (
          <>
            <div className="max-w-[350px] sm:max-w-[400px] flex gap-4 py-5 px-4 bg-gradient-to-r from-gradient to-primary300 rounded-2xl text-white mx-auto">
              <div
                key={id}
                className="flex flex-none justify-center items-center w-[32px] h-[55px]  bg-primary200 rounded-lg"
              >
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold">
                  {id}
                </h3>
              </div>
              <div className="grow">
                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold sm:leading-[29.05px] mb-[10px]">
                  {title}
                </h3>
                <p className="text-[14px] sm:text-[16px]">{desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Supremacy;
