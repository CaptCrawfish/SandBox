import { TestBed } from '@angular/core/testing';
import { MenuButton } from './menuButton';

describe('MenuButton', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuButton],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MenuButton);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(MenuButton);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-starter');
  });
});
