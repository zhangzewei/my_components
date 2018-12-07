import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'xiami-player',
  templateUrl: './xiami-player.component.html',
  styleUrls: ['./xiami-player.component.scss']
})
export class XiamiPlayerComponent implements AfterViewInit {
  xiamiContainer: Element;
  touchStartPoint: { x: number, y: number };
  touchEndPoint: { x: number, y: number };
  headerOffset = -48;
  replyListOffset = -96;
  headerDuring = '1s';
  replyListDuring = '1s';
  @ViewChild('header') headerRef!: ElementRef;
  @ViewChild('replyList') replyListRef!: ElementRef;
  headerEle: HTMLElement;
  replyListEle: HTMLElement;
  showReplyList = false;
  maxDistance: number;
  maxSpeed = 0.4;
  canScroll = false;
  startTime = 0;
  endTime = 0;

  constructor(public eleRef: ElementRef) {
    this.xiamiContainer = this.eleRef.nativeElement;
    this.xiamiContainer.addEventListener('touchstart', this.touchStart.bind(this));
    this.xiamiContainer.addEventListener('touchmove', this.touchMove.bind(this));
    this.xiamiContainer.addEventListener('touchend', this.touchEnd.bind(this));
  }

  ngAfterViewInit() {
    this.headerEle = this.headerRef.nativeElement;
    this.replyListEle = this.replyListRef.nativeElement;
    this.maxDistance = this.replyListEle.offsetHeight / 2;
  }

  touchStart(event: TouchEvent) {
    this.touchStartPoint = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
    this.startTime = new Date().getTime();
  }

  touchMove(event: TouchEvent) {
    this.touchEndPoint = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
    const distanceY = this.touchEndPoint.y - this.touchStartPoint.y;
    const moveRate = Math.abs(distanceY) / this.replyListEle.offsetHeight;
    if (distanceY <= 0 && !this.showReplyList) {// up
      if (!(this.replyListOffset <= -this.replyListEle.clientHeight)) {
        this.headerDuring = '0.01s';
        this.replyListDuring = '0.01s';
        this.replyListOffset = -96 + distanceY;
        this.headerOffset = moveRate * this.headerEle.offsetHeight - 48;
      } else {
        this.showReplyList = true;
      }
    }
    if (distanceY > 0 && this.showReplyList) {// down
      if (!(this.replyListOffset >= -96)) {
        this.headerDuring = '0.01s';
        this.replyListDuring = '0.01s';
        this.replyListOffset = -this.replyListEle.clientHeight + distanceY;
        this.headerOffset = -moveRate * this.headerEle.offsetHeight;
      } else {
        this.showReplyList = false;
      }
    }
  }

  touchEnd(event: TouchEvent) {
    this.touchEndPoint = { x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY };
    const distanceY = this.touchEndPoint.y - this.touchStartPoint.y;
    this.endTime = new Date().getTime();
    const speed = Math.abs(distanceY) / (this.endTime - this.startTime);
    if (speed > this.maxSpeed || Math.abs(distanceY) > this.maxDistance) {
      this.canScroll = true;
    }

    if (distanceY <= 0) {// up
      if (this.canScroll) {
        this.scrollToTop();
      } else {
        this.scrollToBottom();
      }
    }

    if (distanceY > 0) {// down
      if (this.canScroll) {
        this.scrollToBottom();
      } else {
        this.scrollToTop();
      }
    }
    this.canScroll = false;
  }

  get setReplyListStyle() {
    let style = {
      'transform': 'translateY(' + this.replyListOffset + 'px)',
      'transition-duration': this.replyListDuring
    };
    return style;
  }

  get setHeaderStyle() {
    let style = {
      'transform': 'translateY(' + this.headerOffset + 'px)',
      'transition-duration': this.headerDuring
    };
    return style;
  }

  scrollToTop() {
    this.replyListDuring = '.5s';
    this.headerDuring = '0.5s';
    this.replyListOffset = -this.replyListEle.clientHeight;
    this.headerOffset = 0;
    this.showReplyList = true;
  }

  scrollToBottom() {
    this.replyListDuring = '.5s';
    this.headerDuring = '0.5s';
    this.replyListOffset = -96;
    this.headerOffset = -48;
    this.showReplyList = false;
  }
}
