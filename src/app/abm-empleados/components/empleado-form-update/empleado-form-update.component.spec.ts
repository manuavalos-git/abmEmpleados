import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoFormUpdateComponent } from './empleado-form-update.component';

describe('EmpleadoFormUpdateComponent', () => {
  let component: EmpleadoFormUpdateComponent;
  let fixture: ComponentFixture<EmpleadoFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoFormUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
