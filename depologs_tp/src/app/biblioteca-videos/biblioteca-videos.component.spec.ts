import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaVideosComponent } from './biblioteca-videos.component';

describe('BibliotecaVideosComponent', () => {
  let component: BibliotecaVideosComponent;
  let fixture: ComponentFixture<BibliotecaVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaVideosComponent]
    });
    fixture = TestBed.createComponent(BibliotecaVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
