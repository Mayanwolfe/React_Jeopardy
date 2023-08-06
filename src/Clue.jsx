import React, { useState } from 'react';
import './clue.css'

function Clue({ value, clue }) {
  const [stage, setStage] = useState(0);

  const handleClick = () => {
    setStage(stage + 1);
  };

  let content;
  let className;
  if (stage === 0) {  
    content = `$${value}`;
    className = `jeopardy-clue dollar-value`
  } else if (stage === 1) {
    content = clue ? clue.question : null;
    className = `jeopardy-clue`
  } else if (stage === 2) {
    content = clue ? clue.answer : null;
    className = `jeopardy-clue`
  }

  return (
    <div className={className} onClick={handleClick}>
      {stage === 0 ? content : <span dangerouslySetInnerHTML={{ __html: content }} />}
    </div>
  );
}


export default Clue;