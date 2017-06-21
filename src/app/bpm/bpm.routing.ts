import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BpmIndex } from './bpm.index';
import { BpmdesFrame } from './bpmdes/bpmdes.component';
import { BpmForm } from './bpmform/bpmform.component';
import { BpmNode } from './bpmnode/bpmnode.component';

const routes: Routes = [
    {
        path: '',
        component: BpmIndex,
        children: [
            { path: 'bpmdes', component: BpmdesFrame },
            { path: 'bpmform', component: BpmForm },
            { path: 'bpmnode', component: BpmNode }
        ]
    },

]

export const routedComponents = [BpmIndex, BpmdesFrame, BpmForm, BpmNode];
export const routing = RouterModule.forChild(routes);