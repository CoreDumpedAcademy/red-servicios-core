import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  //{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  //{ path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  //{ path: 'nuevos-usuarios', loadChildren: './nuevos-usuarios/nuevos-usuarios.module#NuevosUsuariosPageModule' },
  //{ path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  //{ path: 'servicios', loadChildren: './servicios/servicios.module#ServiciosPageModule' }


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
