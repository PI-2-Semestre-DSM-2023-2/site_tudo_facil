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


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ServicesComponent,
    PlansComponent,
    ReferencesComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    /*RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'servicos', component: ServicesComponent },
      { path: 'planos', component: PlansComponent },
      { path: 'testemunhos', component: ReferencesComponent },
      { path: 'sobre', component: AboutComponent },
      { path: 'fale-conosco', component: ContactComponent }
    ]),*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
