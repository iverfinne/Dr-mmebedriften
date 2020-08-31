import { trigger, transition, style, animate, state, query, keyframes, stagger, group } from '@angular/animations';

// Meny
const menyAv = {
    transform: 'translateX(-100%) translateY(-20px)',
    opacity: 0
};
const menyPaa = {
    transform: 'translateX(0) translateY(0)',
    opacity: 1
};
export const meny = trigger('meny', [
    state('menyAv', style(menyAv)),
    state('menyPa', style(menyPaa)),
    transition('menyAv => menyPa', animate('400ms 0ms ease-in', keyframes([
        style(menyPaa)
    ]))),
    transition('menyPa => menyAv', animate('300ms 0ms ease-in', keyframes([
        style(menyAv)
    ])))
]);

// Bedrifter
const bedriftStilFerdig = {
    bedrifterComfy: {
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    bedrifterListe: {
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bedrifterBedriftComfy: {
        flex: '1 400px',
        width: 'auto',
        transform: 'none',
        margin: '20px 10px',
        opacity: '1'
    },
    bedrifterBedriftListe: {
        flex: 'none',
        width: '400px',
        transform: 'none',
        margin: '13px 0',
        opacity: '1'
    }
};
export const bedrifter = trigger('bedrifter', [
    state('comfy', style(bedriftStilFerdig.bedrifterComfy)),
    state('liste', style(bedriftStilFerdig.bedrifterListe)),
    transition('comfy => liste', [
        animate('0ms 0ms', keyframes([style(bedriftStilFerdig.bedrifterListe)])),
        query('@bedriftFlis', [
            style({ width: '400px', transform: 'translateY(10px)', opacity: '0' }),
            stagger(350, [
                animate('250ms 0ms ease-in', keyframes([style(bedriftStilFerdig.bedrifterBedriftListe)]))
            ]),
        ], { optional: true })
    ]),
    transition('liste => comfy', [
        animate('0ms 0ms', keyframes([style(bedriftStilFerdig.bedrifterComfy)])),
        query('@bedriftFlis', [
            style({ width: '400px', transform: 'translateY(-20px)', opacity: '0' }),
            /* stagger(200, [
                animate('250ms 0ms ease-in', keyframes([style(bedriftStilFerdig.bedrifterBedriftComfy)]))
            ]), */
            animate('250ms 0ms ease-in', keyframes([style(bedriftStilFerdig.bedrifterBedriftComfy)]))
        ], { optional: true })
    ])
]);
export const bedriftFlis = trigger('bedriftFlis', [
    state('comfy', style(bedriftStilFerdig.bedrifterBedriftComfy)),
    state('liste', style(bedriftStilFerdig.bedrifterBedriftListe))
]);

// Ein bedrift
export const einBedrift = trigger('einBedrift', [
    transition(':enter', [
        query('.header .logo', [
            style({ transform: 'translateY(-10px)', opacity: '0' }),
            animate('800ms 200ms ease-out')
        ], { optional: true })
    ])
]);

// Om oss
export const omOssContainer = trigger('omOssContainer', [
    transition(':enter', [
        query('div .tekst', [
            group([
                query('h3', [
                    style({
                        opacity: '0',
                        transform: 'translateX(-60px)'
                    }),
                    stagger(1300, animate('500ms 100ms ease-out'))
                ]),
                query('p', [
                    style({
                        opacity: '0',
                        transform: 'translateY(30px)'
                    }),
                    stagger(1100, animate('900ms 800ms ease-out'))
                ])
            ])
        ])
    ])
]);
