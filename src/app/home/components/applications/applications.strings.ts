export function getHomeApplicationsTranslations(favouritesGroupName: string) {
    return {
        en: {
            [favouritesGroupName]: 'Favorite',
            'administration': 'Administration',
            'config': 'Configuration',
            'control': 'Control Automation'
        },
        ru: {
            [favouritesGroupName]: 'Избранное',
            'administration': 'Администрирование',
            'config': 'Конфигурации',
            'control': 'Автоматизация управления'
        }
    };
}
