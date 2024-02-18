import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      etruscantitle: "Saint \nSophia's\nInscriptions",
      etruscanabout: "The portal is published by GRIDH at the university of Gothenburg in close collaboration with the Swedish Institute in Rome.",
      documentation: "Documentation by category",
      timeperiod: "Time period",
      tag: "Tag",
      typeofdata: "Type of data",
      typeofinscription: "Type of inscription",
      dataset: "Dataset",
      searchpanels: "Search for a panel or inscription",
      inscriptions: "Inscriptions",
      alllanguages: "All languages",
      text: "Text",
      texts: "Texts",
      figure: "Figure",
      figures: "Figures",
      language: "Language",
      composite: "Composite",
      composites: "Composites",
      panels: "Panels",
      room: "Room",
      plan: "Plan",
      plans: "Plans",
      groundfloor: "Ground floor",
      secondfloor: "Second floor",
      languages: "Languages",
      map: "map",
      gallery: "gallery",
      infobutton: "About the portal",
      languagebutton: "Українською",
      moreinfo: "More Info",
      threedmodel: "3D Model",
      threedmodels: "3D models",
      panelsshown: "Panels shown",
      panelshidden: "Panels hidden",
      photographs: "Photographs",
      plans: "Plans",
      type: "Type",
      period: "Period",
      aboutportalmain:"This portal collects and visualises datasets concerning Etruscan chamber tombs. The first dataset, encompassing the necropoleis/necropolises around San Giovenale, originated from the doctoral thesis 'The Chamber Tombs of San Giovenale and the Funerary Landscapes of South Etruria' by Dr. Fredrik Tobin-Dodd. It is our hope that the portal, which makes available descriptions, images, plans and 3D models, will function as a resource both for researchers and students.",
      aboutportal: "The portal was realised by the Gothenburg Research Infrastructure in Digital Humanities (GRIDH) at the University of Gothenburg in collaboration with the Swedish Institute of Classical Studies in Rome. The project was developed by Associate Professor Jonathan Westin (project lead, design), together with M.A Tristan Bridge (development of the web interface) and Dr. Matteo Tomasini (development of the database). Dr. Fredrik Tobin-Dodd – whose thesis served as foundation for the project – provided the content for the San Giovenale tombs, and aided the project with expertise. The project was overseen by Associate Professor Ulf R. Hansson, Director of the Swedish Institute in Rome and Dr. Hampus Olsson, Senior Lecturer at the same institute. Please contact jonathan.westin(at)lir.gu.se if you have any questions or want to contribute with data.",
      explore: "Explore",  
      documents: "Documents",
      sortbytype: "Sort by: TYPE",
      sortbyyear: "Sort by: YEAR",
      size: "Size",
      published: "Published",
      editplace: "Edit place",
      nophoto: "No photographs available",
      drawings: "Drawings",
      showall: "Show all",
      alldatasets: "All datasets",
      "categories": {
        "all": "All types",
        "drawings": "Drawings",
        "models": "3D models"
      },
    },

    uk: {
      etruscantitle: "Написи \nСвятої \nСофії",
      etruscanabout: "The portal is published by GRIDH at the university of Gothenburg in close collaboration with the Swedish Institute in Rome.",
      documentation: "Documentation by category",
      timeperiod: "Time period",
      tag: "Tag",
      typeofdata: "Type of data",
      typeofinscription: "Вид напису",
      dataset: "Dataset",
      searchpanels: "Шукайте панно або напис",
      inscriptions: "написи",
      alllanguages: "Всі мови",
      text: "Текст",
      texts: "Тексти",
      figure: "Mалюнок",
      figures: "Цифри",
      language: "Мова напису",
      composite: "CКомпозитний",
      composites: "композити",
      panels: "Панелі",
      room: "Room",
      plan: "План",
      plans: "Плани",
      groundfloor: "Перший поверх",
      secondfloor: "Другий поверх",
      languages: "Мови",
      map: "map",
      gallery: "gallery",
      infobutton: "Про портал",
      languagebutton: "In English",
      moreinfo: "Більше інформації",
      threedmodel: "3D Model",
      threedmodels: "3D models",
      panelsshown: "Показані панелі",
      panelshidden: "Панелі приховані",
      photographs: "Photographs",
      plans: "Плани",
      type: "Type",
      period: "Period",
      aboutportalmain:"This portal collects and visualises datasets concerning Etruscan chamber tombs. The first dataset, encompassing the necropoleis/necropolises around San Giovenale, originated from the doctoral thesis 'The Chamber Tombs of San Giovenale and the Funerary Landscapes of South Etruria' by Dr. Fredrik Tobin-Dodd. It is our hope that the portal, which makes available descriptions, images, plans and 3D models, will function as a resource both for researchers and students.",
      aboutportal: "The portal was realised by the Gothenburg Research Infrastructure in Digital Humanities (GRIDH) at the University of Gothenburg in collaboration with the Swedish Institute of Classical Studies in Rome. The project was developed by Associate Professor Jonathan Westin (project lead, design), together with M.A Tristan Bridge (development of the web interface) and Dr. Matteo Tomasini (development of the database). Dr. Fredrik Tobin-Dodd – whose thesis served as foundation for the project – provided the content for the San Giovenale tombs, and aided the project with expertise. The project was overseen by Associate Professor Ulf R. Hansson, Director of the Swedish Institute in Rome and Dr. Hampus Olsson, Senior Lecturer at the same institute. Please contact jonathan.westin(at)lir.gu.se if you have any questions or want to contribute with data.",
      explore: "Explore",  
      documents: "Documents",
      sortbytype: "Sort by: TYPE",
      sortbyyear: "Sort by: YEAR",
      size: "Size",
      published: "Published",
      editplace: "Edit place",
      nophoto: "No photographs available",
      drawings: "Drawings",
      showall: "Show all",
      alldatasets: "All datasets",
      "categories": {
        "all": "Всі види",
        "drawings": "Drawings",
        "models": "3D models"
      },
    },
};  

const i18n = createI18n({
  locale: 'en', 
  messages,
});

export default i18n;
