import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //formularios 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { FooterComponent } from './component/footer/footer.component';
import { PrimerBimestreComponent } from './component/home/primer-bimestre/primer-bimestre.component';
import { SegundoBimestreComponent } from './component/home/segundo-bimestre/segundo-bimestre.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    PerfilComponent,
    FooterComponent,
    PrimerBimestreComponent,
    SegundoBimestreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
