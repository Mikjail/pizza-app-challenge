import { PizzaService } from './containers/new-order/new-order.service';
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
import { StatusComponent } from './containers/status/status.component';
import { StatusOrdersComponent } from './components/status-orders/status-orders.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PersonalFormComponent,
    PizzaFormComponent,
    NewOrderComponent,
    PizzaSummaryComponent,
    StatusComponent,
    StatusOrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbCollapseModule
  ],
  providers: [
    PizzaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
