import { Questions } from '@/types/types';
import { Building, Shield, Users, DollarSign, Target, Zap, Smile } from 'lucide-react';
import React from 'react';

export const questions: Questions = {
    readiness: [
      { id: 'r1', type: 'slider', category: 'org', text: 'Czy firma posiada jasno określone cele wdrożenia Microsoft 365?', weight: 20 },
      { id: 'r2', type: 'slider', category: 'org', text: 'Czy firma posiada zespół projektowy do zarządzania wdrożeniem Microsoft 365?', weight: 20 },
      { id: 'r3', type: 'slider', category: 'org', text: 'Czy kadra zarządzająca jest zaangażowana w proces wdrożenia?', weight: 20 },
      { id: 'r4', type: 'switch', category: 'org', text: 'Czy istnieje plan migracji danych do chmury?', weight: 20 },
      { id: 'r5', type: 'switch', category: 'infra', text: 'Czy obecna infrastruktura sieciowa jest wystarczająca do obsługi usług chmurowych?', weight: 35 },
      { id: 'r6', type: 'slider', category: 'infra', text: 'Czy firma posiada zdefiniowane polityki bezpieczeństwa?', weight: 35 },
      { id: 'r7', type: 'slider', category: 'infra', text: 'Czy firma ma plan awaryjny oraz procedury odzyskiwania danych?', weight: 35 },
      { id: 'r8', type: 'switch', category: 'infra', text: 'Czy firma posiada odpowiednie łącze internetowe?', weight: 35 },
      { id: 'r9', type: 'slider', category: 'training', text: 'Czy firma przewidziała szkolenia dla pracowników?', weight: 20 },
      { id: 'r10', type: 'slider', category: 'training', text: 'Czy pracownicy są świadomi nadchodzących zmian?', weight: 20 },
      { id: 'r11', type: 'slider', category: 'cost', text: 'Czy firma zidentyfikowała swoje potrzeby licencyjne?', weight: 25 },
      { id: 'r12', type: 'slider', category: 'cost', text: 'Czy firma posiada budżet na wdrożenie i utrzymanie Microsoft 365?', weight: 25 },
    ],
    effectiveness: [
      { id: 'e1', type: 'slider', category: 'infra', text: 'Czy firma wdrożyła zabezpieczenia takie jak MFA?', weight: 30 },
      { id: 'e2', type: 'slider', category: 'infra', text: 'Czy firma monitoruje bezpieczeństwo w ramach Microsoft 365?', weight: 30 },
      { id: 'e3', type: 'slider', category: 'infra', text: 'Czy firma skutecznie rozwiązuje incydenty bezpieczeństwa?', weight: 30 },
      { id: 'e4', type: 'slider', category: 'collab', text: 'W jakim stopniu pracownicy wykorzystują Microsoft Teams?', weight: 25 },
      { id: 'e5', type: 'slider', category: 'collab', text: 'Czy SharePoint i OneDrive są wykorzystywane do zarządzania dokumentami?', weight: 25 },
      { id: 'e6', type: 'slider', category: 'collab', text: 'Czy narzędzia Microsoft 365 wpłynęły na poprawę komunikacji?', weight: 25 },
      { id: 'e7', type: 'slider', category: 'auto', text: 'Czy firma wdrożyła Power Automate do automatyzacji procesów?', weight: 20 },
      { id: 'e8', type: 'slider', category: 'auto', text: 'W jakim stopniu firma zintegrowała Microsoft 365 z istniejącymi systemami?', weight: 20 },
      { id: 'e9', type: 'slider', category: 'satisfaction', text: 'Jakie jest ogólne zadowolenie pracowników z Microsoft 365?', weight: 15 },
      { id: 'e10', type: 'slider', category: 'satisfaction', text: 'Czy Microsoft 365 wpłynął na poprawę efektywności pracy?', weight: 15 },
      { id: 'e11', type: 'slider', category: 'cost', text: 'Czy koszty są zgodne z założeniami budżetowymi?', weight: 10 },
      { id: 'e12', type: 'slider', category: 'cost', text: 'Czy firma zoptymalizowała licencje Microsoft 365?', weight: 10 },
    ]
  };


  export const categoryIcons = {
    org: <Building size={24} />,
    infra: <Shield size={24} />,
    training: <Users size={24} />,
    cost: <DollarSign size={24} />,
    collab: <Target size={24} />,
    auto: <Zap size={24} />,
    satisfaction: <Smile size={24} />,
  };