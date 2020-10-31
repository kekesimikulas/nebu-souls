import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebuRedSoulComponent } from './nebu-red-soul.component';

describe('NebuRedSoulComponent', () => {
  let component: NebuRedSoulComponent;
  let fixture: ComponentFixture<NebuRedSoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebuRedSoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebuRedSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
