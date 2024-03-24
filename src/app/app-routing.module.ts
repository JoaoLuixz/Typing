import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TypingComponent } from './components/typing/typing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'typing', component: TypingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
