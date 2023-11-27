import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HowtoworkComponent } from './components/pages/howtowork/howtowork.component';
import { LightcontrolComponent } from './components/pages/lightcontrol/lightcontrol.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'howtowork', component: HowtoworkComponent },
    { path: 'lightcontrol', component: LightcontrolComponent }
];

