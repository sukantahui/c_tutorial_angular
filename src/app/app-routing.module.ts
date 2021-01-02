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
import { DoWhileLoopComponent } from './pages/clanguage/topics/do-while-loop/do-while-loop.component';
import { CContinueComponent } from './pages/clanguage/topics/ccontinue/ccontinue.component';
import { CBreakStatementComponent } from './pages/clanguage/topics/cbreak-statement/cbreak-statement.component';
import { CSwitchCaseComponent } from './pages/clanguage/topics/cswitch-case/cswitch-case.component';
import { CGotoStatementComponent } from './pages/clanguage/topics/cgoto-statement/cgoto-statement.component';
import { CArraysComponent } from './pages/clanguage/topics/carrays/carrays.component';



// my bouma is great


// @ts-ignore
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clanguage', component: CLanguageComponent,
      children: [
        {path: '', component: ClanguageHomeComponent, pathMatch: 'full'},
        {path: 'turboCpp', component: TurboCppComponent},
        {path: 'firstCprogram', component: FirstCProgrammingComponent},
        {path: 'ckeywords', component: CKeywordsComponent},
        {path: 'operatorPrecedence', component: OperatorPrecedenceComponent},
        {path: 'cifStatement', component: CIfStatementComponent},
        {path: 'cifElse', component: CIfElseComponent},
        {path: 'cforLoop', component: CForLoopComponent},
        {path: 'cwhileLoop', component: CWhileLoopComponent},
        {path: 'doWhileLoop', component: DoWhileLoopComponent},
        {path: 'ccontinue', component: CContinueComponent},
        {path: 'cbreakStatement', component: CBreakStatementComponent},
        {path: 'cswitchCase', component: CSwitchCaseComponent},
        {path: 'cgotoStatement', component: CGotoStatementComponent},
        {path: 'carrys', component: CArraysComponent},
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
