import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollableItem } from './scrollable-item';

describe('ScrollableItem', () => {
  let component: ScrollableItem;
  let fixture: ComponentFixture<ScrollableItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollableItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
