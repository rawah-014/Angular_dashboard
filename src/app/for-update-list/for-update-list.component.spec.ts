import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForUpdateListComponent } from './for-update-list.component';

describe('ForUpdateListComponent', () => {
  let component: ForUpdateListComponent;
  let fixture: ComponentFixture<ForUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForUpdateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
