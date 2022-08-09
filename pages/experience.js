import Link from "next/link";
import Image from "next/image";

const experience = [
  {
    org: "USC AUV",
    web: "https://www.linkedin.com/company/usc-auv/",
    src: "/assets/uscauv.png",
    role: "Software Advisor",
    date: "Feb 2022 - present",
    desc: [
      {
        task: "USC's premier underwater autonomous vehicle club. Participates to the annual RoboSub tournament, the major competition tournament among colleges. Previously the software lead.",
      },
      // {
      //   task: "Led and trained a team of 10+ undergraduate and graduate students.",
      // },
      // {
      //   task: "Redesigned the software architecture and proposed a new software model to improve the rotational capabilities of the sub.",
      // },
      // {
      //   task: "Trained the computer vision algorithm with a limited dataset for the sub to differentiate objects underwater.",
      // },
    ],
    stack: [
      {
        src: "/assets/python.gif",
        name: "Python",
      },
      {
        src: "/assets/cpp.png",
        name: "C++",
      },
    ],
  },
  {
    org: "Peero",
    web: "https://www.peero.io/",
    src: "/assets/peero.png",
    role: "Co-founder & Tech Lead",
    date: "Jan 2021 - Feb 2022",
    desc: [
      {
        task: "The platform for early high school students to explore colleges and interact with college students for free. B2B options let everything be in sync with high school counselors. Project is temporarily paused.",
      },
      // {
      //   task: "Led the technical team of 4 developers until the completion of the development version of the application.",
      // },
      // {
      //   task: "Managed the grant application process to companies like AWS, Twilio, Notion etc. Received grants above $10,000.",
      // },
    ],
    stack: [
      {
        src: "/assets/nextjs.png",
        name: "Next.js",
      },
      {
        src: "/assets/js.gif",
        name: "Node.js",
      },
      {
        src: "/assets/mongodb.png",
        name: "MongoDB",
      },
      {
        src: "/assets/redis.png",
        name: "Redis",
      },
      {
        src: "/assets/postgres.png",
        name: "PostgreSQL",
      },
      {
        src: "/assets/aws.png",
        name: "AWS",
      },
    ],
  },
  {
    org: "Getir",
    web: "https://getir.com",
    src: "/assets/getir.png",
    role: "Backend Developer",
    date: "Feb 2021 - Jul 2021",
    desc: [
      {
        task: "The fastest growing instant grocery, restaurant, and small business products delivery application. Operating in nine countries.",
      },
    ],
    stack: [
      {
        src: "/assets/js.gif",
        name: "Node.js",
      },
      {
        src: "/assets/mongodb.png",
        name: "MongoDB",
      },
      {
        src: "/assets/redis.png",
        name: "Redis",
      },
      {
        src: "/assets/aws.png",
        name: "AWS",
      },
    ],
  },
  {
    org: "EthSign",
    web: "https://ethsign.xyz/",
    src: "/assets/ethsign.png",
    role: "Initiating Member & Software Developer",
    date: "Feb 2020 - Jul 2020",
    desc: [
      {
        task: "A trusted, decentralized, versioned, and consensus-based electronic agreements signing application built on Ethereum. Started by USC students.",
      },
      // {
      //   task: "Involved in the architectue and design of the platform.",
      // },
    ],
    stack: [
      {
        src: "/assets/js.gif",
        name: "Node.js",
      },
      {
        src: "/assets/mongodb.png",
        name: "MongoDB",
      },
      {
        src: "/assets/redis.png",
        name: "Redis",
      },
      {
        src: "/assets/aws.png",
        name: "AWS",
      },
    ],
  },
];

export default function Home() {
  return (
    <section className="mt-16 px-4 md:px-0 max-w-2xl mx-auto mb-10">
      <h2
        className="text-5xl font-semibold"
        style={{
          fontFamily: "Redressed, cursive",
        }}
      >
        Experience
      </h2>

      <div className="py-10">
        <ul>
          {experience.map((exp) => {
            return (
              <li className="py-10">
                <div className="flex">
                  <img
                    className="w-24 h-24 rounded-full self-center"
                    src={exp.src}
                  />
                  <div className="w-full ml-3 self-center">
                    <h4 className="font-semibold text-lg">
                      {exp.org}
                    </h4>
                    <h5 className="text-sm">
                      {exp.role}
                    </h5>
                    <h5 className="text-xs pt-1">
                      {exp.date}
                    </h5>
                    <div className="flex">
                      <a
                        href={exp.web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/assets/web.png"
                          className="w-10 h-10 rounded-full"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {exp.desc.map(({ task }) => (
                  <p className="mt-5 text-sm">
                    {task}
                  </p>
                ))}

                <ul className="mt-4 flex flex-wrap">
                  {exp.stack.map((s) => (
                    <li className="mb-3 md:my-0 mx-2">
                      <img
                        src={s.src}
                        className="mx-auto w-6 h-6"
                      />
                      <p className="pt-1 text-black text-xs w-full text-center">
                        {s.name}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
