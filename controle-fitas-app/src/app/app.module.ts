import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { NovaFitaComponent } from './nova-fita/nova-fita.component';
import { DoarFitaComponent } from './doar-fita/doar-fita.component';
import { DadosFitaComponent } from './dados-fita/dados-fita.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { ProdutosAlertaComponent } from './produtos-alerta/produtos-alerta.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    LoginComponent,
    NovaFitaComponent,
    DoarFitaComponent,
    DadosFitaComponent,
    UserComponent,
    ProdutosComponent,
    ProdutosDetalhesComponent,
    ProdutosAlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
