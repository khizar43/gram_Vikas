import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVillagePhotoComponent } from './view-village-photo.component';

describe('ViewVillagePhotoComponent', () => {
  let component: ViewVillagePhotoComponent;
  let fixture: ComponentFixture<ViewVillagePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVillagePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVillagePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
