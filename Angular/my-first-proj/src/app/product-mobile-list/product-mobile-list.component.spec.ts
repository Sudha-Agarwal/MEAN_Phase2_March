import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMobileListComponent } from './product-mobile-list.component';

describe('ProductMobileListComponent', () => {
  let component: ProductMobileListComponent;
  let fixture: ComponentFixture<ProductMobileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMobileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
