import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { get } from 'lodash';
import { TodoList, DataFlowService } from '../data-flow.service';

export type DetailServiceSubject = BehaviorSubject<TodoList>;

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  detailSubject: DetailServiceSubject;
  detailData: TodoList;

  constructor(
    private dataFlowService: DataFlowService
  ) {
    this.detailData = null;
    this.detailSubject = new BehaviorSubject<TodoList>(this.detailData);
  }

  getDetailSubject = () => {
    return this.detailSubject;
  };

  getDetail = (id: string) => {
    if (get(this.detailData, 'id', null) === id) {
      this.updateData();
    } else {
      this.dataFlowService.asyncGetItemById(id, (data: TodoList) => {
        this.detailData = data;
        this.updateData();
      })
    }
  };

  updateData = () => {
    this.detailSubject.next(this.detailData);
  }
}
