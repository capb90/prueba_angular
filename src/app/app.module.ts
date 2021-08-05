import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './datesPrueba/date/date.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Prime Modules */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {SplitterModule} from 'primeng/splitter';
import { TagModule } from 'primeng/tag';
import {DividerModule} from 'primeng/divider';
import {OverlayPanelModule} from 'primeng/overlaypanel';
/** Prime Serivces */
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    OverlayPanelModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    ToolbarModule,
    TableModule,
    DividerModule,
    SplitterModule,
    DialogModule,
    RippleModule,
    TagModule,
    DropdownModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
