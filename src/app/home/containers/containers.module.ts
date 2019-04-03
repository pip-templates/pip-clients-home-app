import { NgModule } from '@angular/core';

import { HomeContainerModule } from './home-container/home-container.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        // application modules
        HomeContainerModule
    ],
    exports: [HomeContainerModule]
})
export class HomeContainersModule { }
