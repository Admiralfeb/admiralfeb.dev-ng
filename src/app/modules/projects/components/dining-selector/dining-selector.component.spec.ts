import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningSelectorComponent } from './dining-selector.component';

describe('DiningSelectorComponent', () => {
  let component: DiningSelectorComponent;
  let fixture: ComponentFixture<DiningSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiningSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
