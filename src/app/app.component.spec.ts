/* tslint:disable:no-unused-variable */
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

let app:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('App: FinalVerMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  describe('constructor', () => {
    it('should set loggedIn to false', () => {
      expect(app.loggedIn).toEqual(false);
    });
  });
})
