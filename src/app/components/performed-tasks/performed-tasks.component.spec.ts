import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformedTasksComponent } from './performed-tasks.component';

describe('PerformedTasksComponent', () => {
  let component: PerformedTasksComponent;
  let fixture: ComponentFixture<PerformedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
