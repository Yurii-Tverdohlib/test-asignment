import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { Post } from '../post.model';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { CroppedEvent } from 'ngx-photo-editor';
import { map, tap } from 'rxjs/operators';

interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  constructor(public dialog: MatDialog) { }

  public onPostCreate() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'modal-window.html',
})

export class DialogContentExampleDialog implements OnInit {
  public data: Post[];
  public json;
  public imageChangedEvent: any;
  public base64: any;

  public selected: Select[] = [
    { value: 'css-0', viewValue: 'CSS' },
    { value: 'html-1', viewValue: 'HTML' },
    { value: 'js-2', viewValue: 'JS' }
  ];

  constructor(private dataSer: DataService, private http: HttpClient) { }

  ngOnInit() {
    this.dataSer.currentData.subscribe(data => this.data = data)
  }

  public postForm = new FormGroup({
    select: new FormControl(null, Validators.required),
    imageURL: new FormControl(null, Validators.required),
    heading: new FormControl(null, Validators.required,),
    textAreaSmall: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  });

  public StorePosts() {
    this.data.unshift(this.postForm.value);
    this.dataSer.storePosts();
  }

  // public FetchPosts() {
  //   this.dataSer.fetchPosts().subscribe();
  // }

  public fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
  }

  public imageCropped(event: CroppedEvent) {
    this.base64 = event.base64;
  }
}