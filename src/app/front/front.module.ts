import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontRoutingModule } from './front-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FrontComponent } from './front.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } 		from 	'./partials/header/header.component';
import { FooterComponent } 		from 	'./partials/footer/footer.component';

@NgModule({
	imports: [
		FrontRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		FlexLayoutModule
	],
	declarations: [
		HomeComponent,
		FrontComponent,
		HeaderComponent,
		FooterComponent
	]
})
export class FrontModule { }