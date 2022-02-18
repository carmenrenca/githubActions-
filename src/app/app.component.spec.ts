import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { axe, toHaveNoViolations } from "jasmine-axe";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    jasmine.addMatchers(toHaveNoViolations);
  });

  
  it("should pass accessibility test", async () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(await axe(fixture.nativeElement)).toHaveNoViolations();
  });



  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'proyecto-accesibilidad'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('proyecto-accesibilidad');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.wrapper h1')?.textContent).toContain('Example of language detection');
  });
});
