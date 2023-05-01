import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApproveListComponent } from './update-approve-list.component';

describe('UpdateApproveListComponent', () => {
  let component: UpdateApproveListComponent;
  let fixture: ComponentFixture<UpdateApproveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApproveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateApproveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
