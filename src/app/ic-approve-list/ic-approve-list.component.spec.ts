import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcApproveListComponent } from './ic-approve-list.component';

describe('IcApproveListComponent', () => {
  let component: IcApproveListComponent;
  let fixture: ComponentFixture<IcApproveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcApproveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcApproveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
