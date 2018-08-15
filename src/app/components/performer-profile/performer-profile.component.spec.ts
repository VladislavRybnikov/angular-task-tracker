import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerProfileComponent } from './performer-profile.component';

describe('PerformerProfileComponent', () => {
  let component: PerformerProfileComponent;
  let fixture: ComponentFixture<PerformerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
