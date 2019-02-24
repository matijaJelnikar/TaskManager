/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TaskManagerComponent } from './task-manager.component';

let component: TaskManagerComponent;
let fixture: ComponentFixture<TaskManagerComponent>;

describe('task-manager component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TaskManagerComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TaskManagerComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});