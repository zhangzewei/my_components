import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import { TodoList, DataFlowService } from '../../data-flow.service';

export const statusMapping = {
  todo: '未做',
  doing: '正在做',
  done: '完成'
}

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements DoCheck {
  @Input() todoItem: TodoList;
  constructor(
    private dtService: DataFlowService
  ) {
  }

  ngDoCheck() {
  }

  get statusStyle() {
    if (this.todoItem.status === 'done') {
      return {
        textDecorationLine: 'line-through',
        background: '#e6e3e3',
        color: '#a2a2a2'
      }
    }
    if (this.todoItem.status === 'doing') {
      return {
        color: '#ff8100'
      }
    }
    return null;
  }

  get todoId() {
    return this.todoItem.id;
  }

  get todoText() {
    return this.todoItem.text;
  }

  get itemStatus() {
    return statusMapping[this.todoItem.status] || '无状态';
  }

  deleteItem = () => {
    this.dtService.delete(this.todoId);
  }
}
