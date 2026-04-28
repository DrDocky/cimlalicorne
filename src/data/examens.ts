export interface Examen {
    titre: string;
    description: string;
    slug: string;
    icon: string;
    doctolibUrl?: string | null;
  }
  
  export const EXAMENS: Examen[] = [
    {
      titre: "Scanner",
      slug: "scanner",
      icon: "scanner.svg",
      description: "Exploration millimétrique haute définition par coupes transversales pour un diagnostic approfondi.",
      doctolibUrl: "https://www.doctolib.fr/centre-d-imagerie-medicale/saint-lo/centre-d-imagerie-la-licorne/booking/motives",
    },
    {
      titre: "Radiographie",
      slug: "radiographie",
      icon: "radiographie2.svg",
      description: "Imagerie de référence utilisant les rayons X pour l'étude précise du squelette, des articulations et du thorax.",
      doctolibUrl: null,
    },
    {
      titre: "Échographie",
      slug: "echographie",
      icon: "echographie.svg",
      description: "Exploration dynamique par ultrasons pour les organes mous, les tissus internes et les vaisseaux sanguins.",
      doctolibUrl: null,
    },
    {
      titre: "Mammographie",
      slug: "mammographie",
      icon: "mammographie.svg",
      description: "Dépistage sénologique numérique de haute précision, agréé ADEM 50 pour la santé des femmes.",
      doctolibUrl:null,
    },
    {
      titre: "Ostéodensitométrie",
      slug: "osteodensitometrie",
      icon: "osteodensitometrie.svg",
      description: "Mesure de la densité minérale osseuse pour le diagnostic de l'ostéoporose et l'évaluation des risques de fracture.",
      doctolibUrl:null,
    },
    {
      titre: "Panoramique Dentaire",
      slug: "panoramique-dentaire",
      icon: "panoramique_dentaire.svg",
      description: "Bilan complet de la dentition et des mâchoires pour l'implantologie et l'orthodontie.",
      doctolibUrl:null,
    }
  ];