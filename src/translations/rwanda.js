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
      thearchives: "The Archives",
      erici_title: "Einar Erici",
      moberg_title: "Harry and Valter Moberg",
      axel_title: "Axel Unnerbäck",
      lewenhaupt_title: "Carl Gustaf Lewenhaupt",
      wester_title: "Bertil Wester",
      friends_of_church_song_title: "Friends of Church Song",
      erici_content: "<p>Dr Einar Erici (1885–1965) was a physician who devoted much of his life to documenting historical Swedish organs and worked assiduously for their preservation. He published many articles on specific organs and organ builders, but his magnum opus was the Orgelinventarium, a detailed compilation of preserved pipe organs built in what he considered to be the “classical” building tradition.</p><p>After Erici’s death, Axel Unnerbäck saw to it that the Erici archive was received by the Swedish National Heritage Board (Riksantikvariämbetet) in Stockholm, where it is held and managed today. Dr Unnerbäck, who worked at the board as a building antiquarian and an organ expert for many decades, was instrumental in getting the Orgelinventarium published in 1965; he published a revised edition of the book in 1988.</p><p>The archive has the ID number SE/ATA/ENSK_31-1 and is organized into 28 boxes which in turn are grouped into eight series:</p><ul><li>F 1 Personal documents</li><li>F 2 Manuscripts and printed articles</li><li>F 3 Correspondence</li><li>F 4 Documents about pipe organs</li><li>F 5 Documents about organ builder</li><li>F 6 Miscellaneous documents</li><li>F 7 Photographs</li><li>F 8 Magic lantern images</li></ul>",
      moberg_content: "<p>The organ builders Harry Moberg (1915–1992) and Valter Moberg (1915–2006) were pioneering specialists in the restoration and preservation of Swedish historical organs. After having worked for the organ builder John Vesterlund, they opened up their own workshop. They built only a small number of new organs, but carried out a vast number of organ restorations. Unusually for their time, restoration and reconstruction was the primary focus of their workshop. They also developed a document practice that was far more detailed than most organ restorers of their time, resulting in a large archive that was donated to the Swedish National Heritage Board (Riksantikvariämbetet) in Stockholm in 2008. The single most important part is F1A which contains documents about Swedish organs that they researched and/or worked on, organised alphabetically by place name.</p><p>The archive has the ID number SE/ATA/ENSK_141 and is organised in the following series:</p><ul><li>E 1-3: Correspondence</li><li>F 1 A-C: Documents relating to specific organs (including restoration proposals and reports)</li><li>F 1 D: Pipe scalings and reed pipes</li><li>F 1 E: Workshop documentation</li><li>F 2:Presentations and exhibitions regarding organs and organ restoration</li><li>F 3: Documents regarding the Association of Swedish Organ Builders</li><li>F 4: Personal documents</li><li>F 5–6: Business documents</li><li>F 7: Private documents</li><li>G 1–2: Accounting</li><li>H: Statistics</li><li>K: Photographs</li><li>L: Print publications</li><li>N: Objects</li><li>Z: Sound recordings</li></ul>",
      axel_content: "<p>Dr Axel Unnerbäck (b. 1938) was formerly the Head of the Division for the Documentation of Buildings at the Swedish National Heritage Board. He has worked as an organ expert and researcher, art historian, and building antiquarian, and has published extensively on the Swedish heritage of organs. During his long time working in the field, he built up a substantial reference archive containing information (both original documents and copies) about all kinds of organs in Sweden. As an organ researcher affiliated with GOArt (Göteborg Organ Art Center) at University of Gothenburg, he was responsible for the research on Swedish historical organs.</p>",
      lewenhaupt_content: "<p>Carl Gustaf Lewenhaupt (1949–2000) was an organist, organ consultant, and organ researcher affiliated with the Swedish National Heritage Board. As an independent consultant, he was instrumental in the construction of the Cahman style organ in the Kristine church (Magnussons Orgelbyggeri, Herwin Troje, 1982), Falun and oversaw the reconstruction of the Wahlberg organ in the Fredrik church, Karlskrona (Grönlunds Orgelbyggeri, 1987). He also worked on the restoration of a large number of historical organs, including the ones in Rappestad, Ekeby, Flisby and Västra Eneby. As an organ researcher affiliated with GOArt (Göteborg Organ Art Center) at University of Gothenburg, he was responsible for the development of instrument documentation methodology in close collaboration with Axel Unnerbäck and Niclas Fredriksson.</p><p>After his death his organ archive was donated to the Swedish National Heritage Board (Riksantikvariämbetet) in Stockholm, where it was organised by Unnerbäck and Fredriksson. The archive has the ID number SE/ATA/ENSK_215-1 and consists of four series of boxes.</p><ul><li>F 1 Text documents, tables and sketches</li><li>F 2 Drawings</li><li>K 1 Photographs</li><li>N 1 Objects</li></ul>",
      wester_content: "<p>Dr Bertil Wester (1902–1976), art historian, museum curator and musicologist specialising in Swedish historical organs, and a pioneer in academic organ research in Sweden. In 1936, he presented the first dissertation on historical organ building in Sweden, “Gotisk resning i svenska orglar”, and started a series of publications on Swedish Church Organs, which resulted in many articles on regional organ building traditions. He was a member of the Organ Committee of the Friends of Church Song, a very influential and active advisory body on issues concerning organ-building and restorations of Swedish historical organs in the decades around mid-twentieth century.</p><p>The archive has the ID number SE/ATA/ENSK_131-1 and is organised in the following series:</p><ul><li>F 1 Card catalogue</li><li>F 2 Notes</li><li>F 3-4 Documents regarding Abraham Hülphers’ works</li><li>F 5 A-C Correspondence</li><li>F 6 Manuscripts</li><li>F 7 Accounting</li><li>F 8 Photographs</li><li>F 9 Organ studies</li><li>F 10 Excerpts of organ contracts</li><li>F 11 Organ surveys</li><li>F 12 Organs at the Historical museum, Stockholm</li><li>F 13 Organs abroad</li><li>F 14 Organ Committee of the Friends of Church Song</li><li>F 15 Manuscript collection of Hennerberg I</li><li>F 16 Miscellaneous</li><li>F 17 Excerpts, measurements and notes</li><li>F 18 Excerpts from the works of Abraham Hülphers</li><li>F 19 Manuscript collection of Hennerberg II</li><li>F 20 Miscellaneous</li><li>J 1 Drawings and stereotype prints</li><li>K 1 Magic lantern images</li></ul>",
      friends_of_church_song_content: "<p>The Friends of Church Song was an association formed in 1889 to promote singing in the Swedish churches. In 1934 they formed an organ committee to advise congregations looking to build a new organ or do work on an existing instrument. The three original members of the committee were the organists Henry Weman and Waldemar Åhlén, and the organ historian Bertil Wester. The committee was very influential in promoting the ideas of the organ reform movement in Sweden as well as stimulating the interest in early Swedish organs. In 1967, the Organ Council was dissolved following a dispute with the National Heritage Board over the 18th-century organ in Börstil.</p><p>The archive is divided between two locations, with a portion forming part of the archive of Bertil Wester, and the remaining material (consisting of administration documents, and the personal archive of Henry Wehman) housed in the Special Collections of Uppsala University Library.</p>",
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
      f3title: "Filter by Language or Type of Inscription",
      f3description:"To the left you have controls to filter down the result to inscriptions in a particular language, or filter by type of inscription (Text, Figure or Composite).",
      f4title: "Interactive Plan",
      f4description:"The interactive plan shows the position of all the documented surfaces rendered on top of a plan of the cathedral. The colours indicate the amount of annotated inscriptions for each surface, ranging from yellow to bright red. Switch beteeen Ground Floor and Second Floor with the widget at the bottom of the page. Zoom in by scrolling or double-clicking, and click-and-drag to pan the view.",
      f5title: "Powerful Search",
      f5description:"You can use the search bar to search for a particular surface or inscription using room, name or tag. The inscription search lets you search both for structured data such as title, genre and tags, but also transcriptions and translations of the texts and descriptions of figures.",
      f6title: "Analytical Tools",
      f6description:"Click on a surface or inscription to enter the analytical tool where you can explore all the documentation and asscoiated data. This includes high resolution orthophotos, topographical visualisations, interactive 3D data, RTI photography, and the possibility to explore the spatial context of the surface through a 3D scan of the cathedral interiors."

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
      thearchives: "Arkiven",
      erici_title: "Einar Erici",
      moberg_title: "Harry och Valter Moberg",
      axel_title: "Axel Unnerbäck",
      lewenhaupt_title: "Carl Gustaf Lewenhaupt",
      wester_title: "Bertil Wester",
      friends_of_church_song_title: "Kyrkosångens vänner",
      erici_content: "<p>Dr Einar Erici (1885–1965) var en läkare som tillbringade en stor del av sitt liv med att dokumentera historiska svenska orglar och arbeta för deras bevarande. Han publicerade många artiklar om specifika orglar och orgelbyggare, men hans magnum opus var hans Orgelinventarium, en detaljerad redogörelse av bevarade orglar i vad han betraktade som den “klassiska” byggtraditionen.</p><p>Efter Ericis död såg Axel Unnerbäck till att Ericis arkiv togs emot av Riksantikvarieämbetet, där det finns än idag. Unnerbäck, som arbetade på ämbetet som byggnadsantikvarie och orgelexpert under flera årtionden, gjorde en avgörande insats för att få Ericis Orgelinventarium publicerat 1965, och det var Unnerbäck som publicerade en reviderad utgåva av samma verk 1988.</p><p>Arkivet har ID-numret SE/ATA/ENSK_31-1 och är organiserat i 28 lådor som i sin tur är grupperade i åtta serier:</p><ul><li>F 1 Personliga dokument</li><li>F 2 Manuskript och tryckta artiklar</li><li>F 3 Korrespondens</li><li>F 4 Dokument om piporglar</li><li>F 5 Dokument om orgelbyggare</li><li>F 6 Blandade dokument</li><li>F 7 Fotografier</li><li>F 8 Skioptikonbilder</li></ul>",
      moberg_content: "<p>Orgelbyggartvillingarna Harry Moberg (1915-1992) och Valter Moberg (1915-2006) var pionjärer när det gällde att restaurera och bevara svenska historiska orglar. Efter att ha varit lärlingar hos orgelbyggaren John Vesterlund öppnade de en egen verkstad. De byggde ganska få nya orglar, men utförde en lång rad restaureringar av historiska instrument. Att vara så fokuserade på just restaureringar var mycket ovanligt för sin tid. De utarbetade en en omfattande dokumenteringsmetod som resulterade i ett stort arkiv som överlämnade till Riksantikvarieämbete 2008. Den största och viktigaste delen är F1A som innehåller dokument om svenska orglar, organiserade alfabetiskt efter platsnamn.</p><p>Arkivet har ID-numret SE/ATA/ENSK_141 och är indelat i följande serier:</p><ul><li>E 1-3 Korrespondens</li><li>F1A-C Dokument rörande specifika orglar</li><li>F1D Mensurer och tungstämmor</li><li>F1E Arbetsbeskrivningar och verkstadsdokumentation</li><li>F2 Föredrag, texter och utställningar rörande orglar och orgelrestaurering</li><li>F3 Handlingar rörande arbetet i Svenska Orgelbyggares Förening (SOF)</li><li>F4 Personalia och personförteckningar</li><li>F5-6 Handlingar rörande företaget Bröderna Moberg och AB Kyrkorglar i Norrköping</li><li>F7 Handlingar av personlig karaktär</li><li>G1-2 Ekonomi och arbetsrapporter</li><li>H Statistik</li><li>K Fotografier</li><li>L Trycksaker</li><li>N Föremål</li><li>Z Ljudupptagningar</li></ul>",
      axel_content: "<p>Dr Axel Unnerbäck (1938– ) var tidigare avdelningschef på Riksantikvarieämbetets byggnadsavdelning. Han har arbetat som orgelexpert och forskare, konstvetare och byggnadsantikvarie, och har publicerat en lång rad texter om det svenska orgelkulturarvet. Under sin verksamhet byggde han upp ett omfattande arkiv med information (både i original och i kopia) om alla slags orglar i Sverige. Under sin tid då han var en del av GOArt (Göteborg Organ Art Center) var han där ansvarig för forskningen på svenska historiska instrument.</p>",
      lewenhaupt_content: "<p>Carl Gustaf Lewenhaupt (1949-2000) var en organist, orgelkonsult och orgelforskare med anknytning till Riksantikvarieämbetet. Som en fristående konsult var han avgörande för byggandet av orgeln i Cahman-stil i Falu Kristine kyrka (Magnussons Orgelbyggeri, Herwin Troje, 1987) och hade tillsyn över rekonstruktionen av Wahlberg-orgeln i Fredrikskyrkan, Karlskrona (Grönlunds orgelbyggeri, 1987). Han arbetade också med restaureringarna av ett stort antal histirsiak instrument, bland annat de i Rappestad, Ekeby, Flisby och Västra Eneby. Som en orgelforskare knuten till GOArt (Göteborg Organ Art Center) vid Göteborgs universitet var han ansvarig för utvecklingen av dokumentationsmetodologin i samarbete med Axel Unnerbäck och Niclas Fredriksson.</p><p> Efter hans död donerades hans orgelarkiv till Riksantikvarieämbete där det uppordnades av Unnerbäck och Fredriksson. Arkivet har ID-nummer SE/ATA/ENSK_215-1 och består av fyra serier:</p><ul><li>F 1 Handlingar rörande orglar</li><li>F 2 Ritningar</li><li>K 1 Fotografier</li><li>N 1 Föremål</li></ul>",
      wester_content: "<p>Dr Bertil Wester (1902-1976) var en konstvetare, museiintendent och musikvetare specialiserad på svenska historiska orglar och en pionjär inom den svenska orgelforskningen. År 1936 blev han den första i Sverige att disputera på svenska orglar med avhandlingen “Gotisk resning i svenska orglar”. Han startade en serie av publikationer om svenska instrument som resulterade i många artiklar om orglar och orgelbestånden i olika svenska regioner. Han var medlem i Kyrkosångens vänners orgelråd, en inflytelserik och aktiv grupp som gav råd och ledning om orgelbyggeri och orgelrestaureringar under 1900-talets mitt.</p><p>Arkiver har ID-nummer SE/ATA/ENSK_131-1 och är indelat i följande serier:</p><ul><li>F1 Lappkataloger över arkivalier</li><li>F2 Excerpter, uppmätningar, anteckningar I</li><li>F3-4 Excerpter ur Abraham Hülphers verk</li><li>F5A-C Korrespondens</li><li>F6 Manuskript</li><li>F7 Verifikationer, offerter</li><li>F8 Fotografier </li><li>F9 Orgeltekniska, orgelteoretiska och orgelhistoriska studier</li><li>F10 Excerpter orgelkontrakt</li><li>F11 Handlingar angående orgelinventeringar och besiktningar</li><li>F12 Handlingar angående orgel skänkt till Historiska museet</li><li>F13 Handlingar angående orgelstudier i utlandet</li><li>F14 Kyrkosångens vänners orgelråds arkiv</li><li>F15 C. F. Hennerbergs 'Manuskriptsamling' I</li><li>F16 Övriga handlingar I</li><li>F17 Excerpter, uppmätningar, anteckningar II</li><li>F18 Excerpter Hülphers 'Bref-Bok' II</li><li>F19 C. F. Hennerbergs 'Manuskriptsamling' II</li><li>F20 Övriga handlingar II</li><li>J1 Ritningar, klichéavtryck</li><li>K1 Skioptikonbilder</li></ul>",
      friends_of_church_song_content: "<p>Kyrkosångens vänner bildades 1889 för att främja sången i Sveriges kyrkor. År 1934 bildade de ett orgelråd som skulle ge råd och ledning till församlingar som ville bygga ett nytt instrument eller utföra arbeten på ett existerande. De tre ursprungliga medlemmarna i kommittén var organisterna Henry Weman och Waldemar Åhlen samt orgelforskaren Bertil Wester. Kommittén var inflytelserik och viktig både för spridandet av orgelrörelsens idéer och för att stimulera intresse för äldre svenska orglar. 1967 upplöstes orgelrådet efter en dispyt med Riksantikvarieämbete över 1700-talsorgeln i Börstil.</p><p>Arkivet är delat i två delar där den ena ingår i Bertil Westers samling på Riksantikvarieämbetet och den andra finns på Uppsala universitetsbibliotek.</p>"
    },
};  

const i18n = createI18n({
  locale: 'en', 
  messages,
  warnHtmlMessage: false,
  warnHtmlInMessage: "off"
});

export default i18n;
