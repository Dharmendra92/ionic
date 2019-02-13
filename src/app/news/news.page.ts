import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
	data:any;
	flag:boolean=false;
  	constructor(private NewsService:NewsService ) { }

	ngOnInit() {
		flag:true;
	  	this.NewsService.getData('everything?q=bitcoin&from=2019-01-13&sortBy=publishedAt').subscribe(data=>{
	  		console.log(data);
	  		this.data = data;
	  		this.flag=false;
	  	})
	}

}