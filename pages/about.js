import Layout from "../components/Layout";
import ExperienceCard from "../components/ExperienceCard";

const data = [
  {
    title: "Peero",
    position: "Co-founder & Technical Lead",
    timeline: "jan 2021 - present",
    description:
      "Peero is a platform to help college applicants better identify their fit colleges, with the help of college students and behavioral data processing.",
    website: "https://peero.io",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQHF1Tp5we4OYQ/company-logo_200_200/0/1621797494431?e=1645660800&v=beta&t=pcMzEJS_OXRSRim2ciQyCKYRS3DNzlnpAyjz-l2RvhQ",
  },
  {
    title: "USC Autunomous Underwater Vehicle",
    position: "Computer Vision Lead",
    timeline: "sep 2019 - present",
    description:
      "USC AUV is a completely student-led club where students build a robot to complete certain tasks underwater. The club participates to the annual RoboSub competition, backed by the greatest companies in the industry such as Lockheed Martin, Northrop Grumman etc.",
    website: "https://uscauv.com",
    image:
      "https://uscauv.com/wp-content/uploads/2019/08/cropped-Logo-Cardinal-Small-1.png",
  },
  {
    title: "Getir",
    position: "Full-time Backend Developer",
    timeline: "feb 2021 - jul 2021",
    description:
      "Getir is a Turkey-based instant delivery application currently operating in various countries. The company delivers products from ranging categories such as groceries, water, patisserie, deserts, dairy etc. GetirFood is a major branch of Getir that delivers a wide range of menus from restaurants.",
    website: "https://getir.com/en/",
    image: "/assets/getir.png",
  },
  {
    title: "EthSign",
    position: "Co-founder & Frontend developer",
    timeline: "feb 2020 - july 2020",
    description:
      "Initially founded by five USC students, EthSign is on a mission to move the document signing process completely decentralized.",
    website: "https://ethsign.xyz",
    image: "https://ethsign.xyz/static/media/logo.9d572c56.svg",
  },
];
const about = () => {
  return (
    <div className='box-border p-5' style={{ fontFamily: "Noto Serif JP" }}>
      <Layout>
        <div className='m-auto max-w-screen-lg pb-14'>
          <h1 className='text-2xl pb-4 font-bold tracking-wide'>About</h1>
          <ul className='font-light text-sm'>
            <li>Istanbul | Los Angeles</li>
            <li>
              Computer science student,{" "}
              <a
                href='https://www.usc.edu/'
                style={{ color: "#990000" }}
                className='text-opacity-100 tracking-wide	'
                target='_blank'
              >
                <span className='tracking-wider'>usc' 23</span>
              </a>
            </li>
            <li>
              Interested in backend development | software systems architecture
              | autonomous systems
            </li>
          </ul>
        </div>

        <div className='m-auto max-w-screen-lg	pb-14'>
          <h1 className='text-2xl pb-4 font-bold tracking-wide'>Work</h1>
          {data.map((exp, index) => {
            return <ExperienceCard key={index} exp={exp} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default about;
