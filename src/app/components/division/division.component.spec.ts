import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionComponent } from './division.component';

describe('DivisionComponent', () => {
  let component: DivisionComponent;
  let fixture: ComponentFixture<DivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should divide two numbers', () => {
    
    let v1 = 4;
    let v2 = 2;
    let result = component.division(v1, v2);
    let expected = v1+v2;

    expect(result).toEqual(expected);
    
  });
});