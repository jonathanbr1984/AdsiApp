import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';
import { PostService } from '../home/post.service';

@Component({
	selector: 'post-create',
	templateUrl: 'post-create.html',
})
export class PostCreateComponent implements OnInit{
	// public newPost = new Post("","",0);
	public postForm: FormGroup; 
	constructor(public navCtrl: NavController, 
		public postService: PostService, 
		public formBuilder: FormBuilder) {
		this.postForm = this.formBuilder.group({
			title: ['',Validators.compose([Validators.maxLength(60),Validators.minLength(10), Validators.required])],
			body: ['', Validators.compose([Validators.maxLength(100),Validators.minLength(10), Validators.required])],
			userId: ['1', Validators.compose([Validators.maxLength(100),Validators.minLength(10), Validators.required])]
		});
	}
	ngOnInit(){}

	addNewPost(){
		console.log("data", this.postForm.value);
		this.postService.newPost(this.postForm.value)
		.subscribe(res => {
			console.log("creado correctamente", res);
			this.navCtrl.pop();
		})
	}	
}