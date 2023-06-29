import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
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
import { TotalUsersComponent } from './user/total-users/total-users.component';
import { LinkListFitasStatementComponent } from './link-list-fitas-statement/link-list-fitas-statement.component';



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
    ProdutosAlertaComponent,
    TotalUsersComponent,
    LinkListFitasStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
