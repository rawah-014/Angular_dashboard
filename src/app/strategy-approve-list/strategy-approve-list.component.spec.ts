import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyApproveListComponent } from './strategy-approve-list.component';

describe('StrategyApproveListComponent', () => {
  let component: StrategyApproveListComponent;
  let fixture: ComponentFixture<StrategyApproveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyApproveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyApproveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
