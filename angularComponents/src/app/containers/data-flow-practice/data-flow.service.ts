import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import * as cuid from 'cuid';

export enum TodoStatus {
  TODO = 'todo',
  DOING = 'doing',
  DONE = 'done'
}

export interface TodoList {
  id: string;
  text: string;
  status: TodoStatus; 
}

export interface DataFlowData {
  list: TodoList[];
}

@Injectable({
  providedIn: 'root'
})
export class DataFlowService {
  dataFlowSubject: BehaviorSubject<DataFlowData>;
  dataFolwData: DataFlowData;
  constructor() {
    if (!this.dataFolwData) {
      this.dataFolwData = this.initDataFlowData();
      this.mockList(10);
    }
    this.dataFlowSubject = new BehaviorSubject<DataFlowData>(this.dataFolwData);
  }

  getDataFlowSubject = () => {
    this.updateData();
    return this.dataFlowSubject;
  }
  
  initDataFlowData = () => ({
    list: []
  });

  updateData = () => {
    this.dataFlowSubject.next(this.dataFolwData);
  }

  addTodo = (item: TodoList) => {
    this.dataFolwData.list.push(item);
    this.updateData();
  }
  
  changeStatus = (item: TodoList) => {
    this.dataFolwData.list = this.dataFolwData.list.map((d: TodoList) => {
      if (d.id === item.id) {
        return item;
      }
      return d;
    });
    this.updateData();
  }

  mockList = (num: number) => {
    const list: TodoList[] = [];
    if (num > 0) {
      for (let i = 0; i < num; i++) {
        list.push({
          id: cuid(),
          text: `todo-${i}`,
          status: TodoStatus.TODO
        });
      }
    }
    this.dataFolwData.list = list;
  }

  delete = (id: string) => {
    this.dataFolwData.list = this.dataFolwData.list.filter((item: TodoList) => item.id !== id);
    this.updateData();
  }

  updateItem = (item: TodoList) => {
    this.dataFolwData.list = this.dataFolwData.list.map(todo => {
      if (todo.id === item.id) return item;
      return todo;
    })
  }

  asyncGetItemById = (id: string, callback) => {
    const detail = this.dataFolwData.list.filter(item => item.id === id)[0];
    setTimeout(function() { callback(detail) }, 1000);
  };
}
