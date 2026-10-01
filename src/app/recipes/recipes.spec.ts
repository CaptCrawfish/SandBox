import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Recipes } from './recipes';

describe('Recipes', () => {
  let component: Recipes;
  let fixture: ComponentFixture<Recipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recipes],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { recipes: [] } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Recipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
