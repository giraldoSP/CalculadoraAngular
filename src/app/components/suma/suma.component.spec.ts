import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaComponent } from './suma.component';

describe('SumaComponent', () => {
  let component: SumaComponent;
  let fixture: ComponentFixture<SumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add three numbers', () => {
    
    let v1 = 4;
    let v2 = 2;
    let v3 = 1;
    let result = component.suma(v1, v2, v3);
    let expected = v1+v2+v3;

    expect(result).toEqual(expected);
    
  });
});
