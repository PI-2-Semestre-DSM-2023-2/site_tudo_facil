import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component';
import { PlansComponent } from './plans/plans.component';
import { ReferencesComponent } from './references/references.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'servicos', component: ServicesComponent},
  {path:'planos', component: PlansComponent},
  {path:'testemunhos', component: ReferencesComponent},
  {path:'sobre', component: AboutComponent},
  {path:'fale-conosco', component: ContactComponent},
  {path:'faq', component: FaqComponent},
  {path:'cadastro', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
