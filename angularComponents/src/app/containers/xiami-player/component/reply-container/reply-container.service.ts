import { Injectable } from '@angular/core';

export interface ReplyItem {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReplyContainerService {

  private ReplyList: ReplyItem[] = []

  constructor() {
    this.generateList(20);
  }

  private generateList(length: number) {
    for (let i = 0; i < length; i++) {
      this.ReplyList.push({ name: 'Reply Item' + i });
    }
  }

  public getReplyList() {
    return this.ReplyList;
  }

}
