import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmApproveListComponent } from './gm-approve-list.component';

describe('GmApproveListComponent', () => {
  let component: GmApproveListComponent;
  let fixture: ComponentFixture<GmApproveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmApproveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmApproveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
