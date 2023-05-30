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
    <section className="max-w-screen-xl mx-auto pt-[242px]">
      <h2 className="text-heading-xl font-semibold text-neutral800">
        Kenapa Lentera Visi Edutama
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 py-10">
        {whys.map(({ id, title, desc }) => (
          <div
            key={id}
            className="max-w-[350px] sm:max-w-[400px] flex gap-4 py-5 px-4 bg-primary500 rounded-2xl text-neutral0 mx-auto"
          >
            <div className="flex flex-none justify-center items-center w-[32px] h-[55px]  bg-primary200 rounded-lg">
              <h3 className="text-heading-m font-semibold text-neutral0">
                {id}
              </h3>
            </div>
            <div className="grow">
              <h3 className="text-heading-s font-semibold text-neutral0 mb-[10px]">
                {title}
              </h3>
              <p className="text-type-m font-medium text-primary50">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Supremacy;
