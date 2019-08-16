import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavListComponent } from './header-nav-list.component';

describe('HeaderNavListComponent', () => {
  let component: HeaderNavListComponent;
  let fixture: ComponentFixture<HeaderNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
