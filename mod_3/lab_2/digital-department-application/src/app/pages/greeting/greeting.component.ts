import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'app-greeting', 
   imports: [FormsModule, CommonModule, RouterModule],
   templateUrl: './greeting.component.html',
   styleUrl: './greeting.component.css'
 })
export class GreetingComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  ngOnChanges(changes: SimpleChanges): void {
     console.log(changes);
  }

  ngOnInit(): void {
     console.log('ngOnInit');
  }

  ngDoCheck(): void {
     console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
     console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
     console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
     console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
     console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
     console.log('ngOnDestroy');
  }

  name: any

  sayHi(): void {
    alert("Привет, " + this.name);
  }

}
