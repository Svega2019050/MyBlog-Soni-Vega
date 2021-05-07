import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PerfilComponent } from './component/perfil/perfil.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'nav-bar', component:NavBarComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'not-found', component:NotFoundComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
