import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstimmenComponent } from './abstimmen.component';

describe('AbstimmenComponent', () => {
  let component: AbstimmenComponent;
  let fixture: ComponentFixture<AbstimmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstimmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstimmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
