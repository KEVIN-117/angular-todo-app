import { Routes } from '@angular/router';
import {MainComponent} from "./shared/main/main.component";
import {ListComponent} from "./todo-app/list/list.component";
import {UpdateComponent} from "./todo-app/forms/update/update.component";
import {CreateComponent} from "./todo-app/forms/create/create.component";
import {DetailsComponent} from "./todo-app/details/details.component";
import {TodoAppComponent} from "./todo-app/todo-app.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'todo',
    component: TodoAppComponent,
    children:[
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'update/:id',
        component: UpdateComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'detail/:id',
        component: DetailsComponent
      }
    ]
  }
];
