import { Bedrift } from './type-oversikt';

// Understier til mapper med filer i
const LocalPaths = {
    path_bedriftLogo: '../assets/lokal-bedriftlogo/',
    path_bedriftFramsidebilete: '../assets/lokal-bedriftframsidebilete/',
    path_ruterLink1: '/bedriften/'
};

// Alle Bedrifter - Lokal database
/* export const BedrifterTest: Bedrift[] = [
    {
        namn: 'DNB',
        ruterLink: `${LocalPaths.path_ruterLink1}dnb`,
        logoLink: `${LocalPaths.path_bedriftLogo}DNB.jpg`,
        framsidebileteLink: null,
        beskriving1: 'DNB er ... test ... test 2...',
        beskriving2: null,
        linktekst1: 0,
        link1: 'https://www.dnb.no/',
        tilleggskort: [
            {
                tittel: 'DNB - middagen',
                beskriving1: 'Beskrivelse om middagen test 1 ...',
                linktekst1: 0,
                link1: 'https://www.dnb.no/dnbnyheter/no/din-okonomi/fattig-student-sparer-store-summer'
            }
        ]
    }
]; */
export const Bedrifter: Bedrift[] = [
    {
        namn: 'DNV GL',
        ruterLink: `${LocalPaths.path_ruterLink1}dnv-gl`,
        logoLink: `${LocalPaths.path_bedriftLogo}dnv_gl.png`,
        framsidebileteLink: null,
        beskriving1: `With chosen in our goal of securing life, values and environmental supply DNV GL organizations to make security and sustainability in the customer's businesses.`,
        beskriving2: `DNV GL is a global quality assurance and risk management company. Driven by our purpose of safeguarding life, property and the environment, we enable our customers to advance the safety and sustainability of their business. We provide classification, technical assurance, software and independent expert advisory services to the maritime, oil & gas, power and renewables industries. We also provide certification and supply chain services to customers across a wide range of industries. Operating in more than 100 countries, our experts are dedicated to helping customers make the world safer, smarter and greener.`,
        linktekst1: 0,
        link1: 'https://www.dnvgl.no/',
        tilleggskort: []
    },
    {
        namn: 'Bouvet',
        ruterLink: `${LocalPaths.path_ruterLink1}bouvet`,
        logoLink: `${LocalPaths.path_bedriftLogo}bouvet.png`,
        framsidebileteLink: null,
        beskriving1: `Bouvet er et norsk konsulentselskap som bistår bedrifter og samfunnsaktører i alle bransjer.`,
        beskriving2: `Bouvet er et skandinavisk konsulentselskap, som gjennom rådgivning, utvikling, design og forvaltning, bidrar til å maksimere effekter i krysningspunktet mellom moderne teknologi og digital kommunikasjon. Flotte ord - ingen overflødige. Varen vi leverer kommer fra faglig styrke. Derfor har vi også et bevisst forhold til faglig utvikling, som kommer i mange former tilpasset den enkelte. Vi har blant annet fagkvelder, arkitektskole, systemutviklerskole, deltakelse på konferanser, hackatons og internkonferanser med fokus på kompetansedeling.`,
        linktekst1: 0,
        link1: 'https://www.bouvet.no/',
        tilleggskort: []
    },
    {
        namn: 'Yara',
        ruterLink: `${LocalPaths.path_ruterLink1}yara`,
        logoLink: `${LocalPaths.path_bedriftLogo}yara.png`,
        framsidebileteLink: null,
        beskriving1: `Yaras produktportefølje og agronomiske ekspertise blir stadig mer verdifull i et miljø med økt fokus på effektivitet i landbruket, matsikkerhet og god produktforvaltning. I Norge leverer vi et komplett sortiment tilpasset alle typer produksjoner i norsk landbruk.`,
        beskriving2: `Vår industrielle produktportefølje går til miljøforbedringer og til en rekke bransjer og prosesser. Miljøproduktene utgjør en egen produktgruppe med utspring fra nitrogenproduksjon. Denne produktgruppen spenner fra produkter og tjenester som fjerner skadelige utslipp fra kjøretøyer og stasjonære installasjoner til de som brukes til å kontrollere sjenerende lukt fra avløps- og kloakksystemer.`,
        linktekst1: 0,
        link1: 'https://www.yara.no/',
        tilleggskort: []
    }
];
