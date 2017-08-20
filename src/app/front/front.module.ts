import { NgModule } 							from 	'@angular/core';
import { CommonModule } 						from 	'@angular/common';
import { MaterialModule } 						from 	'@angular/material';
import { FlexLayoutModule } 					from 	'@angular/flex-layout';
import { BrowserAnimationsModule } 				from 	'@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } 	from 	'@angular/forms';

import { SlickModule } 							from 	'ngx-slick';
import { FrontRoutingModule } 					from 	'./front-routing.module';

import { HomeComponent } 						from 	'./pages/home/home.component';
import { FrontComponent } 						from 	'./front.component';
import { HeaderComponent } 						from 	'./partials/header/header.component';
import { FooterComponent } 						from 	'./partials/footer/footer.component';
import { LeftSidenavComponent } 				from 	'./partials/sidenav/left/left.component';
import { RightSidenavComponent } 				from 	'./partials/sidenav/right/right.component';
import { SlideshowComponent } 					from 	'./partials/slideshow/slideshow.component';
import { MenuMegaComponent } 					from 	'./partials/menu-mega/menu-mega.component';
import { StoreFilterComponent } 				from 	'./partials/store-filter/store-filter.component';
import { StoreGridComponent } 					from 	'./partials/store-grid/store-grid.component';
import { CollaboratorPanelComponent } 			from 	'./partials/collaborator-panel/collaborator-panel.component';
import { ActionPanelComponent } from './partials/action-panel/action-panel.component';
import { PartnerPanelComponent } from './partials/partner-panel/partner-panel.component';
import { CategoryComponent } from './pages/category/category.component';

@NgModule({
	imports: [
		FrontRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		FlexLayoutModule,
		SlickModule.forRoot()
	],
	declarations: [
		HomeComponent,
		FrontComponent,
		HeaderComponent,
		FooterComponent,
		LeftSidenavComponent,
		RightSidenavComponent,
		SlideshowComponent,
		MenuMegaComponent,
		StoreFilterComponent,
		StoreGridComponent,
		CollaboratorPanelComponent,
		ActionPanelComponent,
		PartnerPanelComponent,
		CategoryComponent
	]
})
export class FrontModule { }