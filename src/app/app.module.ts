import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { PipePipe } from './cvTech/pipe.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulateComponent } from './router-simulate/router-simulate.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';
import { SearchComponent } from './cvTech/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildAComponent,
    ChildBComponent,
    GrandChildComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    PipePipe,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulateComponent,
    DetailComponent,
    DeleteCvComponent,
    AddCvComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    UpdateCvComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [
    LoginInterceptorProvider,
    LoginGuard,
    LogoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
