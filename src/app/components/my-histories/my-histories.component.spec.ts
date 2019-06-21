import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHistoriesComponent } from './my-histories.component';

describe('MyHistoriesComponent', () => {
  let component: MyHistoriesComponent;
  let fixture: ComponentFixture<MyHistoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHistoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
