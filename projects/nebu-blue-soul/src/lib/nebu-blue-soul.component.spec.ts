import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebuBlueSoulComponent } from './nebu-blue-soul.component';

describe('NebuBlueSoulComponent', () => {
  let component: NebuBlueSoulComponent;
  let fixture: ComponentFixture<NebuBlueSoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebuBlueSoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebuBlueSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
