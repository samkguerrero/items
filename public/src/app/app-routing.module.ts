import { ItemsComponent } from './items/items.component';
import { NewitemComponent } from './newitem/newitem.component';
import { EdititemComponent } from './edititem/edititem.component';
import { ItemComponent } from './item/item.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: ItemsComponent  },
    {path: 'new', component: NewitemComponent },
    {path: 'edit/:id', component: EdititemComponent },
    {path: 'view/:id', component: ItemComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }