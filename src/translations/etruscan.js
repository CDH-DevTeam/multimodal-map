import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      etruscantitle: "Etruscan \n Chamber \n Tombs",
      etruscanabout: "The portal is published by GRIDH at the university of Gothenburg in close collaboration with the Swedish Institute in Rome.",
      documentation: "Documentation by category",
      timeperiod: "Time period",
      tombtype: "Type of tomb",
      tomb: "Tomb",
      map: "map",
      gallery: "gallery",
      infobutton: "About the portal",
      languagebutton: "In italiano",
      moreinfo: "More Info",
      threedmodel: "3D Model",
      threedmodels: "3D models",
      tombshown: "Tombs shown",
      tombshidden: "Tombs hidden",
      photographs: "Photographs",
      plans: "Plans",
      type: "Type",
      period: "Period",
      chambers: "Chambers",
      aboutportalmain:"This portal collects and visualises datasets concerning etruscan chamber tombs. The first dataset, encompassing the necropoli around San Giovenale, originated from the thesis 'The Chamber Tombs of San Giovenale and the Funerary Landscapes of South Etruria' by Dr. Fredrik Tobin. It is our hope that the portal, which makes available descriptions, images, plans and 3d models, will function as a resource both for researchers and students.",
      aboutportal: "The portal was realised by Gothenburg Research Infrastructure in Digital Humanities (GRIDH) at University of Gothenburg in collaboration with the Swedish Institute in Rome. The project was developed by Associate Professor Jonathan Westin (project lead, UI), together with M.A Tristan Bridge (development of the web interface) and Dr. Matteo Tomasini (development of the database). Dr. Fredrik Tobin – whose thesis served as foundation for the project – provided the content for the San Giovenale tombs and aided the project with expertise. The project was overseen by Dr. Ulf Hansson, Director of the Swedish Institute in Rome. Please contact jonathan.westin(at)lir.gu.se if you have any questions or want to contribute with data.",
      explore: "Explore",  
    },

    it: {
      etruscantitle: "Tombe \n Etrusche \n A Camera",
      etruscanabout: "Il portale è pubblicato da GRIDH presso l'Università di Göteborg, in collaborazione con l'Istituto Svedese di Studi Classici a Roma.",
      documentation: "Documentazione per categoria",
      timeperiod: "Periodo",
      tombtype: "Tipo di tomba",
      tomb: "Tomba",
      map: "carta geografica",
      gallery: "galleria",
      infobutton: "Sul portale",
      languagebutton: "In English",
      moreinfo: "Più informazioni",
      threedmodel: "Modello 3D",
      threedmodels: "Modelli 3D",
      tombshown: "Tombe mostrate",
      tombshidden: "Tombe nascoste",
      photographs: "Fotografie",
      plans: "Planimetrie",
      type: "Tipo",
      period: "Periodo",
      chambers: "Camere",
      aboutportalmain:"Questo portale raccoglie e visualizza collezioni di dati riguardanti le tombe a camera etrusche. La prima raccolta di dati, che comprende la necropoli attorno a San Giovenale, è un risultato dalla tesi 'The Chamber Tombs of San Giovenale and the Funerary Landscapes of South Etruria', scritta dal Dr. Fredrik Tobin. La nostra speranza è che il portale, che mette a disposizione descrizioni, immagini, piante e modelli 3D, sia una risorsa per ricercatori e studenti.",
      aboutportal: "Il portale è stato realizzato dalla Gothenburg Research Infrastructure in Digital Humanities (GRIDH), all'Università di Göteborg, in collaborazione con l'Istituto Svedese a Roma. Il progetto è stato sviluppato dal professore associato Jonathan Westin (responsabile del progetto, UI), insieme a Tristan Bridge, M.A., (sviluppo dell'interfaccia web) e al Dr. Matteo Tomasini (sviluppo della banca dati). Il Dr. Fredrik Tobin – la cui tesi è servita da base per il progetto – ha fornito il contenuto per le tombe di San Giovenale e ha contribuito al progetto con le sue competenze. Il progetto è stato supervisionato dal Dr. Ulf Hansson, Direttore dell'Istituto Svedese a Roma. Per ulteriori domande e per contribuire al progetto con dati addizionali, si prega di contattare jonathan.westin(at)lir.gu.se.",
      explore: "Esplora",    
    },
};  

const i18n = createI18n({
  locale: 'en', 
  messages,
});

export default i18n;
