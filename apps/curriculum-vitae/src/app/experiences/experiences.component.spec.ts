import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExperiencesComponent } from "./experiences.component";
import { TemplateUiModule } from "@cv/template-ui";
import { ExperienceUiModule } from "@cv/experience-ui";

describe("ExperiencesComponent", () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencesComponent],
      imports: [TemplateUiModule, ExperienceUiModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Cédric Moulard'`, () => {
    expect(component.title).toEqual("Cédric Moulard");
  });

  it("should render match snapshot", () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled).toMatchSnapshot();
  });
});
