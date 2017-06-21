import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routing, routedComponents } from './bpm.routing';

@NgModule({
    declarations: routedComponents,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        RouterModule,
        CommonModule,//使用ng2指令需要注入 ,
        routing
    ]
})
export class BpmModule { }