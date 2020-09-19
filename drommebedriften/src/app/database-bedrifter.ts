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
// *** Sjekk type-oversikt.ts for dokumentasjon *** //
export const Bedrifter: Bedrift[] = [
    {
        namn: 'DNV GL',
        ruterLink: 'dnv-gl',
        logoLink: `${LocalPaths.path_bedriftLogo}dnv_gl.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}DNV-GL.jpg`,
        framsidebiletePosisjon: 'top',
        beskriving1: `Siden 1864 har vårt formål vært å sikre liv, verdier og miljøet. Vi bistår våre kunder med å forbedre deres virksomhet på en sikker og bærekraftig måte. <br>
        Vi leverer klassifisering, sertifisering, teknisk risiko- og pålitelighetsanalyse sammen med programvare, datahåndtering og uavhengig ekspertrådgivning til maritim sektor, til olje- og gass-sektoren, og til energibedrifter. Med 80,000 bedriftskunder på tvers av alle industrisektorer er vi også verdensledende innen sertifisering av ledelsessystemer. <br><br>
        Ved å kombinere uavhengig teknisk, digital og operasjonell ekspertise med metoder for risikohåndtering, hjelper vi våre kunder med å ta bedre beslutninger og med å skape tillit mellom bedrifter og interessentene deres.
<br><br>
Vi utvikler nye industristandarder og bedre innsikt for våre kunder og samfunnet generelt ved å investere tungt i forskning og utvikling. Med høyt utdannede ansatte i 100 land, jobber vi sammen med våre kunder om å gjøre verden sikrere, smartere og grønnere.
`,
        linktekst1: 1,
        link1: 'https://www.dnvgl.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Bouvet',
        ruterLink: 'bouvet',
        logoLink: `${LocalPaths.path_bedriftLogo}bouvet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Bouvet.jpg`,
        framsidebiletePosisjon: '0px -250px',
        beskriving1: `Bouvet er et norsk konsulentselskap som bistår bedrifter og samfunnsaktører i alle bransjer.`,
        beskriving2: `Bouvet er et skandinavisk konsulentselskap, som gjennom rådgivning, utvikling, design og forvaltning, bidrar til å maksimere effekter i krysningspunktet mellom moderne teknologi og digital kommunikasjon. Flotte ord - ingen overflødige. Varen vi leverer kommer fra faglig styrke. Derfor har vi også et bevisst forhold til faglig utvikling, som kommer i mange former tilpasset den enkelte. Vi har blant annet fagkvelder, arkitektskole, systemutviklerskole, deltakelse på konferanser, hackatons og internkonferanser med fokus på kompetansedeling.`,
        linktekst1: 1,
        link1: 'https://www.bouvet.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Yara',
        ruterLink: 'yara',
        logoLink: `${LocalPaths.path_bedriftLogo}yara.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Yara.jpg`,
        beskriving1: `Yaras produktportefølje og agronomiske ekspertise blir stadig mer verdifull i et miljø med økt fokus på effektivitet i landbruket, matsikkerhet og god produktforvaltning. I Norge leverer vi et komplett sortiment tilpasset alle typer produksjoner i norsk landbruk.`,
        beskriving2: `Vår industrielle produktportefølje går til miljøforbedringer og til en rekke bransjer og prosesser. Miljøproduktene utgjør en egen produktgruppe med utspring fra nitrogenproduksjon. Denne produktgruppen spenner fra produkter og tjenester som fjerner skadelige utslipp fra kjøretøyer og stasjonære installasjoner til de som brukes til å kontrollere sjenerende lukt fra avløps- og kloakksystemer.`,
        linktekst1: 1,
        link1: 'https://www.yara.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Finansdepartementet',
        ruterLink: 'finansdepartementet',
        logoLink: `${LocalPaths.path_bedriftLogo}Finansdepartementet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Finansdepartementet.jpeg`,
        beskriving1: `Finansdepartementet er et tradisjonsrikt og sentralt departement som ble opprettet i 1814. Finansdepartementet er, med hovedansvar for landets økonomiske politikk, viktig for samfunnsutviklingen og av stor betydning for den enkelte innbyggers hverdag. Hos oss jobber det 300 dyktige medarbeidere som sammen utgjør en spennende kunnskapsorganisasjon.
        <br /> <br /> Departementet ledes av finansministeren, som sammen med statssekretærer og politisk rådgiver utgjør den politiske ledelsen. Finansdepartementets embetsverk ledes av finansråden. I motsetning til den politiske ledelsen er embetsverket fast ansatte medarbeidere som jobber under skiftende regjeringer. Blant våre ansatte er de fleste jurister, økonomer og statsvitere.
        <br /> <br />Våre arbeidsoppgaver er blant annet å:
        •planlegge og iverksette den økonomiske politikken
        •samordne arbeidet med statsbudsjettet
        •sørge for at det offentlige får inn skatter og avgifter
        •overvåke og utarbeide regler for finansmarkedene
        •forvalte Statens pensjonsfond
        <br />
        <br />
        Som nyansatt hos oss har du en reell rolle i departementet fra første stund, og du vil få mye ansvar. Hos oss vil du kunne anvende og utvikle
         kunnskapen fra skolebenken på dagsaktuelle problemstillinger. Du fungerer som en selvstendig faglig rådgiver fra dag en, og gir råd til politisk 
         ledelse i saker på ditt fagområde. Samtidig får du tett oppfølging av dyktige ledere og kollegaer som hører på dine synspunkter. Ditt arbeid er 
         viktig for departementet, og du vil få en variert arbeidshverdag med høyt tempo.
         <br />
         <br />
         Hvilke muligheter tilbyr vi studenter?
Praktikantopphold: Formålet med praktikantoppholdet er å gi deg en opplevelse av hvordan det er å jobbe som jurist og økonom i Finansdepartementet.
<br /><br />
For jurister:
Praktikantoppholdet tilbys nå i vår Skattelovavdeling, og er lønnet med fire til seks ukers varighet. Som praktikant hos oss får du anledning til å jobbe med saker i skjæringspunktet mellom juss, fag og politikk og får være en del av et sterkt fagmiljø som gir råd til vår politiske ledelse.
Vi ser etter deg som har fullført 3. studieår/avdeling og har gode eksamensresultater. Les mer om stillingen her <a href="https://www.jobbnorge.no/ledige-stillinger/stilling/191770/praktikantopphold-i-skattelovavdelingen-for-jusstudenter">www.jobbnorge.no</a> 
Søknadsfrist 1.okt.2020
For økonomer:
<br /><br />
Finansdepartementet tilbyr ett til tre lønnede engasjementer for økonomistudenter med oppstart i begynnelsen av januar 2021 og med en varighet på 5-6 uker. Kortere opphold kan vurderes. 
Arbeidsoppgavene vil i hovedsak bestå av analyser og vurderinger av ulike faglige problemstillinger og understøtte avdelingene i deres arbeid. Engasjementet er en god mulighet til å bli bedre kjent med Finansdepartementet. Samtidig får du anledning til å arbeide med utfordrende og samfunnsnyttige oppgaver i et sterkt fagmiljø, samt få et innblikk i samspillet mellom økonomi og politikk. Du vil få tildelt en fadder under hele oppholdet.
Studentene vil bli tilknyttet en avdeling, henholdsvis Skatteøkonomisk avdeling, Finansavdelingen eller Utviklingsprogrammet.
Les mer om stillingen her: <a href="https://www.jobbnorge.no/ledige-stillinger/stilling/191809/studentengasjement-for-oekonomer">www.jobbnorge.no</a>
Søknadsfrist 29.sept. 2020.<br /><br />
 
Vi rekrutterer studenter som har utdanning innen økonomi herunder siviløkonomi, samfunnsøkonomi etc, og jurister (til FMA og SL).
<br /><br /> 
Ønsker du mer informasjon om Finansdepartementet? På <a href="https://jobbifin.dep.no ">www.jobbifin.dep.no/ </a>
finner du mer informasjon om oss og om våre avdelinger.
<br /> 
Følg oss gjerne på <a href="https://www.linkedin.com/company/2496901/ ">www.linkedin.com</a>

        `,
        linktekst1: 1,
        link1: 'https://www.regjeringen.no/no/dep/fin/id216/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Sjøfartsdirektoratet',
        ruterLink: 'sjofartsdirektoratet',
        logoLink: `${LocalPaths.path_bedriftLogo}Sjøfartsdirektoratet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Sjøfartdirektoratet.jpg`,
        framsidebiletePosisjon: 'top',
        beskriving1: `Sjøfartsdirektoratet er eit forvaltningsorgan under Nærings- og fiskeridepartementet og Klima- og miljødepartementet med myndigheitsansvar overfor norskregistrerte skip og utanlandske skip som går inn til norske hamner.`,
        linktekst1: 1,
        link1: 'https://www.sdir.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Tryg',
        ruterLink: 'tryg',
        logoLink: `${LocalPaths.path_bedriftLogo}Tryg.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Tryg.jpg`,
        framsidebiletePosisjon: 'top',
        beskriving1: `Tryg er Nordens nest største skadeforsikringsselskap med aktiviteter i Danmark, Norge og Sverige. Vi har levert økonomisk og personlig sikkerhet for kundene våre i snart 300 år.
        `,
        linktekst1: 1,
        link1: 'https://www.tryg.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
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
        linktekst1: 1,
        link1: 'https://www.obos.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Tekna',
        ruterLink: 'tekna',
        logoLink: `${LocalPaths.path_bedriftLogo}Tekna.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Tekna.png`,
        beskriving1: `Tekna Studnet er Bergens største studentorganisasjon for ingeniører, sivilingeniører, teknologer og naturvitere. Du finner oss både på universitetet og høyskolen. Vi arrangerer til sammen mer enn 30 faglige og sosiale arrangement som du som medlem kan delta på. Itillegg får våre student-medlemmer også tilbud om gratis forsikring, rådgivning på CV, jobbsøknader, og juridisk bistand dersom du trenger det.   Er du student og har planer om å fullføre en mastergrad som inneholder minimum 120 studiepoeng innenfor realfag, teknologi eller naturvitenskap på enten bachelor- eller mastergradsnivå, kan du bli studentmedlem. Medlemskap koster kr 150 pr halvår.
        <br /><br /><iframe src="https://player.vimeo.com/video/422752048?color=35a39e&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/422752048">Dette er Tekna</a> from <a href="https://vimeo.com/tekna">Tekna</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        
        `,
        linktekst1: 1,
        link1: 'https://www.tekna.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://tekna.no'
            }
        ]
    },
    {
        namn: 'Accenture',
        ruterLink: 'accenture',
        logoLink: `${LocalPaths.path_bedriftLogo}Accenture.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Accenture.jpeg`,
        framsidebiletePosisjon: 'top',
        beskriving1: `Accenture i Norge (hentet fra https://www.accenture.com/no-en/about/company/norway): Vi løser utfordringene selskaper, organisasjoner og etater står overfor. Dette gjør vi med entusiasme, kunnskap, innsikt og de aller siste og beste teknologiske løsningene. Vi kommer fra varierte bakgrunner, men jobber sammen. Med allsidigheten dette fører til, skal vi løse de største utfordringene selskaper, organisasjoner og etater står overfor. Vi har et bredt spekter av innovative verktøy, en læringskurve som aldri stanser og et globalt nettverk som gir oss en verden av erfaringer å høste av. Vi holder oss alltid i forkant; vi skaper endringer over alt.
        <br /><br />
        Hos oss får du mulighet til å utvikle hele deg, også på det personlige plan. Du møter utfordringer på en rekke ulike områder og fagfelt, du tar all din kompetanse i bruk og lærer ny underveis. Slik får du en sjelden mulighet til å finne ut hva du liker aller best og hvor styrken din ligger, uten å måtte bytte jobb. Rundt deg vil du alltid ha eksperter, mentorer og veiledere, og et nettverk som strekker seg rundt hele kloden.
        <br /><br />
        Les mer om Accenture Global: <a href="https://www.accenture.com/no-en/about/company-index">www.accenture.com/no-en/about/company-index</a>
        `,
        linktekst1: 1,
        link1: 'https://www.accenture.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
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
        linktekst1: 1,
        link1: 'https://www.forsvaret.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
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
        linktekst1: 1,
        link1: 'https://www.knowit.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Wintershall dea',
        ruterLink: 'wintershall_dea',
        logoLink: `${LocalPaths.path_bedriftLogo}Wintershall_dea.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Wintershall_dea.jpg`,
        beskriving1: `Wintershall Dea er Europas ledende, uavhengige olje- og gasselskap med aktiviteter på fem kontinenter. Vår virksomhet strekker seg over hele den norske kontinentalsokkelen, fra Nordsjøen til Barentshavet. Wintershall Dea har virksomhet i hele verdikjeden, fra leting via feltutbygging til produksjon. Norge er et av Wintershall Deas kjerneområder og vi er en stor operatør og en engasjert partner på norsk sokkel. Vi er operatør for feltene Brage, Maria og Vega og for utbyggingsprosjektene Dvalin og Nova. I tillegg er vi en aktiv partner i blant annet Skarv, Aasta Hansteen, Njord og Gjøa.
        <br /><br />
        Er du nysgjerrig og klar for å bli en del av et nytt kapittel av eventyret i Nordsjøen? Wintershall Dea tilbyr spennende prosjekter som gir mulighet for faglig utvikling.
        Vi tilbyr spesielle trainee-programmer som nyutdannede medarbeidere kan starte på med det samme. Vi tilbyr og sommerjobber og mulighet for å skrive masteroppgave i samarbeid med en av våre eksperter.
        <br /><br />
        Les mer på vår hjemmeside <a href="https://wintershalldea.no/nb/karriere-norge">www.wintershalldea.no/</a>
        <br /><br />
        Link til trainee-video
        https://vimeo.com/445542706

         `,
        linktekst1: 1,
        link1: 'https://wintershalldea.no/en',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'ATEA',
        ruterLink: 'atea',
        logoLink: `${LocalPaths.path_bedriftLogo}ATEA.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Atea.jpg`,
        beskriving1: `Fremtiden er ikke bare noe som skjer. Den er noe vi skaper
        Sammen med kundene våre i hele landet bygger Atea Norge med IT.  Vi vil bidra til mer effektiv læring i skolen. Vi vil styrke politiet og helseomsorgen i deres arbeid og på den måten være med og trygge vår felles velferd. Vi vil gjøre industrien mer konkurransedyktig og gi entreprenører muligheten til å realisere sine drømmer. 
        Hos oss får du et heldekkende tilbud av produkter og tjenester. Vi hjelper deg med hele verdikjeden, fra behovskartlegging og rådgivning til utvikling, produkter og tjenester, drift og vedlikehold.
        Vi må forstå hvordan teknologi påvirker livene våre og hva teknologi kan bidra med for å gjøre de bedre. Derfor jobber vi i Atea med teknologi. Av og for mennesker.        
        <br /><br />
        Atea-konsernet
        Atea finnes i syv land i Norden og Baltikum, har mer enn 7300 medarbeidere, er markedsleder i Norden og Baltikum og er den tredje største IT-infrastrukturleverandøren i Europa. Konsernet hadde en omsetning på 34,7 mrd. NOK i 2018 og er notert på Oslo Børs.
        <br /><br />


         `,
        linktekst1: 1,
        link1: 'www.atea.com"',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    {
        namn: 'Vinsit',
        ruterLink: 'vinsit',
        logoLink: `${LocalPaths.path_bedriftLogo}Vinsit.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Wintershall dea.jpg`,
        beskriving1: `Vinsit er en salgsbedrift som siden oppstarten i 2017 har hentet flere 
        tusen nye kunder for våre samarbeidspartnere. Vår ekspertise ligger 
        innen telefon- og feltsalg, hovedsakelig mot B2C markedet, men vi 
        leverer også tjenester mot B2B for våre samarbeidspartnere. Vi er i 
        sterk vekst og har i dag kontorer i Bergen og Oslo.        
        <br /><br />
        Mange starter sin salgskarriere som deltidsansatt hos oss og vi er 
        alltid ute etter flere dyktige medarbeidere. Salg handler i stor grad om 
        kommunikasjon og relasjonsbygging. Det gjør at salgserfaring er relevant 
        uansett hvilken jobb du skal ha senere. Vi kan tilby en fleksibel 
        deltidsjobb hvor du kan jobbe mer i rolige perioder og mindre i 
        eksamensperioden.
        <br /><br />


         `,
        linktekst1: 1,
        link1: 'vinsit.no/#jobb',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="1053" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>')
            }
        ],
        tilleggskort: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    },
    /* {
        namn: 'Tester',
        ruterLink: 'tester',
        logoLink: null,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}evening-55067_1280.webp`,
        beskriving1: 'tester1',
        beskriving2: 'tester2',
        linktekst1: 1,
        link1: 'https://www.google.no/',
        gfhel: [
            {
                tittel: 'Mat',
                beskriving1: 'Custom tekst for ein Google Form-undersøkelse.',
                linktekst1: 1,
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
                linktekst1: 1,
                link1: 'https://google.no'
            }
        ]
    } */
];
