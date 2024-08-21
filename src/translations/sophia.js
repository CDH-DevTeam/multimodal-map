import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      portaltitle: "Saint \nSophia's\nInscriptions",
      documentation: "Documentation by category",
      timeperiod: "Time period",
      tag: "Tag",
      panel: "Surface",
      panels: "Surfaces",
      panelsshown: "Surfaces shown",
      panelshidden: "Surfaces hidden",
      typeofdata: "Type of data",
      typeofinscription: "Type of inscription",
      dataset: "Dataset",
      instructions: "Instructions",
      searchtitle: "Search for a surface or inscription",
      searchsurfacesplaceholder: "Search for a surface",
      searchinscriptionsplaceholder: "Search for an inscription",
      inscriptions: "Inscriptions",
      alllanguages: "All languages",
      text: "Text",
      texts: "Texts",
      figure: "Figure",
      figures: "Figures",
      language: "Language",
      composite: "Composite",
      composites: "Composites",
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
      photographs: "Photographs",
      plans: "Plans",
      type: "Type",
      period: "Period",
      aboutportalmain:"Carved into the walls of Saint Sophia Cathedral there are more than 7,000 inscriptions. They span a thousand years and constitute a source of knowledge about cultural exchange, about language, migration, trade, and diversity in Europe.",
      aboutportal: "This research infrastructure, which lets researchers and the public explore the inscriptions, is the result of a close collaboraton between Saint Sophia Cathedral Museum, the National Museum of the History of Ukraine and Univerity of Gothenburg, Sweden.",
      learnmore: "Learn more",
      explore: "Explore",
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
      exploreData: "Explore documentation",
      userguide: "User\nguide",
      aboutinstructions: "This portal makes available a scientifc documentation of the inscriptions of Saint Sophia Cathedral in Kyiv. The data collection has been carried out using a number of overlapping and complementary techniques to ensure an as trustworty source material as possible. To explore this rich and varied material, the portal presents several different inroads.",
      close: "Close",
      alldatasets: "All datasets",
      "categories": {
        "all": "All types",
        "drawings": "Drawings",
        "models": "3D models"
      },
    },

    uk: {
      portaltitle: "Написи \nСвятої \nСофії",
      documentation: "Documentation by category",
      timeperiod: "Time period",
      tag: "Tag",
      panel: "Поверхня",
      panels: "Поверхні",
      searchtitle: "Пошук поверхні або напису",
      panelsshown: "Показ поверхні",
      panelshidden: "Приховані поверхні",
      typeofdata: "Type of data",
      typeofinscription: "Вид напису",
      dataset: "Dataset",
      instructions: "Інструкції",
      inscriptions: "Hаписи",
      alllanguages: "Всі мови",
      text: "Текст",
      texts: "Тексти",
      figure: "Mалюнок",
      figures: "Цифри",
      language: "Мова напису",
      composite: "Суміш",
      composites: "Суміші",
      room: "Кімната",
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
      photographs: "Photographs",
      plans: "Плани",
      type: "Type",
      period: "Period",
      aboutportalmain:"На стінах Софійського собору висічено понад 7000 написів. Вони охоплюють тисячу років і є джерелом знань про культурний обмін, мову, міграцію, торгівлю та різноманітність у Європі.",
      aboutportal: "Ця дослідницька інфраструктура, яка дозволяє дослідникам і громадськості досліджувати написи, є результатом тісної співпраці між Музеєм собору Святої Софії, Національним музеєм історії України та Університетом Гетеборга, Швеція.",
      learnmore: "Вивчайте більше",
      explore: "Досліджуйте",  
      documents: "Documents",
      sortbytype: "Sort by: TYPE",
      sortbyyear: "Sort by: YEAR",
      size: "Size",
      published: "Published",
      editplace: "Edit place",
      nophoto: "No photographs available",
      drawings: "Drawings",
      showall: "Show all",
      exploreData: "Вивчіть документацію",
      userguide: "керівництво \n користувача",
      aboutinstructions: "На цьому порталі доступна наукова документація написів Софійського собору в Києві. Збір даних проводився з використанням низки методів, що збігаються та доповнюють один одного, щоб забезпечити максимально надійний вихідний матеріал. Щоб дослідити цей багатий і різноманітний матеріал, портал пропонує кілька різних вторгнень.",
      close: "Закрити",
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
