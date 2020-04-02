import {RouterModule, Router, Routes} from '@angular/router';

//Component 
import { EntriesComponent } from './entries/entries.component';
import { NewEntryComponent} from './new-entry/new-entry.component';
import { NgModule } from '@angular/core';
import {DeleteEntryComponent} from './delete-entry/delete-entry.component';
import { RetisterComponent } from './retister/retister.component';
import { LoginComponent } from './login/login.component';

//route
const routes:Routes = [
    {path:'',component:EntriesComponent },
    {path: 'entries', component:EntriesComponent},
    {path: 'new-entry', component:NewEntryComponent},
    {path: 'delete-entry/:id', component: DeleteEntryComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RetisterComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}
