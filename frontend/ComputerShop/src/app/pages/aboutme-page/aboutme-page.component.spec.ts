import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmePageComponent } from './aboutme-page.component';

describe('AboutmePageComponent', () => {
  let component: AboutmePageComponent;
  let fixture: ComponentFixture<AboutmePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutmePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
