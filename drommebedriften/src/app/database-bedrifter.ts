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
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}evening-55067_1280.webp`,
        beskriving1: 'tester1',
        beskriving2: 'tester2',
        linktekst1: 0,
        link1: 'https://www.google.no/',
        gfhel: [
            {
                tittel: 'Mat',
                beskriving1: 'Custom tekst for ein Google Form-undersøkelse.',
                linktekst1: 0,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
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
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}DNV-GL.jpg`,
        beskriving1: `Siden 1864 har vårt formål vært å sikre liv, verdier og miljøet. Vi bistår våre kunder med å forbedre deres virksomhet på en sikker og bærekraftig måte. <br>
        Vi leverer klassifisering, sertifisering, teknisk risiko- og pålitelighetsanalyse sammen med programvare, datahåndtering og uavhengig ekspertrådgivning til maritim sektor, til olje- og gass-sektoren, og til energibedrifter. Med 80,000 bedriftskunder på tvers av alle industrisektorer er vi også verdensledende innen sertifisering av ledelsessystemer. <br><br>
        Ved å kombinere uavhengig teknisk, digital og operasjonell ekspertise med metoder for risikohåndtering, hjelper vi våre kunder med å ta bedre beslutninger og med å skape tillit mellom bedrifter og interessentene deres.
<br><br>
Vi utvikler nye industristandarder og bedre innsikt for våre kunder og samfunnet generelt ved å investere tungt i forskning og utvikling. Med høyt utdannede ansatte i 100 land, jobber vi sammen med våre kunder om å gjøre verden sikrere, smartere og grønnere.
`,
        linktekst1: 0,
        link1: 'https://www.dnvgl.no/',
        gfhel: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med DNV GL her',
                linktekst1: 'Meld deg på',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om DNV GL middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Bouvet',
        ruterLink: 'bouvet',
        logoLink: `${LocalPaths.path_bedriftLogo}bouvet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Bouvet.jpg`,
        beskriving1: `Bouvet er et norsk konsulentselskap som bistår bedrifter og samfunnsaktører i alle bransjer.`,
        beskriving2: `Bouvet er et skandinavisk konsulentselskap, som gjennom rådgivning, utvikling, design og forvaltning, bidrar til å maksimere effekter i krysningspunktet mellom moderne teknologi og digital kommunikasjon. Flotte ord - ingen overflødige. Varen vi leverer kommer fra faglig styrke. Derfor har vi også et bevisst forhold til faglig utvikling, som kommer i mange former tilpasset den enkelte. Vi har blant annet fagkvelder, arkitektskole, systemutviklerskole, deltakelse på konferanser, hackatons og internkonferanser med fokus på kompetansedeling.`,
        linktekst1: 0,
        link1: 'https://www.bouvet.no/',
        gfhel: null,
        tilleggskort: []
    },
    {
        namn: 'Yara',
        ruterLink: 'yara',
        logoLink: `${LocalPaths.path_bedriftLogo}yara.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Yara.jpg`,
        beskriving1: `Yaras produktportefølje og agronomiske ekspertise blir stadig mer verdifull i et miljø med økt fokus på effektivitet i landbruket, matsikkerhet og god produktforvaltning. I Norge leverer vi et komplett sortiment tilpasset alle typer produksjoner i norsk landbruk.`,
        beskriving2: `Vår industrielle produktportefølje går til miljøforbedringer og til en rekke bransjer og prosesser. Miljøproduktene utgjør en egen produktgruppe med utspring fra nitrogenproduksjon. Denne produktgruppen spenner fra produkter og tjenester som fjerner skadelige utslipp fra kjøretøyer og stasjonære installasjoner til de som brukes til å kontrollere sjenerende lukt fra avløps- og kloakksystemer.`,
        linktekst1: 0,
        link1: 'https://www.yara.no/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Yara her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Yara middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Finansdepartementet',
        ruterLink: 'finansdepartementet',
        logoLink: `${LocalPaths.path_bedriftLogo}Finansdepartementet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Finansdepartementet.jpeg`,
        beskriving1: `Finansdepartementet (FIN) har ansvaret for å planlegge og iverksette den økonomiske politikken, budsjettpolitikken, skatte- og avgiftspolitikken, finansiell stabilitet og forvaltningen av Statens pensjonsfond.`,
        linktekst1: 0,
        link1: 'https://www.regjeringen.no/no/dep/fin/id216/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Finansdepartementet her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Finansdepartementet middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Sjøfartsdirektoratet',
        ruterLink: 'sjofartsdirektoratet',
        logoLink: `${LocalPaths.path_bedriftLogo}Sjøfartsdirektoratet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Sjøfartdirektoratet.jpg`,
        beskriving1: `Sjøfartsdirektoratet er eit forvaltningsorgan under Nærings- og fiskeridepartementet og Klima- og miljødepartementet med myndigheitsansvar overfor norskregistrerte skip og utanlandske skip som går inn til norske hamner.`,
        linktekst1: 0,
        link1: 'https://www.sdir.no/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Sjøfartsdirektoratet her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Sjøfartsdirektoratet middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Tryg',
        ruterLink: 'tryg',
        logoLink: `${LocalPaths.path_bedriftLogo}Tryg.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Tryg.jpg`,
        beskriving1: `Tryg er Nordens nest største skadeforsikringsselskap med aktiviteter i Danmark, Norge og Sverige. Vi har levert økonomisk og personlig sikkerhet for kundene våre i snart 300 år.
        `,
        linktekst1: 0,
        link1: 'https://www.tryg.no/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Tryg her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Tryg middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'OBOS',
        ruterLink: 'obos',
        logoLink: `${LocalPaths.path_bedriftLogo}OBOS.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Obos.jpg`,
        beskriving1: `OBOS ble stiftet i 1929, og det første borettslaget sto ferdig på Etterstad to år etter. Helt siden den gang har vi skaffet våre medlemmer boliger og forvaltet disse på en trygg måte. Og det skal vi fortsette med – lenge!
        `,
        linktekst1: 0,
        link1: 'https://www.obos.no/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Obos her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Obos middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Tekna',
        ruterLink: 'tekna',
        logoLink: `${LocalPaths.path_bedriftLogo}Tekna.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Tekna.png`,
        beskriving1: `Har du, eller studerer du til, en master i naturvitenskap eller teknologi, kan du bli medlem i Tekna. Vi er Norges største fagforening for de med mastergrad, og tilbyr blant annet juridisk bistand, faglige tilbud og nettverk over hele landet, samt en av landets beste bank- og forsikringsavtaler.
        `,
        linktekst1: 0,
        link1: 'https://www.tekna.no/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Tekna her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Tekna middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Accenture',
        ruterLink: 'accenture',
        logoLink: `${LocalPaths.path_bedriftLogo}Accenture.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Accenture.jpeg`,
        beskriving1: `Vi kommer fra varierte bakgrunner, men jobber sammen. Med allsidigheten dette fører til, skal vi løse de største utfordringene selskaper, organisasjoner og etater står overfor. Dette gjør vi med entusiasme, kunnskap, innsikt og de aller siste og beste teknologiske løsningene. Vi har et bredt spekter av innovative verktøy, en læringskurve som aldri stanser og et globalt nettverk som gir oss en verden av erfaringer å høste av. Vi holder oss alltid i forkant; vi skaper endringer over alt.
        `,
        linktekst1: 0,
        link1: 'https://www.accenture.no/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Accenture her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Accenture middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Forsvaret',
        ruterLink: 'forsvaret',
        logoLink: `${LocalPaths.path_bedriftLogo}Forsvaret.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Forsvaret.jpg`,
        beskriving1: `Forsvaret har et bredt utdanningstilbud med mange muligheter. En utdanning i Forsvaret er ikke det samme som ved de fleste sivile høgskoler- og universiteter. Noen dager er det tradisjonell klasseromsundervisning, mens andre dager tilbringes ute på øvelse, på trening eller skytebanen. Forsvaret kombinerer teori og praksis på en måte som gir en spennende og variert skolehverdag.
        `,
        linktekst1: 0,
        link1: 'https://www.forsvaret.no/',
        gfhel: null,
        tilleggskort: [
            {
                tittel: 'Speeddate',
                beskriving1: 'Meld deg på speeddate med Forsvaret her',
                linktekst1: 'Custom link-tekst',
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            },
            {
                tittel: 'Middag',
                beskriving1: 'Les mer om Forsvaret middagen her',
                linktekst1: 0,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Knowit',
        ruterLink: 'knowit',
        logoLink: `${LocalPaths.path_bedriftLogo}Knowit.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Knowit.jpg`,
        beskriving1: `Knowit AB (publ) er et konsulentselskap som, i den stadig raskere digitaliseringen, skaper unike kundeverdier gjennom å tilby grenseoverskridende leveranser fra de tre forretningsområdene Experience, Insight og Solutions. Det er evnen til å kombinere kompetanse innen design og kommunikasjon, management consulting og IT som skiller oss fra andre konsulentfirmaer. Vår kultur preges av åpenhet, forståelse for kundens forretninger, høy spesialistkompetanse og en vilje til å utvikles kontinuerlig. Knowit ble etablert i 1990 og har i dag ca. 2000 ansatte på 14 kontorer i Sverige, seks i Norge samt ett i Danmark, Finland og Tyskland. Knowit AB (publ) er notert på den Nordiska Börsen i Stockholm.
        `,
        linktekst1: 0,
        link1: 'https://www.knowit.no/',
        gfhel: null,
        tilleggskort: [            {
            tittel: 'Speeddate',
            beskriving1: 'Meld deg på speeddate med Knowit her',
            linktekst1: 'Custom link-tekst',
            link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKVBnAKvLDBBtZGVOJSq-v5WKxup3rWvkfM5ee2VmwADEa3w/viewform?embedded=true" width="640" height="378" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
        },
        {
            tittel: 'Middag',
            beskriving1: 'Les mer om Knowit middagen her',
            linktekst1: 0,
            link1: 'https://google.no'
        }]
    }
];
