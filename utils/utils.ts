export const getRecommendations = (score: any, section: any, questions: any, answers: any) => {
    const lowScoreQuestions = questions[section].filter((q:any) => (answers[q.id] || 0) <= 3);
    return lowScoreQuestions.map((q: any )=> {
      switch(q.category) {
        case 'org':
          return 'Usprawnianie organizacji i zarządzania projektem';
        case 'infra':
          return 'Wzmacnianie infrastruktury IT i bezpieczeństwa';
        case 'training':
          return 'Intensyfikacja szkoleń dla użytkowników';
        case 'cost':
          return 'Optymalizacja zarządzania kosztami i licencjami';
        case 'collab':
          return 'Ulepszanie narzędzi do współpracy i komunikacji';
        case 'auto':
          return 'Zwiększanie automatyzacji procesów biznesowych';
        case 'satisfaction':
          return 'Poprawa zadowolenia pracowników z narzędzi';
        default:
          return 'Zwrócenie uwagi na ten obszar';
      }
    });
  };


