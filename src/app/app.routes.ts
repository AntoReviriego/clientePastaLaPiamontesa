import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: "Login", component: LoginComponent, data: { titulo: "" } },
    { path: "home", component: HomeComponent, data: { titulo: "" }, 
        children: [
            { path: "Dashboard", component: DashboardComponent, /*canActivate: [AuthGuard], data: { titulo: "Inicio", permiso: ["Inicio"]}*/},

        ]
    },
    { path: "", pathMatch: "full", redirectTo: "Login" },
];
