import React, { useEffect } from "react";
import QuizzesService from "../domains/quizzes/quizzes.service";

function Quizzes(): React.ReactElement {
  useEffect(() => {
    const loadQuizzes = async () => {
      const quizzes = await QuizzesService.listQuizzes();

      console.log(quizzes);
    };

    loadQuizzes();
  });

  return (
    <div />
  );
}

export default Quizzes;
