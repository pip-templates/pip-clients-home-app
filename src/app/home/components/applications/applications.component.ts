import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ApplicationGroup, ApplicationsService, ApplicationTile, ApplicationsConfigService } from 'pip-clients-shell';
import { TranslateService } from '@ngx-translate/core';
import { PipMediaService } from 'pip-webui2-layouts';
import { Observable } from 'rxjs';

import { getHomeApplicationsTranslations } from './applications.strings';

@Component({
    selector: 'pip-applications',
    templateUrl: './applications.component.html',
    styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnChanges {

    public keys = Object.keys;
    public width = 0;
    public isAnimated = false;

    @Input() groups: ApplicationGroup[];
    @Input() language: string;

    @Output() resized = new EventEmitter<number>();

    constructor(
        private translate: TranslateService,
        private applicationsService: ApplicationsService,
        private applicationsConfigService: ApplicationsConfigService,
        public media: PipMediaService,
    ) {
        const ApplicationsTranslations = getHomeApplicationsTranslations(this.applicationsConfigService.favouritesGroupName);

        this.translate.setTranslation('en', ApplicationsTranslations.en, true);
        this.translate.setTranslation('ru', ApplicationsTranslations.ru, true);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes['groups'] && Array.isArray(changes['groups'].currentValue) && changes['groups'].currentValue.length > 1) {
            setTimeout(() => {
                this.isAnimated = true;
            }, 1000);
        }
    }

    public trackByName(group: ApplicationGroup) {
        return group.name;
    }

    public trackById(app: ApplicationTile) {
        return app.id;
    }

    public openApplication(app: ApplicationTile) {
        window.open(app.url, '_self');
    }

    public isCustomIcon(name: string) {
        return name.includes('-');
    }

    public toggleFavourite(event: Event, app: ApplicationTile) {
        event.stopPropagation();
        this.applicationsService.toggleFavourite(app);
    }

    public onResize(tilesLayoutSize: number) {
        this.width = tilesLayoutSize;
        this.resized.emit(this.width);
    }

}
