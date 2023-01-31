import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './components/suma/suma.component';
import { DivisionComponent } from './components/division/division.component';
import { MultiplicacionComponent } from './components/multiplicacion/multiplicacion.component';
import { RestaComponent } from './components/resta/resta.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    DivisionComponent,
    MultiplicacionComponent,
    RestaComponent
  ],
  imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
  ],
  providers: [],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
