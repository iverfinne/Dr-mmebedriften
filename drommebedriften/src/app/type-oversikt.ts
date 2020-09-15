export interface Bedrift {
    namn: string;
    ruterLink: string;
    logoLink?: string;
    framsidebileteLink?: string;
    framsidebiletePosisjon?: 'top' | 'center' | 'bottom' | string; // Def.: center - e.g. 0 10px (x, y)
    framsidebileteStorrelse?: 'contain' | 'cover' | 'initial'; // Def.: cover
    beskriving1: string;
    beskriving2?: string;
    linktekst1?: string | 1; // 1 = Standard visning for linktekst. Namn + tekst som ref. til heimeside
    link1?: string;
    gfhel?: GoogleFormTilleggskort[];
    tilleggskort?: BedriftTilleggskort[];
}
export interface BedriftSokMengdeTreff {
    namn: string;
    antalTreff: number;
}
export interface BedrifterTreffSokVisning {
    bedriftData: Bedrift;
    antalTreff: number;
}
export interface GoogleFormTilleggskort {
    /**
    * 1: Speedate (må justere HTML for endring av standard visning)
    **/
    tittel: string | 1;
    beskriving1: string | 1;
    linktekst1: string | 1; // 1 = Standard visning for linktekst. Namn + tekst som ref. til Google Form
    link1: string;
}
export interface BedriftTilleggskort {
    /**
    * 1: Middag (må justere HTML for endring av standard visning)
    **/
    tittel: string | 1;
    beskriving1: string | 1;
    linktekst1: string | 1; // 1 = Les mer om + tittel + her
    link1: string;
}
