import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHideCircleComponent } from './show-hide-circle.component';

describe('ShowHideCircleComponent', () => {
  let component: ShowHideCircleComponent;
  let fixture: ComponentFixture<ShowHideCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHideCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHideCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
