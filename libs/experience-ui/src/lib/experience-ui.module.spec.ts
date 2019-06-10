import { async, TestBed } from "@angular/core/testing";
import { ExperienceUiModule } from "./experience-ui.module";

describe("ExperienceUiModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExperienceUiModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(ExperienceUiModule).toBeDefined();
  });
});
