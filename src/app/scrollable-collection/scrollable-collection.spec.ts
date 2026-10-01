import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollableCollection } from './scrollable-collection';

describe('ScrollableCollection', () => {
  let component: ScrollableCollection;
  let fixture: ComponentFixture<ScrollableCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableCollection],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollableCollection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
