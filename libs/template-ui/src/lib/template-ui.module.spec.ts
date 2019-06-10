import { async, TestBed } from "@angular/core/testing";
import { TemplateUiModule } from "./template-ui.module";

describe("TemplateUiModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TemplateUiModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(TemplateUiModule).toBeDefined();
  });
});
