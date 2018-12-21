import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { ReplyContainerService, ReplyItem } from './reply-container.service';

@Component({
  selector: 'reply-container',
  templateUrl: './reply-container.component.html',
  styleUrls: ['./reply-container.component.scss']
})
export class ReplyContainerComponent implements OnInit {
  listWrapper: HTMLElement;
  replyList: ReplyItem[] = [];
  scrollTimer = null;
  elLastScrollTop = 0;
  startPointY = 0;

  @Input() canScroll: boolean;
  @Output() checkIsScrollAtTop: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('listWrapperRef') listWrapperRef: ElementRef;

  constructor(
    private replyContainerService: ReplyContainerService
  ) { }

  ngOnInit() {
    this.listWrapper = this.listWrapperRef.nativeElement;
    this.listWrapper.addEventListener('touchstart', this.touchStart.bind(this));
    // this.listWrapper.addEventListener('touchmove', this.touchMove.bind(this));
    // this.listWrapper.addEventListener('touchend', this.touchEnd.bind(this));
    this.replyList = this.replyContainerService.getReplyList();
  }

  onScroll(event: Event) {
    if (this.scrollTimer) clearInterval(this.scrollTimer);
    this.scrollTimer = setInterval(() => {
      const currentScrollTop = this.listWrapper.scrollTop;
      this.checkIsScrollAtTop.emit(currentScrollTop === 0);
      if (currentScrollTop === this.elLastScrollTop) {
        this.listWrapper.removeEventListener('scroll', () => { });
        clearInterval(this.scrollTimer);
      }
    }, 10);
    this.elLastScrollTop = this.listWrapper.scrollTop;;
  }

  touchStart(event: TouchEvent) {
    this.listWrapper.addEventListener('scroll', this.onScroll.bind(this));
    this.elLastScrollTop = this.listWrapper.scrollTop;
    this.startPointY = event.changedTouches[0].pageY;
  }
}
