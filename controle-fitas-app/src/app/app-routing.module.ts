import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { DoarFitaComponent } from './doar-fita/doar-fita.component';
import { NovaFitaComponent } from './nova-fita/nova-fita.component';
import { UserComponent } from './user/user.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { DadosFitaComponent } from './dados-fita/dados-fita.component';
import { LinkListFitasStatementComponent } from './link-list-fitas-statement/link-list-fitas-statement.component';
import { AuthenticationGuard } from './util/authentication.guard';
import { SemAutorizacaoComponent } from './sem-autorizacao/sem-autorizacao.component';

const routes: Routes = [{ path: '', component:LandPageComponent},
                        { path: 'doarFita',component:DoarFitaComponent },
                        { path: 'novaFita',component:NovaFitaComponent,
                        children: [
                          {
                            path: 'fitas',
                            component: DadosFitaComponent,
                          },
                          {
                            path: '',
                            component: LinkListFitasStatementComponent,
                          },
                        ],
                      },
                        { path: 'login', component: LoginComponent },
                        {
                          path: 'a/usuarios',
                          component: UserComponent,
                          canActivate: [AuthenticationGuard],
                        },
                        { path: 'fitas', component: ProdutosComponent },
                        { path: 'fita/:fitaId', component: ProdutosDetalhesComponent},
                        { path: 'nao-autorizado', component: SemAutorizacaoComponent },

                      ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule { }
