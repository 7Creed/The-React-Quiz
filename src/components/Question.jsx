import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuiz();

  // const question = questions.at(index);
  const question = questions[index];

  return (
    <div>
      <h4 className="">{question.question}</h4>

      <Options question={question} />
    </div>
  );
}

export default Question;
