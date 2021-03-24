import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  public data: Post[];

  constructor(private router: Router, private dataSer: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSer.currentData.subscribe(data => this.data = data);
  }

  public onSelect(index) {
    // console.log(index)
    this.router.navigate(['/main', index])
  }
}
