"use client"
import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { categoryIcons, questions } from '@/mock/mock-data';
import { getRecommendations, } from '@/utils/utils';
import { Answers, CalculateScore } from '@/types/types';



const Survey = () => {
  const [companyName, setCompanyName] = useState('');
  const [answers, setAnswers] = useState<Answers>({});
  const [readinessScore, setReadinessScore] = useState(0);
  const [effectivenessScore, setEffectivenessScore] = useState(0);
  const [showResults, setShowResults] = useState(false);


  useEffect(() => {
    calculateScores();
  }, [answers]);

  const handleAnswer = (id: any, value: any) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScores = () => {
    const calculateScore = (section: 'readiness' | 'effectiveness') => {
      return questions[section].reduce((acc, q) => {
        const answer = answers[q.id] || 0;
        return acc + (answer as number * q.weight / 5);
      }, 0) / questions[section].reduce((acc: any, q: any) => acc + q.weight, 0) * 100;
    };

    setReadinessScore(calculateScore('readiness'));
    setEffectivenessScore(calculateScore('effectiveness'));
  };

const getScoreColor = (score: any) => {
    if (score < 30) return 'text-red-500';
    if (score < 50) return 'text-orange-500';
    if (score < 70) return 'text-yellow-500';
    if (score < 90) return 'text-green-500';
    return 'text-emerald-500';
  };


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ankieta oceny Microsoft 365</h1>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Nazwa firmy"
        className="w-full p-2 mb-4 border rounded"
      />

      {['readiness', 'effectiveness'].map((section) => (
        <div key={section} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {section === 'readiness' ? 'Ocena gotowości' : 'Ocena efektywności'}
          </h2>


         {questions[section as 'readiness' | 'effectiveness'].map((q) => (
            <div key={q.id} className="mb-6 p-4 border rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                {categoryIcons[q.category] as JSX.Element}
                <span className="ml-2">{q.text}</span>
              </div>
              {q.type === 'slider' ? (
                <div>
                  <Slider
                    defaultValue={[3]}
                    max={5}
                    step={1}
                    onValueChange={(value) => handleAnswer(q.id, value[0])}
                  />
                  
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                   <span>0</span>
                   <span>5</span>
                   <div className="text-sm text-gray-500 mt-1">(Skala: 0 brak, 5 ocena najwyższa)</div>
                  </div>

                </div>
              ) : (
                <Switch
                  onCheckedChange={(checked) => handleAnswer(q.id, checked ? 5 : 1)}
                />
              )}
            </div>
          ))}
        </div>
      ))}

      <Button onClick={() => setShowResults(true)} className="mb-4">
        Oblicz wynik końcowy
      </Button>

      {showResults && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Wyniki końcowe</h2>
          <div className="flex justify-between mb-8">
            <div className="w-1/2 pr-4">
            <p className={cn("text-3xl font-bold mb-4", getScoreColor(readinessScore))}>
                Gotowość: {readinessScore.toFixed(2)}%
              </p>
              <h3 className="text-lg font-semibold mb-2">Kluczowe obszary do poprawy:</h3>
              <ul className="list-disc pl-5 mt-2">
                {getRecommendations(readinessScore, 'readiness', questions, answers).map((rec: any, index: any) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 pl-4">
              <p className={cn("text-3xl font-bold mb-4", getScoreColor(effectivenessScore))}>
                Efektywność: {effectivenessScore.toFixed(2)}%
              </p>
              <h3 className="text-lg font-semibold mb-2">Proponowane działania:</h3>
              <ul className="list-disc pl-5 mt-2">
                {getRecommendations(effectivenessScore, 'effectiveness', questions, answers).map((rec: any, index: any) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;