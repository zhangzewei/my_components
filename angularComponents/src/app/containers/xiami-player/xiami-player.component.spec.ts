import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XiamiPlayerComponent } from './xiami-player.component';

describe('XiamiPlayerComponent', () => {
  let component: XiamiPlayerComponent;
  let fixture: ComponentFixture<XiamiPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XiamiPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XiamiPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
