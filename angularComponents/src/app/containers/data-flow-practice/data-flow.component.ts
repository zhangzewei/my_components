import { Component, OnInit } from '@angular/core';
import { DataFlowService, DataFlowData, TodoList } from './data-flow.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'data-flow',
  templateUrl: './data-flow.component.html',
  styleUrls: ['./data-flow.component.scss']
})
export class DataFlowComponent implements OnInit {
  dataFlowSubject: BehaviorSubject<DataFlowData>;
  todoList: TodoList[];
  constructor(
    private dataFlowService: DataFlowService
  ) {
    this.dataFlowSubject = this.dataFlowService.getDataFlowSubject();
  }

  ngOnInit() {
    this.dataFlowSubject.subscribe((data: DataFlowData) => {
      this.todoList = data.list;
    });
  }
}
