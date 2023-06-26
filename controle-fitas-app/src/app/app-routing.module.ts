import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import { LoginComponent } from './login/login.component';
import { DoarFitaComponent } from './doar-fita/doar-fita.component';
import { NovaFitaComponent } from './nova-fita/nova-fita.component';
import { UserComponent } from './user/user.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';

const routes: Routes = [{ path: '', component:LandPageComponent},
                        { path: 'doarFita',component:DoarFitaComponent },
                        { path: 'novaFita',component:NovaFitaComponent },
                        { path: 'login', component: LoginComponent },
                        {
                          path: 'a/usuarios',component: UserComponent
                        },
                        { path: 'fitas', component: ProdutosComponent },
                        { path: 'fita/:fitaId', component: ProdutosDetalhesComponent},

                      ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
