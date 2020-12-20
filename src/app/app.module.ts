import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './core/material.module';



import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PictureCarouselComponent } from './pages/home/picture-carousel/picture-carousel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './pages/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {NgxPrintModule} from 'ngx-print';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { SncakBarComponent } from './common/sncak-bar/sncak-bar.component';
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
import { LoaidngRippleComponent } from './shared/loaidng-ripple/loaidng-ripple.component';
import { LoaidngEllipsisComponent } from './shared/loaidng-ellipsis/loaidng-ellipsis.component';
import { LoaidngHourglassComponent } from './shared/loaidng-hourglass/loaidng-hourglass.component';
import { LoaidngRollerComponent } from './shared/loaidng-roller/loaidng-roller.component';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './date-format';
import {NgSelectModule} from '@ng-select/ng-select';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import { CLanguageComponent } from './pages/clanguage/clanguage.component';
import { TurboCppComponent } from './pages/clanguage/topics/turbo-cpp/turbo-cpp.component';
import { ClanguageHomeComponent } from './pages/clanguage/topics/clanguage-home/clanguage-home.component';
import { NgxWatermarkModule } from 'ngx-watermark';
import { FirstCProgrammingComponent } from './pages/clanguage/topics/first-cprogramming/first-cprogramming.component';
import { CKeywordsComponent } from './pages/clanguage/topics/ckeywords/ckeywords.component';
import {TooltipModule} from 'ng2-tooltip-directive';
import {PopoverModule} from 'ngx-smart-popover';
import {NgMarqueeModule} from 'ng-marquee';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { OperatorPrecedenceComponent } from './pages/clanguage/topics/operator-precedence/operator-precedence.component';
import { CIfStatementComponent } from './pages/clanguage/topics/cif-statement/cif-statement.component';
import { CIfElseComponent } from './pages/clanguage/topics/cif-else/cif-else.component';
import { CForLoopComponent } from './pages/clanguage/topics/cfor-loop/cfor-loop.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PictureCarouselComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    SncakBarComponent,
    ConfirmationDialogComponent,
    LoaidngRippleComponent,
    LoaidngEllipsisComponent,
    LoaidngHourglassComponent,
    LoaidngRollerComponent,

    CLanguageComponent,
    TurboCppComponent,
    ClanguageHomeComponent,
    FirstCProgrammingComponent,
    CKeywordsComponent,
    NewsFeedComponent,
    OperatorPrecedenceComponent,
    CIfStatementComponent,
    CIfElseComponent,
    CForLoopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPrintModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgSelectModule,
    ShowHidePasswordModule,
    NgxWatermarkModule,
    TooltipModule,
    PopoverModule,
    NgMarqueeModule
  ],
  providers: [{provide: DateAdapter, useClass: DateFormat} ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); // DD/MM/YYYY
  }
}
