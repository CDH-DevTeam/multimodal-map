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
      documents: "Documents: ",
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
      biography: "Biography",
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
      found_in: "Linked organs",
      moreinfo: "More info",
      aboutportalmain: "Sweden possesses a uniquely rich cultural heritage of well-preserved pipe organs, among them no fewer than 436 instruments, built between ca. 1600 and 1860. This heritage of organs is not only present in the instruments themselves but also in a wealth of documentary materials of different kinds: written documents (such as correspondence, documentation reports, annotations, contracts, etc.), drawings, photos and sound recordings, resulting from many decades of information-gathering by dedicated organ experts. The material is an invaluable asset to research, but most of it is unpublished and has been difficult to access.",
      aboutportalmain2: "The purpose of the project “Swedish ONline ORgan Archive” (acronym: SONORA), is to make available online documentary material regarding Sweden’s many classical pipe organs. The material comes from six Swedish archives and broadly pertains to preserved instruments built before the 1860s. The specific selection criteria follow those set out by Einar Erici in his Orgelinventarium and include instruments where significant parts of the original constructions, such as windchests, have been preserved. Instruments where, for example, only the façade is preserved have not been included.",
      aboutportalmain3: "The project, conducted by the Göteborg International Organ Academy Association (FGIOA), has been funded in its entirety by Riksbankens Jubileumsfond, a leading Swedish foundation for research in the humanities and social sciences. Important collaboration partners include the Swedish National Heritage Board (Riksantikvarieämbetet, RAÄ), with the ATA (Antiquarian-Topographical Archive); and the University of Gothenburg, in particular the Gothenburg University Library and the Gothenburg Research Infrastructure in Digital Humanities (GRIDH).",
      explore: "Explore",
      help: "Help",
    },

    sv: {
      organ: "Orgel",
      sonoratitle: "Digitalisera Sveriges Orgelarv: SONORA-projektet",
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
      documents: "Dokument:",
      biography: "Biografi",
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
      found_in: "Länkade orglar",
      moreinfo: "Mer info",
      aboutportalmain: "Sverige har ett enastående rikt kulturarv av välbevarade piporglar, däribland inte mindre än 436 instrument byggda mellan c:a 1600 och 1860. Detta orgelkulturarv finns inte bara i själva instrumentet utan även i en stor mängd dokumentationsmaterial av skilda slag: skrivna dokument (såsom brev, dokumentationsrapporter, anteckningar, kontrakt etc.), ritningar, foton och ljudupptagningar, frukten av många decenniers informationsinsamling av hängivna orgelspecialister. Materialet är en ovärderlig tillgång för forskningen, men det mesta av det har inte publicerats och har varit svårtillgängligt.",
      aboutportalmain2: "Syftet med projektet 'Swedish ONline ORgan Archive' (akronym: SONORA) är att göra dokumentärt material om Sveriges många klassiska piporglar tillgängligt online. Materialet kommer från sex svenska arkiv och avser i stort sett bevarade instrument byggda före 1860-talet. De specifika urvalskriterierna följer de som Einar Erici fastställde i sitt Orgelinventarium och inkluderar instrument där betydande delar av de ursprungliga konstruktionerna, såsom vindlådorna, har bevarats. Instrument där endast fasaden, till exempel, har bevarats har inte inkluderats.",
      aboutportalmain3: "Projektet, som bedrivs av Föreningen för Göteborgs internationella orgelakademi (FGIOA), har finansierats i sin helhet av Riksbankens Jubileumsfond, en ledande svensk forskningsstiftelse för humaniora och samhällsvetenskap. Viktiga samarbetspartner är Riksantikvarieämbetet, med ATA (Antikvarisk-topografiska arkivet)., och Göteborgs universitet, i synnerhet Göteborgs universitetsbibliotek och GRIDH (Gothenburg Research Infrastructure in Digital Humanities).",
      explore: "Utforska",
      help: "Hjälp",
    },
};  

const i18n = createI18n({
  locale: 'en', 
  messages,
});

export default i18n;
