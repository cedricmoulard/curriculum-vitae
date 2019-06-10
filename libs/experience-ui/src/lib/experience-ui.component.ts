import {Component, Input} from "@angular/core";
import {Experience} from "@cv/experience-interface";

@Component({
    selector: "cv-experience",
    template: `
        <div class="flex">
            <div class="summary">
                <div class="date">{{ experience.from }} - {{ experience.to }}</div>
                <div>{{ experience.title }}</div>
                <div>{{ experience.client }}</div>
            </div>
            <div class="description">
                <div>{{ experience.description }}</div>
            </div>
        </div>
    `,
    styles: [
            `
            .flex {
                display: flex;
                flex-direction: row;
                margin-bottom: 16px;
            }

            .summary {
                width: 400px;
            }

            .description {
                flex: 1;
                font-size: 0.8em;
            }

            .date {
                color: rgb(175, 76, 82);
                font-size: 0.8em;
                margin-bottom: 8px;
            }

        `
    ]
})
export class ExperienceComponent {
    @Input() experience: Experience;
}
