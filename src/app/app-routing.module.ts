// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellComponent } from './sell/sell.component';

//import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sell', component: SellComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);