/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FuzziesComponent } from './fuzzies.component';

describe('FuzziesComponent', () => {
  let component: FuzziesComponent;
  let fixture: ComponentFixture<FuzziesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuzziesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzziesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
