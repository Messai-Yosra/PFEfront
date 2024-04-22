import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatedComponent } from './dialog-created.component';

describe('DialogCreatedComponent', () => {
  let component: DialogCreatedComponent;
  let fixture: ComponentFixture<DialogCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreatedComponent]
    });
    fixture = TestBed.createComponent(DialogCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
