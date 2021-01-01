import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AuthComponent} from './pages/auth/auth.component';
import {AuthGuardService} from './services/auth-guard.service';

import {VendorComponent} from "./pages/vendor/vendor.component";
import { CLanguageComponent } from './pages/clanguage/clanguage.component';
import { TurboCppComponent } from './pages/clanguage/topics/turbo-cpp/turbo-cpp.component';
import { ClanguageHomeComponent } from './pages/clanguage/topics/clanguage-home/clanguage-home.component';
import { FirstCProgrammingComponent } from './pages/clanguage/topics/first-cprogramming/first-cprogramming.component';
import { CKeywordsComponent } from './pages/clanguage/topics/ckeywords/ckeywords.component';
// bouma is great


// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clanguage',component: CLanguageComponent,
      children: [
        {path: '', component: ClanguageHomeComponent, pathMatch: 'full'},
        {path: 'turbocpp', component: TurboCppComponent},
        {path: 'first-c-program', component: FirstCProgrammingComponent},
        {path: 'c-keywords', component: CKeywordsComponent}

      ]

  },
  {path: 'first-c-program>' ,component: FirstCProgrammingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
