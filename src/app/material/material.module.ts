import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatIconModule
];
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
