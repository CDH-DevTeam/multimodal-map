import { createI18n } from 'vue-i18n';

const messages = {
    en: {
      organ: "Organ",
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
      allbuildings: "All buildings",
      places: "Places",
      buildings: "Buildings",
      builders: "Builders",
      timespan: "Time span",
      searchPlaces: "Search Places...",
      searchBuilders: "Search Organ Builder last name...",
      searchArkiv: "Search Archive...",
      allaArkiv: "All Archives",
      allaSeries: "All Series",
      allaVolumes: "All Volumes",
      location: "Location:",

      historicaloversight: "Historical Overview",
      verksgrundare: "Original builder",
      tillkomstår: "Year of origin",
      fasadpipor: "Prospect pipes info",
      traktursystem: "Key action type",
      registratursystem: "Stop action type",
      huvudbälg: "Bellows type",
      antalbälgar: "Number of bellows",
      disposition: "Specification",
      divisioninfo: "Division info",
      stopinfo: "Stop info",
      verk: "Division",
      väderlåda: "Windchest description",
      lufttryck: "Air pressure",
      stämma: "Stop",
      stämmainfo: "Stop info",
      close: "Close",

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
      
      moreinfo: "More info",
      aboutportalmain: "Sweden possesses a uniquely rich cultural heritage of well-preserved pipe organs, among them no fewer than 436 instruments, built between ca. 1600 and 1860. This heritage of organs is not only present in the instruments themselves but also in a wealth of documentary materials of different kinds: written documents (such as correspondence, documentation reports, annotations, contracts, etc.), drawings, photos and sound recordings, resulting from many decades of information-gathering by dedicated organ experts. The material is an invaluable asset to research, but most of it is unpublished and has been difficult to access.",
      aboutportalmain2: "The main purpose of the project “Swedish ONline ORgan Archive” (acronym: SONORA), 2021–2024, is to bring together this immense documentary material on Sweden’s classical organs by digitising and entering it into an open online database, constructed specifically for the purpose, with advanced but user-friendly search functions and linked to new media. The database offers completely new opportunities for research in music and cultural history but will also serve as an attractive source of information for anyone interested in the organ and its history. In addition, the project will enable long-term strategic work for the preservation and maintenance of the historical instruments.",
      aboutportalmain3: "The project, conducted by the Göteborg International Organ Academy Association (FGIOA), is funded in its entirety by Riksbankens Jubileumsfond, a leading Swedish foundation for research in the humanities and social sciences. Important collaboration partners include the Swedish National Heritage Board (Riksantikvarieämbetet, RAÄ), with the ATA (Antiquarian-Topographical Archive); and the University of Gothenburg, in particular the Gothenburg University Library and the Gothenburg Research Infrastructure in Digital Humanities (GRIDH).",
      attributions: "The materials to be digitised and entered into the database has been selected from six archives built by the following persons and groups:",
      attributions1: "Dr Einar Erici (1885–1965), a physician who devoted much of his life to documenting historical Swedish organs and to working assiduously for their preservation.",
      attributions2: "Dr Axel Unnerbäck (b. 1938), former Head of the Division for the Documentation of Buildings at the Swedish National Heritage Board, organ expert and researcher, art historian, and building antiquarian, who has published extensively on the Swedish heritage of organs.",
      attributions3: "The organ builders Harry Moberg (1915–1992) and Valter Moberg (1915–2006), pioneering specialists in the restoration and preservation of Swedish historical organs.",
      attributions4: "Carl Gustaf Lewenhaupt (1949–2000), an organist, organ consultant and organ researcher, affiliated with the Swedish National Heritage Board.",
      attributions5: "Dr Bertil Wester (1902–1976), art historian, museum curator and musicologist specialising in Swedish historical organs.",
      attributions6: "The Organ Committee of the Friends of Church Song, a very influential and active advisor on issues concerning organ-building and restorations of Swedish historical organs in the decades around mid-twentieth century.",
      explore: "Explore",  
    },

    sv: {
      organ: "Orgel",
      sonoratitle: "Digitising Sweden’s Organ Heritage: The SONORA project",
      infobutton: "Om portalen",
      languagebutton: "In English",
      shownorgans: "Visade orglar:",
      map: "Karta",
      gallery: "Galleri",
      archive: "Arkiv",
      stift: "Stift:",
      kontrakt: "Kontrakt:",
      pastorat: "Pastorat:",
      kommun: "Kommun:",
      allbuildings: "Alla byggnader",
      places: "Platser",
      buildings: "Byggnader",
      builders: "Orgelbyggare",
      timespan: "Tidsperiod",
      searchPlaces: "Sök Platser...",
      searchBuilders: "Sök Orgelbyggare efternamn...",
      searchArkiv: "Sök Arkiv...",
      allaArkiv: "Alla Arkiv",
      allaSeries: "Alla Serier",
      allaVolumes: "Alla Volymer",
      location: "Plats:",

      historicaloversight: "Historisk Översikt",
      verksgrundare: "Verksgrundare",
      tillkomstår: "Tillkomstår",
      fasadpipor: "Fasadpipor",
      traktursystem: "Traktursystem",
      registratursystem: "Registratursystem",
      huvudbälg: "Huvudbälg",
      antalbälgar: "Antal bälgar",
      disposition: "Disposition",
      divisioninfo: "Verk info",
      stopinfo: "Stämma info",
      verk: "Verk",
      väderlåda: "Väderlåda beskrivning",
      lufttryck: "Lufttryck",
      stämma: "Stämma",
      stämmainfo: "Stämma info",
      close: "Stäng",

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

      moreinfo: "Mer info",
      aboutportalmain: "Sverige har ett enastående rikt kulturarv av välbevarade piporglar, däribland inte mindre än 436 instrument byggda mellan c:a 1600 och 1860. Detta orgelkulturarv finns inte bara i själva instrumentet utan även i en stor mängd dokumentationsmaterial av skilda slag: skrivna dokument (såsom brev, dokumentationsrapporter, anteckningar, kontrakt etc.), ritningar, foton och ljudupptagningar, frukten av många decenniers informationsinsamling av hängivna orgelspecialister. Materialet är en ovärderlig tillgång för forskningen, men det mesta av det har inte publicerats och har varit svårtillgängligt.",
      aboutportalmain2: "Huvudsyftet med projektet ”Svenskt digitalt orgelarkiv”, med akronymen SONORA (från projektets engelska namn ”Swedish ONline ORgan Archive”), som bedrivs 2021–2024, är att sammanföra denna väldiga mängd dokumentationsmaterial om svenska klassiska orglar genom att digitisera och mata in det i en öppet tillgänglig webb-baserad databas utvecklad specifikt för detta ändamål, med avancerade och samtidigt användarvänliga sökfunktioner och länkad till nya medier. Databasen erbjuder helt nya möjligheter för forskning om musik och kulturhistoria men fungerar också som en attraktiv informationskälla för var och en som intresserar sig för orgeln och dess historia. Dessutom ger projektet möjlighet till långsiktiga strategier för bevarande och underhåll av historiska instrument.",
      aboutportalmain3: "Projektet, som bedrivs av Föreningen för Göteborgs internationella orgelakademi (FGIOA), är i sin helhet finansierat av Riksbankens Jubileumsfond, en ledande svensk forskningsstiftelse för humaniora och samhällsvetenskap. Viktiga samarbetspartner är Riksantikvarieämbetet, med ATA (Antikvarisk-topografiska arkivet)., och Göteborgs universitet, i synnerhet Göteborgs universitetsbibliotek och GRIDH (Gothenburg Research Infrastructure in Digital Humanities).",
      attributions: "Det material som digitiseras och inmatas i databasen har valts från sex arkiv som skapats av följande personer och grupper:",
      attributions1: "Dr Einar Erici (1885–1965), till professionen läkare, som ägnade en stor del av sitt liv åt att dokumentera historiska svenska orglar och åt hängivet arbete för deras bevarande.",
      attributions2: "Fil. dr Axel Unnerbäck (f. 1938), tidigare chef för avdelningen för byggnadsvård vid Riksantikvarieämbetet, orgelexpert och forskare, konsthistoriker och byggnadsantikvarie, med en omfattande publiceringsverksamhet om det svenska orgelkulturarvet.",
      attributions3: "Orgelbyggarna Harry Moberg (1915–1992) och Valter Moberg (1915–2006), landets första specialister på restaurering och bevarande av svenska historiska orglar.",
      attributions4: "Carl Gustaf Lewenhaupt (1949–2000), organist, orgelkonsult och orgelforskare, knuten till Riksantikvarieämbetet.",
      attributions5: "Fil. dr Bertil Wester (1902–1976), konsthistoriker, museiintendent och musikforskare med specialisering på svenska historiska orglar.",
      attributions6: "Kyrkosångens Vänners orgelråd, under decennierna kring mitten av 1900-talet ett mycket inflytelserikt rådgivande organ för ärenden rörande orgelbyggnad och restaureringar av svenska historiska orglar.",
      explore: "Utforska",  
    },
};  

const i18n = createI18n({
  locale: 'en', 
  messages,
});

export default i18n;
