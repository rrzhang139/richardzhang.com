const projects = [
  {
    name: "Study On USC",
    desc: "Building USC's premier application for students to create study groups for their classes.",
    launchDate: "Mar 6, 2022",
    stack: [
      {
        name: "Node.js",
        src: "/assets/js.gif",
      },
      {
        name: "Svelte",
        src: "/assets/svelte.png",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section className='mt-16 px-4 md:px-0 max-w-2xl mx-auto mb-10'>
      <h2
        className='text-5xl font-semibold'
        style={{
          fontFamily: "Redressed, cursive",
        }}
      >
        Projects
      </h2>
      <ul className='py-10'>
        {projects.map((p) => (
          <li className='py-6'>
            <h3 className='text-lg'>{p.name}</h3>
            <div className='mt-1 text-sm'>
              <p className=''>{p.desc}</p>
              {p.launchDate && (
                <p className='mt-1 text-indigo-600 text-xs'>
                  Launching on {p.launchDate}
                </p>
              )}
              {/* {p.date && <p className='text-indigo-600'>{p.date}</p>} */}
            </div>
            <ul className='mt-5 flex'>
              {p.stack.map((s) => (
                <li className='mr-4'>
                  <img src={s.src} className='mx-auto w-8 h-8' />
                  <p className='pt-1 text-black text-xs w-full text-center'>
                    {s.name}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
