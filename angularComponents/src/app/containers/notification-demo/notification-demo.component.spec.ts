import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDemoComponent } from './notification-demo.component';

describe('NotificationDemoComponent', () => {
  let component: NotificationDemoComponent;
  let fixture: ComponentFixture<NotificationDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
