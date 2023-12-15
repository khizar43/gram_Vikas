import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFamilyMemberDetailsComponent } from './view-family-member-details.component';

describe('ViewFamilyMemberDetailsComponent', () => {
  let component: ViewFamilyMemberDetailsComponent;
  let fixture: ComponentFixture<ViewFamilyMemberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFamilyMemberDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFamilyMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
