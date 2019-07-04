import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { PersonalFormComponent } from './components/personal-form/personal-form.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { NewOrderComponent } from './containers/new-order/new-order.component';
import { PizzaSummaryComponent } from './components/pizza-summary/pizza-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PersonalFormComponent,
    PizzaFormComponent,
    NewOrderComponent,
    PizzaSummaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
