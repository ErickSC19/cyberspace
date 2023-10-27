import { createContext, useEffect, useState, useContext } from 'react';

type CourseContextProps = {
  questions: any[];
  setQuestions: React.Dispatch<React.SetStateAction<any[]>>;
  currentStreak: number;
  setCurrentStreak: React.Dispatch<React.SetStateAction<number>>;
  toggleAnswer: (questionId: number, correct: boolean) => void;
  courseGrades: { [key: string]: number };
  changeGrade: (lesson: string, val: number) => void;
  currentLesson: string;
  setCurrentLesson: React.Dispatch<React.SetStateAction<string>>;
};

export const CourseContext = createContext({} as CourseContextProps);

export const CourseProvider = ({ children }: any) => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentLesson, setCurrentLesson] = useState<string>('');
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [rightQuestions, setRightQuestions] = useState<number[]>([]);
  const [courseGrades, setCourseGrades] = useState<{ [key: string]: number }>({
    "idSteal": 0,
    "scams": 0,
    "idProtection": 0,
    "firewall": 0,
    "fundamentals": 0,
    "regularUpdates": 0
  });

  const changeGrade = (lesson: string, val: number) => {
    setCourseGrades({ ...courseGrades, [lesson]: val });
  };

  const toggleAnswer = (questionId: number, correct: boolean) => {
    if (correct) {
      if (questionId && !rightQuestions.includes(questionId)) {
        const temd = rightQuestions;
        temd.unshift(questionId);

        setRightQuestions(temd);
      }
    } else {
      if (questionId && rightQuestions.includes(questionId)) {
        const pos = rightQuestions.indexOf(questionId);
        const temd = rightQuestions;
        temd.splice(pos, 1);

        setRightQuestions(temd);
      }
    }
    setCurrentStreak(rightQuestions.length);
  };

  return (
    <CourseContext.Provider
      value={{
        questions,
        setQuestions,
        currentStreak,
        setCurrentStreak,
        toggleAnswer,
        courseGrades,
        changeGrade, 
        currentLesson, 
        setCurrentLesson
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  return useContext(CourseContext);
};
