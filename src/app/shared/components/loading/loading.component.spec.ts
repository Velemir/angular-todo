import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import {SharedService} from '../../services/shared.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      providers: [
        SharedService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
