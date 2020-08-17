import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('1000ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(15%)',
        offset: 0.8
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1
      })
    ]))
  ])
]);
