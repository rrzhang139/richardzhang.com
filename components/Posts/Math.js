import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Math = ({ children, block = false }) => {
  // Ensure the LaTeX is passed as a string
  const latexString = String(children);
  
  return block ? (
    <BlockMath math={latexString} />
  ) : (
    <InlineMath math={latexString} />
  );
};

export default Math; 