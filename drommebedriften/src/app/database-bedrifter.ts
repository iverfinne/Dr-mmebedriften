import { Bedrift, VimeoEmbedDataEinBedrift } from './type-oversikt';

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

// Ein Vimeo-video data-uthenter (link, farge, tittel) frå Embed-kode frå Vimeo
// **Bruk embed-form med berre iframe som container.. E.g.:
// <iframe src="https://player.vimeo.com/video/422752048?color=35a39e&title=0&byline=0&portrait=0" ....
// <p><a href="https://vimeo.com/422752048">Dette er Tek .... </p>
function vimeoEmbedKonverter(iframeEmbedLink?: string): VimeoEmbedDataEinBedrift {
    if (iframeEmbedLink) {
        // Link
        const linkSplit = iframeEmbedLink.split('"');
        const kjelde = linkSplit[1];

        // Farge
        const farge = `#${kjelde.split('?')[1].split('&')[0].split('=')[1]}`;

        // Indre HTML
        const indreHTML = iframeEmbedLink.split(/((<p>)(.{1,})(<\/p>))/gm);
        if (indreHTML) {
            // rydd opp...
            indreHTML.shift(); indreHTML.pop();
        }

        return { kjelde, farge, indreHTML };
    }

    return null;
}

// Alle Bedrifter - Lokal database
// *** Sjekk type-oversikt.ts for dokumentasjon *** //
/* Middag... {
    tittel: 1,
    beskriving1: 1,
    linktekst1: 1,
    link1: ''
} */
export const Bedrifter: Bedrift[] = [
    {
        namn: 'Bouvet Norge',
        ruterLink: 'bouvet',
        logoLink: `${LocalPaths.path_bedriftLogo}bouvet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Bouvet.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Vil du jobbe med noen av Norges mest fremtredende virksomheter og være med å skape løsninger med stor betydning for enkeltmennesker så vel som for samfunnet? Ønsker du å kunne påvirke din egen hverdag og din egen utvikling? Vil du prøve nye veier uten å stenge gamle?`,
        linktekst1: 1,
        link1: 'https://www.bouvet.no/om-bouvet',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBfwnKpEn8MpPv10ddDR7eDB7QN6FGD5n4EC_kc8NXgok6tw/viewform?embedded=true" width="640" height="1480" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Finansdepartementet',
        ruterLink: 'finansdepartementet',
        logoLink: `${LocalPaths.path_bedriftLogo}Finansdepartementet.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Finansdepartementet1.jpg`,
        framsidebiletePosisjon: '',
        framsidebileteFotoPerson: 'Lise Åserud / NTB scanpix',
        beskriving1: `Finansdepartementet er et tradisjonsrikt og sentralt departement som ble opprettet i 1814. Finansdepartementet er, med hovedansvar for landets økonomiske politikk, viktig for samfunnsutviklingen og av stor betydning for den enkelte innbyggers hverdag. Hos oss jobber det 300 dyktige medarbeidere som sammen utgjør en spennende kunnskapsorganisasjon.`,
        beskriving2: `Departementet ledes av finansministeren, som sammen med statssekretærer og politisk rådgiver utgjør den politiske ledelsen. Finansdepartementets embetsverk ledes av finansråden. I motsetning til den politiske ledelsen er embetsverket fast ansatte medarbeidere som jobber under skiftende regjeringer. Blant våre ansatte er de fleste jurister, økonomer og statsvitere.`,
        ekstraLink1: `Følg oss gjerne på <a href="https://www.linkedin.com/company/2496901/" target="_blank" rel="noopener">linkedin.com</a>`,
        linktekst1: 1,
        link1: 'https://www.regjeringen.no/no/dep/fin/id216/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf1fHc1vfgrWsNraWiggklH51ZztC3HnZ_hyheNJdEIjlpETw/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Tryg',
        ruterLink: 'tryg',
        logoLink: `${LocalPaths.path_bedriftLogo}Tryg.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Tryg.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Tryg er Nordens nest største skadeforsikringsselskap med aktiviteter i Danmark, Norge
        og Sverige. Vi har levert økonomisk og personlig sikkerhet for kundene våre i snart 300
        år. Med et bredt spekter av forsikringer til både privat, bedrift og industri, behandler Tryg
        årlig mer enn 1 million skader i Norden. Sammen jobber vi for en tryggere og enklere
        hverdag for kundene våre. Vi har et av nordens sterkeste merkevarer og en solid
        kapitalposisjon.`,
        linktekst1: 1,
        link1: 'https://www.tryg.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-fwKx3wei-LAOcJHHr1PjXaKXM7JEPzs1l4fBXLJd9tOKkg/viewform?embedded=true" width="640" height="1480" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        vimeoVideo: vimeoEmbedKonverter(`<iframe src="https://player.vimeo.com/video/461547495?color=35a39e&title=0&byline=0&portrait=0" width="640" height="338" frameborder="0" allow="autoplay; fullscreen"</p>`),
        tilleggskort: []
    },
    {
        namn: 'OBOS',
        ruterLink: 'obos',
        logoLink: `${LocalPaths.path_bedriftLogo}OBOS.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Obos.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `OBOS har virksomhet innen boligutvikling, bank, forsikring, eiendomsmegling, forvaltning, rådgivning, næringseiendom og digitale tjenester.

        OBOS kan mer enn bare bolig. I OBOS er verdiskapning å utøve samfunnsansvar, skape merverdi for medlemmene og oppnå lønnsom vekst over tid.
        `,
        linktekst1: 1,
        link1: 'https://www.obos.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfj_Kqib9TeYKHTYzF5IcY9s94i7_veQ4MXL-PVPnFwBADzHg/viewform?embedded=true" width="640" height="1456" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Tekna',
        ruterLink: 'tekna',
        logoLink: `${LocalPaths.path_bedriftLogo}Tekna.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Tekna.png`,
        beskriving1: `Tekna Studnet er Bergens største studentorganisasjon for ingeniører, sivilingeniører, teknologer og naturvitere. Du finner oss både på universitetet og høyskolen. Vi arrangerer til sammen mer enn 30 faglige og sosiale arrangement som du som medlem kan delta på.`,
        beskriving2: `I tillegg får våre student-medlemmer også tilbud om gratis forsikring, rådgivning på CV, jobbsøknader, og juridisk bistand dersom du trenger det. Er du student og har planer om å fullføre en mastergrad som inneholder minimum 120 studiepoeng innenfor realfag, teknologi eller naturvitenskap på enten bachelor- eller mastergradsnivå, kan du bli studentmedlem. Medlemskap koster kr 150 pr. halvår.`,
        linktekst1: 1,
        link1: 'https://www.tekna.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfL4r2if_68fgFaDEyfHzzAw0ilRI9_ouUML0-RI_JIXbh6cg/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        vimeoVideo: vimeoEmbedKonverter(`<iframe src="https://player.vimeo.com/video/422752048?color=35a39e&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><p><a href="https://vimeo.com/422752048">Dette er Tekna</a> from <a href="https://vimeo.com/tekna">Tekna</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`),
        tilleggskort: []
    },
    {
        namn: 'Accenture',
        ruterLink: 'accenture',
        logoLink: `${LocalPaths.path_bedriftLogo}Accenture.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Accenture.jpeg`,
        framsidebiletePosisjon: '',
        /* Accenture i Norge (hentet fra https://www.accenture.com/no-en/about/company/norway): */
        beskriving1: `Vi løser utfordringene selskaper, organisasjoner og etater står overfor. Dette gjør vi med entusiasme, kunnskap, innsikt og de aller siste og beste teknologiske løsningene. Vi kommer fra varierte bakgrunner, men jobber sammen. Med allsidigheten dette fører til, skal vi løse de største utfordringene selskaper, organisasjoner og etater står overfor. Vi har et bredt spekter av innovative verktøy, en læringskurve som aldri stanser og et globalt nettverk som gir oss en verden av erfaringer å høste av. Vi holder oss alltid i forkant; vi skaper endringer over alt.`,
        beskriving2: `Hos oss får du mulighet til å utvikle hele deg, også på det personlige plan. Du møter utfordringer på en rekke ulike områder og fagfelt, du tar all din kompetanse i bruk og lærer ny underveis. Slik får du en sjelden mulighet til å finne ut hva du liker aller best og hvor styrken din ligger, uten å måtte bytte jobb. Rundt deg vil du alltid ha eksperter, mentorer og veiledere, og et nettverk som strekker seg rundt hele kloden.`,
        ekstraLink1: `Les mer om Accenture Global på <a href="https://www.accenture.com/no-en/about/company-index" target="_blank" rel="noopener">accenture.com</a>`,
        linktekst1: 1,
        link1: 'https://www.accenture.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfOCIO21iMcFpdyWhImZgatlpdwL_u-wRz2AM36AD_bMuqSbw/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: [
            {
                tittel: 'Middag',
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise(),
                googleAnalyticsID: 'middag'
            }
        ]
    },
    {
        namn: 'Forsvaret',
        ruterLink: 'forsvaret',
        logoLink: `${LocalPaths.path_bedriftLogo}Forsvaret.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Forsvaret.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Etterretningsbataljonen (EBN) er en operativ avdeling i Hæren, som bidrar med relevant og tidskritisk informasjon til støtte for militære operasjoner, både i utlandet og hjemme i Norge.`,
        beskriving2: `EBN ser etter nye kolleger til stillinger innen etterretningsanalyse og menneskebasert innhenting. Avdelingen verdsetter søkere med variert utdanning, bakgrunn og erfaring.
        Hverdagen er spennende og utradisjonell, og avdelingen er avhengig av mangfold blant operatørene og analytikerne for å opprettholde fleksibilitet og tilpasningsevne.`,
        linktekst1: 1,
        link1: 'http://forsvaret.no/etterretning',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrOXYXgjIH60VmMJ05qLhpU42TD9Qa7rbmrfgZa1y1RTPFXA/viewform?embedded=true" width="640" height="1476" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Knowit',
        ruterLink: 'knowit',
        logoLink: `${LocalPaths.path_bedriftLogo}Knowit.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Knowit.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Knowit er Nordens største digitalbyrå. Vi lager en haug med løsninger som gjør hverdagen bedre og enklere for millioner av mennesker. Du har kanskje hørt om Vipps, RuterReise og BankID på mobil? Knowit er idédrevet, og oppmuntrer innovasjon, tverrfaglighet og personlig engasjement. Siden 1990 har vi turt å tenke annerledes her eneste dag, og våre 2300 entusiaster innenfor teknologi, design, strategi og kommunikasjon finner nye måter å gjøre ting enda bedre på. Vi har kontorer midt i smørøyet av Bergen og Oslo, i tillegg til Stavanger og Kristiansand. Hos Knowit får du en spennende og sosial arbeidsplass med høyt fokus på faglig utvikling – hvor kolleger heier på hverandre og deler ut high fives over en lav sko.`,
        linktekst1: 1,
        link1: 'https://www.knowit.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd26oeCriqBRxdYU6uczdUKIWVN9ztIVAHPUJ7BoBy6DbWsnA/viewform?embedded=true" width="640" height="1480" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Wintershall Dea',
        ruterLink: 'wintershall_dea',
        logoLink: `${LocalPaths.path_bedriftLogo}Wintershall_dea.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}wintershall_dea.jpg`,
        beskriving1: `Wintershall Dea er Europas ledende, uavhengige olje- og gasselskap med aktiviteter på fem kontinenter. Vår virksomhet strekker seg over hele den norske kontinentalsokkelen, fra Nordsjøen til Barentshavet. Wintershall Dea har virksomhet i hele verdikjeden, fra leting via feltutbygging til produksjon. Norge er et av Wintershall Deas kjerneområder og vi er en stor operatør og en engasjert partner på norsk sokkel. Vi er operatør for feltene Brage, Maria og Vega og for utbyggingsprosjektene Dvalin og Nova. I tillegg er vi en aktiv partner i blant annet Skarv, Aasta Hansteen, Njord og Gjøa.`,
        beskriving2: `Er du nysgjerrig og klar for å bli en del av et nytt kapittel av eventyret i Nordsjøen? Wintershall Dea tilbyr spennende prosjekter som gir mulighet for faglig utvikling.
        Vi tilbyr spesielle trainee-programmer som nyutdannede medarbeidere kan starte på med det samme. Vi tilbyr og sommerjobber og mulighet for å skrive masteroppgave i samarbeid med en av våre eksperter.`,
        ekstraLink1: `Les mer på vår hjemmeside <a href="https://wintershalldea.no/nb/karriere-norge" target="_blank" rel="noopener">wintershalldea.no</a>`,
        linktekst1: 1,
        link1: 'https://wintershalldea.no/en',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffdf2jJySGfrnOv6-QcxLnAZJLQbKA3g-1Ofe71OrShUIq6A/viewform?embedded=true" width="640" height="1476" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        vimeoVideo: vimeoEmbedKonverter(`<iframe src="https://player.vimeo.com/video/445542706?color=ff9933&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><p><a href="https://vimeo.com/445542706">Graduates in Wintershall Dea</a> from <a href="https://vimeo.com/wintershalldea">Wintershall Dea in Norway</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`),
        tilleggskort: []
    },
    {
        namn: 'ATEA',
        ruterLink: 'atea',
        logoLink: `${LocalPaths.path_bedriftLogo}ATEA.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Atea.jpg`,
        beskriving1: `Fremtiden er ikke bare noe som skjer. Den er noe vi skaper
        Sammen med kundene våre i hele landet bygger Atea Norge med IT.  Vi vil bidra til mer effektiv læring i skolen. Vi vil styrke politiet og helseomsorgen i deres arbeid og på den måten være med og trygge vår felles velferd. Vi vil gjøre industrien mer konkurransedyktig og gi entreprenører muligheten til å realisere sine drømmer.`,
        beskriving2: `Hos oss får du et heldekkende tilbud av produkter og tjenester. Vi hjelper deg med hele verdikjeden, fra behovskartlegging og rådgivning til utvikling, produkter og tjenester, drift og vedlikehold.
        Vi må forstå hvordan teknologi påvirker livene våre og hva teknologi kan bidra med for å gjøre de bedre. Derfor jobber vi i Atea med teknologi. Av og for mennesker.`,
        linktekst1: 1,
        link1: 'https://www.atea.com',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-OTjAMryapZsj0-DNyyhMHVhmQjYNlnJNoWKKihxn6jziPQ/viewform?embedded=true" width="640" height="1456" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Vinsit',
        ruterLink: 'vinsit',
        logoLink: `${LocalPaths.path_bedriftLogo}Vinsit.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Vinsit.jpg`,
        beskriving1: `Vinsit er en salgsbedrift som siden oppstarten i 2017 har hentet flere
        tusen nye kunder for våre samarbeidspartnere. Vår ekspertise ligger
        innen telefon- og feltsalg, hovedsakelig mot B2C markedet, men vi
        leverer også tjenester mot B2B for våre samarbeidspartnere. Vi er i
        sterk vekst og har i dag kontorer i Bergen og Oslo.`,
        beskriving2: `Mange starter sin salgskarriere som deltidsansatt hos oss og vi er
        alltid ute etter flere dyktige medarbeidere. Salg handler i stor grad om
        kommunikasjon og relasjonsbygging. Det gjør at salgserfaring er relevant
        uansett hvilken jobb du skal ha senere. Vi kan tilby en fleksibel
        deltidsjobb hvor du kan jobbe mer i rolige perioder og mindre i
        eksamensperioden.`,
        linktekst1: 1,
        link1: 'https://www.vinsit.no/#jobb',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeL2z__itB1jAM7Sr18zPlc4H92qYYi-OKJhpzYjzm0TF3l9w/viewform?embedded=true" width="640" height="1456" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Jussformidlingen',
        ruterLink: 'jussformidlingen',
        logoLink: `${LocalPaths.path_bedriftLogo}Jussformidlingen.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Jussformidlingen.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Jussformidlingen er et rettshjelpstiltak som ble stiftet i 1972 og som tilbyr gratis rettshjelp, og gratis juridisk bistand til privatpersoner. Jussformidlingen får hvert år rundt 5000 henvendelser fra personer med juridiske problemer, og dette tallet stiger årlig. `,
        beskriving2: `Til deg som student kan Jussformidlingen tilby verdifull praktisk erfaring under studietiden. Vi gir deg ansvaret for egne klienter og saker, der du får jobbet med private personer, advokater og det offentlige som motpart. Som saksbehandler hos oss får du muligheten til å representere klienter i forhandlingsmøter, forliksrådet og husleietvistutvalget.`,
        linktekst1: 1,
        link1: 'https://www.jussformidlingen.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYYOlT2GMdG_d9wGWUMEZ0phO-YiVZnsFV_E8JZkuJEixwTg/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Fremtind',
        ruterLink: 'fremtind',
        logoLink: `${LocalPaths.path_bedriftLogo}Fremtind.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Fremtind.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Sparebank 1 og DNB har gått sammen om å bygge et forsikringsselskap som skal
        kjennetegnes av digital innovasjon og fornyelse. Fremtind er allerede landets tredje største
        forsikringsselskap, og landets største med distribusjon gjennom bank. Vi er i overkant av 900
        medarbeidere som hver dag jobber med å lage produkter og tjenester som betyr noe i folks
        liv. Sammen med bankene, kundene og partnerne tar vi nå nye steg og forbereder oss på en
        ny og spennende hverdag.
        `,
        beskriving2: null,
        linktekst1: 1,
        link1: 'https://www.fremtind.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScTXZO4cDYbaMUWU9y7_wnuVIQmy2xsupW6j8vzDTb7q8iVFw/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'ConocoPhilips',
        ruterLink: 'conocophilips',
        logoLink: `${LocalPaths.path_bedriftLogo}Conocophilips.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Conocophilips.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `ConocoPhillips Norge er et av de største utenlandske operatørselskapene på norsk sokkel. Selskapet har hovedkontor i Tananger i Sola kommune og har rundt 1800 ansatte. Hovedvirksomheten er leting etter og utvinning av olje og gass. ConocoPhillips har en sterk posisjon i store felt på norsk sokkel. Selskapet er operatør for feltene i Ekofisk-området, som er bærebjelken i selskapets aktiviteter i Norge. Eierandelen er 35,112 prosent i feltene Ekofisk, Eldfisk og Embla og 30,658 prosent i Tor-feltet. Selskapet har også eierandeler i felter der andre selskaper er operatør, blant annet feltene Heidrun, Visund, Oseberg, Grane, Troll, Aasta Hansteen og Alvheim. `,
        beskriving2: null,
        linktekst1: 1,
        link1: 'http://www.conocophillips.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf9R6me41qdcIrzHNWMlctYJFssYisiBi2B_boOMcJRqtneZg/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Capgemini',
        ruterLink: 'capgemini',
        logoLink: `${LocalPaths.path_bedriftLogo}Capgemini.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Capgemini.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Med mer enn 270 000 ansatte i over 40 land er Capgemini et av verdens ledende selskaper innen teknologi og rådgivning. Capgemini utvikler og leverer forretnings- og teknologiløsninger som møter kundenes behov, og hjelper med å oppnå de resultatene de ønsker. I Norge har vi rundt 1200 konsulenter som jobber med på interessante oppdrag i privat og offentlig sektor. Vi har kontorer i Oslo, Bergen, Stavanger, Fredrikstad, Trondheim og Lillehammer.`,
        beskriving2: null,
        linktekst1: 1,
        link1: 'https://www.capgemini.com/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1gKFqVXGmHDY0lSK7C9nKfxIVWccwDc5TBdiw9mUE-Zq_3w/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Schibsted',
        ruterLink: 'schibsted',
        logoLink: `${LocalPaths.path_bedriftLogo}Schibsted.jpg`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Schibsted.jpg`,
        framsidebiletePosisjon: '',
        beskriving1: `Schibsted er en familie av digitale forbrukermerker med fokus på media, markedsplasser og smarte digitale tjenester. Våre varemerker innen media - som VG, Aftenposten, Aftonbladet, og SvD - er kjente for sin troverdighet, eksepsjonelle journalistikk og redaksjonelle uavhengighet. Våre ledende markedsplasser Finn, Blocket og Tori kobler millioner av brukere hver måned. Digitale tjenester - som Lendo, Prisjakt og Compricer - hjelper konsumenter til å ta bedre valg. Schibsted sitt oppdrag er å empower people in their daily life, ved å bruke teknikk og data for å skape innovative produkter og fantastiske brukeropplevelser - og hjelpe til med å bygge en bærekraftig fremtid. `,
        beskriving2: null,
        linktekst1: 1,
        link1: 'https://schibsted.com/career/for-students/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSevk3HCnS06ho4o-sWee6R8e-4skJuGyQCCnGTmh_0-WKidKw/viewform?embedded=true" width="640" height="943" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Deloitte',
        ruterLink: 'deloitte',
        logoLink: `${LocalPaths.path_bedriftLogo}Deloitte.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Deloitte.jpg`,
        beskriving1: `Deloitte er en arbeidsplass for fremtiden. Vi er en virksomhet med høyt utdannede mennesker innen mange forskjellige fagfelt som arbeider sammen for å bidra til de beste løsningene for våre kunder. Våre medarbeidere ønsker å være en del av en organisasjon som bidrar til et bærekraftig næringsliv og samfunn; og utgjøre en forskjell. Vi er verdens største leverandør av profesjonelle tjenester innen revisjon, rådgivning og advokattjenester med ca. 1500 medarbeidere i Norge. Deloitte er en internasjonal organisasjon med mer enn 312 000 medarbeidere i over 150 land.`,
        beskriving2: `Deloitte søker nysgjerrige og engasjerte studenter, fortrinnsvis med en økonomisk, teknisk eller samfunnsvitenskapelig mastergrad. Ønsket studieretning vil derimot kunne variere mellom forretningsområdene og andre studieretninger vil også kunne være aktuelle for enkelte stillinger.`,
        linktekst1: 1,
        link1: 'https://www.deloitte.com/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeAfmZ1PjTB9MfSa_5yzGtdl8nBNjXs9ExZGb5i3MRNxrW8Iw/viewform?embedded=true" width="640" height="1456" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'StartUpLab',
        ruterLink: 'startuplab',
        logoLink: `${LocalPaths.path_bedriftLogo}StartUpLab.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}StartUpLab.jpg`,
        beskriving1: `StartupLab is an incubator and early stage investor for ambitious technology startups, located in Oslo and Bergen. Our role is to provide an arena where founders can focus on what matters; building their product and onboarding customers that are willing to pay for it. Making life easier for startups is about more than just office space and advice. StartupLab is a facilitator of a relevant network, competence and founder friendly capital. We have been home to companies such as reMarkable, No Isolation, Kahoot, Huddly and we continue to work with 80+ tech startups in our incubator.
        `,
        beskriving2: `The people at StartupLab come from diverse backgrounds, but we share a common passion: empowering ambitious entrepreneurs. Our mission is to help make our entrepreneurs successful.
        <br /><br /> At startupLab you will have the opportunity to work with some of Norway's most promising startups. StartupLab also plays a central role within the Norwegian tech startup community, so you will have access to our network and get to know the future tech leaders in the country.`,
        linktekst1: 1,
        link1: 'https://www.startuplab.com/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeBrTbrSnp1whlgrGZLC1lUhFFDjSeOpUN2xhH8iqjPnSqXtA/viewform?embedded=true" width="640" height="1456" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'DNB',
        ruterLink: 'dnb',
        logoLink: `${LocalPaths.path_bedriftLogo}DNB.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}DNB.jpg`,
        beskriving1: `Vi er norske, og vi er internasjonale. Vi er tradisjon og innovasjon. Vi er en partner i singelliv, familieliv, dagligliv, næringsliv og samfunnsliv. Vi er her for de små detaljene og de store spørsmålene. Hver dag knytter vi mennesker og ideer sammen med kunnskap og kapital.
        `,
        beskriving2: `Vi jobber for at du skal få en enklere hverdag. Som Norges største bank og et av Nordens største finanskonsern, tilbyr vi et komplett tilbud av finansielle tjenester gjennom mobil, nettbank, bankkontorer og internasjonale kontorer. Likevel, hva er DNB. DNB er en bank av folk for folk. Og alle er her i bunn og grunn for kundene. Det er kundene som gjør at vi er Norges største bank. Derfor er det viktig for oss at de som søker til oss har forståelse for komplekse kundeforhold og tekniske utfordringer.`,
        linktekst1: 1,
        link1: 'https://www.dnb.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScBZn5K_8gFJRfEpF6oQC0hlw7UsSt7u84HF4cZqChROmnU3g/viewform?embedded=true" width="640" height="1480" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Skanska',
        ruterLink: 'skanska',
        logoLink: `${LocalPaths.path_bedriftLogo}Skanska.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}Skanska.jpg`,
        beskriving1: `Skanska er et av verdens ledende prosjektutvikler- og entreprenørkonsern. Vi har ekspertise innen bygg og anlegg, utvikling av kommersielle lokaler, boliger og prosjekter i offentlig-privat samarbeid. Konsernet har i dag ca. 34 000 ansatte i utvalgte hjemmemarkeder i Europa og USA.  `,
        beskriving2: `Skanska er en av landets største og ledende entreprenør og prosjektutvikler, og har vært til stede i det norske markedet siden 1906.<br />
        I Skanska Norge jobber det ca 3800 ansatte, og vi har rundt 200 pågående prosjekter over hele landet til enhver tid.`,
        linktekst1: 1,
        link1: 'https://www.skanska.no/hvem-vi-er/jobb-i-skanska/studenter/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc05sSl_gNPZ_G0E_gZh76P1DJIAN9DHV-P4jUO5jXvQJzYUw/viewform?embedded=true" width="640" height="1456" frameborder="0" marginheight="0" marginwidth="0">Laster inn …</iframe>'),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    },
    {
        namn: 'Trainee Vest',
        ruterLink: 'traineevest',
        logoLink: `${LocalPaths.path_bedriftLogo}TraineeVest.png`,
        framsidebileteLink: `${LocalPaths.path_bedriftFramsidebilete}TraineeVest.jpg`,
        beskriving1: ``,
        beskriving2: ``,
        linktekst1: 1,
        link1: 'https://www.traineevest.no/',
        gfhel: [
            {
                tittel: 1,
                beskriving1: 1,
                linktekst1: 1,
                link1: gfise(''),
                googleAnalyticsID: 'speedate'
            }
        ],
        tilleggskort: []
    }
];
