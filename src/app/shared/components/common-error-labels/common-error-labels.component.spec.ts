import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonErrorLabelsComponent } from './common-error-labels.component';

describe('CommonErrorLabelsComponent', () => {
  let component: CommonErrorLabelsComponent;
  let fixture: ComponentFixture<CommonErrorLabelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonErrorLabelsComponent]
    });
    fixture = TestBed.createComponent(CommonErrorLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
