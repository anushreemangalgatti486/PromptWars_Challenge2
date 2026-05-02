import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const quizQuestions = [
  {
    question: "What is a 'Swing State' in US elections?",
    options: [
      "A state where voting happens on swings",
      "A state where the two major political parties have similar levels of support",
      "A state that always votes for the same party",
      "A state with no electoral votes"
    ],
    correctAnswer: 1,
    explanation: "A swing state (or battleground state) is a US state where the two major political parties have similar levels of support among voters, making it important in determining the overall result of a presidential election."
  },
  {
    question: "In a Proportional Representation (PR) system, how are seats allocated?",
    options: [
      "The winner takes all seats",
      "Seats are given based on the height of the candidates",
      "Parties gain seats in proportion to the number of votes cast for them",
      "Seats are randomly assigned by lottery"
    ],
    correctAnswer: 2,
    explanation: "Proportional representation ensures that divisions in an electorate are reflected proportionately in the elected body. If a party wins 30% of the votes, they get roughly 30% of the seats."
  },
  {
    question: "What does 'Suffrage' mean?",
    options: [
      "Enduring pain during an election campaign",
      "The right to vote in political elections",
      "A tax paid at the polling station",
      "A type of voting machine"
    ],
    correctAnswer: 1,
    explanation: "Suffrage, political franchise, or simply franchise is the right to vote in public, political elections."
  },
  {
    question: "Which voting system allows voters to rank candidates by preference?",
    options: [
      "First-Past-The-Post (FPTP)",
      "Ranked Choice Voting (RCV)",
      "Electoral College",
      "Two-Round System"
    ],
    correctAnswer: 1,
    explanation: "Ranked Choice Voting (RCV) allows voters to rank candidates in order of preference. If no candidate gets a majority of first-preference votes, the lowest-ranked candidate is eliminated and their votes are redistributed."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(index);
    const correct = index === quizQuestions[currentQuestion].correctAnswer;
    setIsAnswerCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setShowExplanation(false);
  };

  return (
    <div className="min-h-screen bg-background-light pt-24 pb-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-secondary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[50%] bg-accent-blue/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display font-bold text-[48px] text-primary mb-4 flex items-center justify-center gap-4">
            <Award size={40} className="text-secondary" /> Civic Knowledge Quiz
          </h1>
          <p className="text-text-secondary text-lg">
            Test your understanding of democratic systems, voting mechanics, and terminology.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-xl border border-border-light p-8 md:p-12 min-h-[500px] flex flex-col relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {showScore ? (
              <motion.div 
                key="score"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full my-auto text-center py-10"
              >
                <div className="w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                  <Award size={64} className="text-secondary" />
                </div>
                <h2 className="font-display font-bold text-4xl text-primary mb-4">Quiz Completed!</h2>
                <p className="text-2xl text-text-secondary mb-8">
                  You scored <span className="font-bold text-primary">{score}</span> out of <span className="font-bold text-primary">{quizQuestions.length}</span>
                </p>
                
                <div className="w-full max-w-md bg-gray-50 rounded-2xl p-6 border border-border-light mb-8">
                  <h3 className="font-bold text-primary mb-2">Performance Summary</h3>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div 
                      className="bg-secondary h-4 rounded-full transition-all duration-1000" 
                      style={{ width: `${(score / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {score === quizQuestions.length ? "Perfect score! You're a democracy expert." : 
                     score >= quizQuestions.length / 2 ? "Great job! Keep learning in the Learn Hub." : 
                     "Good effort! Review the glossary and try again."}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button onClick={resetQuiz} className="btn-outline px-8 py-3">Try Again</button>
                  <Link to="/progress" className="btn-amber px-8 py-3">View Progress Profile</Link>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col h-full"
              >
                {/* Progress Header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-border-light">
                  <span className="text-secondary font-bold tracking-wider uppercase text-sm">
                    Question {currentQuestion + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-text-secondary font-medium text-sm bg-background-light px-3 py-1 rounded-full">
                    Score: {score}
                  </span>
                </div>

                {/* Question */}
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 leading-tight">
                  {quizQuestions[currentQuestion].question}
                </h2>

                {/* Options */}
                <div className="space-y-4 mb-8 flex-grow">
                  {quizQuestions[currentQuestion].options.map((option, index) => {
                    let buttonClass = "w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all font-medium text-lg flex items-center justify-between group ";
                    
                    if (selectedAnswer === null) {
                      buttonClass += "border-border-light hover:border-secondary hover:bg-secondary/5 text-text-secondary hover:text-primary";
                    } else if (index === quizQuestions[currentQuestion].correctAnswer) {
                      buttonClass += "border-green-500 bg-green-50 text-green-700";
                    } else if (index === selectedAnswer && !isAnswerCorrect) {
                      buttonClass += "border-red-500 bg-red-50 text-red-700";
                    } else {
                      buttonClass += "border-border-light opacity-50 text-text-secondary";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(index)}
                        disabled={selectedAnswer !== null}
                        className={buttonClass}
                      >
                        <span>{option}</span>
                        {selectedAnswer !== null && index === quizQuestions[currentQuestion].correctAnswer && <CheckCircle className="text-green-500" />}
                        {selectedAnswer === index && !isAnswerCorrect && <XCircle className="text-red-500" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation & Next */}
                <AnimatePresence>
                  {showExplanation && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-auto"
                    >
                      <div className={`p-6 rounded-xl mb-6 ${isAnswerCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
                        <h4 className={`font-bold mb-2 flex items-center gap-2 ${isAnswerCorrect ? 'text-green-700' : 'text-amber-700'}`}>
                          {isAnswerCorrect ? "Correct!" : "Not quite."}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {quizQuestions[currentQuestion].explanation}
                        </p>
                      </div>
                      
                      <div className="flex justify-end">
                        <button 
                          onClick={handleNextQuestion}
                          className="btn-amber px-8 py-3 flex items-center gap-2"
                        >
                          {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ArrowRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
