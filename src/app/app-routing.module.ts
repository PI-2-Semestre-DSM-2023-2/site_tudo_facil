import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { CancellationComponent } from './cancellation/cancellation.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'servicos', component: ServicesComponent },
  { path: 'planos', component: PlansComponent },
  { path: 'testemunhos', component: ReferencesComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'fale-conosco', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'cadastro', component: HomePageComponent },
  { path: 'apresentacao', component: ApresentacaoComponent },
  { path: 'sys-tf', pathMatch: 'full', redirectTo: 'sys-tf/login' },
  { path: 'sys-tf/login', component: LoginComponent },
  { path: 'sys-tf/cadastro', component: RegisterComponent },
  { path: 'sys-tf/dashboard', component: DashboardComponent },
  { path: 'sys-tf/assinatura', component: SubscriptionComponent },
  { path: 'sys-tf/assinatura/cancelar', component: CancellationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
