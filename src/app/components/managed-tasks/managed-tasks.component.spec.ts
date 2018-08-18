import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedTasksComponent } from './managed-tasks.component';

describe('ManagedTasksComponent', () => {
  let component: ManagedTasksComponent;
  let fixture: ComponentFixture<ManagedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
