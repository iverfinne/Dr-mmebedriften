import { trigger, transition, style, animate, state, query, animateChild, group, keyframes, stagger } from '@angular/animations';

const menyAv = {
    transform: 'translateX(-100%) translateY(-20px)',
    opacity: 0,
    display: 'flex'
};
const menyPaa = {
    transform: 'translateX(0) translateY(0)',
    opacity: 1,
    display: 'flex'
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

// Bedrifter Visning
const bedriftStilFerdig = {
    bedrifterComfy: {
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    bedrifterListe: {
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bedrifterBedriftComfy: {
        transform: 'none',
        margin: '20px 0',
        opacity: '1'
    },
    bedrifterBedriftListe: {
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
            style({ transform: 'translateY(10px)', opacity: '0' }),
            stagger(200, [
                animate('250ms 0ms ease-in', keyframes([style(bedriftStilFerdig.bedrifterBedriftListe)]))
            ]),
        ], { optional: true })
    ]),
    transition('liste => comfy', [
        animate('0ms 0ms', keyframes([style(bedriftStilFerdig.bedrifterComfy)])),
        query('@bedriftFlis', [
            style({ transform: 'translateY(-20px)', opacity: '0' }),
            stagger(200, [
                animate('250ms 0ms ease-in', keyframes([style(bedriftStilFerdig.bedrifterBedriftComfy)]))
            ]),
        ], { optional: true })
    ])
]);
export const bedriftFlis = trigger('bedriftFlis', [
    state('comfy', style(bedriftStilFerdig.bedrifterBedriftComfy)),
    state('liste', style(bedriftStilFerdig.bedrifterBedriftListe))
]);
