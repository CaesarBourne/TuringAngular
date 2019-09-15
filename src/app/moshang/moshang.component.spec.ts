import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshangComponent } from './moshang.component';

describe('MoshangComponent', () => {
  let component: MoshangComponent;
  let fixture: ComponentFixture<MoshangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoshangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
