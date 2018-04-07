import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostService} from './post.service';
import { PostCreateComponent } from '../post-create/post-create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public posts: any;
	// public a: Number = 20;
	// public b: any = 30;
  constructor(public navCtrl: NavController, 
  	public  postService: PostService) {		
  	// this.a = 5;
  	// console.log(this.a + this.b);
  }

  ionViewWillEnter(){
  	this.postService.getAllPost()
  	.subscribe(res => {
      this.posts = res;
  		// console.log("Datos en HomePage", res);
  	},err => {
  		console.log("Error", err);
  	})
  }

/*
* Este metodo carga la vista para crear un nuevo post
*/
  loadCreatePost(){
    this.navCtrl.push(PostCreateComponent);
  }

}
