import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

export default function EligibilityTab() {
  const [step, setStep] = useState(0);
  const [isEligible, setIsEligible] = useState(true);

  const questions = [
    { text: "Are you a citizen of the country where the election is taking place?" },
    { text: "Will you be 18 years old on or before Election Day?" },
    { text: "Are you a resident of the state/district where you plan to vote?" },
    { text: "Are you currently serving a felony sentence? (Rules vary by region, but let's assume no for this general check)" }
  ];

  const handleAnswer = (answer, index) => {
    // Basic logic: citizenship, age, residency must be YES. Felony (for this basic example) must be NO.
    if (index < 3 && answer === 'No') setIsEligible(false);
    if (index === 3 && answer === 'Yes') setIsEligible(false);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(4); // Finished
    }
  };

  const reset = () => {
    setStep(0);
    setIsEligible(true);
  };

  return (
    <div className="py-8 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-primary mb-4">Check Your Eligibility</h2>
        <p className="text-text-secondary">Answer a few basic questions to see if you meet general voting requirements.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-border-light p-8 min-h-[300px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step < questions.length ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-center"
            >
              <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-4 block">
                Question {step + 1} of {questions.length}
              </span>
              <h3 className="text-2xl font-bold text-primary mb-10 leading-tight">
                {questions[step].text}
              </h3>
              
              <div className="flex justify-center gap-6">
                <button 
                  onClick={() => handleAnswer('Yes', step)}
                  className="btn-outline border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                >
                  Yes
                </button>
                <button 
                  onClick={() => handleAnswer('No', step)}
                  className="btn-outline border-red-600 text-red-600 hover:bg-red-50 px-8 py-3"
                >
                  No
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {isEligible ? (
                <div>
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-primary mb-4">You're likely eligible!</h3>
                  <p className="text-text-secondary mb-8">
                    Based on your answers, you meet the general requirements to vote. Your next step is to officially register with your local election office.
                  </p>
                  <button className="btn-amber" onClick={reset}>Check Again</button>
                </div>
              ) : (
                <div>
                  <XCircle size={64} className="text-red-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-primary mb-4">You might not be eligible</h3>
                  <p className="text-text-secondary mb-8">
                    Based on your answers, you may not meet the requirements in some jurisdictions. However, laws vary significantly! Please check with your local election officials.
                  </p>
                  <button className="btn-outline" onClick={reset}>Start Over</button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {questions.map((_, idx) => (
          <div key={idx} className={`h-2 rounded-full transition-all ${idx <= step ? 'bg-secondary w-8' : 'bg-gray-200 w-2'}`}></div>
        ))}
      </div>
    </div>
  );
}
