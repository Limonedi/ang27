import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'appTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('appTesting');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('appTesting app is running!');
  });

  //Pruebas Unitarias para Calculadora Component

  it('should calculate Suma correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();
    component.Selected = "+";
    component.numero1 = 2;
    component.numero2 = 3;
    component.Calcular();
    expect(component.resultado).toEqual(5);
  });

  it('should calculate Resta correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.Selected = "-";
    component.numero1 = 5;
    component.numero2 = 1;
    component.Calcular();
    expect(component.resultado).toEqual(4);
  });

  it('should calculate Multiplicacion correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    component.Selected = "*";
    component.numero1 = 5;
    component.numero2 = 2;
    component.Calcular();
    expect(component.resultado).toEqual(10);
  });

  it('should calculate Division correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    component.Selected = "/";
    component.numero1 = 50;
    component.numero2 = 2;
    component.Calcular();
    expect(component.resultado).toEqual(25);
  });
});

