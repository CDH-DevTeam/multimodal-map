import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      sonoratitle: "Digitising Sweden’s Organ Heritage: The SONORA project",
      infobutton: "About the portal",
      languagebutton: "In Swedish",
      shownorgans: "Shown organs:",
      map: "Map",
      gallery: "Gallery",
      archive: "Archive",
      stift: "Diocese:",
      kontrakt: "Deanery:",
      pastorat: "Parish:",
      kommun: "Municipality:",

      historicaloversight: "Historical Oversight",
      verksgrundare: "Original builder",
      tillkomstår: "Year of origin",
      fasadpipor: "Prospect pipes info",
      traktursystem: "Key action type",
      registratursystem: "Stop action type",
      huvudbälg: "Bellows type",
      antalbälgar: "Number of bellows",
      disposition: "Specification",
      divisioninfo: "Specification info",
      stopinfo: "Stop info",
      verk: "Division",
      väderlåda: "Windchest description",
      lufttryck: "Air pressure",
      stämma: "Stop",
      stämmainfo: "Stop info",

      sender: "Originator",
      number_of_organs: "Number of organs",
      serie: "Series",
      volym: "Volume",
      fascikel: "Fascicle",
      ordningsnummer: "List order",
      källa: "Source",
      källainfo: "Source information",
      typ_av_dokument: "Type of document",
      longitude: "Longitud",
      latitude: "Latitud",
      found_in: "Found in",
      
      moreinfo: "More Info",
      aboutportalmain: "Sweden possesses a uniquely rich cultural heritage of well-preserved pipe organs, among them no fewer than 436 instruments, built between ca. 1600 and 1860. This heritage of organs is not only present in the instruments themselves but also in a wealth of documentary materials of different kinds: written documents (such as correspondence, documentation reports, annotations, contracts, etc.), drawings, photos and sound recordings, resulting from many decades of information-gathering by dedicated organ experts. The material is an invaluable asset to research, but most of it is unpublished and has been difficult to access.",
      aboutportalmain2: "The main purpose of the project “Swedish ONline ORgan Archive” (acronym: SONORA), 2021–2024, is to bring together this immense documentary material on Sweden’s classical organs by digitising and entering it into an open online database, constructed specifically for the purpose, with advanced but user-friendly search functions and linked to new media. The database offers completely new opportunities for research in music and cultural history but will also serve as an attractive source of information for anyone interested in the organ and its history. In addition, the project will enable long-term strategic work for the preservation and maintenance of the historical instruments.",
      aboutportalmain3: "The project, conducted by the Göteborg International Organ Academy Association (FGIOA), is funded in its entirety by Riksbankens Jubileumsfond, a leading Swedish foundation for research in the humanities and social sciences. Important collaboration partners include the Swedish National Heritage Board (Riksantikvarieämbetet, RAÄ), with the ATA (Antiquarian-Topographical Archive); and the University of Gothenburg, in particular the Gothenburg University Library and the Gothenburg Research Infrastructure in Digital Humanities (GRIDH).",
      attributions: "The materials to be digitised and entered into the database has been selected from six archives built by the following persons and groups:",
      attributions1: "Dr Einar Erici (1885–1965), a physician who devoted much of his life to documenting historical Swedish organs and to working assiduously for their preservation.",
      attributions2: "Dr Axel Unnerbäck (b. 1938), former Head of the Division for the Documentation of Buildings at the Swedish National Heritage Board, organ expert and researcher, art historian, and building antiquarian, who has published extensively on the Swedish heritage of organs.",
      attributions3: "The organ builders Harry Moberg (1915–1992) and Valter Moberg (1915–2006), pioneering specialists in the restoration and preservation of Swedish historical organs.",
      attributions4: "Carl Gustaf Lewenhaupt (1949–2000), an organist, organ consultant and organ researcher, affiliated with the Swedish National Heritage Board.",
      attributions5: "Dr Bertil Wester (1902–1976), art historian, museum curator and musicologist specialising in Swedish historical organs",
      attributions6: "The Organ Committee of the Friends of Church Song, a very influential and active advisor on issues concerning organ-building and restorations of Swedish historical organs in the decades around mid-twentieth century",
      explore: "Explore",  
    },

    sv: {
      sonoratitle: "Digitising Sweden’s Organ Heritage: The SONORA project",
      infobutton: "Om portalen",
      languagebutton: "In English",
      shownorgans: "Visade orglar:",
      map: "Karta",
      gallery: "Galleri",
      archive: "Akriv",
      stift: "Stift:",
      kontrakt: "Kontrakt:",
      pastorat: "Pastorat:",
      kommun: "Kommun:",

      historicaloversight: "Historisk översikt",
      verksgrundare: "Verksgrundare",
      tillkomstår: "Tillkomstår",
      fasadpipor: "Fasadpipor",
      traktursystem: "Traktursystem",
      registratursystem: "Registratursystem",
      huvudbälg: "Huvudbälg",
      antalbälgar: "Antal bälgar",
      disposition: "Disposition",
      divisioninfo: "Division info",
      stopinfo: "Stop info",
      verk: "Verk",
      väderlåda: "Väderlåda beskrivning",
      lufttryck: "Lufttryck",
      stämma: "Stämma",
      stämmainfo: "Stämma info",

      sender: "Avsändare",
      number_of_organs: "Antal orglar",
      serie: "Serie",
      volym: "Volym",
      fascikel: "Fascikel",
      ordningsnummer: "Ordningsnummer",
      källa: "Källa",
      källainfo: "Källa information",
      typ_av_dokument: "Typ av dokument",
      longitude: "Longitude",
      latitude: "Latitude",
      found_in: "Hittades i",

      moreinfo: "Mer information",
      aboutportalmain: "Sweden possesses a uniquely rich cultural heritage of well-preserved pipe organs, among them no fewer than 436 instruments, built between ca. 1600 and 1860. This heritage of organs is not only present in the instruments themselves but also in a wealth of documentary materials of different kinds: written documents (such as correspondence, documentation reports, annotations, contracts, etc.), drawings, photos and sound recordings, resulting from many decades of information-gathering by dedicated organ experts. The material is an invaluable asset to research, but most of it is unpublished and has been difficult to access.",
      aboutportalmain2: "The main purpose of the project “Swedish ONline ORgan Archive” (acronym: SONORA), 2021–2024, is to bring together this immense documentary material on Sweden’s classical organs by digitising and entering it into an open online database, constructed specifically for the purpose, with advanced but user-friendly search functions and linked to new media. The database offers completely new opportunities for research in music and cultural history but will also serve as an attractive source of information for anyone interested in the organ and its history. In addition, the project will enable long-term strategic work for the preservation and maintenance of the historical instruments.",
      aboutportalmain3: "The project, conducted by the Göteborg International Organ Academy Association (FGIOA), is funded in its entirety by Riksbankens Jubileumsfond, a leading Swedish foundation for research in the humanities and social sciences. Important collaboration partners include the Swedish National Heritage Board (Riksantikvarieämbetet, RAÄ), with the ATA (Antiquarian-Topographical Archive); and the University of Gothenburg, in particular the Gothenburg University Library and the Gothenburg Research Infrastructure in Digital Humanities (GRIDH).",
      attributions: "The materials to be digitised and entered into the database has been selected from six archives built by the following persons and groups:",
      attributions1: "Dr Einar Erici (1885–1965), a physician who devoted much of his life to documenting historical Swedish organs and to working assiduously for their preservation.",
      attributions2: "Dr Axel Unnerbäck (b. 1938), former Head of the Division for the Documentation of Buildings at the Swedish National Heritage Board, organ expert and researcher, art historian, and building antiquarian, who has published extensively on the Swedish heritage of organs.",
      attributions3: "The organ builders Harry Moberg (1915–1992) and Valter Moberg (1915–2006), pioneering specialists in the restoration and preservation of Swedish historical organs.",
      attributions4: "Carl Gustaf Lewenhaupt (1949–2000), an organist, organ consultant and organ researcher, affiliated with the Swedish National Heritage Board.",
      attributions5: "Dr Bertil Wester (1902–1976), art historian, museum curator and musicologist specialising in Swedish historical organs",
      attributions6: "The Organ Committee of the Friends of Church Song, a very influential and active advisor on issues concerning organ-building and restorations of Swedish historical organs in the decades around mid-twentieth century",
      explore: "Utforska",  
    },
};  

const i18n = createI18n({
  locale: 'en', 
  messages,
});

export default i18n;
