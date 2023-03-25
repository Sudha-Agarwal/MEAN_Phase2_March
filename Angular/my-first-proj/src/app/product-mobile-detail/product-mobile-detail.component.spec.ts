import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMobileDetailComponent } from './product-mobile-detail.component';

describe('ProductMobileDetailComponent', () => {
  let component: ProductMobileDetailComponent;
  let fixture: ComponentFixture<ProductMobileDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMobileDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMobileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
