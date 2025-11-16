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
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g4'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23ffb3ba;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3;stop-opacity:1' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg4' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.3' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='100' rx='18' ry='24' fill='url(%23g4)' filter='drop-shadow(0 4px 8px rgba(255,138,148,0.3))' /%3E%3Cellipse cx='100' cy='92' rx='10' ry='14' fill='url(%23lg4)' /%3E%3Cellipse cx='100' cy='105' rx='6' ry='8' fill='%23ffe0e5' opacity='0.5' /%3E%3C/svg%3E"
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
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g5'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23ffb3ba;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3;stop-opacity:1' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg5' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7;stop-opacity:0.9' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.4' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='108' rx='22' ry='30' fill='url(%23g5)' filter='drop-shadow(0 4px 10px rgba(255,138,148,0.35))' /%3E%3Cellipse cx='100' cy='95' rx='14' ry='18' fill='url(%23lg5)' /%3E%3Ccircle cx='100' cy='100' r='4' fill='%23ff6b7a' opacity='0.8'%3E%3Canimate attributeName='r' values='4;5;4' dur='1s' repeatCount='indefinite' /%3E%3C/circle%3E%3Cellipse cx='100' cy='115' rx='8' ry='10' fill='%23ffe0e5' opacity='0.6' /%3E%3C/svg%3E"
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
    fetalImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='g8'%3E%3Cstop offset='0%25' style='stop-color:%23ffc9d0' /%3E%3Cstop offset='60%25' style='stop-color:%23ffb3ba' /%3E%3Cstop offset='100%25' style='stop-color:%23ff9aa3' /%3E%3C/radialGradient%3E%3ClinearGradient id='lg8'%3E%3Cstop offset='0%25' style='stop-color:%23fff5f7;stop-opacity:0.95' /%3E%3Cstop offset='100%25' style='stop-color:%23ffd4d8;stop-opacity:0.5' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='100' cy='115' rx='26' ry='40' fill='url(%23g8)' filter='drop-shadow(0 5px 12px rgba(255,138,148,0.4))' /%3E%3Cellipse cx='100' cy='85' rx='20' ry='24' fill='url(%23lg8)' /%3E%3Ccircle cx='94' cy='82' r='3' fill='%23333' opacity='0.9' /%3E%3Ccircle cx='106' cy='82' r='3' fill='%23333' opacity='0.9' /%3E%3Cellipse cx='94' cy='80' rx='1.5' ry='1' fill='%23fff' opacity='0.7' /%3E%3Cellipse cx='106' cy='80' rx='1.5' ry='1' fill='%23fff' opacity='0.7' /%3E%3Cpath d='M 97 92 Q 100 94 103 92' stroke='%23ff6b7a' stroke-width='1.5' fill='none' opacity='0.8' /%3E%3Cellipse cx='82' cy='118' rx='10' ry='14' fill='%23ffb3ba' opacity='0.7' /%3E%3Cellipse cx='118' cy='118' rx='10' ry='14' fill='%23ffb3ba' opacity='0.7' /%3E%3Cellipse cx='82' cy='142' rx='8' ry='12' fill='%23ffb3ba' opacity='0.65' /%3E%3Cellipse cx='118' cy='142' rx='8' ry='12' fill='%23ffb3ba' opacity='0.65' /%3E%3Cellipse cx='100' cy='100' rx='6' ry='8' fill='%23ffe0e5' opacity='0.6' /%3E%3C/svg%3E"
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
  return Math.min(Math.max(weeks, 4), 40);
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
