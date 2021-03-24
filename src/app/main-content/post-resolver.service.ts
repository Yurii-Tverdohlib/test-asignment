// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

// import { DataService } from "../data.service";
// import { Post } from "../post.model";

// @Injectable({ providedIn: 'root' })

// export class PostResolverService implements Resolve<Post[]> {
//     constructor(private dataStorageService: DataService) { }

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         let posts = this.dataStorageService.getPosts();
//         if (posts.length === 0) {
//             return this.dataStorageService.fetchPosts()
//         } else {
//             return posts
//         }
//     }
// }

//COMMENTED THIS ALSO BECAUSE IT WORKS WRONG SOMEHOW