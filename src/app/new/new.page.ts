import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  price: any = '';
  constructor(private route: ActivatedRoute) { 
    this.price = this.route.snapshot.params['price'];
  }

  ngOnInit() {
  }

}
