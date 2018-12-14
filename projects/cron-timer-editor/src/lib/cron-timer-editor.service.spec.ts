import { TestBed } from '@angular/core/testing';

import { CronTimerEditorService } from './cron-timer-editor.service';

describe('CronTimerEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CronTimerEditorService = TestBed.get(CronTimerEditorService);
    expect(service).toBeTruthy();
  });
});
