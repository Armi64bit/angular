import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [

{path :'mainuser',component:AccountsComponent,children:
[{path :'users/:category',component:ListUserComponent }] },
{path :'home',component:SliderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
