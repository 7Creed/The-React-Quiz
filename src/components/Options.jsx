import { useQuiz } from "../context/QuizContext";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  // const question = questions[index];

  return (
    <div className="options">
      {/* {console.log(question)} */}
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
              // ans: question.correctOption,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
