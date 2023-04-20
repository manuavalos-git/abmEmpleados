import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoFormAddComponent } from './empleado-form-add.component';

describe('EmpleadoFormComponent', () => {
  let component: EmpleadoFormAddComponent;
  let fixture: ComponentFixture<EmpleadoFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoFormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
