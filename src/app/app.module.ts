// #docregion
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent }       from './app.component';
import { appRoutingProviders } from './app.routing';

import { HeroesModule } from './heroes/heroes.module';

import { LoginComponent } from './login.component';

import { DialogService }  from './dialog.service';

import { AsyncNgModuleLoader } from './shared/async-ng-module-loader';

import { routing } from './app.routing';

import { DemoEffects, RouterEffects, reducer } from './ngrx';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HeroesModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(DemoEffects),
    EffectsModule.runAfterBootstrap(RouterEffects)
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    appRoutingProviders,
    DialogService,
    // Add to main providers
    { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
// #enddocregion
