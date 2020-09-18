import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'sell', component: SellComponent },


    // otherwise redirect to login
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);