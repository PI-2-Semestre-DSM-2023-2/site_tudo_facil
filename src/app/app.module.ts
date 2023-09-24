import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component';
import { PlansComponent } from './plans/plans.component';
import { ReferencesComponent } from './references/references.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ServicesComponent,
    PlansComponent,
    ReferencesComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ApresentacaoComponent,
    LoginComponent,
    RegisterComponent,
    SubscriptionComponent,
    CancellationComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
