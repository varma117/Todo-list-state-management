import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoReducer } from './reducers/todo.reducer';
import { TodoComponent } from './Components/todo/todo.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos:TodoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
