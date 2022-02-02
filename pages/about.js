import Layout from "../components/Layout";
import ExperienceCard from "../components/ExperienceCard";

const data = [
  {
    title: "Getir",
    position: "Full-time Backend Developer",
    timeline: "Feb 2021 - Jul 2021",
    description:
      "Getir is a Turkey-based instant delivery application currently operating in various countries. The company delivers products from ranging categories such as groceries, water, patisserie, deserts, dairy etc. GetirFood is a major branch of Getir that delivers a wide range of menus from restaurants.",
    website: "https://getir.com/en/",
    image: "/assets/getir.png",
  },
  {
    title: "USC Autunomous Underwater Vehicle",
    position: "Software Lead",
    timeline: "Sep 2019 - present",
    description:
      "USC AUV is a completely student-led club where students build a robot to complete certain tasks underwater. The club participates to the annual RoboSub competition, backed by the greatest companies in the industry such as Lockheed Martin, Northrop Grumman etc.",
    website: "https://uscauv.com",
    image: "/assets/uscauv.png",
  },
  // {
  //   title: "Peero",
  //   position: "Co-founder & Technical Lead",
  //   timeline: "Jan 2021 - present",
  //   description:
  //     "Peero is a platform to help college applicants better identify their fit colleges, with the help of college students and behavioral data processing.",
  //   website: "https://peero.io",
  //   image: "/assets/peero.png",
  // },
  {
    title: "EthSign",
    position: "Co-founder & Frontend developer",
    timeline: "Feb 2020 - July 2020",
    description:
      "Initially founded by five USC students, EthSign is on a mission to move the document signing process completely decentralized.",
    website: "https://ethsign.xyz",
    image: "/assets/ethsign.png",
  },
];
const about = () => {
  return (
    <div className='box-border p-5 tracking-wide'>
      <Layout>
        <div className='m-auto max-w-screen-lg pb-14'>
          <h1 className='text-2xl pb-4 font-bold'>About</h1>
          <ul className='text-md'>
            <li>Istanbul | Los Angeles</li>
            <li>
              Computer science,{" "}
              <a
                href='https://www.usc.edu/'
                style={{ color: "#990000" }}
                className='text-opacity-100 tracking-wide	'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='tracking-wider'>usc&apos; 23</span>
              </a>
            </li>
            <li>backend & blockchain development | systems design</li>
          </ul>
        </div>

        <div className='m-auto max-w-screen-lg pb-14'>
          <h1 className='text-2xl pb-4 font-bold'>Work</h1>
          {data.map((exp, index) => {
            return <ExperienceCard key={index} exp={exp} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default about;
