import Head from "next/head";
import CustomTimeline from "../../components/CustomTimeline";

const LearningJourney = () => {
  const subjects = [
    { id: 1, track: 1, content: 'Beginning Logic', start: '2023-05-01', end: '2023-06-27', link: 'https://www.amazon.com/Beginning-Logic-E-J-Lemmon/dp/0915144506' },
    { id: 2, track: 1, content: 'Logic for Mathematicians', start: '2023-06-27', end: '2023-08-14', link: 'https://www.amazon.com/Logic-Mathematicians-G-T-Kneebone/dp/0486688011' },
    { id: 3, track: 1, content: 'Naive Set Theory', start: '2023-08-14', end: '2023-09-04', link: 'https://www.amazon.com/Naive-Set-Theory-Paul-Halmos/dp/1614271313' },
    { id: 4, track: 1, content: 'Computability and Logic', start: '2023-09-04', end: '2023-10-20', link: 'https://www.amazon.com/Computability-Logic-George-S-Boolos/dp/0521701465' },
    { id: 5, track: 1, content: 'Calculus by Spivak', start: '2024-01-01', end: '2024-03-29', link: 'https://www.amazon.com/Calculus-4th-Michael-Spivak/dp/0914098918' },
    { id: 6, track: 1, content: 'Vector Calculus, Linear Algebra, and Differential Forms', start: '2024-03-25', end: '2024-05-28', link: 'https://www.amazon.com/Vector-Calculus-Linear-Algebra-Differential/dp/0136574467' },
    { id: 7, track: 1, content: 'Sipser: Introduction to Theory of Computation', start: '2024-07-01', end: new Date().toISOString().split('T')[0], link: 'https://www.amazon.com/Introduction-Theory-Computation-Michael-Sipser/dp/113318779X' },
    { id: 8, track: 1, content: 'Computational Complexity: A Modern Approach', start: '2024-07-01', end: new Date().toISOString().split('T')[0], link: 'https://theory.cs.princeton.edu/complexity/book.pdf' },
    { id: 9, track: 2, content: 'A First Course in Probability Theory', start: '2023-10-20', end: '2023-11-28', link: 'https://www.amazon.com/First-Course-Probability-9th/dp/032179477X' },
    { id: 10, track: 2, content: '3Blue1Brown Linear Algebra', start: '2024-02-01', end: '2024-02-17', link: 'https://www.3blue1brown.com/topics/linear-algebra' },
    { id: 11, track: 2, content: 'All of Statistics', start: '2024-02-17', end: '2024-03-29', link: 'https://egrcc.github.io/docs/math/all-of-statistics.pdf' },
    { id: 12, track: 2, content: 'Strang Linear Algebra', start: '2024-04-05', end: '2024-05-10', link: 'https://math.mit.edu/~gs/linearalgebra/ila5/indexila5.html' },
    { id: 13, track: 2, content: 'Measure Theory', start: '2024-05-13', end: new Date().toISOString().split('T')[0], link: 'https://measure.axler.net/MIRA.pdf' },
    { id: 14, track: 2, content: 'Information Theory, Inference and Learning Algorithms', start: '2024-06-01', end: new Date().toISOString().split('T')[0], link: 'https://www.amazon.com/Information-Theory-Inference-Learning-Algorithms/dp/0521642981' },
    { id: 15, track: 2, content: 'Introduction to Machine Learning', start: '2024-06-02', end: '2024-07-08', link: 'https://people.eecs.berkeley.edu/~jrs/189/' },
    { id: 16, track: 3, content: 'Signals and Systems', start: '2023-10-10', end: '2023-12-15', link: 'https://github.com/rrzhang139/fromthetransistor' },
    { id: 17, track: 3, content: 'Quantum Country', start: '2024-07-08', end: new Date().toISOString().split('T')[0], link: 'https://quantum.country/' },
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
        <h1 className="text-3xl font-black tracking-widest mb-6">Learning Journey</h1>
        <p className="text-sm mb-8">
          This page documents my self-learning journey through various topics in mathematics and computer science.
        </p>

        <CustomTimeline subjects={subjects} />

        {/* Rest of your content... */}
      </div>
    </div>
  );
};

export default LearningJourney;