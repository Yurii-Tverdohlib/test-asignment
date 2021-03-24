import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { DataService } from 'src/app/data.service';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataSer: DataService, private router: Router) { }
  public data: Post[];
  public id: number;
  public singlePost: Post;

  ngOnInit(): void {
    this.dataSer.currentData.subscribe(data => this.data = data)
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.singlePost = this.dataSer.getID(this.id)
    })
    // console.log(this.id)
  }
  public onGoBack() {
    this.router.navigate(['/main'])
  }

}
