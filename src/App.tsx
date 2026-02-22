/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Trophy, 
  ChevronRight,
  Info,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { QUESTIONS } from './data';
import { Question, Difficulty, UserAnswer, Option } from './types';

// --- Components ---

const DifficultyBadge = ({ difficulty }: { difficulty: Difficulty }) => {
  const colors = {
    [Difficulty.Beginner]: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    [Difficulty.Intermediate]: 'bg-amber-100 text-amber-700 border-amber-200',
    [Difficulty.Advanced]: 'bg-rose-100 text-rose-700 border-rose-200',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
};

const CategoryBadge = ({ category }: { category: string }) => (
  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
    {category}
  </span>
);

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];

  const handleOptionSelect = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    
    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect,
    };

    setAnswers([...answers, newAnswer]);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOptionId(null);
      setIsSubmitted(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setAnswers([]);
    setIsQuizFinished(false);
  };

  const score = useMemo(() => {
    return answers.filter(a => a.isCorrect).length;
  }, [answers]);

  const getEncouragement = (score: number) => {
    const ratio = score / QUESTIONS.length;
    if (ratio === 1) return "卓越！你已经掌握了这些核心语法点！";
    if (ratio >= 0.8) return "太棒了！你的语法基础非常扎实。";
    if (ratio >= 0.6) return "做得不错！继续加油，离满分不远了。";
    return "别灰心，语法学习需要不断积累，看解析很有帮助哦！";
  };

  const renderSentence = (sentence: string, selectedText: string | null) => {
    const parts = sentence.split('______');
    return (
      <div className="text-xl md:text-2xl font-medium leading-relaxed text-slate-800">
        {parts[0]}
        <span className={`inline-block min-w-[100px] border-b-2 mx-2 px-2 text-center transition-all duration-300 ${
          isSubmitted 
            ? (selectedOptionId === currentQuestion.correctOptionId ? 'text-emerald-600 border-emerald-600' : 'text-rose-600 border-rose-600')
            : 'text-indigo-600 border-indigo-300'
        }`}>
          {selectedText || '______'}
        </span>
        {parts[1]}
      </div>
    );
  };

  if (isQuizFinished) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">测试完成!</h2>
          <div className="text-5xl font-black text-indigo-600 mb-4">
            {score} <span className="text-2xl text-slate-400 font-normal">/ {QUESTIONS.length}</span>
          </div>
          <p className="text-slate-600 mb-8 leading-relaxed">
            {getEncouragement(score)}
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={restartQuiz}
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              <RotateCcw className="w-5 h-5" />
              重新开始
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const selectedOptionText = currentQuestion.options.find(o => o.id === selectedOptionId)?.text || null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="max-w-4xl mx-auto pt-8 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">GrammarMaster</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Interactive Practice</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Progress</div>
            <div className="text-sm font-bold text-slate-700">{currentIndex + 1} / {QUESTIONS.length}</div>
          </div>
          <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            {/* Question Card */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="flex flex-wrap gap-2 mb-8">
                <DifficultyBadge difficulty={currentQuestion.difficulty} />
                <CategoryBadge category={currentQuestion.category} />
              </div>

              {renderSentence(currentQuestion.sentence, selectedOptionText)}

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOptionId === option.id;
                  const isCorrect = option.id === currentQuestion.correctOptionId;
                  
                  let buttonClass = "group relative p-5 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between ";
                  
                  if (isSubmitted) {
                    if (isCorrect) {
                      buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-700";
                    } else if (isSelected) {
                      buttonClass += "bg-rose-50 border-rose-500 text-rose-700";
                    } else {
                      buttonClass += "bg-white border-slate-100 text-slate-400 opacity-60";
                    }
                  } else {
                    if (isSelected) {
                      buttonClass += "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-md shadow-indigo-100";
                    } else {
                      buttonClass += "bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-slate-50";
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      disabled={isSubmitted}
                      className={buttonClass}
                    >
                      <span className="font-bold text-lg">{option.text}</span>
                      {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                      {!isSubmitted && isSelected && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex justify-end">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedOptionId}
                    className={`px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all ${
                      selectedOptionId 
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 hover:-translate-y-0.5' 
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    提交答案
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
                  >
                    {currentIndex === QUESTIONS.length - 1 ? '查看结果' : '下一题'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Explanation Card */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100"
                >
                  <div className="bg-slate-50 px-8 py-4 border-bottom border-slate-100 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">详解卡片</span>
                  </div>
                  <div className="p-8 space-y-6">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        语法规则
                      </h4>
                      <p className="text-slate-600 leading-relaxed pl-3.5 border-l border-slate-100">
                        {currentQuestion.explanation.rule}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          正确例句
                        </h4>
                        <div className="bg-emerald-50/50 p-4 rounded-xl text-emerald-900 italic font-medium">
                          "{currentQuestion.explanation.example}"
                        </div>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2">
                          <XCircle className="w-4 h-4 text-rose-500" />
                          常见误区
                        </h4>
                        <div className="bg-rose-50/50 p-4 rounded-xl text-rose-900 italic font-medium">
                          {currentQuestion.explanation.commonMistake}
                        </div>
                      </div>
                    </div>

                    {currentQuestion.explanation.reviewLink && (
                      <div className="pt-4 border-top border-slate-50">
                        <a 
                          href={currentQuestion.explanation.reviewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold text-sm group"
                        >
                          <Info className="w-4 h-4" />
                          深入复习该语法点
                          <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-xs text-slate-400 font-medium">
          &copy; 2024 GrammarMaster. 专为初中英语语法进阶设计。
        </p>
      </footer>
    </div>
  );
}
