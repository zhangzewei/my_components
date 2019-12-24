import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as cuid from 'cuid';
import { DataFlowService, DataFlowData, TodoList, TodoStatus } from './data-flow.service';
@Component({
  selector: 'data-flow',
  templateUrl: './data-flow.component.html',
  styleUrls: ['./data-flow.component.scss']
})
export class DataFlowComponent implements OnInit {
  dataFlowSubject: BehaviorSubject<DataFlowData>;
  todoList: TodoList[];
  addText: string;
  constructor(
    private dataFlowService: DataFlowService
  ) {
    this.dataFlowSubject = this.dataFlowService.getDataFlowSubject();
    this.addText = '';
  }

  ngOnInit() {
    this.dataFlowSubject.subscribe((data: DataFlowData) => {
      this.todoList = data.list;
    });
  }

  changeAddText = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    this.addText = value;
  }

  addTodo = () => {
    if (this.addText) {
      this.dataFlowService.add({
        id: cuid(),
        text: this.addText,
        status: TodoStatus.TODO
      });
      this.addText = '';
    }
  }
}
