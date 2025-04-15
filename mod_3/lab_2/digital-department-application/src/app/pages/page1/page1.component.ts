import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ItemFormComponent } from '../../item-form/item-form.component';
import { ItemFormTDComponent } from '../../item-form2/item-form2.component';
 
 interface Item {
   name: string;
   description: string;
   price: number;
 }
 
 @Component({
   selector: 'app-page1',
   imports: [CommonModule, RouterModule, ItemFormComponent, ItemFormTDComponent],
   templateUrl: './page1.component.html',
   styleUrl: './page1.component.css'
 })
 export class Page1Component implements OnInit{
  id: string | null = "0";
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goMain(){
    this.router.navigateByUrl("/")
  }

  items: Item[] = [];
 
   onFormSubmit(itemData: any) {
     this.items.push({
       name: itemData.name,
       description: itemData.description,
       price: parseFloat(itemData.price)
     });
   }
}