# VKC Manifest Library GraphQL Module

De *VKC Manifest Library GraphQL Module* is een uitbreidingsmodule voor [Elody GraphQL](https://gitlab.com/inuits/dams/dams-graphql-service), een Backend For Frontend voor de [Elody Frontend](https://gitlab.com/inuits/dams/dams-frontend).
Elody GraphQL fungeert als doorgeefluik voor verschillende [Elody](https://elody.eu/) services, zoals [Elody Collection](https://github.com/inuits/elody-collection), [Elody Storage](https://gitlab.com/inuits/dams/dams-storage-api), en anderen.
Aan de ene kant verzamelt het diverse Elody-services, en aan de andere kant fungeert het als een [GraphQL](https://graphql.org/) endpoint voor de frontend.
Hierdoor levert het alle benodigde data hapklaar aan, zodat de Elody gebruikersinterface dynamisch kan worden opgebouwd.

## Module toevoegen aan Elody GraphQL

De basis GraphQL instantie word geïnitialiseerd aan de hand van de `createApplication` functie die wordt geëxporteerd door de [graphql-modules]('https://the-guild.dev/graphql/modules') library.
Hierbij geven we de basis Elody module mee aangevuld door alle andere graphql modules die we wensen te gebruiken.
```ts
import { createApplication } from "graphql-modules";

export const application = createApplication({
  modules: [
    baseModule,
    manifestLibraryModule,
    mediafileModule,
    advancedFilterModule,
    importModule,
    advancedSearchModule,
    savedSearchModule,
  ],
});
```
Hierna kan de GraphQL service gestart worden door de applicatie, configuratie en vertalingen mee te geven. Optioneel kunnen er ook extra endpoints worden toegevoegd.
```ts
import start from "base-graphql";

start(application, manifestLibraryAppConfig, appTranslations, []);
```

## Onderdelen

- Queries
- Vertalingen
- Applicatie configuratie
- Resolvers
- Routes
- Schema

### GraphQL Queries
Het Queries bestand bepaalt voor een groot deel de opbouw van de applicatie, hier worden onderandere het hoofdmenu, de manifest detailpagina's, sorteer opties en filters ingesteld.

### Vertalingen
Dit is een `JSON` bestand met alle specifieke vertalingen voor de *VKC Manifest Library*.

### Applicatie configuratie
Hier kunnen bepaalde globale Elody features worden in- of uitgeschakeld en geconfigureerd. Verder bevat dit bestand ook alle URL's van de verschillende Elody backend services die worden aangesproken door de GraphQL service.

### Resolvers
In de resolvers vinden we alle functies die data gaan ophalen/manipuleren speciefiek voor de *Manifest Library*

### Routes
Het `Routes` object is een mapping van alle [Vue.js router](https://router.vuejs.org/) entries. Hierin kan authenticatie aan/uit worden gezet, kan het entiteitstype van een route worden bepaald, het pad worden geconfigureerd, en kan het frontend-component worden ingesteld dat moet worden weergegeven op deze route.

### Schema
In het schema worden alle *VKC Manifest Library* specifieke entiteitstypes vastgelegd.
