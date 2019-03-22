import { ItemsComponent } from './items/items.component';
import { NewitemComponent } from './newitem/newitem.component';
import { EdititemComponent } from './edititem/edititem.component';
import { ItemComponent } from './item/item.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'pets', component: ItemsComponent  },
    {path: 'pets/new', component: NewitemComponent },
    {path: 'pets/:id/edit', component: EdititemComponent },
    {path: 'pets/:id', component: ItemComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }