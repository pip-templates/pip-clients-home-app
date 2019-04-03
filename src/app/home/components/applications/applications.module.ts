import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { ApplicationsModule } from 'pip-clients-shell';
import { TranslateModule } from '@ngx-translate/core';
import { PipTilesLayoutModule, PipMediaService } from 'pip-webui2-layouts';

import { ApplicationsComponent } from './applications.component';

@NgModule({
  declarations: [ApplicationsComponent],
  exports: [ApplicationsComponent],
  imports: [
    // Angular and vendors
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    TranslateModule,
    // pip-suite2 & pip-webui2
    PipTilesLayoutModule,
    // pip-clients
    ApplicationsModule
  ],
  providers: [PipMediaService]
})
export class HomeApplicationsModule { }
