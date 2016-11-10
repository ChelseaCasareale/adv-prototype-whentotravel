import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { SearchFormComponent} from './search-form/search-form.component';
import { RouterOutletStubComponent } from '../../test/router-stubs';
import { RouterStub } from '../../test/router-stubs';
import { click } from '../../test/index';

let comp:    HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;
let searchBtns:      DebugElement[];

describe('HeaderComponent', () => {
  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, SearchFormComponent, RouterOutletStubComponent ], // declare the test component
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents()
    .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        comp    = fixture.componentInstance;
    });
  }));

  it('should create the header component', async(() => {
    expect(comp).toBeTruthy();
  }));

  describe('header constructor', () => {
    it('should set link to "login"', () => {
      expect(comp.link).toEqual("Login");
    });

    it('should set home to true', () => {
      expect(comp.home).toEqual(true);
    });

    it('should set searchMode to false', () => {
      expect(comp.searchMode).toEqual(false);
    });

    it('should set menuDisplay to false', () => {
      expect(comp.menuDisplay).toEqual(false);
    });
  });

  describe('toggleSearch toggles searchMode', () => {
    it('should equal true after being called once', () => {
      comp.searchMode = !comp.searchMode;
      fixture.detectChanges;
      expect(comp.searchMode).toEqual(true);
    });

    it('should equal false after being called again', () => {
      comp.searchMode = true;
      comp.searchMode = !comp.searchMode;
      fixture.detectChanges;
      expect(comp.searchMode).toEqual(false);
    });
  });

  describe('openMenu toggles menuDisplay', () => {
    it('should equal true when initial value is false', () => {
      comp.menuDisplay = !comp.menuDisplay;
      fixture.detectChanges;
      expect(comp.menuDisplay).toEqual(true);
    });

    it('should equal false when initial value is true', () => {
      comp.menuDisplay = true;
      comp.menuDisplay = !comp.menuDisplay;
      fixture.detectChanges;
      expect(comp.menuDisplay).toEqual(false);
    });
  });


});
