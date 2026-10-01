import { TestBed } from '@angular/core/testing';
import { AppMenu } from './appMenu';

describe('AppMenu', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMenu],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppMenu);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should emit the next expanded state when toggled', () => {
    const fixture = TestBed.createComponent(AppMenu);
    let expandedState: boolean | undefined;
    fixture.componentInstance.expandedChange.subscribe((expanded) => {
      expandedState = expanded;
    });

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(expandedState).toBe(true);
  });
});
