import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFlowService } from '../data-flow.service';
import { DetailService, DetailServiceSubject } from './item-detail.service';
import { TodoList, TodoStatus } from '../data-flow.service';
import { statusMapping } from '../components/todoItem/todo-item.component';

@Component({
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  detailSubject$: DetailServiceSubject;
  detailId: string;
  detail: TodoList;
  isLoading: boolean;
  todoStatus = TodoStatus;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private detailService: DetailService,
    private dataFlowService: DataFlowService
  ) {
    this.detailSubject$ = this.detailService.getDetailSubject();
    this.detailSubject$.subscribe(this.updateDetail);
  }

  ngOnInit() {
    const newId = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    if (newId === this.detailId) {
      this.isLoading = false;
    } else {
      this.detailId = newId;
      this.detailService.getDetail(this.detailId);
    }
  }

  get status() {
    return statusMapping[this.detail.status] || '无状态';
  }

  updateDetail = (data: TodoList) => { 
    this.detail = data;
    this.isLoading = false;
  }

  changeValue = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.detail.text = value;
  }

  delete = () => {
    this.dataFlowService.delete(this.detailId);
    this.router.navigate(['/todolist-demo']);
  }

  change = () => {
    this.dataFlowService.updateItem(this.detail);
    this.router.navigate(['/todolist-demo']);
  }

  changeStatus = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.detail.status = value as TodoStatus;
  }
}
