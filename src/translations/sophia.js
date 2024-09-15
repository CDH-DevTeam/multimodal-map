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
      annotationsshown: "Annotations shown",
      annotationshidden: "Annotations hidden",
      typeofdata: "Type of data",
      typeofinscription: "Type of inscription",
      dataset: "Dataset",
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
      instructions: "User guide",
      aboutinstructions: "This portal makes available a scientifc documentation of the inscriptions of Saint Sophia Cathedral in Kyiv. The data collection has been carried out using a number of overlapping and complementary techniques to ensure an as trustworty source material as possible. To explore this rich and varied material, the portal presents several different features.",
      close: "Close",
      video: "Video tutorial",
      alldatasets: "All datasets",
      reset: "Reset all filters",
      features: "Features",
      f1title: "Multimodal exploration",
      f1description: "Use the centrally placed widget at the top of the screen to switch betwen an interactive plan of the cathedral, a gallery of the documented Surfaces or a gallery of the individual Inscriptions.",
      f2title: "Filter by Genre and Keywords",
      f2description:"Use the tags at the top of the Surfaces- and Inscriptions galleries to filter down the result to a particular genre or keyword. you can combine several tags to narrow down the result",
      f3title: "Filter by Type of Inscription, Writing system or Language",
      f3description:"To the left you have controls to filter down the result to inscriptions of a particular type (Textual, pictorial, composite or monogram), or by writing system and language.",
      f4title: "Interactive Plan",
      f4description:"The interactive plan shows the position of all the documented surfaces rendered on top of a plan of the cathedral. The colours indicate the amount of annotated inscriptions for each surface, ranging from yellow to bright red. Switch beteeen Ground Floor and Second Floor with the widget at the bottom of the page. Zoom in by scrolling or double-clicking, and click-and-drag to pan the view.",
      f5title: "Powerful Search",
      f5description:"You can use the search bar to search for a particular surface or inscription using room, name or tag. The inscription search lets you search both for structured data such as title, genre and tags, but also transcriptions and translations of the texts and descriptions of figures.",
      f6title: "Analytical Tools",
      f6description:"Click on a surface or inscription to enter the analytical tool where you can explore all the documentation and asscoiated data. This includes high resolution orthophotos, topographical visualisations, interactive 3D data, RTI photography, and the possibility to explore the spatial context of the surface through a 3D scan of the cathedral interiors.",
      textualgraffiti:"Textual graffiti",
      pictorialgraffiti:"Pictorial graffiti",
      monograms:"Monograms",
      writingsystem:"Writing system",
      "categories": {
        "all": "All types",
        "drawings": "Drawings",
        "pictorialgraffiti": "Pictorial Graffiti",
        "textualgraffiti": "Textual Graffiti",
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
      annotationsshown: "Показані анотації",
      annotationshidden: "Приховані анотації",
      typeofdata: "Type of data",
      typeofinscription: "Вид напису",
      dataset: "Dataset",
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
      instructions: "Інструкції",
      aboutinstructions: "На цьому порталі доступна наукова документація написів Софійського собору в Києві. Збір даних проводився з використанням низки методів, що збігаються та доповнюють один одного, щоб забезпечити максимально надійний вихідний матеріал. Щоб дослідити цей багатий і різноманітний матеріал, портал пропонує кілька різних вторгнень.",
      close: "Закрити",
      video: "Відеоурок",
      alldatasets: "All datasets",
      reset: "Reset all filters",
      features: "Features",
      f1title: "Multimodal exploration",
      f1description: "Use the centrally placed widget at the top of the screen to switch betwen an interactive plan of the cathedral, a gallery of the documented Surfaces or a gallery of the individual Inscriptions.",
      f2title: "Filter by Genre and Keywords",
      f2description:"Use the tags at the top of the Surfaces- and Inscriptions galleries to filter down the result to a particular genre or keyword. you can combine several tags to narrow down the result",
      f3title: "Filter by Language or Type of Inscription",
      f3description:"To the left you have controls to filter down the result to inscriptions in a particular language, or filter by type of inscription (Text, Figure or Composite).",
      f4title: "Interactive Plan",
      f4description:"The interactive plan shows the position of all the documented surfaces rendered on top of a plan of the cathedral. The colours indicate the amount of annotated inscriptions for each surface, ranging from yellow to bright red. Switch beteeen Ground Floor and Second Floor with the widget at the bottom of the page. Zoom in by scrolling or double-clicking, and click-and-drag to pan the view.",
      f5title: "Powerful Search",
      f5description:"You can use the search bar to search for a particular surface or inscription using room, name or tag. The inscription search lets you search both for structured data such as title, genre and tags, but also transcriptions and translations of the texts and descriptions of figures.",
      f6title: "Analytical Tools",
      f6description:"Click on a surface or inscription to enter the analytical tool where you can explore all the documentation and asscoiated data. This includes high resolution orthophotos, topographical visualisations, interactive 3D data, RTI photography, and the possibility to explore the spatial context of the surface through a 3D scan of the cathedral interiors.",
      textualgraffiti:"Текстове графіті",
      pictorialgraffiti:"Живописні графіті",
      monograms:"Вензелі",
      writingsystem:"Writing system",
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
