import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'core',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'about',
        children:[
        {
          path: '',
          loadChildren: '../about/about.module#AboutPageModule'
        }
        ]
      },
      {
        path: 'nuevos-usuarios',
        children:[
        {
          path: '',
          loadChildren:  '../nuevos-usuarios/nuevos-usuarios.module#NuevosUsuariosPageModule'
        }
        ]
      },
      {
        path: 'register',
        children:[
        {
          path: '',
          loadChildren: '../register/register.module#RegisterPageModule'
        }
        ]
      },
      {
        path: 'servicios',
        children:[
        {
          path: '',
          loadChildren: '../servicios/servicios.module#ServiciosPageModule'
        }
        ]
      },
      {
        path: 'login',
        children:[
        {
          path: '',
          loadChildren: '../login/login.module#LoginPageModule'
        }
        ]
      },
      {
        path: '',
        redirectTo: '/core/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/core/home',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
