import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadVillagePhotoComponent } from './upload-village-photo.component';

describe('UploadVillagePhotoComponent', () => {
  let component: UploadVillagePhotoComponent;
  let fixture: ComponentFixture<UploadVillagePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadVillagePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadVillagePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
