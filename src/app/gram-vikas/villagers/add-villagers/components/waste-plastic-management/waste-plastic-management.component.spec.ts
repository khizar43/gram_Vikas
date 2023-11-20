import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WastePlasticManagementComponent } from './waste-plastic-management.component';

describe('WastePlasticManagementComponent', () => {
  let component: WastePlasticManagementComponent;
  let fixture: ComponentFixture<WastePlasticManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WastePlasticManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WastePlasticManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
