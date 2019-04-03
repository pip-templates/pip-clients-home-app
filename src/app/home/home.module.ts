import { NgModule } from '@angular/core';

import { HomeComponentsModule } from './components/components.module';
import { HomeContainersModule } from './containers/containers.module';
import { CommonModule } from '@angular/common';
// import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        // application modules
        HomeComponentsModule,
        HomeContainersModule,
        // HomeRoutingModule, // This module should be used in case of lazy-loading features
    ],
    exports: [HomeComponentsModule, HomeContainersModule]
})
export class HomeModule { }
