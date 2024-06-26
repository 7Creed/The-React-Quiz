import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  // console.log(numQuestion);

  return (
    <div>
      <header className="progress">
        <progress value={index + Number(answer !== null)} max={numQuestions} />

        <p className="">
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p className="">
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;

// import React, { useState } from "react";

// function ProgressBar() {
//   const [progress, setProgress] = useState(0);

//   // Function to update progress
//   const updateProgress = () => {
//     // Simulating progress update
//     const newProgress = progress < 100 ? progress + 10 : 0;
//     setProgress(newProgress);
//   };

//   return (
//     <div>
//       <button onClick={updateProgress}>Update Progress</button>
//       <progress value={progress} max="100" />
//       <span>{progress}%</span>
//     </div>
//   );
// }

// export default ProgressBar;
