import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';

import { UserListComponent } from './user/user-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserShowComponent } from './user/user-show.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home' , component : HomepageComponent },
 { path: 'users' , component: UserListComponent },
 {path: 'user/:id' , component: UserShowComponent}

]

@NgModule({

  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
