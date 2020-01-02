import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() Toggler: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  toggleSidebar(){
    this.Toggler.emit();
  }
}
