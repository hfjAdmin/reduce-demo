import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-debounce",
  templateUrl: "./debounce.component.html",
  styleUrls: ["./debounce.component.css"]
})
export class DebounceComponent implements OnInit {
  inputValue: any = "";
  clearTime = null;
  times = null;
  constructor() {}

  ngOnInit() {}
  keyup() {
    this.debounce(this.nodeInfo, 600);
  }
  debounce(fn, time) {
    clearTimeout(this.clearTime);
    this.clearTime = setTimeout(() => {
      fn();
    }, time);
    console.log(this.clearTime, "this.clearTime");
  }
  nodeInfo() {
    const inputText = document.getElementsByClassName("input")[0];
    const ulList = document.getElementsByClassName("ul-list")[0];
    const ulChild = document.createElement("li");
    ulChild.innerText = inputText.value;
    ulList.appendChild(ulChild);
  }
  btn() {
    let i = 0; 
    clearTimeout(this.times)
   this.times =  setTimeout(()=>{
      console.log(i++);
      
    },5000)
  }
}
