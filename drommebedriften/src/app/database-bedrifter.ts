import { Bedrift } from './type-oversikt';

// Understier til mapper med filer i
export const LocalPaths = {
    path_bedriftLogo: '../assets/lokal-bedriftlogo/',
    path_bedriftFramsidebilete: '../assets/lokal-bedriftframsidebilete/'
};

// Ein heile Google Form Iframe Embed link:
// E.g.: <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" ...... </iframe>
function gfise(iframeEmbedLink?: string): string | null {
    if (iframeEmbedLink) {
        const linkSplit = iframeEmbedLink.split('"');
        const googleFormIframeSource = linkSplit[1];

        return googleFormIframeSource;
    }

    return null;
}


// Alle Bedrifter - Lokal database
export const Bedrifter: Bedrift[] = [
    {
        namn: 'Tester',
        ruterLink: 'tester',
        logoLink: null,
        framsidebileteLink: null,
        beskriving1: 'tester1',
        beskriving2: 'tester2',
        linktekst1: 0,
        link1: 'https://www.google.no/',
        googleFormHTMLEmbedLink: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
        tilleggskort: [
            {
                tittel: 'Test1',
                beskriving1: 'Dette er ein test1.',
                linktekst1: 'Custom link-tekst',
                link1: 'https://google.no'
            },
            {
                tittel: 'Test2',
                beskriving1: 'Dette er ein test2.',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'DNV GL',
        ruterLink: 'dnv-gl',
        logoLink: `${LocalPaths.path_bedriftLogo}dnv_gl.png`,
        framsidebileteLink: null,
        beskriving1: `With chosen in our goal of securing life, values and environmental supply DNV GL organizations to make security and sustainability in the customer's businesses.`,
        beskriving2: `DNV GL is a global quality assurance and risk management company. Driven by our purpose of safeguarding life, property and the environment, we enable our customers to advance the safety and sustainability of their business. We provide classification, technical assurance, software and independent expert advisory services to the maritime, oil & gas, power and renewables industries. We also provide certification and supply chain services to customers across a wide range of industries. Operating in more than 100 countries, our experts are dedicated to helping customers make the world safer, smarter and greener.`,
        linktekst1: 0,
        link1: 'https://www.dnvgl.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Bouvet',
        ruterLink: 'bouvet',
        logoLink: `${LocalPaths.path_bedriftLogo}bouvet.png`,
        framsidebileteLink: null,
        beskriving1: `Bouvet er et norsk konsulentselskap som bistår bedrifter og samfunnsaktører i alle bransjer.`,
        beskriving2: `Bouvet er et skandinavisk konsulentselskap, som gjennom rådgivning, utvikling, design og forvaltning, bidrar til å maksimere effekter i krysningspunktet mellom moderne teknologi og digital kommunikasjon. Flotte ord - ingen overflødige. Varen vi leverer kommer fra faglig styrke. Derfor har vi også et bevisst forhold til faglig utvikling, som kommer i mange former tilpasset den enkelte. Vi har blant annet fagkvelder, arkitektskole, systemutviklerskole, deltakelse på konferanser, hackatons og internkonferanser med fokus på kompetansedeling.`,
        linktekst1: 0,
        link1: 'https://www.bouvet.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Yara',
        ruterLink: 'yara',
        logoLink: `${LocalPaths.path_bedriftLogo}yara.png`,
        framsidebileteLink: null,
        beskriving1: `Yaras produktportefølje og agronomiske ekspertise blir stadig mer verdifull i et miljø med økt fokus på effektivitet i landbruket, matsikkerhet og god produktforvaltning. I Norge leverer vi et komplett sortiment tilpasset alle typer produksjoner i norsk landbruk.`,
        beskriving2: `Vår industrielle produktportefølje går til miljøforbedringer og til en rekke bransjer og prosesser. Miljøproduktene utgjør en egen produktgruppe med utspring fra nitrogenproduksjon. Denne produktgruppen spenner fra produkter og tjenester som fjerner skadelige utslipp fra kjøretøyer og stasjonære installasjoner til de som brukes til å kontrollere sjenerende lukt fra avløps- og kloakksystemer.`,
        linktekst1: 0,
        link1: 'https://www.yara.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Finansdepartementet',
        ruterLink: 'finansdepartementet',
        logoLink: `${LocalPaths.path_bedriftLogo}Finansdepartementet.png`,
        framsidebileteLink: null,
        beskriving1: `Finansdepartementet (FIN) har ansvaret for å planlegge og iverksette den økonomiske politikken, budsjettpolitikken, skatte- og avgiftspolitikken, finansiell stabilitet og forvaltningen av Statens pensjonsfond.`,
        linktekst1: 0,
        link1: 'https://www.regjeringen.no/no/dep/fin/id216/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Sjøfartsdirektoratet',
        ruterLink: 'sjofartsdirektoratet',
        logoLink: `${LocalPaths.path_bedriftLogo}Sjøfartsdirektoratet.png`,
        framsidebileteLink: null,
        beskriving1: `Sjøfartsdirektoratet er eit forvaltningsorgan under Nærings- og fiskeridepartementet og Klima- og miljødepartementet med myndigheitsansvar overfor norskregistrerte skip og utanlandske skip som går inn til norske hamner.`,
        linktekst1: 0,
        link1: 'https://www.sdir.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Tryg',
        ruterLink: 'tryg',
        logoLink: `${LocalPaths.path_bedriftLogo}Tryg.png`,
        framsidebileteLink: null,
        beskriving1: ``,
        linktekst1: 0,
        link1: 'https://www.tryg.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'OBOS',
        ruterLink: 'obos',
        logoLink: `${LocalPaths.path_bedriftLogo}OBOS.png`,
        framsidebileteLink: null,
        beskriving1: ``,
        linktekst1: 0,
        link1: 'https://www.obos.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Tekna',
        ruterLink: 'tekna',
        logoLink: `${LocalPaths.path_bedriftLogo}Tekna.png`,
        framsidebileteLink: null,
        beskriving1: ``,
        linktekst1: 0,
        link1: 'https://www.tekna.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Accenture',
        ruterLink: 'accenture',
        logoLink: `${LocalPaths.path_bedriftLogo}Accenture.png`,
        framsidebileteLink: null,
        beskriving1: ``,
        linktekst1: 0,
        link1: 'https://www.accenture.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    },
    {
        namn: 'Forsvaret',
        ruterLink: 'forsvaret',
        logoLink: `${LocalPaths.path_bedriftLogo}Forsvaret.png`,
        framsidebileteLink: null,
        beskriving1: ``,
        linktekst1: 0,
        link1: 'https://www.forsvaret.no/',
        googleFormHTMLEmbedLink: gfise(),
        tilleggskort: []
    }
];
