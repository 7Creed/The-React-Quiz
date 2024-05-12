// import DateCounter from "./DateCounter";

import Header from "./Header";
import Mainbody from "./Mainbody";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      {/* <DateCounter /> */}
      <Header />
      <Mainbody>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Mainbody>
    </div>
  );
}
