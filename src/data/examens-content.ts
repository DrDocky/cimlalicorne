export interface Preparation {
  label: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ExamenContent {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  corps: string;
  preparations: Preparation[];
  medicalProcedureName: string;
  medicalPreparation: string;
  faq: FaqItem[];
}

export const EXAMENS_CONTENT: Record<string, ExamenContent> = {

  "echographie": {
    metaTitle: "Échographie et Doppler à Saint-Lô — Centre La Licorne",
    metaDesc: "Réalisez votre échographie abdominale, pelvienne ou thyroïdienne au centre La Licorne à Saint-Lô. Tiers-payant pratiqué et résultats rapides sous 24h.",
    h1: "Échographie\n& Doppler",
    intro: "L'échographie est une technologie d'imagerie dynamique par ultrasons. Totalement non invasive, elle permet une analyse fine des tissus mous et des flux sanguins au sein du cabinet La Licorne à Saint-Lô.",
    corps: "L'échographie permet au radiologue de visualiser les organes internes (foie, reins, rate, thyroïde) ainsi que les structures articulaires (tendons, ligaments) en mouvement. C'est l'examen de référence pour détecter des inflammations, des calculs, des kystes ou des nodules.",
    preparations: [
      { label: "Échographie abdominale", text: "Être à jeun strict depuis 6h (ne pas manger, ne pas boire de boissons sucrées ou gazeuses, ne pas fumer)." },
      { label: "Échographie pelvienne", text: "Vessie pleine — boire 1 litre d'eau une heure avant l'examen et ne pas uriner jusqu'au passage en salle." },
      { label: "Autres échographies (thyroïde, tendons)", text: "Aucune préparation particulière n'est requise." },
    ],
    medicalProcedureName: "Échographie et Doppler",
    medicalPreparation: "Échographie abdominale : à jeun (6h). Échographie pelvienne : vessie pleine.",
    faq: [
      { q: "L'échographie est-elle remboursée à Saint-Lô ?", a: "Oui, l'échographie est un acte médical conventionné. Le Centre La Licorne pratique le tiers-payant sur la part obligatoire (Sécurité Sociale). Munissez-vous de votre carte vitale à jour." },
      { q: "Pourquoi n'effectuez-vous pas les échographies de grossesse ?", a: "Le suivi obstétrical nécessite une spécialisation et un équipement dédié. Notre centre se concentre sur l'imagerie diagnostique viscérale et musculo-squelettique pour garantir une prise en charge rapide des pathologies aiguës." },
      { q: "Combien de temps faut-il attendre pour les résultats ?", a: "Le radiologue vous donne un premier avis oral juste après l'examen. Le compte-rendu écrit validé est disponible sous 24h sur notre portail sécurisé." },
    ],
  },

  "mammographie": {
    metaTitle: "Mammographie à Saint-Lô — Centre de Sénologie La Licorne",
    metaDesc: "Examen de mammographie numérique et dépistage organisé (ADEM 50) à Saint-Lô. Équipe spécialisée, matériel basse dose et confort patient.",
    h1: "Mammographie\n& Sénologie",
    intro: "Le Centre La Licorne est agréé pour le dépistage organisé du cancer du sein (ADEM 50). Nous mettons notre expertise au service de la santé des femmes à Saint-Lô.",
    corps: "Entre 50 et 74 ans, la mammographie de dépistage est recommandée tous les deux ans. Cet examen est intégralement pris en charge par l'Assurance Maladie sans avance de frais. Il permet de détecter des lésions très précoces, indétectables à la palpation.",
    preparations: [
      { label: "Cosmétiques", text: "N'appliquez aucun produit (déodorant, lait corporel, talc ou parfum) sur le buste et les aisselles le jour de l'examen." },
      { label: "Anciens clichés", text: "Il est crucial d'apporter vos mammographies précédentes pour permettre au radiologue d'effectuer une comparaison évolutive." },
    ],
    medicalProcedureName: "Mammographie numérique",
    medicalPreparation: "Pas de cosmétiques sur le buste. Apporter anciens clichés.",
    faq: [
      { q: "La mammographie est-elle douloureuse ?", a: "L'examen nécessite une compression brève du sein pour assurer une image nette. Cela peut être inconfortable quelques secondes, mais n'est pas considéré comme douloureux." },
      { q: "Quand faire sa mammographie ?", a: "Idéalement, effectuez l'examen entre le 1er et le 12ème jour du cycle menstruel, période où les seins sont moins sensibles." },
      { q: "Pourquoi une double lecture (ADEM 50) ?", a: "Dans le cadre du dépistage organisé, une seconde lecture par un radiologue expert est systématique pour garantir une fiabilité maximale des résultats." },
    ],
  },

  "scanner": {
    metaTitle: "Scanner à Saint-Lô — Imagerie Médicale La Licorne",
    metaDesc: "Examen scanner avec ou sans injection à Saint-Lô. Exploration millimétrique haute définition pour un diagnostic précis. Prise de RDV rapide.",
    h1: "Scanner\nHaute Définition",
    intro: "Le scanner (ou tomodensitométrie) permet une exploration millimétrique du corps humain par coupes transversales. C'est l'examen de référence pour l'analyse approfondie des organes internes et des structures vasculaires.",
    corps: "Grâce à nos équipements de pointe, le scanner permet d'obtenir des images en trois dimensions d'une grande finesse. Il est indispensable pour le diagnostic de pathologies thoraciques, abdominales, neurologiques ou pour le suivi oncologique.",
    preparations: [
      { label: "Bilan Rénal", text: "Pour les examens avec injection d'iode, une prise de sang récente (créatinine) est obligatoire pour vérifier le bon fonctionnement de vos reins." },
      { label: "Allergies", text: "Signalez impérativement toute allergie connue au produit de contraste iodé lors de la prise de rendez-vous." },
    ],
    medicalProcedureName: "Scanner (TDM)",
    medicalPreparation: "Vérifier la fonction rénale si injection prévue. Signaler allergies à l'iode.",
    faq: [
      { q: "Qu'est-ce qu'une injection de produit de contraste ?", a: "Certains scanners nécessitent l'injection d'un produit à base d'iode pour mieux visualiser les vaisseaux et les organes. Une prise de sang préalable (créatinine) pourra vous être demandée." },
      { q: "Le scanner est-il douloureux ?", a: "Non, l'examen est totalement indolore et rapide. Vous devez simplement rester immobile pendant quelques secondes sous l'anneau." },
      { q: "Puis-je manger avant mon scanner ?", a: "Si votre examen nécessite une injection, il est recommandé de ne pas manger de repas solide 4h avant. Dans les autres cas, vous pouvez manger normalement." },
    ],
  },

  "radiographie": {
    metaTitle: "Radiographie Numérisée à Saint-Lô — Centre La Licorne",
    metaDesc: "Réalisez votre radiographie pulmonaire, osseuse ou articulaire à Saint-Lô. Équipement basse dose, tiers-payant et résultats rapides.",
    h1: "Radiographie\nNumérique",
    intro: "La radiographie est l'examen de référence pour l'étude du squelette, des articulations et du thorax. Au cabinet La Licorne, nous utilisons la technologie numérique pour garantir une précision diagnostique optimale.",
    corps: "Notre plateau technique est équipé de tables de radiologie numérique de dernière génération. Cette technologie permet d'ajuster précisément la dose de rayons X à la morphologie de chaque patient.",
    preparations: [
      { label: "Grossesse", text: "Il est impératif de signaler toute grossesse, même éventuelle, avant l'examen pour adapter les protocoles de protection." },
      { label: "Vêtements & Objets", text: "Il pourra vous être demandé de retirer vos bijoux et vêtements comportant du métal dans la zone examinée." },
    ],
    medicalProcedureName: "Radiographie numérique",
    medicalPreparation: "Aucune préparation. Signaler impérativement une grossesse.",
    faq: [
      { q: "Faut-il être à jeun pour une radiographie ?", a: "Non, aucune préparation alimentaire n'est nécessaire. Vous pouvez manger, boire et prendre vos médicaments normalement." },
      { q: "La radiographie est-elle dangereuse ?", a: "Nous utilisons des capteurs numériques haute sensibilité qui permettent de réduire considérablement les doses de rayons X. Le bénéfice diagnostique est largement supérieur au risque d'exposition." },
      { q: "Comment récupérer mes clichés ?", a: "Vos clichés vous sont remis sur support physique à la fin de l'examen. Le compte-rendu est consultable en ligne sous 24h via notre portail patient sécurisé." },
    ],
  },

  "osteodensitometrie": {
    metaTitle: "Ostéodensitométrie à Saint-Lô — Diagnostic Ostéoporose | La Licorne",
    metaDesc: "Mesurez votre densité minérale osseuse à Saint-Lô. Examen clé pour le dépistage de l'ostéoporose. Expertise médicale, tiers-payant et confort.",
    h1: "Ostéodensitométrie\nOsseuse",
    intro: "L'ostéodensitométrie est l'examen de référence pour mesurer la Densité Minérale Osseuse (DMO). Elle permet de diagnostiquer l'ostéoporose et d'évaluer avec précision le risque de fracture future.",
    corps: "Avec l'âge, la masse osseuse peut diminuer, rendant les os plus fragiles et poreux. L'ostéodensitométrie utilise une très faible dose de rayons X pour analyser la teneur en calcium des os. Cet examen est particulièrement recommandé chez les femmes ménopausées ou lors de traitements prolongés à base de cortisone.",
    preparations: [
      { label: "Vêtements", text: "Portez des vêtements confortables sans boutons pression, fermetures éclair ou éléments métalliques dans la région lombaire et des hanches." },
      { label: "Suppléments", text: "Il est conseillé de ne pas prendre de suppléments de calcium dans les 24 heures précédant l'examen pour ne pas fausser les mesures." },
    ],
    medicalProcedureName: "Ostéodensitométrie (DMO)",
    medicalPreparation: "Porter des vêtements sans métal. Éviter les suppléments calciques 24h avant.",
    faq: [
      { q: "L'ostéodensitométrie est-elle douloureuse ?", a: "Non, c'est un examen totalement indolore et non invasif. Vous restez allongé immobile pendant que l'appareil survole les zones à examiner (hanche et rachis)." },
      { q: "Faut-il être à jeun ?", a: "Non, aucune préparation alimentaire n'est requise. Vous pouvez manger et boire normalement avant votre rendez-vous." },
      { q: "L'examen est-il remboursé ?", a: "L'ostéodensitométrie est prise en charge par l'Assurance Maladie sous certaines conditions médicales (ménopause précoce, antécédents de fracture sans choc, etc.)." },
    ],
  },

  "panoramique-dentaire": {
    metaTitle: "Panoramique Dentaire à Saint-Lô — Imagerie Dentaire | La Licorne",
    metaDesc: "Réalisez votre radiographie panoramique dentaire à Saint-Lô. Bilan complet pour implants, dents de sagesse et orthodontie. Résultats immédiats.",
    h1: "Panoramique\nDentaire",
    intro: "La radiographie panoramique dentaire permet de visualiser sur un seul cliché l'ensemble des dents, des maxillaires et des articulations temporo-mandibulaires.",
    corps: "Cet examen est un outil indispensable pour votre chirurgien-dentiste ou votre orthodontiste. Il permet de détecter des infections, des kystes, des caries non visibles, ou de vérifier la position des dents de sagesse.",
    preparations: [
      { label: "Objets Métalliques", text: "Il est impératif de retirer bijoux (boucles d'oreilles, piercings), lunettes et appareils dentaires amovibles. Le métal bloque les rayons X et rend le cliché illisible." },
      { label: "Position", text: "L'examen s'effectue debout. Vous devez mordre une petite pièce en plastique et rester parfaitement immobile pendant environ 15 secondes." },
    ],
    medicalProcedureName: "Panoramique Dentaire (Orthopantomogramme)",
    medicalPreparation: "Retirer tout objet métallique au niveau de la tête.",
    faq: [
      { q: "Quels bijoux faut-il retirer ?", a: "Il est impératif de retirer boucles d'oreilles, piercings, colliers et barrettes. Le métal crée des reflets sur l'image qui empêchent le diagnostic." },
      { q: "L'examen est-il dangereux pour les enfants ?", a: "Non, la dose d'irradiation est extrêmement faible et adaptée à la morphologie de l'enfant. C'est un examen courant en orthodontie." },
      { q: "Qu'est-ce que le Télécrâne ?", a: "Notez que notre centre ne réalise pas les télécrânes. Nous effectuons uniquement les panoramiques dentaires." },
    ],
  },

};