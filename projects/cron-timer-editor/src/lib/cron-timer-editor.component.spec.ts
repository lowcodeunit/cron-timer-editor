import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronTimerEditorComponent } from './cron-timer-editor.component';

describe('CronTimerEditorComponent', () => {
  let component: CronTimerEditorComponent;
  let fixture: ComponentFixture<CronTimerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronTimerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronTimerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
