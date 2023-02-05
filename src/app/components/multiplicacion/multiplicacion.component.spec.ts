import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionComponent } from './multiplicacion.component';

describe('MultiplicacionComponent', () => {
  let component: MultiplicacionComponent;
  let fixture: ComponentFixture<MultiplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should multiply three numbers', () => {
    
    let v1 = 4;
    let v2 = 2;
    let v3 = 1;
    let result = component.multiplicacion(v1, v2, v3);
    let expected = v1*v2*v3;

    expect(result).toEqual(expected);
    
  });
});
