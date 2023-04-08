import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibrarySudhaAComponent } from './my-library-sudha-a.component';

describe('MyLibrarySudhaAComponent', () => {
  let component: MyLibrarySudhaAComponent;
  let fixture: ComponentFixture<MyLibrarySudhaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibrarySudhaAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibrarySudhaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
