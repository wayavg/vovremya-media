import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";
import A_Answer from "./A_Answer.jsx";
import O_TestResult from "./O_TestResult.jsx";
import O_TestReadMore from "./O_TestReadMore.jsx";

import arrowIcon from "../images/icons/Atoms/Type=Right, Color=Dark, Size=M, Style=Bold.svg";

export default function O_Test({ tableName, testName, title, testTag, onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [testMeta, setTestMeta] = useState(null);

  useEffect(() => {
    Promise.all([getData(tableName), getData("test")]).then(
      ([questionsData, testsData]) => {
        const parsed = questionsData
          .filter((row) => row.Quastion)
          .map((row) => {
            const answers = [];
            for (let i = 1; i <= 4; i++) {
              if (row[`Answer${i}`]) {
                answers.push({ text: row[`Answer${i}`], points: i });
              }
            }
            return { question: row.Quastion, answers };
          });
        setQuestions(parsed);

        const norm = (s) => s.replace(/\s+/g, " ").toLowerCase();
        const meta = testsData.find(
          (row) =>
            row.Name && norm(row.Name).includes(norm(testName).substring(0, 15))
        );
        if (meta) setTestMeta(meta);

        setLoading(false);
      }
    );
  }, [tableName, testName]);

  if (loading) return <p className="test-loading">Загрузка теста...</p>;
  if (questions.length === 0) return <p>Тест не найден</p>;

  if (finished) {
    let totalPoints = 0;
    Object.entries(selectedAnswers).forEach(([qIndex, aIndex]) => {
      totalPoints += questions[qIndex].answers[aIndex].points;
    });

    const maxPoints = questions.length * 4;
    const third = maxPoints / 3;
    let resultNum;
    if (totalPoints <= third) {
      resultNum = 1;
    } else if (totalPoints <= third * 2) {
      resultNum = 2;
    } else {
      resultNum = 3;
    }

    const summary = testMeta?.[`Sammary${resultNum}`] || "";
    const imageField = testMeta?.[`Image${resultNum}`];
    const imageUrl =
      imageField && imageField.length > 0 ? imageField[0].url : "";

    return (
      <>
        <O_TestResult title={title} summary={summary} imageUrl={imageUrl} />
        <O_TestReadMore testTag={testTag} />
      </>
    );
  }

  const current = questions[step];

  const handleSelect = (answerIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [step]: answerIndex });
  };

  const handleForward = () => {
    if (!(step in selectedAnswers)) return;
    if (step + 1 >= questions.length) {
      setFinished(true);
      if (onFinish) onFinish();
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="test-quiz">
      <div className="test-quiz__header">
        <p className="test-quiz__count">
          Вопрос {step + 1} из {questions.length}
        </p>
        <p className="test-quiz__question">{current.question}</p>
      </div>

      <div className="test-quiz__answers">
        {current.answers.map((answer, i) => (
          <A_Answer
            key={i}
            text={answer.text}
            selected={selectedAnswers[step] === i}
            onClick={() => handleSelect(i)}
          />
        ))}
      </div>

      <div className="test-quiz__actions">
        {step > 0 && (
          <button
            className="secondary-button"
            type="button"
            onClick={handleBack}
          >
            назад
          </button>
        )}
        <button
          className="primary-button test-quiz__forward"
          type="button"
          onClick={handleForward}
          disabled={!(step in selectedAnswers)}
        >
          <span>вперёд</span>
          <img src={arrowIcon} alt="" className="test-quiz__arrow" />
        </button>
      </div>

      <div className="test-quiz__progress">
        {questions.map((_, i) => (
          <span
            key={i}
            className={`test-quiz__dot${i === step ? " test-quiz__dot--active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
