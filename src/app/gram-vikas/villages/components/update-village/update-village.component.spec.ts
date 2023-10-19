import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVillageComponent } from './update-village.component';

describe('UpdateVillageComponent', () => {
  let component: UpdateVillageComponent;
  let fixture: ComponentFixture<UpdateVillageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVillageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
