import Layout from "../components/Layout";
import ExperienceCard from "../components/ExperienceCard";

const data = [
  {
    title: "Getir Yemek",
    position: "Backend Developer",
    timeline: "Feb 2021 - projected Aug 2021",
    description:
      "Getir is an instant delivery application currently operating in Turkey and United Kingdom. The company delivers products from ranging categories such as groceries, water, patisserie, deserts, dairy etc. Getir Yemek is one of four branches of Getir that delivers a wide range of menus from restaurants. Getir is considered to become one of the first unicorn startups founded in Turkey.",
    url: "https://getir.com/en/",
    topNotes: [],
    bottomNotes: ["Visit website*https://getir.com/en/"],
  },
  {
    title: "Coconvos",
    position: "Co-founder",
    timeline: "Jan 2021 - present",
    description:
      "Getir is an instant delivery application currently operating in Turkey and United Kingdom. The company delivers products from ranging categories such as groceries, water, patisserie, deserts, dairy etc. It's considered to become one of the first unicorn startups founded in Turkey.",
    topNotes: ["Launching in May 2021!"],
    bottomNotes: [
      "We're hiring for data science & backend dev!*toraman@usc.edu",
      "Interested as an investor?*sivasligil@uchicago.edu",
    ],
  },
  {
    title: "USC Autunomous Underwater Vehicle",
    position: "Computer Vision Lead",
    timeline: "Sep 2020 - present",
    description:
      "USC AUV is a completely student-led club where students build a robot to complete certain tasks underwater. ",
    topNotes: [],
    bottomNotes: [],
  },
  {
    title: "EthSign",
    position: "Co-founder & Frontend developer",
    timeline: "Feb 2020 - July 2020",
    description:
      "EthSign is a startup founded in University of Southern California, in order to make official document signin process completely decentralized. The project could not be launched to the market thought it was completed. I will always believe it carries great potential for the blockchain indsutry.",
    topNotes: [],
    bottomNotes: ["Interested as an investor?*toraman@usc.edu"],
  },
];
const about = () => {
  return (
    <div className="box-border p-5">
      <Layout>
        <div className="m-auto max-w-screen-lg pb-14">
          <h1 className="underline text-2xl pb-4 font-bold">About</h1>
          <ul className="font-light">
            <li>Istanbul | Los Angeles</li>
            <li>Web Programming | Web Architecture & Microsystems</li>
            <li>
              Junior at University of Southern California | Currently in gap
              semester
            </li>
          </ul>
        </div>
        <div className="m-auto max-w-screen-lg pb-14">
          <h1 className="underline text-2xl pb-4 font-bold">Skills</h1>
          <ul className="font-light">
            <li>
              <span className="font-semibold">Tools: </span> Git | Docker
            </li>
            <li>
              {" "}
              <span className="font-semibold">Languages: </span> C++ | Java |
              Node.js | Pyhton | HTML & CSS | SQL
            </li>
            <li>
              <span className="font-semibold">Web Frameworks: </span> React.js,
            </li>
            <li>
              Junior at University of Southern California | Currently in gap
              semester
            </li>
          </ul>
        </div>
        <div className="m-auto max-w-screen-lg	pb-14">
          <h1 className="underline text-2xl pb-4 font-bold">Experience</h1>
          {data.map((exp, index) => {
            return <ExperienceCard key={index} exp={exp} />;
          })}
        </div>
      </Layout>
    </div>
  );
};

export default about;
