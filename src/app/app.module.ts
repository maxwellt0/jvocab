import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome/angular-font-awesome';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
  {path: 'dictionary', component: DictionaryComponent},
];

@NgModule({
  declarations: [
    DictionaryComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
