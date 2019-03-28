import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public viewCurrent: any = 1;

  constructor( public router: Router, 
    public activatedRoute: ActivatedRoute) { 
      
    }

  ngOnInit() {
  }

  viewCurrentSection(section: any) {
    this.viewCurrent = section;
    console.log("Seccion de inventario",section);
  }

}
