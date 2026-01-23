import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-banner-accordion',
  templateUrl: './banner-accordion.component.html',
  styleUrls: ['./banner-accordion.component.css'],
  imports: [NgClass],
  animations: [
    trigger('accordionAnimation', [
      state(
        'collapsed',
        style({
          height: '60px',
          overflow: 'hidden',
        }),
      ),
      state(
        'expanded',
        style({
          height: '*',
          overflow: 'visible',
        }),
      ),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class BannerAccordionComponent {
  isExpanded = true;

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
