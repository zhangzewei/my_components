import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation
} from '@angular/animations';

const expandAnimationA = trigger('expandAnimation', [
  state('in', style({
    width: '100%',
  })),
  transition('void => in', [
    animate(1000)
  ]),
]);

@Component({
  selector: 'animate-vote',
  templateUrl: './animate-vote.component.html',
  styleUrls: ['./animate-vote.component.scss'],
  animations: [expandAnimationA]
})
export class AnimateVoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
