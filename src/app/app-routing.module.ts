import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { CLanguageComponent } from './pages/clanguage/clanguage.component';
import { TurboCppComponent } from './pages/clanguage/topics/turbo-cpp/turbo-cpp.component';
import { ClanguageHomeComponent } from './pages/clanguage/topics/clanguage-home/clanguage-home.component';
import { FirstCProgrammingComponent } from './pages/clanguage/topics/first-cprogramming/first-cprogramming.component';
import { CKeywordsComponent } from './pages/clanguage/topics/ckeywords/ckeywords.component';
import {OperatorPrecedenceComponent} from './pages/clanguage/topics/operator-precedence/operator-precedence.component';
import {CIfStatementComponent} from './pages/clanguage/topics/cif-statement/cif-statement.component';
import {CIfElseComponent} from './pages/clanguage/topics/cif-else/cif-else.component';
import { CForLoopComponent } from './pages/clanguage/topics/cfor-loop/cfor-loop.component';
import { CWhileLoopComponent } from './pages/clanguage/topics/cwhile-loop/cwhile-loop.component';




// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clanguage', component: CLanguageComponent,
      children: [
        {path: '', component: ClanguageHomeComponent, pathMatch: 'full'},
        {path: 'turbocpp', component: TurboCppComponent},
        {path: 'first-c-program', component: FirstCProgrammingComponent},
        {path: 'c-keywords', component: CKeywordsComponent},
        {path: 'operatorprecedence', component: OperatorPrecedenceComponent},
        {path: 'cif-statement', component: CIfStatementComponent},
        {path: 'cif-else', component: CIfElseComponent},
        {path: 'cfor-loop', component: CForLoopComponent},
        {path: 'cwhile-loop', component: CWhileLoopComponent}
      ]

  }
  // {path: 'first-c-program', component: FirstCProgrammingComponent},
  // {path: 'c-keywords', component: CKeywordsComponent},
  // {path: 'turbocpp', component: TurboCppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
