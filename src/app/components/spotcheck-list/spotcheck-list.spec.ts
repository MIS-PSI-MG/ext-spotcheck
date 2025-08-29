import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotcheckList } from './spotcheck-list';

describe('SpotcheckList', () => {
  let component: SpotcheckList;
  let fixture: ComponentFixture<SpotcheckList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotcheckList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotcheckList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
