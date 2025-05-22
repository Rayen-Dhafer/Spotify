import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiquesComponent } from './musiques.component';

describe('MusiquesComponent', () => {
  let component: MusiquesComponent;
  let fixture: ComponentFixture<MusiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusiquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
