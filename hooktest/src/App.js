import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    document.title = `You clicked ${count} and ${step} times`;
  });
  const [step,setStep] =useState(5);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={()=>setStep(step+1)}>click step</button>
    </div>
  );
}
export default App