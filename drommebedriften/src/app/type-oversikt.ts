export interface Bedrift {
    namn: string;
    ruterLink: string;
    logoLink?: string;
    framsidebileteLink?: string;
    beskriving1: string;
    beskriving2?: string;
    linktekst1?: string | 0; // 0 = Standard visning for linktekst. Namn + tekst som ref. til heimeside
    link1?: string;
    gfhel?: GoogleFormTilleggskort[];
    tilleggskort?: BedriftTilleggskort[];
}
export interface GoogleFormTilleggskort {
    tittel: string;
    beskriving1: string;
    linktekst1: string | 0; // 0 = Standard visning for linktekst. Namn + tekst som ref. til Google Form
    link1: string;
}
export interface BedriftTilleggskort {
    tittel: string;
    beskriving1: string;
    linktekst1: string | 0; // 0 = Les mer om + tittel + her
    link1: string;
}
