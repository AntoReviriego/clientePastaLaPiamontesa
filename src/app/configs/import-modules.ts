import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';


@NgModule({
    imports: [ CommonModule
        , FormsModule
        , ReactiveFormsModule
        , CardModule
        , ToastModule
        , ButtonModule
        , CheckboxModule
        , PasswordModule
        , InputTextModule
        , InputGroupModule
        , InputGroupAddonModule
    ],
    exports: [ CommonModule
        , FormsModule
        , ReactiveFormsModule
        , CardModule
        , ToastModule
        , ButtonModule
        , CheckboxModule
        , PasswordModule
        , InputTextModule
        , InputGroupModule
        , InputGroupAddonModule
    ],
    providers:[MessageService]
})
export class ImportsModules {}