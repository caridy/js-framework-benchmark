//we only need reflect in JIT mode
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
