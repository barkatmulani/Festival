import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMusicrecordComponent } from './app-musicrecord.component';

describe('AppMusicrecordComponent', () => {
  let component: AppMusicrecordComponent;
  let fixture: ComponentFixture<AppMusicrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMusicrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMusicrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
