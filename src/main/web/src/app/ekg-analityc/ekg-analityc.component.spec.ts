import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkgAnalitycComponent } from './ekg-analityc.component';

describe('EkgAnalitycComponent', () => {
  let component: EkgAnalitycComponent;
  let fixture: ComponentFixture<EkgAnalitycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkgAnalitycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkgAnalitycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
