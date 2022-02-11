import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFilePickerComponent } from './local-file-picker.component';

describe('LocalFilePickerComponent', () => {
  let component: LocalFilePickerComponent;
  let fixture: ComponentFixture<LocalFilePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalFilePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFilePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
