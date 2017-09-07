import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from  './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BuyersListComponent } from './pages/buyers/buyers-list.component';
import { BuyersFormComponent } from './pages/buyers/buyers-form.component';
import { VendorsListComponent } from './pages/vendors/vendors-list.component';
import { VendorsFormComponent } from './pages/vendors/vendors-form.component';
import { CategoriesListComponent } from './pages/categories/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form.component';
import { ProductsListComponent } from './pages/products/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form.component';
import { BloggersListComponent } from './pages/bloggers/bloggers-list.component';
import { BloggersFormComponent } from './pages/bloggers/bloggers-form.component';
import { NewsListComponent } from './pages/news/news-list.component';
import { NewsFormComponent } from './pages/news/news-form.component';
import { TransactionsListComponent } from './pages/transactions/transactions-list.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: AdminComponent,
		data: {
			title: 'Dashboard',
			breadcrumb: [ ['Home', 'dashboard'], ['Dashboard', 'dashboard'] ]
		},
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				data: {
					title: 'Dashboard',
					breadcrumb: [ ['Home', 'dashboard'], ['Dashboard', 'dashboard'] ]
				}
			},
			{
				path: 'buyers',
				component: BuyersListComponent,
				data: {
					title: 'Buyers',
					breadcrumb: [ ['Home', 'dashboard'], ['Buyers', 'buyers'] ]
				}
			},
			{
				path: 'buyers/create',
				component: BuyersFormComponent,
				data: {
					title: 'Buyers',
					breadcrumb: [ ['Home', 'dashboard'], ['Buyers', 'buyers'] ]
				}
			},
			{
				path: 'vendors',
				component: VendorsListComponent,
				data: {
					title: 'Vendors',
					breadcrumb: [ ['Home', 'dashboard'], ['Vendors', 'vendors'] ]
				}
			},
			{
				path: 'vendors/create',
				component: VendorsFormComponent,
				data: {
					title: 'Vendors',
					breadcrumb: [ ['Home', 'dashboard'], ['Vendors', 'vendors'] ]
				}
			},
			{
				path: 'categories',
				component: CategoriesListComponent,
				data: {
					title: 'Categories',
					breadcrumb: [ ['Home', 'dashboard'], ['Categories', 'categories'] ]
				}
			},
			{
				path: 'categories/create',
				component: CategoriesFormComponent,
				data: {
					title: 'Categories',
					breadcrumb: [ ['Home', 'dashboard'], ['Categories', 'categories'] ]
				}
			},
			{
				path: 'products',
				component: ProductsListComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'products/create',
				component: ProductsFormComponent,
				data: {
					title: 'Products',
					breadcrumb: [ ['Home', 'dashboard'], ['Products', 'products'] ]
				}
			},
			{
				path: 'bloggers',
				component: BloggersListComponent,
				data: {
					title: 'Bloggers',
					breadcrumb: [ ['Home', 'dashboard'], ['Bloggers', 'bloggers'] ]
				}
			},
			{
				path: 'bloggers/create',
				component: BloggersFormComponent,
				data: {
					title: 'Bloggers',
					breadcrumb: [ ['Home', 'dashboard'], ['Bloggers', 'bloggers'] ]
				}
			},
			{
				path: 'news',
				component: NewsListComponent,
				data: {
					title: 'News',
					breadcrumb: [ ['Home', 'dashboard'], ['News', 'news'] ]
				}
			},
			{
				path: 'news/create',
				component: NewsFormComponent,
				data: {
					title: 'News',
					breadcrumb: [ ['Home', 'dashboard'], ['News', 'news'] ]
				}
			},
			{
				path: 'transactions',
				component: TransactionsListComponent,
				data: {
					title: 'Transactions',
					breadcrumb: [ ['Home', 'dashboard'], ['Transactions', 'transactions'] ]
				}
			}
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AdminRoutingModule {
	constructor(private router: Router) {
	}
}