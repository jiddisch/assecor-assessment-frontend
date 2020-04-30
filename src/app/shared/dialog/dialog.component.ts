import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dialogFormGroup: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.dialogFormGroup = new FormGroup({
      name: new FormControl(''),
      races: new FormControl(''),
      cars: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.dialogFormGroup.value);
  }

}
