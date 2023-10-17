import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './user/components/list-user/list-user.component';
import { AccountsComponent } from './user/components/accounts/accounts.component';
import { SliderComponent } from './slider/slider.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{path:'',redirectTo:"home",pathMatch:'full'},
{path :'mainuser',loadChildren : ()=> import ('./user/user.module').then(m=>m.UserModule)},
{path :'home',component:SliderComponent },
{path :'**',component:NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
