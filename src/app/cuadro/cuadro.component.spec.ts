import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroComponent } from './cuadro.component';

describe('CuadroComponent', () => {
  let component: CuadroComponent;
  let fixture: ComponentFixture<CuadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
