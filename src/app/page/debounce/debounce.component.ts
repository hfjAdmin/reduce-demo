import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {
  inputValue: any = '';
  clearTime = null;
  times = null;
  constructor(private eleRef: ElementRef) {}

  ngOnInit() {}
  keyup() {
    this.debounce(this.nodeInfo(), 600);
    // this.nodeInfo();
  }
  debounce(fn: any, time: any) {
    clearTimeout(this.clearTime);
    this.clearTime = setTimeout(fn, time);
  }
  nodeInfo() {
    // ng中不能混用getElementsByClassName 否则 error TS2339: Property 'value' does not exist on type 'Element'.
    // const inputText = document.getElementsByClassName('input')[0].value;
    // const ulList = document.getElementsByClassName('ul-list')[0];
    const inputText = this.eleRef.nativeElement.querySelector('.input');
    const ulList = this.eleRef.nativeElement.querySelector('.ul-list');
    const ulChild = document.createElement('li');
    ulChild.innerText = inputText.value;
    ulList.appendChild(ulChild);
  }
}
