import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToCategoryPageComponent } from './product-to-category-page.component';

describe('ProductToCategoryPageComponent', () => {
  let component: ProductToCategoryPageComponent;
  let fixture: ComponentFixture<ProductToCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductToCategoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductToCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
