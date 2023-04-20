import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {
  navigateTo?: string;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string, navigateTo?: string },
    private dialogRef: MatDialogRef<ErrorDialogComponent>,
    private router: Router
  ) {
    this.navigateTo = data.navigateTo;
  }

  ngOnInit(): void {
  }
  onClose(): void {
    this.dialogRef.close();
  }
  public navigateAndClose(route: string): void {
    this.router.navigate([route]);
    this.dialogRef.close();
}
}
