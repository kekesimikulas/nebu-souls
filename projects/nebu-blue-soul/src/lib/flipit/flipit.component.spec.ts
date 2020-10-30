/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlipitComponent } from './flipit.component';

describe('FlipitComponent', () => {
  let component: FlipitComponent;
  let fixture: ComponentFixture<FlipitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
