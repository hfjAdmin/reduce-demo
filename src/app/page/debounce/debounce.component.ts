import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-debounce',
    templateUrl: './debounce.component.html',
    styleUrls: ['./debounce.component.less']
})
export class DebounceComponent implements OnInit {
    inputValue: any = '';
    clearTime = null;
    constructor(private eleRef: ElementRef) {}

    ngOnInit() {}
    keyupBefore() {
        this.nodeInfo(this, 'before');
    }
    keyupAfter() {
        this.debounce(this.nodeInfo, 600);
        // this.nodeInfo();
        // clearTimeout(this.clearTime);
        // this.clearTime = setTimeout(() => {  this.nodeInfo(); }, 600);
    }
    debounce(fn: any, time: any) {
        const that = this;
        clearTimeout(that.clearTime);
        this.clearTime = setTimeout(() => {  fn(that, 'after'); }, time); // 方式一 fn是外部回调，脱离了当前组件，this就不是组件实例，获取不到eleRef
        // this.clearTime = setTimeout(() => {  this.nodeInfo(); }, time);  //  方式二
    }
    nodeInfo(that, type) {
        // ng中不能混用getElementsByClassName 否则 error TS2339: Property 'value' does not exist on type 'Element'.
        // const inputText = document.getElementsByClassName('input')[0].value;
        // const ulList = document.getElementsByClassName('ul-list')[0];
        let inputText: any = '';
        let ulList: any = '';
        if (type === 'before') {
            inputText = that.eleRef.nativeElement.querySelector('.input-left');
            ulList = that.eleRef.nativeElement.querySelector('.ul-list-left');

        } else {
            inputText = that.eleRef.nativeElement.querySelector('.input-right');
            ulList = that.eleRef.nativeElement.querySelector('.ul-list-right');
        }
        const ulChild = document.createElement('li');
        ulChild.innerText = inputText.value;
        ulList.appendChild(ulChild);
    }
}
