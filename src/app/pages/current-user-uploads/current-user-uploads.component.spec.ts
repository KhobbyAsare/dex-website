import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserUploadsComponent } from './current-user-uploads.component';

describe('CurrentUserUploadsComponent', () => {
  let component: CurrentUserUploadsComponent;
  let fixture: ComponentFixture<CurrentUserUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentUserUploadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentUserUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
