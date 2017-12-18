import { NgModule } from '@angular/core';
import { Carousel } from '../shared/carousel/carousel';
import { Home } from './home';
import { Router } from '@angular/router';
import { routing } from './home.routing.module';
import { HomePageTabs } from './homepage.tabs/homepage.tabs';



@NgModule({
    declarations: [
    Carousel,
    Home,
    HomePageTabs
  ],
  imports: [routing]
})
export class HomeModule{

}