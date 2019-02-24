/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddOrEditComponent } from './add-or-edit.component';

let component: AddOrEditComponent;
let fixture: ComponentFixture<AddOrEditComponent>;

describe('add-or-edit component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddOrEditComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddOrEditComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});