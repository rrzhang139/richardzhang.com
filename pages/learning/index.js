import Head from "next/head";
import CustomTimeline from "../../components/CustomTimeline";
import { useTheme } from "../../components/ThemeContext";

const LearningJourney = () => {
  const { theme } = useTheme();
  const subjects = [
    { id: 1, track: 1, content: 'Beginning Logic', start: '2023-05-01', end: '2023-06-27', link: 'https://www.amazon.com/Beginning-Logic-E-J-Lemmon/dp/0915144506' },
    { id: 2, track: 1, content: 'Logic for Mathematicians', start: '2023-06-27', end: '2023-08-14', link: 'https://www.amazon.com/Logic-Mathematicians-G-T-Kneebone/dp/0486688011' },
    { id: 3, track: 1, content: 'Naive Set Theory', start: '2023-08-14', end: '2023-09-04', link: 'https://www.amazon.com/Naive-Set-Theory-Paul-Halmos/dp/1614271313' },
    { id: 4, track: 1, content: 'Computability and Logic', start: '2023-09-04', end: '2023-10-20', link: 'https://www.amazon.com/Computability-Logic-George-S-Boolos/dp/0521701465' },
    { id: 5, track: 1, content: 'Calculus by Spivak', start: '2024-01-01', end: '2024-03-29', link: 'https://www.amazon.com/Calculus-4th-Michael-Spivak/dp/0914098918' },
    { id: 6, track: 1, content: 'Vector Calculus, Linear Algebra, and Differential Forms', start: '2024-03-25', end: '2024-05-28', link: 'https://www.amazon.com/Vector-Calculus-Linear-Algebra-Differential/dp/0136574467' },
    { id: 7, track: 1, content: 'Sipser: Introduction to Theory of Computation', start: '2024-07-01', end: '2024-07-24', link: 'https://www.amazon.com/Introduction-Theory-Computation-Michael-Sipser/dp/113318779X' },
    { id: 8, track: 1, content: 'Computational Complexity: A Modern Approach', start: '2024-07-01', end: '2024-07-24', link: 'https://theory.cs.princeton.edu/complexity/book.pdf' },
    { id: 9, track: 2, content: 'A First Course in Probability Theory', start: '2023-10-20', end: '2023-11-28', link: 'https://www.amazon.com/First-Course-Probability-9th/dp/032179477X' },
    { id: 10, track: 2, content: '3Blue1Brown Linear Algebra', start: '2024-02-01', end: '2024-02-17', link: 'https://www.3blue1brown.com/topics/linear-algebra' },
    { id: 11, track: 2, content: 'All of Statistics', start: '2024-02-17', end: '2024-03-29', link: 'https://egrcc.github.io/docs/math/all-of-statistics.pdf' },
    { id: 12, track: 2, content: 'Strang Linear Algebra', start: '2024-04-05', end: '2024-05-10', link: 'https://math.mit.edu/~gs/linearalgebra/ila5/indexila5.html' },
    { id: 13, track: 2, content: 'Measure Theory', start: '2024-05-13', end: '2024-08-01', link: 'https://measure.axler.net/MIRA.pdf' },
    { id: 14, track: 2, content: 'Information Theory, Inference and Learning Algorithms', start: '2024-06-01', end: '2024-07-15', link: 'https://www.amazon.com/Information-Theory-Inference-Learning-Algorithms/dp/0521642981' },
    { id: 15, track: 2, content: 'Introduction to Machine Learning', start: '2024-06-02', end: '2024-07-08', link: 'https://people.eecs.berkeley.edu/~jrs/189/' },
    { id: 16, track: 3, content: 'Signals and Systems', start: '2023-10-10', end: '2023-12-15', link: 'https://github.com/rrzhang139/fromthetransistor' },
    { id: 17, track: 3, content: 'Quantum Country', start: '2024-07-08', end: '2024-09-12', link: 'https://quantum.country/' },
    { id: 18, track: 3, content: 'Mathematics for Robotics', start: '2024-09-21', end: '2024-12-10', link: 'https://hichristensen.com/CSE276C-24/' },
    { id: 19, track: 3, content: 'Quantum Complexity Theory', start: '2024-09-21', end: '2024-12-10', link: 'https://drive.google.com/file/d/1ODM7USFcLWOBpTRyWEV8t2NJrtxahHdI/view?usp=sharing' },
    { id: 20, track: 3, content: 'FPGAs and Hardware Acceleration', start: '2024-09-21', end: '2024-12-10', link: 'https://kastner.ucsd.edu/ryan/cse237c/' },
    { id: 21, track: 1, content: 'Inference and Information', start: '2025-02-01', end: '2025-02-25', link: 'https://web.mit.edu/6.7800/www/info24.pdf' },
    { id: 22, track: 2, content: 'CSE251C: Machine Learning Theory', start: '2025-01-08', end: '2024-03-16', link: 'https://courses.ucsd.edu/coursemain.aspx?section=47887' },
    { id: 23, track: 2, content: 'CSE257: Search and Optimization', start: '2025-01-08', end: '2024-03-16', link: 'https://scungao.github.io/ucsd-w24/index.html' },
    { id: 24, track: 2, content: 'Convex Optimization', start: '2025-01-08', end: '2025-03-16', link: 'https://cseweb.ucsd.edu/classes/wi24/cse203B-a/' },
    { id: 25, track: 3, content: 'Underactuated Robotics', start: '2025-02-28', end: '2025-03-16', link: 'https://underactuated.csail.mit.edu/index.html' },

  ];

  return (
    <div>
      <Head>
        <title>Learning Journey | Richard Zhang</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Richard Zhang's self-learning journey through various topics in mathematics and computer science."
        />
      </Head>
      <div className="max-w-4xl mx-auto px-5 md:px-0 mt-12">
        <h1 className={`text-3xl font-black tracking-widest mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Learning Journey</h1>
        <p className={`text-sm mb-8 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
          This page documents my self-learning journey through various topics in mathematics and computer science.
        </p>

        <CustomTimeline subjects={subjects} theme={theme} />

        {/* Rest of your content... */}
      </div>
    </div>
  );
};

export default LearningJourney;