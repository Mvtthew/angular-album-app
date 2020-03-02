import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { AlbumComponent } from './views/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoLargeComponent } from './components/photo/photo-large/photo-large.component';
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		AboutComponent,
		AlbumCardComponent,
		AlbumComponent,
		PhotoComponent,
		PhotoLargeComponent,
		CopyrightComponent,
		LoadingComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
