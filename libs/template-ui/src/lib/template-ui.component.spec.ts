import { TestBed, async } from "@angular/core/testing";
import { TemplateUiComponent } from "./template-ui.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateUiComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(TemplateUiComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'curriculum-vitae'`, () => {
  //   const fixture = TestBed.createComponent(TemplateComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('curriculum-vitae');
  // });
  //
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(TemplateComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to curriculum-vitae!'
  //   );
  // });
});
