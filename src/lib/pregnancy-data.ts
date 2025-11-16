export interface WeekData {
  week: number;
  size: string;
  comparison: string;
  weight: string;
  description: string;
  developments: string[];
  motherTips: string[];
  fetalImage: string;
}

export const pregnancyWeeks: WeekData[] = [
  {
    week: 1,
    size: "0.1mm",
    comparison: "Ponto microscópico",
    weight: "< 0.1g",
    description: "Primeira semana de gestação. O óvulo está sendo fertilizado.",
    developments: [
      "Fertilização do óvulo",
      "Início da divisão celular",
      "Formação do zigoto"
    ],
    motherTips: [
      "Comece a tomar ácido fólico",
      "Mantenha alimentação saudável",
      "Evite álcool e cigarro"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g1'%3E%3Cstop offset='0%25' style='stop-color:%23ffd4d8' /%3E%3Cstop offset='100%25' style='stop-color:%23ffb3ba' /%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='12' fill='url(%23g1)' opacity='0.9' /%3E%3Ccircle cx='100' cy='100' r='8' fill='%23ffe0e5' opacity='0.7' /%3E%3C/svg%3E"
  },
  {
    week: 2,
    size: "0.2mm",
    comparison: "Grão de areia",
    weight: "< 0.1g",
    description: "O embrião está se desenvolvendo rapidamente.",
    developments: [
      "Divisão celular acelerada",
      "Formação da blástula",
      "Preparação para implantação"
    ],
    motherTips: [
      "Continue com ácido fólico",
      "Mantenha rotina saudável",
      "Evite medicamentos sem orientação"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g2'%3E%3Cstop offset='0%25' style='stop-color:%23ffd4d8' /%3E%3Cstop offset='100%25' style='stop-color:%23ffb3ba' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='100' rx='14' ry='18' fill='url(%23g2)' opacity='0.9' /%3E%3Cellipse cx='100' cy='95' rx='9' ry='12' fill='%23ffe0e5' opacity='0.7' /%3E%3C/svg%3E"
  },
  {
    week: 3,
    size: "0.5mm",
    comparison: "Cabeça de alfinete",
    weight: "< 0.5g",
    description: "O embrião está se implantando no útero.",
    developments: [
      "Implantação no útero",
      "Início da formação da placenta",
      "Células se especializando"
    ],
    motherTips: [
      "Descanse adequadamente",
      "Mantenha hidratação",
      "Evite estresse excessivo"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g3'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='100%25' style='stop-color:%23ffb3ba' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='100' rx='16' ry='22' fill='url(%23g3)' filter='drop-shadow(0 3px 6px rgba(255,138,148,0.25))' /%3E%3Cellipse cx='100' cy='93' rx='9' ry='13' fill='%23ffe0e5' opacity='0.6' /%3E%3C/svg%3E"
  },
  {
    week: 4,
    size: "2mm",
    comparison: "Semente de papoula",
    weight: "< 1g",
    description: "O embrião está se implantando no útero. As células estão se dividindo rapidamente.",
    developments: [
      "Formação do saco gestacional",
      "Início da placenta",
      "Células se dividindo rapidamente"
    ],
    motherTips: [
      "Comece a tomar ácido fólico",
      "Evite álcool e cigarro",
      "Mantenha alimentação saudável"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g4'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='50%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg4'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='100' rx='18' ry='24' fill='url(%23g4)' filter='drop-shadow(0 4px 8px rgba(255,138,148,0.3))' /%3E%3Cellipse cx='100' cy='92' rx='10' ry='14' fill='url(%23lg4)' /%3E%3Cellipse cx='100' cy='105' rx='6' ry='8' fill='%23ffe0e5' opacity='0.5' /%3E%3C/svg%3E"
  },
  {
    week: 5,
    size: "3mm",
    comparison: "Semente de gergelim",
    weight: "< 1g",
    description: "O coração do bebê começa a bater! O tubo neural está se formando.",
    developments: [
      "Coração começa a bater",
      "Formação do tubo neural",
      "Início do sistema circulatório"
    ],
    motherTips: [
      "Agende primeira consulta pré-natal",
      "Continue com ácido fólico",
      "Descanse quando necessário"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g5'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='50%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg5'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7;stop-opacity:0.9' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.4' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='108' rx='22' ry='30' fill='url(%23g5)' filter='drop-shadow(0 4px 10px rgba(255,138,148,0.35))' /%3E%3Cellipse cx='100' cy='95' rx='14' ry='18' fill='url(%23lg5)' /%3E%3Ccircle cx='100' cy='100' r='4' fill='%23ff6b7a' opacity='0.8'%3E%3Canimate attributeName='r' values='4;5;4' dur='1s' repeatCount='indefinite' /%3E%3C/circle%3E%3Cellipse cx='100' cy='115' rx='8' ry='10' fill='%23ffe0e5' opacity='0.6' /%3E%3C/svg%3E"
  },
  {
    week: 6,
    size: "5mm",
    comparison: "Ervilha",
    weight: "< 1g",
    description: "O coração bate regularmente. Braços e pernas começam a se formar.",
    developments: [
      "Batimentos cardíacos regulares",
      "Início da formação de braços e pernas",
      "Desenvolvimento do cérebro"
    ],
    motherTips: [
      "Faça refeições pequenas e frequentes",
      "Mantenha-se hidratada",
      "Descanse bastante"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g6'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='50%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='110' rx='24' ry='32' fill='url(%23g6)' filter='drop-shadow(0 4px 10px rgba(255,138,148,0.35))' /%3E%3Cellipse cx='100' cy='92' rx='16' ry='20' fill='%23fff5f7' opacity='0.9' /%3E%3Ccircle cx='100' cy='98' r='4.5' fill='%23ff6b7a' opacity='0.85'%3E%3Canimate attributeName='r' values='4.5;5.5;4.5' dur='0.9s' repeatCount='indefinite' /%3E%3C/circle%3E%3Cellipse cx='85' cy='115' rx='8' ry='11' fill='%23ffb3ba' opacity='0.65' /%3E%3Cellipse cx='115' cy='115' rx='8' ry='11' fill='%23ffb3ba' opacity='0.65' /%3E%3C/svg%3E"
  },
  {
    week: 7,
    size: "1cm",
    comparison: "Mirtilo",
    weight: "< 1g",
    description: "O embrião está crescendo rapidamente. Dedos começam a se formar.",
    developments: [
      "Formação inicial dos dedos",
      "Desenvolvimento dos olhos",
      "Crescimento acelerado"
    ],
    motherTips: [
      "Evite alimentos crus",
      "Use roupas confortáveis",
      "Mantenha consultas regulares"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g7'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='55%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='112' rx='25' ry='36' fill='url(%23g7)' filter='drop-shadow(0 5px 11px rgba(255,138,148,0.38))' /%3E%3Cellipse cx='100' cy='88' rx='18' ry='22' fill='%23fff5f7' opacity='0.92' /%3E%3Ccircle cx='96' cy='85' r='2.5' fill='%23333' opacity='0.8' /%3E%3Ccircle cx='104' cy='85' r='2.5' fill='%23333' opacity='0.8' /%3E%3Cellipse cx='83' cy='115' rx='9' ry='12' fill='%23ffb3ba' opacity='0.68' /%3E%3Cellipse cx='117' cy='115' rx='9' ry='12' fill='%23ffb3ba' opacity='0.68' /%3E%3C/svg%3E"
  },
  {
    week: 8,
    size: "1.6cm",
    comparison: "Framboesa",
    weight: "1g",
    description: "Todos os órgãos principais estão se formando. O bebê começa a se mexer.",
    developments: [
      "Formação de dedos das mãos e pés",
      "Desenvolvimento dos olhos",
      "Início da formação dos ossos"
    ],
    motherTips: [
      "Hidrate-se bem",
      "Faça refeições pequenas e frequentes",
      "Use roupas confortáveis"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g8'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg8'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7;stop-opacity:0.95' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.5' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='115' rx='26' ry='40' fill='url(%23g8)' filter='drop-shadow(0 5px 12px rgba(255,138,148,0.4))' /%3E%3Cellipse cx='100' cy='85' rx='20' ry='24' fill='url(%23lg8)' /%3E%3Ccircle cx='94' cy='82' r='3' fill='%23333' opacity='0.9' /%3E%3Ccircle cx='106' cy='82' r='3' fill='%23333' opacity='0.9' /%3E%3Cellipse cx='94' cy='80' rx='1.5' ry='1' fill='%23fff' opacity='0.7' /%3E%3Cellipse cx='106' cy='80' rx='1.5' ry='1' fill='%23fff' opacity='0.7' /%3E%3Cpath d='M 97 92 Q 100 94 103 92' stroke='%23ff6b7a' stroke-width='1.5' fill='none' opacity='0.8' /%3E%3Cellipse cx='82' cy='118' rx='10' ry='14' fill='%23ffb3ba' opacity='0.7' /%3E%3Cellipse cx='118' cy='118' rx='10' ry='14' fill='%23ffb3ba' opacity='0.7' /%3E%3Cellipse cx='82' cy='142' rx='8' ry='12' fill='%23ffb3ba' opacity='0.65' /%3E%3Cellipse cx='118' cy='142' rx='8' ry='12' fill='%23ffb3ba' opacity='0.65' /%3E%3C/svg%3E"
  },
  {
    week: 9,
    size: "2.3cm",
    comparison: "Cereja",
    weight: "2g",
    description: "O bebê já se parece com um ser humano em miniatura.",
    developments: [
      "Rosto mais definido",
      "Dedos separados",
      "Movimentos mais coordenados"
    ],
    motherTips: [
      "Continue com vitaminas pré-natais",
      "Evite cafeína em excesso",
      "Pratique exercícios leves"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g9'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='118' rx='27' ry='42' fill='url(%23g9)' filter='drop-shadow(0 5px 12px rgba(255,138,148,0.42))' /%3E%3Cellipse cx='100' cy='83' rx='21' ry='25' fill='%23fff5f7' opacity='0.95' /%3E%3Ccircle cx='93' cy='80' r='3.5' fill='%23333' /%3E%3Ccircle cx='107' cy='80' r='3.5' fill='%23333' /%3E%3Cellipse cx='93' cy='78.5' rx='1.8' ry='1.2' fill='%23fff' opacity='0.75' /%3E%3Cellipse cx='107' cy='78.5' rx='1.8' ry='1.2' fill='%23fff' opacity='0.75' /%3E%3Cpath d='M 96 91 Q 100 93.5 104 91' stroke='%23ff6b7a' stroke-width='1.8' fill='none' /%3E%3Cellipse cx='80' cy='120' rx='11' ry='15' fill='%23ffb3ba' opacity='0.72' /%3E%3Cellipse cx='120' cy='120' rx='11' ry='15' fill='%23ffb3ba' opacity='0.72' /%3E%3Cellipse cx='80' cy='145' rx='9' ry='13' fill='%23ffb3ba' opacity='0.68' /%3E%3Cellipse cx='120' cy='145' rx='9' ry='13' fill='%23ffb3ba' opacity='0.68' /%3E%3C/svg%3E"
  },
  {
    week: 10,
    size: "3.1cm",
    comparison: "Morango",
    weight: "4g",
    description: "Todos os órgãos vitais estão formados e começam a funcionar.",
    developments: [
      "Órgãos vitais funcionando",
      "Unhas começam a crescer",
      "Ossos se fortalecendo"
    ],
    motherTips: [
      "Mantenha alimentação equilibrada",
      "Faça caminhadas leves",
      "Durma bem"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g10'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='120' rx='28' ry='44' fill='url(%23g10)' filter='drop-shadow(0 5px 13px rgba(255,138,148,0.43))' /%3E%3Cellipse cx='100' cy='82' rx='22' ry='26' fill='%23fff5f7' /%3E%3Ccircle cx='92' cy='79' r='3.8' fill='%23333' /%3E%3Ccircle cx='108' cy='79' r='3.8' fill='%23333' /%3E%3Cellipse cx='92' cy='77.5' rx='2' ry='1.3' fill='%23fff' opacity='0.77' /%3E%3Cellipse cx='108' cy='77.5' rx='2' ry='1.3' fill='%23fff' opacity='0.77' /%3E%3Cpath d='M 95 90 Q 100 93 105 90' stroke='%23ff6b7a' stroke-width='1.9' fill='none' /%3E%3Cellipse cx='78' cy='122' rx='11.5' ry='16' fill='%23ffb3ba' opacity='0.73' /%3E%3Cellipse cx='122' cy='122' rx='11.5' ry='16' fill='%23ffb3ba' opacity='0.73' /%3E%3Cellipse cx='78' cy='148' rx='9.5' ry='14' fill='%23ffb3ba' opacity='0.69' /%3E%3Cellipse cx='122' cy='148' rx='9.5' ry='14' fill='%23ffb3ba' opacity='0.69' /%3E%3C/svg%3E"
  },
  {
    week: 11,
    size: "4.1cm",
    comparison: "Figo",
    weight: "7g",
    description: "O bebê está quase totalmente formado. Começa a engolir líquido amniótico.",
    developments: [
      "Engole líquido amniótico",
      "Cabelo começando a crescer",
      "Genitais se desenvolvendo"
    ],
    motherTips: [
      "Prepare-se para ultrassom",
      "Mantenha rotina de exercícios",
      "Cuide da saúde bucal"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g11'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='122' rx='30' ry='46' fill='url(%23g11)' filter='drop-shadow(0 6px 13px rgba(255,138,148,0.44))' /%3E%3Cellipse cx='100' cy='82' rx='24' ry='27' fill='%23fff5f7' /%3E%3Ccircle cx='91' cy='78' r='4' fill='%23333' /%3E%3Ccircle cx='109' cy='78' r='4' fill='%23333' /%3E%3Cellipse cx='91' cy='76.5' rx='2.2' ry='1.5' fill='%23fff' opacity='0.78' /%3E%3Cellipse cx='109' cy='76.5' rx='2.2' ry='1.5' fill='%23fff' opacity='0.78' /%3E%3Cpath d='M 94 90 Q 100 93.5 106 90' stroke='%23ff6b7a' stroke-width='2' fill='none' /%3E%3Cellipse cx='77' cy='124' rx='12' ry='17' fill='%23ffb3ba' opacity='0.74' /%3E%3Cellipse cx='123' cy='124' rx='12' ry='17' fill='%23ffb3ba' opacity='0.74' /%3E%3Cellipse cx='77' cy='150' rx='10' ry='15' fill='%23ffb3ba' opacity='0.7' /%3E%3Cellipse cx='123' cy='150' rx='10' ry='15' fill='%23ffb3ba' opacity='0.7' /%3E%3Cpath d='M 86 68 Q 100 62 114 68' stroke='%23ff9aa3' stroke-width='1.2' fill='none' opacity='0.5' /%3E%3C/svg%3E"
  },
  {
    week: 12,
    size: "5.4cm",
    comparison: "Limão",
    weight: "14g",
    description: "Fim do primeiro trimestre! O bebê já tem todos os órgãos formados.",
    developments: [
      "Rosto mais definido",
      "Unhas começam a crescer",
      "Sistema digestivo funcionando"
    ],
    motherTips: [
      "Faça ultrassom morfológico",
      "Enjoos podem diminuir",
      "Comece exercícios leves"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g12'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg12'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.6' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='125' rx='32' ry='50' fill='url(%23g12)' filter='drop-shadow(0 6px 14px rgba(255,138,148,0.45))' /%3E%3Cellipse cx='100' cy='85' rx='25' ry='28' fill='url(%23lg12)' /%3E%3Ccircle cx='92' cy='80' r='4' fill='%23333' /%3E%3Ccircle cx='108' cy='80' r='4' fill='%23333' /%3E%3Cellipse cx='92' cy='78' rx='2' ry='1.5' fill='%23fff' opacity='0.8' /%3E%3Cellipse cx='108' cy='78' rx='2' ry='1.5' fill='%23fff' opacity='0.8' /%3E%3Cpath d='M 95 92 Q 100 95 105 92' stroke='%23ff6b7a' stroke-width='2' fill='none' /%3E%3Cpath d='M 87 80 Q 89 76 92 80' stroke='%23333' stroke-width='0.8' fill='none' opacity='0.6' /%3E%3Cpath d='M 108 80 Q 111 76 113 80' stroke='%23333' stroke-width='0.8' fill='none' opacity='0.6' /%3E%3Cellipse cx='76' cy='125' rx='12' ry='18' fill='%23ffb3ba' opacity='0.75' /%3E%3Cellipse cx='124' cy='125' rx='12' ry='18' fill='%23ffb3ba' opacity='0.75' /%3E%3Cellipse cx='76' cy='152' rx='10' ry='16' fill='%23ffb3ba' opacity='0.7' /%3E%3Cellipse cx='124' cy='152' rx='10' ry='16' fill='%23ffb3ba' opacity='0.7' /%3E%3Cpath d='M 85 65 Q 100 58 115 65' stroke='%23ff9aa3' stroke-width='1.5' fill='none' opacity='0.5' /%3E%3Cellipse cx='100' cy='105' rx='8' ry='10' fill='%23ffe0e5' opacity='0.65' /%3E%3Cellipse cx='85' cy='88' rx='6' ry='7' fill='%23ffccd0' opacity='0.6' /%3E%3Cellipse cx='115' cy='88' rx='6' ry='7' fill='%23ffccd0' opacity='0.6' /%3E%3C/svg%3E"
  },
  {
    week: 13,
    size: "7.4cm",
    comparison: "Pêssego",
    weight: "23g",
    description: "Início do segundo trimestre. O bebê está crescendo rapidamente.",
    developments: [
      "Impressões digitais se formando",
      "Pode chupar o polegar",
      "Cordas vocais se desenvolvendo"
    ],
    motherTips: [
      "Energia pode aumentar",
      "Aproveite para viajar se desejar",
      "Continue com alimentação saudável"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g13'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='127' rx='33' ry='52' fill='url(%23g13)' filter='drop-shadow(0 6px 14px rgba(255,138,148,0.46))' /%3E%3Cellipse cx='100' cy='83' rx='26' ry='29' fill='%23fff5f7' /%3E%3Ccircle cx='91' cy='78' r='4.2' fill='%23333' /%3E%3Ccircle cx='109' cy='78' r='4.2' fill='%23333' /%3E%3Cellipse cx='91' cy='76' rx='2.3' ry='1.7' fill='%23fff' opacity='0.81' /%3E%3Cellipse cx='109' cy='76' rx='2.3' ry='1.7' fill='%23fff' opacity='0.81' /%3E%3Cpath d='M 94 91 Q 100 94.5 106 91' stroke='%23ff6b7a' stroke-width='2.2' fill='none' /%3E%3Cellipse cx='75' cy='127' rx='13' ry='19' fill='%23ffb3ba' opacity='0.76' /%3E%3Cellipse cx='125' cy='127' rx='13' ry='19' fill='%23ffb3ba' opacity='0.76' /%3E%3Cellipse cx='75' cy='155' rx='11' ry='17' fill='%23ffb3ba' opacity='0.71' /%3E%3Cellipse cx='125' cy='155' rx='11' ry='17' fill='%23ffb3ba' opacity='0.71' /%3E%3Cpath d='M 84 63 Q 100 55 116 63' stroke='%23ff9aa3' stroke-width='1.7' fill='none' opacity='0.55' /%3E%3C/svg%3E"
  },
  {
    week: 14,
    size: "8.7cm",
    comparison: "Nectarina",
    weight: "43g",
    description: "O bebê pode fazer caretas e até sorrir!",
    developments: [
      "Expressões faciais",
      "Pode fazer xixi",
      "Pescoço mais alongado"
    ],
    motherTips: [
      "Barriga pode começar a aparecer",
      "Use creme para estrias",
      "Mantenha-se ativa"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g14'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='102' cy='128' rx='34' ry='53' fill='url(%23g14)' filter='drop-shadow(0 6px 15px rgba(255,138,148,0.47))' /%3E%3Cellipse cx='100' cy='82' rx='27' ry='30' fill='%23fff5f7' /%3E%3Ccircle cx='90' cy='77' r='4.3' fill='%23333' /%3E%3Ccircle cx='110' cy='77' r='4.3' fill='%23333' /%3E%3Cellipse cx='90' cy='75' rx='2.4' ry='1.8' fill='%23fff' opacity='0.82' /%3E%3Cellipse cx='110' cy='75' rx='2.4' ry='1.8' fill='%23fff' opacity='0.82' /%3E%3Cpath d='M 93 90 Q 100 94 107 90' stroke='%23ff6b7a' stroke-width='2.3' fill='none' /%3E%3Cellipse cx='74' cy='128' rx='13.5' ry='20' fill='%23ffb3ba' opacity='0.77' /%3E%3Cellipse cx='126' cy='128' rx='13.5' ry='20' fill='%23ffb3ba' opacity='0.77' /%3E%3Cellipse cx='74' cy='157' rx='11.5' ry='17.5' fill='%23ffb3ba' opacity='0.72' /%3E%3Cellipse cx='126' cy='157' rx='11.5' ry='17.5' fill='%23ffb3ba' opacity='0.72' /%3E%3Cpath d='M 83 62 Q 100 53 117 62' stroke='%23ff9aa3' stroke-width='1.8' fill='none' opacity='0.58' /%3E%3C/svg%3E"
  },
  {
    week: 15,
    size: "10.1cm",
    comparison: "Maçã",
    weight: "70g",
    description: "O bebê pode ouvir sua voz! Os ossos estão ficando mais fortes.",
    developments: [
      "Audição se desenvolvendo",
      "Ossos endurecendo",
      "Movimentos mais ativos"
    ],
    motherTips: [
      "Converse com o bebê",
      "Ouça música relaxante",
      "Mantenha postura correta"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g15'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='103' cy='129' rx='35' ry='54' fill='url(%23g15)' filter='drop-shadow(0 7px 15px rgba(255,138,148,0.48))' /%3E%3Cellipse cx='100' cy='81' rx='27.5' ry='31' fill='%23fff5f7' /%3E%3Ccircle cx='90' cy='76' r='4.5' fill='%23333' /%3E%3Ccircle cx='110' cy='76' r='4.5' fill='%23333' /%3E%3Cellipse cx='90' cy='74' rx='2.5' ry='2' fill='%23fff' opacity='0.83' /%3E%3Cellipse cx='110' cy='74' rx='2.5' ry='2' fill='%23fff' opacity='0.83' /%3E%3Cpath d='M 93 89 Q 100 93.5 107 89' stroke='%23ff6b7a' stroke-width='2.4' fill='none' /%3E%3Cellipse cx='73' cy='129' rx='14' ry='20.5' fill='%23ffb3ba' opacity='0.77' /%3E%3Cellipse cx='127' cy='129' rx='14' ry='20.5' fill='%23ffb3ba' opacity='0.77' /%3E%3Cellipse cx='73' cy='159' rx='12' ry='18' fill='%23ffb3ba' opacity='0.73' /%3E%3Cellipse cx='127' cy='159' rx='12' ry='18' fill='%23ffb3ba' opacity='0.73' /%3E%3Cpath d='M 82 61 Q 100 51 118 61' stroke='%23ff9aa3' stroke-width='1.9' fill='none' opacity='0.6' /%3E%3C/svg%3E"
  },
  {
    week: 16,
    size: "11.6cm",
    comparison: "Abacate",
    weight: "100g",
    description: "O bebê pode começar a ouvir sons externos. Os movimentos ficam mais coordenados.",
    developments: [
      "Audição se desenvolvendo",
      "Movimentos mais coordenados",
      "Cabelo e sobrancelhas crescendo"
    ],
    motherTips: [
      "Converse com o bebê",
      "Use creme para estrias",
      "Mantenha atividade física regular"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g16'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg16'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.65' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='130' rx='36' ry='55' fill='url(%23g16)' filter='drop-shadow(0 7px 16px rgba(255,138,148,0.5))' /%3E%3Cellipse cx='100' cy='80' rx='28' ry='32' fill='url(%23lg16)' /%3E%3Ccircle cx='91' cy='75' r='4.5' fill='%23333' /%3E%3Ccircle cx='109' cy='75' r='4.5' fill='%23333' /%3E%3Cellipse cx='91' cy='73' rx='2.5' ry='2' fill='%23fff' opacity='0.85' /%3E%3Cellipse cx='109' cy='73' rx='2.5' ry='2' fill='%23fff' opacity='0.85' /%3E%3Cpath d='M 94 88 Q 100 91 106 88' stroke='%23ff6b7a' stroke-width='2.5' fill='none' /%3E%3Cpath d='M 86 75 Q 88 70 91 75' stroke='%23333' stroke-width='1' fill='none' opacity='0.7' /%3E%3Cpath d='M 109 75 Q 112 70 114 75' stroke='%23333' stroke-width='1' fill='none' opacity='0.7' /%3E%3Cellipse cx='73' cy='125' rx='14' ry='20' fill='%23ffb3ba' opacity='0.78' /%3E%3Cellipse cx='127' cy='125' rx='14' ry='20' fill='%23ffb3ba' opacity='0.78' /%3E%3Cellipse cx='73' cy='158' rx='12' ry='18' fill='%23ffb3ba' opacity='0.73' /%3E%3Cellipse cx='127' cy='158' rx='12' ry='18' fill='%23ffb3ba' opacity='0.73' /%3E%3Cpath d='M 83 60 Q 100 52 117 60' stroke='%23ff9aa3' stroke-width='2' fill='none' opacity='0.6' /%3E%3Cellipse cx='100' cy='108' rx='10' ry='12' fill='%23ffe0e5' opacity='0.7' /%3E%3Cellipse cx='82' cy='85' rx='7' ry='9' fill='%23ffccd0' opacity='0.65' /%3E%3Cellipse cx='118' cy='85' rx='7' ry='9' fill='%23ffccd0' opacity='0.65' /%3E%3Cpath d='M 95 98 L 105 98' stroke='%23ff9aa3' stroke-width='1' opacity='0.4' /%3E%3C/svg%3E"
  },
  {
    week: 17,
    size: "13cm",
    comparison: "Pera",
    weight: "140g",
    description: "O bebê está desenvolvendo gordura corporal. Pode começar a sonhar!",
    developments: [
      "Gordura corporal se formando",
      "Pode sonhar (sono REM)",
      "Reflexos mais desenvolvidos"
    ],
    motherTips: [
      "Durma de lado",
      "Use travesseiro entre as pernas",
      "Mantenha-se hidratada"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g17'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='102' cy='131' rx='37' ry='56' fill='url(%23g17)' filter='drop-shadow(0 7px 16px rgba(255,138,148,0.51))' /%3E%3Cellipse cx='100' cy='79' rx='29' ry='33' fill='%23fff5f7' /%3E%3Ccircle cx='90' cy='74' r='4.7' fill='%23333' /%3E%3Ccircle cx='110' cy='74' r='4.7' fill='%23333' /%3E%3Cellipse cx='90' cy='72' rx='2.7' ry='2.2' fill='%23fff' opacity='0.86' /%3E%3Cellipse cx='110' cy='72' rx='2.7' ry='2.2' fill='%23fff' opacity='0.86' /%3E%3Cpath d='M 93 87 Q 100 90.5 107 87' stroke='%23ff6b7a' stroke-width='2.6' fill='none' /%3E%3Cellipse cx='72' cy='126' rx='14.5' ry='21' fill='%23ffb3ba' opacity='0.79' /%3E%3Cellipse cx='128' cy='126' rx='14.5' ry='21' fill='%23ffb3ba' opacity='0.79' /%3E%3Cellipse cx='72' cy='160' rx='12.5' ry='18.5' fill='%23ffb3ba' opacity='0.74' /%3E%3Cellipse cx='128' cy='160' rx='12.5' ry='18.5' fill='%23ffb3ba' opacity='0.74' /%3E%3Cpath d='M 82 59 Q 100 50 118 59' stroke='%23ff9aa3' stroke-width='2.1' fill='none' opacity='0.62' /%3E%3C/svg%3E"
  },
  {
    week: 18,
    size: "14.2cm",
    comparison: "Pimentão",
    weight: "190g",
    description: "Você pode começar a sentir os primeiros movimentos do bebê!",
    developments: [
      "Movimentos mais perceptíveis",
      "Sistema nervoso amadurecendo",
      "Orelhas na posição final"
    ],
    motherTips: [
      "Fique atenta aos movimentos",
      "Faça ultrassom morfológico",
      "Aproveite essa fase especial"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g18'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='103' cy='132' rx='38' ry='57' fill='url(%23g18)' filter='drop-shadow(0 7px 17px rgba(255,138,148,0.52))' /%3E%3Cellipse cx='100' cy='78' rx='30' ry='34' fill='%23fff5f7' /%3E%3Ccircle cx='90' cy='73' r='4.8' fill='%23333' /%3E%3Ccircle cx='110' cy='73' r='4.8' fill='%23333' /%3E%3Cellipse cx='90' cy='71' rx='2.8' ry='2.3' fill='%23fff' opacity='0.87' /%3E%3Cellipse cx='110' cy='71' rx='2.8' ry='2.3' fill='%23fff' opacity='0.87' /%3E%3Cpath d='M 93 86 Q 100 90 107 86' stroke='%23ff6b7a' stroke-width='2.7' fill='none' /%3E%3Cellipse cx='71' cy='127' rx='15' ry='21.5' fill='%23ffb3ba' opacity='0.79' /%3E%3Cellipse cx='129' cy='127' rx='15' ry='21.5' fill='%23ffb3ba' opacity='0.79' /%3E%3Cellipse cx='71' cy='162' rx='13' ry='19' fill='%23ffb3ba' opacity='0.74' /%3E%3Cellipse cx='129' cy='162' rx='13' ry='19' fill='%23ffb3ba' opacity='0.74' /%3E%3Cpath d='M 81 58 Q 100 48 119 58' stroke='%23ff9aa3' stroke-width='2.2' fill='none' opacity='0.64' /%3E%3C/svg%3E"
  },
  {
    week: 19,
    size: "15.3cm",
    comparison: "Manga",
    weight: "240g",
    description: "O bebê está coberto por uma camada protetora chamada vérnix.",
    developments: [
      "Vérnix protegendo a pele",
      "Desenvolvimento dos sentidos",
      "Cabelo crescendo"
    ],
    motherTips: [
      "Pode descobrir o sexo no ultrassom",
      "Comece a pensar em nomes",
      "Fotografe a barriga"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g19'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='104' cy='133' rx='39' ry='58' fill='url(%23g19)' filter='drop-shadow(0 8px 17px rgba(255,138,148,0.53))' /%3E%3Cellipse cx='100' cy='77' rx='31' ry='35' fill='%23fff5f7' /%3E%3Ccircle cx='89' cy='72' r='4.9' fill='%23333' /%3E%3Ccircle cx='111' cy='72' r='4.9' fill='%23333' /%3E%3Cellipse cx='89' cy='70' rx='2.9' ry='2.4' fill='%23fff' opacity='0.88' /%3E%3Cellipse cx='111' cy='70' rx='2.9' ry='2.4' fill='%23fff' opacity='0.88' /%3E%3Cpath d='M 92 85 Q 100 89.5 108 85' stroke='%23ff6b7a' stroke-width='2.8' fill='none' /%3E%3Cellipse cx='70' cy='128' rx='15.5' ry='22' fill='%23ffb3ba' opacity='0.8' /%3E%3Cellipse cx='130' cy='128' rx='15.5' ry='22' fill='%23ffb3ba' opacity='0.8' /%3E%3Cellipse cx='70' cy='164' rx='13.5' ry='19.5' fill='%23ffb3ba' opacity='0.75' /%3E%3Cellipse cx='130' cy='164' rx='13.5' ry='19.5' fill='%23ffb3ba' opacity='0.75' /%3E%3Cpath d='M 80 57 Q 100 46 120 57' stroke='%23ff9aa3' stroke-width='2.3' fill='none' opacity='0.66' /%3E%3C/svg%3E"
  },
  {
    week: 20,
    size: "25.6cm",
    comparison: "Banana",
    weight: "300g",
    description: "Metade da gestação! Você pode começar a sentir os movimentos do bebê.",
    developments: [
      "Pele coberta por vérnix",
      "Impressões digitais formadas",
      "Bebê pode sugar o polegar"
    ],
    motherTips: [
      "Ultrassom morfológico detalhado",
      "Pode descobrir o sexo",
      "Durma de lado (preferencialmente esquerdo)"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g20'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg20'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.7' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='105' cy='135' rx='40' ry='60' fill='url(%23g20)' filter='drop-shadow(0 8px 18px rgba(255,138,148,0.55))' /%3E%3Cellipse cx='100' cy='75' rx='32' ry='36' fill='url(%23lg20)' /%3E%3Ccircle cx='90' cy='70' r='5' fill='%23333' /%3E%3Ccircle cx='110' cy='70' r='5' fill='%23333' /%3E%3Cellipse cx='90' cy='68' rx='3' ry='2.5' fill='%23fff' opacity='0.9' /%3E%3Cellipse cx='110' cy='68' rx='3' ry='2.5' fill='%23fff' opacity='0.9' /%3E%3Cpath d='M 93 84 Q 100 88 107 84' stroke='%23ff6b7a' stroke-width='3' fill='none' /%3E%3Cpath d='M 85 70 Q 87 64 90 70' stroke='%23333' stroke-width='1.2' fill='none' opacity='0.75' /%3E%3Cpath d='M 110 70 Q 113 64 115 70' stroke='%23333' stroke-width='1.2' fill='none' opacity='0.75' /%3E%3Cellipse cx='70' cy='130' rx='16' ry='22' fill='%23ffb3ba' opacity='0.8' /%3E%3Cellipse cx='132' cy='130' rx='16' ry='22' fill='%23ffb3ba' opacity='0.8' /%3E%3Cellipse cx='70' cy='165' rx='14' ry='20' fill='%23ffb3ba' opacity='0.75' /%3E%3Cellipse cx='132' cy='165' rx='14' ry='20' fill='%23ffb3ba' opacity='0.75' /%3E%3Cpath d='M 80 55 Q 100 45 120 55' stroke='%23ff9aa3' stroke-width='2.5' fill='none' opacity='0.7' /%3E%3Cellipse cx='100' cy='110' rx='12' ry='14' fill='%23ffe0e5' opacity='0.75' /%3E%3Cellipse cx='80' cy='82' rx='8' ry='10' fill='%23ffccd0' opacity='0.7' /%3E%3Cellipse cx='120' cy='82' rx='8' ry='10' fill='%23ffccd0' opacity='0.7' /%3E%3Cpath d='M 94 95 L 106 95' stroke='%23ff9aa3' stroke-width='1.5' opacity='0.5' /%3E%3Ccircle cx='100' cy='115' r='4' fill='%23ff9aa3' opacity='0.4' /%3E%3C/svg%3E"
  },
  {
    week: 21,
    size: "26.7cm",
    comparison: "Cenoura",
    weight: "360g",
    description: "O bebê está engolindo líquido amniótico regularmente.",
    developments: [
      "Sistema digestivo praticando",
      "Movimentos mais frequentes",
      "Sobrancelhas e cílios visíveis"
    ],
    motherTips: [
      "Conte os movimentos do bebê",
      "Mantenha alimentação rica em ferro",
      "Faça exercícios de respiração"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g21'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='106' cy='136' rx='40.5' ry='61' fill='url(%23g21)' filter='drop-shadow(0 8px 18px rgba(255,138,148,0.56))' /%3E%3Cellipse cx='100' cy='74' rx='32.5' ry='36.5' fill='%23fff5f7' /%3E%3Ccircle cx='89' cy='69' r='5.1' fill='%23333' /%3E%3Ccircle cx='111' cy='69' r='5.1' fill='%23333' /%3E%3Cellipse cx='89' cy='67' rx='3.1' ry='2.6' fill='%23fff' opacity='0.9' /%3E%3Cellipse cx='111' cy='67' rx='3.1' ry='2.6' fill='%23fff' opacity='0.9' /%3E%3Cpath d='M 92 83 Q 100 87.5 108 83' stroke='%23ff6b7a' stroke-width='3' fill='none' /%3E%3Cellipse cx='69' cy='131' rx='16.5' ry='22.5' fill='%23ffb3ba' opacity='0.81' /%3E%3Cellipse cx='133' cy='131' rx='16.5' ry='22.5' fill='%23ffb3ba' opacity='0.81' /%3E%3Cellipse cx='69' cy='167' rx='14.5' ry='20.5' fill='%23ffb3ba' opacity='0.76' /%3E%3Cellipse cx='133' cy='167' rx='14.5' ry='20.5' fill='%23ffb3ba' opacity='0.76' /%3E%3Cpath d='M 79 54 Q 100 43 121 54' stroke='%23ff9aa3' stroke-width='2.6' fill='none' opacity='0.71' /%3E%3C/svg%3E"
  },
  {
    week: 22,
    size: "27.8cm",
    comparison: "Abóbora pequena",
    weight: "430g",
    description: "O bebê está desenvolvendo padrões de sono e vigília.",
    developments: [
      "Padrão de sono definido",
      "Lábios mais definidos",
      "Pode responder a estímulos"
    ],
    motherTips: [
      "Observe os horários de movimento",
      "Converse e cante para o bebê",
      "Descanse quando o bebê descansar"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g22'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='107' cy='137' rx='41' ry='61.5' fill='url(%23g22)' filter='drop-shadow(0 8px 19px rgba(255,138,148,0.57))' /%3E%3Cellipse cx='100' cy='73' rx='33' ry='37' fill='%23fff5f7' /%3E%3Ccircle cx='89' cy='68' r='5.2' fill='%23333' /%3E%3Ccircle cx='111' cy='68' r='5.2' fill='%23333' /%3E%3Cellipse cx='89' cy='66' rx='3.2' ry='2.7' fill='%23fff' opacity='0.91' /%3E%3Cellipse cx='111' cy='66' rx='3.2' ry='2.7' fill='%23fff' opacity='0.91' /%3E%3Cpath d='M 92 82 Q 100 87 108 82' stroke='%23ff6b7a' stroke-width='3.1' fill='none' /%3E%3Cellipse cx='68' cy='132' rx='17' ry='23' fill='%23ffb3ba' opacity='0.81' /%3E%3Cellipse cx='134' cy='132' rx='17' ry='23' fill='%23ffb3ba' opacity='0.81' /%3E%3Cellipse cx='68' cy='169' rx='15' ry='21' fill='%23ffb3ba' opacity='0.76' /%3E%3Cellipse cx='134' cy='169' rx='15' ry='21' fill='%23ffb3ba' opacity='0.76' /%3E%3Cpath d='M 78 53 Q 100 41 122 53' stroke='%23ff9aa3' stroke-width='2.7' fill='none' opacity='0.72' /%3E%3C/svg%3E"
  },
  {
    week: 23,
    size: "28.9cm",
    comparison: "Toranja",
    weight: "500g",
    description: "O bebê pode ouvir claramente sua voz e outros sons.",
    developments: [
      "Audição bem desenvolvida",
      "Pele ainda enrugada",
      "Gordura começando a se acumular"
    ],
    motherTips: [
      "Leia histórias para o bebê",
      "Evite ruídos muito altos",
      "Mantenha ambiente tranquilo"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g23'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='107' cy='137' rx='41.5' ry='61.8' fill='url(%23g23)' filter='drop-shadow(0 9px 19px rgba(255,138,148,0.58))' /%3E%3Cellipse cx='100' cy='72' rx='33.5' ry='37.5' fill='%23fff5f7' /%3E%3Ccircle cx='88' cy='67' r='5.3' fill='%23333' /%3E%3Ccircle cx='112' cy='67' r='5.3' fill='%23333' /%3E%3Cellipse cx='88' cy='65' rx='3.3' ry='2.8' fill='%23fff' opacity='0.91' /%3E%3Cellipse cx='112' cy='65' rx='3.3' ry='2.8' fill='%23fff' opacity='0.91' /%3E%3Cpath d='M 91 81 Q 100 86.5 109 81' stroke='%23ff6b7a' stroke-width='3.2' fill='none' /%3E%3Cellipse cx='67' cy='132' rx='17.5' ry='23.5' fill='%23ffb3ba' opacity='0.82' /%3E%3Cellipse cx='135' cy='132' rx='17.5' ry='23.5' fill='%23ffb3ba' opacity='0.82' /%3E%3Cellipse cx='67' cy='170' rx='15.5' ry='21.5' fill='%23ffb3ba' opacity='0.77' /%3E%3Cellipse cx='135' cy='170' rx='15.5' ry='21.5' fill='%23ffb3ba' opacity='0.77' /%3E%3Cpath d='M 77 52 Q 100 39 123 52' stroke='%23ff9aa3' stroke-width='2.8' fill='none' opacity='0.73' /%3E%3C/svg%3E"
  },
  {
    week: 24,
    size: "30cm",
    comparison: "Espiga de milho",
    weight: "600g",
    description: "Os pulmões estão se desenvolvendo. O bebê responde a sons e toques.",
    developments: [
      "Desenvolvimento dos pulmões",
      "Papilas gustativas funcionando",
      "Padrão de sono estabelecido"
    ],
    motherTips: [
      "Faça teste de diabetes gestacional",
      "Monitore pressão arterial",
      "Prepare o enxoval"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g24'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg24'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.75' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='108' cy='138' rx='42' ry='62' fill='url(%23g24)' filter='drop-shadow(0 9px 20px rgba(255,138,148,0.6))' /%3E%3Cellipse cx='100' cy='72' rx='34' ry='38' fill='url(%23lg24)' /%3E%3Ccircle cx='89' cy='67' r='5.5' fill='%23333' /%3E%3Ccircle cx='111' cy='67' r='5.5' fill='%23333' /%3E%3Cellipse cx='89' cy='65' rx='3.5' ry='3' fill='%23fff' opacity='0.92' /%3E%3Cellipse cx='111' cy='65' rx='3.5' ry='3' fill='%23fff' opacity='0.92' /%3E%3Cpath d='M 92 82 Q 100 86 108 82' stroke='%23ff6b7a' stroke-width='3' fill='none' /%3E%3Cpath d='M 84 67 Q 86 60 89 67' stroke='%23333' stroke-width='1.3' fill='none' opacity='0.8' /%3E%3Cpath d='M 111 67 Q 114 60 116 67' stroke='%23333' stroke-width='1.3' fill='none' opacity='0.8' /%3E%3Cellipse cx='68' cy='133' rx='17' ry='24' fill='%23ffb3ba' opacity='0.82' /%3E%3Cellipse cx='137' cy='133' rx='17' ry='24' fill='%23ffb3ba' opacity='0.82' /%3E%3Cellipse cx='68' cy='170' rx='15' ry='22' fill='%23ffb3ba' opacity='0.77' /%3E%3Cellipse cx='137' cy='170' rx='15' ry='22' fill='%23ffb3ba' opacity='0.77' /%3E%3Cpath d='M 78 52 Q 100 40 122 52' stroke='%23ff9aa3' stroke-width='3' fill='none' opacity='0.75' /%3E%3Cellipse cx='100' cy='112' rx='14' ry='16' fill='%23ffe0e5' opacity='0.78' /%3E%3Cellipse cx='78' cy='80' rx='9' ry='11' fill='%23ffccd0' opacity='0.72' /%3E%3Cellipse cx='122' cy='80' rx='9' ry='11' fill='%23ffccd0' opacity='0.72' /%3E%3Cpath d='M 93 93 L 107 93' stroke='%23ff9aa3' stroke-width='2' opacity='0.55' /%3E%3Ccircle cx='100' cy='118' r='5' fill='%23ff9aa3' opacity='0.45' /%3E%3Cpath d='M 95 75 Q 100 72 105 75' stroke='%23ff9aa3' stroke-width='1' fill='none' opacity='0.4' /%3E%3C/svg%3E"
  },
  {
    week: 25,
    size: "34.6cm",
    comparison: "Couve-flor",
    weight: "660g",
    description: "O bebê está ganhando peso rapidamente. Pode responder a toques na barriga.",
    developments: [
      "Ganho de peso acelerado",
      "Responde a toques externos",
      "Cabelo crescendo"
    ],
    motherTips: [
      "Massageie suavemente a barriga",
      "Converse com o bebê regularmente",
      "Mantenha boa postura"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g25'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='109' cy='139' rx='42.5' ry='62.5' fill='url(%23g25)' filter='drop-shadow(0 9px 20px rgba(255,138,148,0.61))' /%3E%3Cellipse cx='100' cy='71' rx='34.5' ry='38.5' fill='%23fff5f7' /%3E%3Ccircle cx='88' cy='66' r='5.6' fill='%23333' /%3E%3Ccircle cx='112' cy='66' r='5.6' fill='%23333' /%3E%3Cellipse cx='88' cy='64' rx='3.6' ry='3.1' fill='%23fff' opacity='0.93' /%3E%3Cellipse cx='112' cy='64' rx='3.6' ry='3.1' fill='%23fff' opacity='0.93' /%3E%3Cpath d='M 91 81 Q 100 85.5 109 81' stroke='%23ff6b7a' stroke-width='3.3' fill='none' /%3E%3Cellipse cx='67' cy='134' rx='17.5' ry='24.5' fill='%23ffb3ba' opacity='0.83' /%3E%3Cellipse cx='138' cy='134' rx='17.5' ry='24.5' fill='%23ffb3ba' opacity='0.83' /%3E%3Cellipse cx='67' cy='172' rx='15.5' ry='22.5' fill='%23ffb3ba' opacity='0.78' /%3E%3Cellipse cx='138' cy='172' rx='15.5' ry='22.5' fill='%23ffb3ba' opacity='0.78' /%3E%3Cpath d='M 77 51 Q 100 38 123 51' stroke='%23ff9aa3' stroke-width='3.1' fill='none' opacity='0.76' /%3E%3C/svg%3E"
  },
  {
    week: 26,
    size: "35.6cm",
    comparison: "Alface",
    weight: "760g",
    description: "Os olhos do bebê começam a abrir. Pode distinguir luz e escuridão.",
    developments: [
      "Olhos começam a abrir",
      "Distingue luz e sombra",
      "Pulmões se desenvolvendo"
    ],
    motherTips: [
      "Exponha a barriga à luz suave",
      "Mantenha ambiente iluminado durante o dia",
      "Prepare o quarto do bebê"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g26'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='109' cy='139' rx='43' ry='63' fill='url(%23g26)' filter='drop-shadow(0 9px 21px rgba(255,138,148,0.62))' /%3E%3Cellipse cx='100' cy='70' rx='35' ry='39' fill='%23fff5f7' /%3E%3Ccircle cx='88' cy='65' r='5.7' fill='%23333' /%3E%3Ccircle cx='112' cy='65' r='5.7' fill='%23333' /%3E%3Cellipse cx='88' cy='63' rx='3.7' ry='3.2' fill='%23fff' opacity='0.93' /%3E%3Cellipse cx='112' cy='63' rx='3.7' ry='3.2' fill='%23fff' opacity='0.93' /%3E%3Cpath d='M 91 80 Q 100 85 109 80' stroke='%23ff6b7a' stroke-width='3.4' fill='none' /%3E%3Cellipse cx='66' cy='134' rx='18' ry='25' fill='%23ffb3ba' opacity='0.83' /%3E%3Cellipse cx='139' cy='134' rx='18' ry='25' fill='%23ffb3ba' opacity='0.83' /%3E%3Cellipse cx='66' cy='173' rx='16' ry='23' fill='%23ffb3ba' opacity='0.78' /%3E%3Cellipse cx='139' cy='173' rx='16' ry='23' fill='%23ffb3ba' opacity='0.78' /%3E%3Cpath d='M 76 50 Q 100 36 124 50' stroke='%23ff9aa3' stroke-width='3.2' fill='none' opacity='0.77' /%3E%3C/svg%3E"
  },
  {
    week: 27,
    size: "36.6cm",
    comparison: "Brócolis",
    weight: "875g",
    description: "Fim do segundo trimestre! O bebê está praticando respirar.",
    developments: [
      "Praticando movimentos respiratórios",
      "Cérebro muito ativo",
      "Pode sonhar regularmente"
    ],
    motherTips: [
      "Prepare-se para o terceiro trimestre",
      "Faça curso de preparação para o parto",
      "Descanse sempre que possível"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g27'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='109' cy='139' rx='43.5' ry='63.5' fill='url(%23g27)' filter='drop-shadow(0 10px 21px rgba(255,138,148,0.63))' /%3E%3Cellipse cx='100' cy='69' rx='35.5' ry='39.5' fill='%23fff5f7' /%3E%3Ccircle cx='87' cy='64' r='5.8' fill='%23333' /%3E%3Ccircle cx='113' cy='64' r='5.8' fill='%23333' /%3E%3Cellipse cx='87' cy='62' rx='3.8' ry='3.3' fill='%23fff' opacity='0.94' /%3E%3Cellipse cx='113' cy='62' rx='3.8' ry='3.3' fill='%23fff' opacity='0.94' /%3E%3Cpath d='M 90 79 Q 100 84.5 110 79' stroke='%23ff6b7a' stroke-width='3.5' fill='none' /%3E%3Cellipse cx='65' cy='135' rx='18' ry='25.5' fill='%23ffb3ba' opacity='0.84' /%3E%3Cellipse cx='140' cy='135' rx='18' ry='25.5' fill='%23ffb3ba' opacity='0.84' /%3E%3Cellipse cx='65' cy='174' rx='16' ry='23.5' fill='%23ffb3ba' opacity='0.79' /%3E%3Cellipse cx='140' cy='174' rx='16' ry='23.5' fill='%23ffb3ba' opacity='0.79' /%3E%3Cpath d='M 75 49 Q 100 34 125 49' stroke='%23ff9aa3' stroke-width='3.3' fill='none' opacity='0.77' /%3E%3C/svg%3E"
  },
  {
    week: 28,
    size: "37.6cm",
    comparison: "Berinjela",
    weight: "1kg",
    description: "Início do terceiro trimestre! O bebê pode abrir os olhos.",
    developments: [
      "Olhos podem abrir e fechar",
      "Cérebro muito ativo",
      "Pode sonhar"
    ],
    motherTips: [
      "Consultas mais frequentes",
      "Prepare plano de parto",
      "Faça curso de gestante"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g28'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg28'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.78' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='110' cy='140' rx='44' ry='64' fill='url(%23g28)' filter='drop-shadow(0 10px 22px rgba(255,138,148,0.65))' /%3E%3Cellipse cx='100' cy='70' rx='36' ry='40' fill='url(%23lg28)' /%3E%3Ccircle cx='88' cy='65' r='6' fill='%23333' /%3E%3Ccircle cx='112' cy='65' r='6' fill='%23333' /%3E%3Cellipse cx='88' cy='63' rx='4' ry='3.5' fill='%23fff' opacity='0.94' /%3E%3Cellipse cx='112' cy='63' rx='4' ry='3.5' fill='%23fff' opacity='0.94' /%3E%3Cpath d='M 91 80 Q 100 84 109 80' stroke='%23ff6b7a' stroke-width='3.5' fill='none' /%3E%3Cpath d='M 83 65 Q 85 57 88 65' stroke='%23333' stroke-width='1.4' fill='none' opacity='0.82' /%3E%3Cpath d='M 112 65 Q 115 57 117 65' stroke='%23333' stroke-width='1.4' fill='none' opacity='0.82' /%3E%3Cellipse cx='66' cy='136' rx='18' ry='26' fill='%23ffb3ba' opacity='0.84' /%3E%3Cellipse cx='140' cy='136' rx='18' ry='26' fill='%23ffb3ba' opacity='0.84' /%3E%3Cellipse cx='66' cy='175' rx='16' ry='24' fill='%23ffb3ba' opacity='0.79' /%3E%3Cellipse cx='140' cy='175' rx='16' ry='24' fill='%23ffb3ba' opacity='0.79' /%3E%3Cpath d='M 76 48 Q 100 35 124 48' stroke='%23ff9aa3' stroke-width='3.5' fill='none' opacity='0.78' /%3E%3Cellipse cx='100' cy='114' rx='15' ry='18' fill='%23ffe0e5' opacity='0.8' /%3E%3Cellipse cx='76' cy='78' rx='10' ry='12' fill='%23ffccd0' opacity='0.74' /%3E%3Cellipse cx='124' cy='78' rx='10' ry='12' fill='%23ffccd0' opacity='0.74' /%3E%3Cpath d='M 92 91 L 108 91' stroke='%23ff9aa3' stroke-width='2.5' opacity='0.6' /%3E%3Ccircle cx='100' cy='120' r='6' fill='%23ff9aa3' opacity='0.5' /%3E%3Cpath d='M 94 73 Q 100 69 106 73' stroke='%23ff9aa3' stroke-width='1.2' fill='none' opacity='0.45' /%3E%3Cellipse cx='88' cy='72' rx='2' ry='1.5' fill='%23fff' opacity='0.6' /%3E%3Cellipse cx='112' cy='72' rx='2' ry='1.5' fill='%23fff' opacity='0.6' /%3E%3C/svg%3E"
  },
  {
    week: 29,
    size: "38.6cm",
    comparison: "Abóbora butternut",
    weight: "1.15kg",
    description: "O bebê está ficando mais forte. Chutes e socos são mais vigorosos.",
    developments: [
      "Músculos mais fortes",
      "Movimentos vigorosos",
      "Cérebro controlando temperatura"
    ],
    motherTips: [
      "Conte os movimentos fetais diariamente",
      "Use almofada para dormir",
      "Evite ficar muito tempo em pé"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g29'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='110' cy='140' rx='44.5' ry='64.5' fill='url(%23g29)' filter='drop-shadow(0 10px 22px rgba(255,138,148,0.66))' /%3E%3Cellipse cx='100' cy='69' rx='36.5' ry='40.5' fill='%23fff5f7' /%3E%3Ccircle cx='87' cy='64' r='6.1' fill='%23333' /%3E%3Ccircle cx='113' cy='64' r='6.1' fill='%23333' /%3E%3Cellipse cx='87' cy='62' rx='4.1' ry='3.6' fill='%23fff' opacity='0.94' /%3E%3Cellipse cx='113' cy='62' rx='4.1' ry='3.6' fill='%23fff' opacity='0.94' /%3E%3Cpath d='M 90 79 Q 100 83.5 110 79' stroke='%23ff6b7a' stroke-width='3.6' fill='none' /%3E%3Cellipse cx='65' cy='136' rx='18.5' ry='26.5' fill='%23ffb3ba' opacity='0.85' /%3E%3Cellipse cx='141' cy='136' rx='18.5' ry='26.5' fill='%23ffb3ba' opacity='0.85' /%3E%3Cellipse cx='65' cy='176' rx='16.5' ry='24.5' fill='%23ffb3ba' opacity='0.8' /%3E%3Cellipse cx='141' cy='176' rx='16.5' ry='24.5' fill='%23ffb3ba' opacity='0.8' /%3E%3Cpath d='M 75 47 Q 100 33 125 47' stroke='%23ff9aa3' stroke-width='3.6' fill='none' opacity='0.79' /%3E%3C/svg%3E"
  },
  {
    week: 30,
    size: "39.9cm",
    comparison: "Repolho",
    weight: "1.32kg",
    description: "O bebê está ganhando cerca de 200g por semana.",
    developments: [
      "Ganho de peso acelerado",
      "Pele menos enrugada",
      "Unhas crescendo"
    ],
    motherTips: [
      "Prepare a mala da maternidade",
      "Faça lista de contatos importantes",
      "Descanse com pernas elevadas"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g30'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='111' cy='141' rx='45' ry='65' fill='url(%23g30)' filter='drop-shadow(0 10px 23px rgba(255,138,148,0.67))' /%3E%3Cellipse cx='100' cy='68' rx='37' ry='41' fill='%23fff5f7' /%3E%3Ccircle cx='87' cy='63' r='6.2' fill='%23333' /%3E%3Ccircle cx='113' cy='63' r='6.2' fill='%23333' /%3E%3Cellipse cx='87' cy='61' rx='4.2' ry='3.7' fill='%23fff' opacity='0.95' /%3E%3Cellipse cx='113' cy='61' rx='4.2' ry='3.7' fill='%23fff' opacity='0.95' /%3E%3Cpath d='M 90 78 Q 100 83 110 78' stroke='%23ff6b7a' stroke-width='3.7' fill='none' /%3E%3Cellipse cx='64' cy='137' rx='19' ry='27' fill='%23ffb3ba' opacity='0.85' /%3E%3Cellipse cx='142' cy='137' rx='19' ry='27' fill='%23ffb3ba' opacity='0.85' /%3E%3Cellipse cx='64' cy='177' rx='17' ry='25' fill='%23ffb3ba' opacity='0.8' /%3E%3Cellipse cx='142' cy='177' rx='17' ry='25' fill='%23ffb3ba' opacity='0.8' /%3E%3Cpath d='M 74 46 Q 100 31 126 46' stroke='%23ff9aa3' stroke-width='3.7' fill='none' opacity='0.79' /%3E%3C/svg%3E"
  },
  {
    week: 31,
    size: "41.1cm",
    comparison: "Coco",
    weight: "1.5kg",
    description: "O bebê está se movendo para a posição de nascimento.",
    developments: [
      "Posicionamento para o parto",
      "Todos os sentidos funcionando",
      "Gordura aumentando"
    ],
    motherTips: [
      "Observe a posição do bebê",
      "Faça exercícios para ajudar no posicionamento",
      "Mantenha consultas regulares"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g31'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='111' cy='141' rx='45.5' ry='65.5' fill='url(%23g31)' filter='drop-shadow(0 11px 23px rgba(255,138,148,0.68))' /%3E%3Cellipse cx='100' cy='67' rx='37.5' ry='41.5' fill='%23fff5f7' /%3E%3Ccircle cx='86' cy='62' r='6.3' fill='%23333' /%3E%3Ccircle cx='114' cy='62' r='6.3' fill='%23333' /%3E%3Cellipse cx='86' cy='60' rx='4.3' ry='3.8' fill='%23fff' opacity='0.95' /%3E%3Cellipse cx='114' cy='60' rx='4.3' ry='3.8' fill='%23fff' opacity='0.95' /%3E%3Cpath d='M 89 77 Q 100 82.5 111 77' stroke='%23ff6b7a' stroke-width='3.8' fill='none' /%3E%3Cellipse cx='63' cy='137' rx='19' ry='27.5' fill='%23ffb3ba' opacity='0.86' /%3E%3Cellipse cx='143' cy='137' rx='19' ry='27.5' fill='%23ffb3ba' opacity='0.86' /%3E%3Cellipse cx='63' cy='178' rx='17' ry='25.5' fill='%23ffb3ba' opacity='0.81' /%3E%3Cellipse cx='143' cy='178' rx='17' ry='25.5' fill='%23ffb3ba' opacity='0.81' /%3E%3Cpath d='M 73 45 Q 100 29 127 45' stroke='%23ff9aa3' stroke-width='3.8' fill='none' opacity='0.8' /%3E%3C/svg%3E"
  },
  {
    week: 32,
    size: "42.4cm",
    comparison: "Abóbora",
    weight: "1.7kg",
    description: "O bebê está ganhando peso rapidamente. Todos os sentidos estão funcionando.",
    developments: [
      "Ganho rápido de peso",
      "Todos os sentidos ativos",
      "Posição para o parto"
    ],
    motherTips: [
      "Prepare a mala da maternidade",
      "Descanse bastante",
      "Monitore movimentos fetais"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g32'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg32'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.8' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='112' cy='142' rx='46' ry='66' fill='url(%23g32)' filter='drop-shadow(0 11px 24px rgba(255,138,148,0.7))' /%3E%3Cellipse cx='100' cy='68' rx='38' ry='42' fill='url(%23lg32)' /%3E%3Ccircle cx='87' cy='63' r='6.5' fill='%23333' /%3E%3Ccircle cx='113' cy='63' r='6.5' fill='%23333' /%3E%3Cellipse cx='87' cy='61' rx='4.5' ry='4' fill='%23fff' opacity='0.95' /%3E%3Cellipse cx='113' cy='61' rx='4.5' ry='4' fill='%23fff' opacity='0.95' /%3E%3Cpath d='M 90 78 Q 100 83 110 78' stroke='%23ff6b7a' stroke-width='4' fill='none' /%3E%3Cpath d='M 82 63 Q 84 54 87 63' stroke='%23333' stroke-width='1.5' fill='none' opacity='0.84' /%3E%3Cpath d='M 113 63 Q 116 54 118 63' stroke='%23333' stroke-width='1.5' fill='none' opacity='0.84' /%3E%3Cellipse cx='64' cy='138' rx='19' ry='28' fill='%23ffb3ba' opacity='0.86' /%3E%3Cellipse cx='142' cy='138' rx='19' ry='28' fill='%23ffb3ba' opacity='0.86' /%3E%3Cellipse cx='64' cy='178' rx='17' ry='26' fill='%23ffb3ba' opacity='0.81' /%3E%3Cellipse cx='142' cy='178' rx='17' ry='26' fill='%23ffb3ba' opacity='0.81' /%3E%3Cpath d='M 74 46 Q 100 32 126 46' stroke='%23ff9aa3' stroke-width='4' fill='none' opacity='0.8' /%3E%3Cellipse cx='100' cy='116' rx='16' ry='20' fill='%23ffe0e5' opacity='0.82' /%3E%3Cellipse cx='74' cy='76' rx='11' ry='13' fill='%23ffccd0' opacity='0.76' /%3E%3Cellipse cx='126' cy='76' rx='11' ry='13' fill='%23ffccd0' opacity='0.76' /%3E%3Cpath d='M 91 89 L 109 89' stroke='%23ff9aa3' stroke-width='3' opacity='0.65' /%3E%3Ccircle cx='100' cy='123' r='7' fill='%23ff9aa3' opacity='0.55' /%3E%3Cpath d='M 93 71 Q 100 66 107 71' stroke='%23ff9aa3' stroke-width='1.5' fill='none' opacity='0.5' /%3E%3Cellipse cx='87' cy='70' rx='2.5' ry='2' fill='%23fff' opacity='0.65' /%3E%3Cellipse cx='113' cy='70' rx='2.5' ry='2' fill='%23fff' opacity='0.65' /%3E%3Cpath d='M 95 88 Q 100 90 105 88' stroke='%23ff6b7a' stroke-width='1' fill='none' opacity='0.4' /%3E%3C/svg%3E"
  },
  {
    week: 33,
    size: "43.7cm",
    comparison: "Abacaxi",
    weight: "1.9kg",
    description: "O sistema imunológico do bebê está se desenvolvendo.",
    developments: [
      "Sistema imunológico ativo",
      "Ossos endurecendo (exceto crânio)",
      "Movimentos podem diminuir"
    ],
    motherTips: [
      "É normal sentir menos movimentos",
      "Bebê tem menos espaço",
      "Continue monitorando atividade fetal"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g33'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='112' cy='142' rx='46.5' ry='66.5' fill='url(%23g33)' filter='drop-shadow(0 11px 24px rgba(255,138,148,0.71))' /%3E%3Cellipse cx='100' cy='67' rx='38.5' ry='42.5' fill='%23fff5f7' /%3E%3Ccircle cx='86' cy='62' r='6.6' fill='%23333' /%3E%3Ccircle cx='114' cy='62' r='6.6' fill='%23333' /%3E%3Cellipse cx='86' cy='60' rx='4.6' ry='4.1' fill='%23fff' opacity='0.96' /%3E%3Cellipse cx='114' cy='60' rx='4.6' ry='4.1' fill='%23fff' opacity='0.96' /%3E%3Cpath d='M 89 77 Q 100 82.5 111 77' stroke='%23ff6b7a' stroke-width='4.1' fill='none' /%3E%3Cellipse cx='63' cy='138' rx='19.5' ry='28.5' fill='%23ffb3ba' opacity='0.87' /%3E%3Cellipse cx='143' cy='138' rx='19.5' ry='28.5' fill='%23ffb3ba' opacity='0.87' /%3E%3Cellipse cx='63' cy='179' rx='17.5' ry='26.5' fill='%23ffb3ba' opacity='0.82' /%3E%3Cellipse cx='143' cy='179' rx='17.5' ry='26.5' fill='%23ffb3ba' opacity='0.82' /%3E%3Cpath d='M 73 45 Q 100 30 127 45' stroke='%23ff9aa3' stroke-width='4.1' fill='none' opacity='0.81' /%3E%3C/svg%3E"
  },
  {
    week: 34,
    size: "45cm",
    comparison: "Melão cantalupo",
    weight: "2.1kg",
    description: "O vérnix (camada protetora) está ficando mais espesso.",
    developments: [
      "Vérnix mais espesso",
      "Gordura corporal aumentando",
      "Sistema nervoso amadurecendo"
    ],
    motherTips: [
      "Faça exercícios de respiração",
      "Pratique posições para o parto",
      "Finalize preparativos do quarto"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g34'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='113' cy='143' rx='47' ry='67' fill='url(%23g34)' filter='drop-shadow(0 11px 25px rgba(255,138,148,0.72))' /%3E%3Cellipse cx='100' cy='66' rx='39' ry='43' fill='%23fff5f7' /%3E%3Ccircle cx='86' cy='61' r='6.7' fill='%23333' /%3E%3Ccircle cx='114' cy='61' r='6.7' fill='%23333' /%3E%3Cellipse cx='86' cy='59' rx='4.7' ry='4.2' fill='%23fff' opacity='0.96' /%3E%3Cellipse cx='114' cy='59' rx='4.7' ry='4.2' fill='%23fff' opacity='0.96' /%3E%3Cpath d='M 89 76 Q 100 82 111 76' stroke='%23ff6b7a' stroke-width='4.2' fill='none' /%3E%3Cellipse cx='62' cy='139' rx='20' ry='29' fill='%23ffb3ba' opacity='0.87' /%3E%3Cellipse cx='144' cy='139' rx='20' ry='29' fill='%23ffb3ba' opacity='0.87' /%3E%3Cellipse cx='62' cy='180' rx='18' ry='27' fill='%23ffb3ba' opacity='0.82' /%3E%3Cellipse cx='144' cy='180' rx='18' ry='27' fill='%23ffb3ba' opacity='0.82' /%3E%3Cpath d='M 72 44 Q 100 28 128 44' stroke='%23ff9aa3' stroke-width='4.2' fill='none' opacity='0.81' /%3E%3C/svg%3E"
  },
  {
    week: 35,
    size: "46.2cm",
    comparison: "Melão honeydew",
    weight: "2.4kg",
    description: "Os rins estão completamente desenvolvidos. O fígado pode processar resíduos.",
    developments: [
      "Rins completamente desenvolvidos",
      "Fígado funcionando",
      "Circulação sanguínea completa"
    ],
    motherTips: [
      "Sinais de trabalho de parto",
      "Tenha mala pronta",
      "Descanse sempre que possível"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g35'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='113' cy='143' rx='47.5' ry='67.5' fill='url(%23g35)' filter='drop-shadow(0 12px 25px rgba(255,138,148,0.73))' /%3E%3Cellipse cx='100' cy='65' rx='39.5' ry='43.5' fill='%23fff5f7' /%3E%3Ccircle cx='85' cy='60' r='6.8' fill='%23333' /%3E%3Ccircle cx='115' cy='60' r='6.8' fill='%23333' /%3E%3Cellipse cx='85' cy='58' rx='4.8' ry='4.3' fill='%23fff' opacity='0.96' /%3E%3Cellipse cx='115' cy='58' rx='4.8' ry='4.3' fill='%23fff' opacity='0.96' /%3E%3Cpath d='M 88 75 Q 100 81.5 112 75' stroke='%23ff6b7a' stroke-width='4.3' fill='none' /%3E%3Cellipse cx='61' cy='139' rx='20' ry='29.5' fill='%23ffb3ba' opacity='0.88' /%3E%3Cellipse cx='145' cy='139' rx='20' ry='29.5' fill='%23ffb3ba' opacity='0.88' /%3E%3Cellipse cx='61' cy='181' rx='18' ry='27.5' fill='%23ffb3ba' opacity='0.83' /%3E%3Cellipse cx='145' cy='181' rx='18' ry='27.5' fill='%23ffb3ba' opacity='0.83' /%3E%3Cpath d='M 71 43 Q 100 26 129 43' stroke='%23ff9aa3' stroke-width='4.3' fill='none' opacity='0.82' /%3E%3C/svg%3E"
  },
  {
    week: 36,
    size: "47.4cm",
    comparison: "Melão",
    weight: "2.6kg",
    description: "O bebê está quase pronto! Os pulmões estão maduros.",
    developments: [
      "Pulmões maduros",
      "Gordura corporal aumentando",
      "Pronto para nascer"
    ],
    motherTips: [
      "Sinais de trabalho de parto",
      "Tenha telefones importantes à mão",
      "Relaxe e respire"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g36'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg36'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.82' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='114' cy='144' rx='48' ry='68' fill='url(%23g36)' filter='drop-shadow(0 12px 26px rgba(255,138,148,0.75))' /%3E%3Cellipse cx='100' cy='66' rx='40' ry='44' fill='url(%23lg36)' /%3E%3Ccircle cx='86' cy='61' r='7' fill='%23333' /%3E%3Ccircle cx='114' cy='61' r='7' fill='%23333' /%3E%3Cellipse cx='86' cy='59' rx='5' ry='4.5' fill='%23fff' opacity='0.96' /%3E%3Cellipse cx='114' cy='59' rx='5' ry='4.5' fill='%23fff' opacity='0.96' /%3E%3Cpath d='M 89 77 Q 100 82 111 77' stroke='%23ff6b7a' stroke-width='4.5' fill='none' /%3E%3Cpath d='M 81 61 Q 83 51 86 61' stroke='%23333' stroke-width='1.6' fill='none' opacity='0.86' /%3E%3Cpath d='M 114 61 Q 117 51 119 61' stroke='%23333' stroke-width='1.6' fill='none' opacity='0.86' /%3E%3Cellipse cx='62' cy='140' rx='20' ry='30' fill='%23ffb3ba' opacity='0.88' /%3E%3Cellipse cx='144' cy='140' rx='20' ry='30' fill='%23ffb3ba' opacity='0.88' /%3E%3Cellipse cx='62' cy='182' rx='18' ry='28' fill='%23ffb3ba' opacity='0.83' /%3E%3Cellipse cx='144' cy='182' rx='18' ry='28' fill='%23ffb3ba' opacity='0.83' /%3E%3Cpath d='M 72 44 Q 100 28 128 44' stroke='%23ff9aa3' stroke-width='4.5' fill='none' opacity='0.82' /%3E%3Cellipse cx='100' cy='118' rx='17' ry='22' fill='%23ffe0e5' opacity='0.84' /%3E%3Cellipse cx='72' cy='74' rx='12' ry='14' fill='%23ffccd0' opacity='0.78' /%3E%3Cellipse cx='128' cy='74' rx='12' ry='14' fill='%23ffccd0' opacity='0.78' /%3E%3Cpath d='M 90 88 L 110 88' stroke='%23ff9aa3' stroke-width='3.5' opacity='0.7' /%3E%3Ccircle cx='100' cy='126' r='8' fill='%23ff9aa3' opacity='0.6' /%3E%3Cpath d='M 92 69 Q 100 63 108 69' stroke='%23ff9aa3' stroke-width='1.8' fill='none' opacity='0.55' /%3E%3Cellipse cx='86' cy='68' rx='3' ry='2.5' fill='%23fff' opacity='0.7' /%3E%3Cellipse cx='114' cy='68' rx='3' ry='2.5' fill='%23fff' opacity='0.7' /%3E%3Cpath d='M 94 87 Q 100 89 106 87' stroke='%23ff6b7a' stroke-width='1.5' fill='none' opacity='0.45' /%3E%3Cellipse cx='100' cy='95' rx='8' ry='10' fill='%23ffe0e5' opacity='0.5' /%3E%3C/svg%3E"
  },
  {
    week: 37,
    size: "48.6cm",
    comparison: "Acelga",
    weight: "2.9kg",
    description: "O bebê é considerado a termo! Pode nascer a qualquer momento.",
    developments: [
      "Bebê a termo",
      "Totalmente desenvolvido",
      "Pronto para vida fora do útero"
    ],
    motherTips: [
      "Fique atenta aos sinais de trabalho de parto",
      "Mantenha-se calma",
      "Logo você conhecerá seu bebê"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g37'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='114' cy='144' rx='48.5' ry='68.5' fill='url(%23g37)' filter='drop-shadow(0 12px 26px rgba(255,138,148,0.76))' /%3E%3Cellipse cx='100' cy='65' rx='40.5' ry='44.5' fill='%23fff5f7' /%3E%3Ccircle cx='85' cy='60' r='7.2' fill='%23333' /%3E%3Ccircle cx='115' cy='60' r='7.2' fill='%23333' /%3E%3Cellipse cx='85' cy='58' rx='5.2' ry='4.7' fill='%23fff' opacity='0.97' /%3E%3Cellipse cx='115' cy='58' rx='5.2' ry='4.7' fill='%23fff' opacity='0.97' /%3E%3Cpath d='M 88 76 Q 100 81.5 112 76' stroke='%23ff6b7a' stroke-width='4.6' fill='none' /%3E%3Cellipse cx='61' cy='140' rx='20.5' ry='30.5' fill='%23ffb3ba' opacity='0.89' /%3E%3Cellipse cx='145' cy='140' rx='20.5' ry='30.5' fill='%23ffb3ba' opacity='0.89' /%3E%3Cellipse cx='61' cy='183' rx='18.5' ry='28.5' fill='%23ffb3ba' opacity='0.84' /%3E%3Cellipse cx='145' cy='183' rx='18.5' ry='28.5' fill='%23ffb3ba' opacity='0.84' /%3E%3Cpath d='M 71 43 Q 100 26 129 43' stroke='%23ff9aa3' stroke-width='4.6' fill='none' opacity='0.83' /%3E%3C/svg%3E"
  },
  {
    week: 38,
    size: "49.8cm",
    comparison: "Alho-poró",
    weight: "3.1kg",
    description: "O bebê continua ganhando peso. Todos os órgãos estão prontos.",
    developments: [
      "Ganho de peso contínuo",
      "Todos os órgãos maduros",
      "Reflexos perfeitos"
    ],
    motherTips: [
      "Contrações podem começar",
      "Mantenha-se hidratada",
      "Descanse o máximo possível"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g38'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='114' cy='145' rx='49' ry='69' fill='url(%23g38)' filter='drop-shadow(0 12px 27px rgba(255,138,148,0.77))' /%3E%3Cellipse cx='100' cy='64' rx='41' ry='45' fill='%23fff5f7' /%3E%3Ccircle cx='85' cy='59' r='7.3' fill='%23333' /%3E%3Ccircle cx='115' cy='59' r='7.3' fill='%23333' /%3E%3Cellipse cx='85' cy='57' rx='5.3' ry='4.8' fill='%23fff' opacity='0.97' /%3E%3Cellipse cx='115' cy='57' rx='5.3' ry='4.8' fill='%23fff' opacity='0.97' /%3E%3Cpath d='M 88 75 Q 100 81 112 75' stroke='%23ff6b7a' stroke-width='4.7' fill='none' /%3E%3Cellipse cx='60' cy='141' rx='21' ry='31' fill='%23ffb3ba' opacity='0.89' /%3E%3Cellipse cx='146' cy='141' rx='21' ry='31' fill='%23ffb3ba' opacity='0.89' /%3E%3Cellipse cx='60' cy='184' rx='19' ry='29' fill='%23ffb3ba' opacity='0.84' /%3E%3Cellipse cx='146' cy='184' rx='19' ry='29' fill='%23ffb3ba' opacity='0.84' /%3E%3Cpath d='M 70 42 Q 100 24 130 42' stroke='%23ff9aa3' stroke-width='4.7' fill='none' opacity='0.84' /%3E%3C/svg%3E"
  },
  {
    week: 39,
    size: "50.7cm",
    comparison: "Melancia pequena",
    weight: "3.3kg",
    description: "O bebê está pronto e esperando o momento certo para nascer.",
    developments: [
      "Completamente desenvolvido",
      "Aguardando o nascimento",
      "Cérebro e pulmões maduros"
    ],
    motherTips: [
      "Trabalho de parto pode começar a qualquer momento",
      "Mantenha-se calma e confiante",
      "Você está pronta!"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g39'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3C/defs%3E%3Cellipse cx='115' cy='145' rx='49.5' ry='69.5' fill='url(%23g39)' filter='drop-shadow(0 13px 27px rgba(255,138,148,0.78))' /%3E%3Cellipse cx='100' cy='64' rx='41.5' ry='45.5' fill='%23fff5f7' /%3E%3Ccircle cx='85' cy='59' r='7.4' fill='%23333' /%3E%3Ccircle cx='115' cy='59' r='7.4' fill='%23333' /%3E%3Cellipse cx='85' cy='57' rx='5.4' ry='4.9' fill='%23fff' opacity='0.97' /%3E%3Cellipse cx='115' cy='57' rx='5.4' ry='4.9' fill='%23fff' opacity='0.97' /%3E%3Cpath d='M 88 75 Q 100 80.5 112 75' stroke='%23ff6b7a' stroke-width='4.8' fill='none' /%3E%3Cellipse cx='60' cy='141' rx='21' ry='31.5' fill='%23ffb3ba' opacity='0.9' /%3E%3Cellipse cx='146' cy='141' rx='21' ry='31.5' fill='%23ffb3ba' opacity='0.9' /%3E%3Cellipse cx='60' cy='185' rx='19' ry='29.5' fill='%23ffb3ba' opacity='0.85' /%3E%3Cellipse cx='146' cy='185' rx='19' ry='29.5' fill='%23ffb3ba' opacity='0.85' /%3E%3Cpath d='M 70 42 Q 100 24 130 42' stroke='%23ff9aa3' stroke-width='4.8' fill='none' opacity='0.84' /%3E%3C/svg%3E"
  },
  {
    week: 40,
    size: "51.2cm",
    comparison: "Melancia",
    weight: "3.4kg",
    description: "Chegou a hora! O bebê está pronto para conhecer o mundo.",
    developments: [
      "Totalmente desenvolvido",
      "Pronto para respirar sozinho",
      "Reflexos de sucção ativos"
    ],
    motherTips: [
      "Fique atenta aos sinais",
      "Mantenha-se calma",
      "Logo você conhecerá seu bebê!"
    ],
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g40'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg40'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.85' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='115' cy='146' rx='50' ry='70' fill='url(%23g40)' filter='drop-shadow(0 13px 28px rgba(255,138,148,0.8))' /%3E%3Cellipse cx='100' cy='64' rx='42' ry='46' fill='url(%23lg40)' /%3E%3Ccircle cx='85' cy='59' r='7.5' fill='%23333' /%3E%3Ccircle cx='115' cy='59' r='7.5' fill='%23333' /%3E%3Cellipse cx='85' cy='57' rx='5.5' ry='5' fill='%23fff' opacity='0.97' /%3E%3Cellipse cx='115' cy='57' rx='5.5' ry='5' fill='%23fff' opacity='0.97' /%3E%3Cpath d='M 88 76 Q 100 81 112 76' stroke='%23ff6b7a' stroke-width='5' fill='none' /%3E%3Cpath d='M 80 59 Q 82 48 85 59' stroke='%23333' stroke-width='1.7' fill='none' opacity='0.88' /%3E%3Cpath d='M 115 59 Q 118 48 120 59' stroke='%23333' stroke-width='1.7' fill='none' opacity='0.88' /%3E%3Cellipse cx='60' cy='142' rx='21' ry='32' fill='%23ffb3ba' opacity='0.9' /%3E%3Cellipse cx='146' cy='142' rx='21' ry='32' fill='%23ffb3ba' opacity='0.9' /%3E%3Cellipse cx='60' cy='186' rx='19' ry='30' fill='%23ffb3ba' opacity='0.85' /%3E%3Cellipse cx='146' cy='186' rx='19' ry='30' fill='%23ffb3ba' opacity='0.85' /%3E%3Cpath d='M 70 42 Q 100 25 130 42' stroke='%23ff9aa3' stroke-width='5' fill='none' opacity='0.85' /%3E%3Cellipse cx='100' cy='120' rx='18' ry='24' fill='%23ffe0e5' opacity='0.86' /%3E%3Cellipse cx='70' cy='72' rx='13' ry='15' fill='%23ffccd0' opacity='0.8' /%3E%3Cellipse cx='130' cy='72' rx='13' ry='15' fill='%23ffccd0' opacity='0.8' /%3E%3Cpath d='M 89 87 L 111 87' stroke='%23ff9aa3' stroke-width='4' opacity='0.75' /%3E%3Ccircle cx='100' cy='129' r='9' fill='%23ff9aa3' opacity='0.65' /%3E%3Cpath d='M 91 67 Q 100 60 109 67' stroke='%23ff9aa3' stroke-width='2' fill='none' opacity='0.6' /%3E%3Cellipse cx='85' cy='66' rx='3.5' ry='3' fill='%23fff' opacity='0.75' /%3E%3Cellipse cx='115' cy='66' rx='3.5' ry='3' fill='%23fff' opacity='0.75' /%3E%3Cpath d='M 93 86 Q 100 88 107 86' stroke='%23ff6b7a' stroke-width='2' fill='none' opacity='0.5' /%3E%3Cellipse cx='100' cy='95' rx='10' ry='12' fill='%23ffe0e5' opacity='0.55' /%3E%3Ccircle cx='100' cy='110' r='7' fill='%23ff9aa3' opacity='0.45' /%3E%3C/svg%3E"
  }
];

export interface PregnancyProfile {
  name: string;
  age: number;
  height: number;
  weight: number;
  lastPeriod: string;
  dueDate: string;
  currentWeek: number;
  lifestyle: {
    exercise: string;
    diet: string;
    sleep: string;
    stress: string;
  };
  medicalHistory: {
    conditions: string[];
    medications: string[];
    allergies: string[];
  };
}

export function calculateDueDate(lastPeriod: string): string {
  const date = new Date(lastPeriod);
  date.setDate(date.getDate() + 280); // 40 semanas
  return date.toISOString().split('T')[0];
}

export function calculateCurrentWeek(lastPeriod: string): number {
  const start = new Date(lastPeriod);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(diffDays / 7);
  return Math.min(Math.max(weeks, 1), 40);
}

export function getBMI(weight: number, height: number): { value: number; category: string; recommendation: string } {
  const bmi = weight / ((height / 100) ** 2);
  
  let category = "";
  let recommendation = "";
  
  if (bmi < 18.5) {
    category = "Abaixo do peso";
    recommendation = "Ganho de peso recomendado: 12.5-18kg durante a gestação";
  } else if (bmi < 25) {
    category = "Peso normal";
    recommendation = "Ganho de peso recomendado: 11.5-16kg durante a gestação";
  } else if (bmi < 30) {
    category = "Sobrepeso";
    recommendation = "Ganho de peso recomendado: 7-11.5kg durante a gestação";
  } else {
    category = "Obesidade";
    recommendation = "Ganho de peso recomendado: 5-9kg durante a gestação. Consulte seu médico.";
  }
  
  return { value: parseFloat(bmi.toFixed(1)), category, recommendation };
}
