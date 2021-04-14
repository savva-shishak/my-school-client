import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupWrapperComponent } from './subgroup-wrapper.component';

describe('SubgroupWrapperComponent', () => {
  let component: SubgroupWrapperComponent;
  let fixture: ComponentFixture<SubgroupWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgroupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
