import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaComponent } from './resta.component';

describe('RestaComponent', () => {
  let component: RestaComponent;
  let fixture: ComponentFixture<RestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should substract three numbers', () => {
    
    let v1 = 4;
    let v2 = 2;
    let v3 = 1;
    let result = component.resta(v1, v2, v3);
    let expected = v1-v2-v3;

    expect(result).toEqual(expected);
    
  });
});
