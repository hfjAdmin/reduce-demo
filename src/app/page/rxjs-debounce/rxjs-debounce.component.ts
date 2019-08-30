import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DemoServeService } from '../demo-serve.service';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

// tslint:disable-next-line:import-blacklist

@Component({
  selector: 'app-rxjs-debounce',
  templateUrl: './rxjs-debounce.component.html',
  styleUrls: ['./rxjs-debounce.component.less']
})
export class RxjsDebounceComponent implements OnInit {
  inputValue: any = '';
  clearTime = null;
  times = null;
  fnCopy: any;
  constructor(private eleRef: ElementRef,
              private serve: DemoServeService,
              private render: Renderer2) {}

  ngOnInit() {
    // this.serve.debounceTime$.debounceTime(1000).subscribe(res => {
    //     console.log(res);
    //     console.log(999);
    // });
    //   this.serve.debounceTime$.asObservable().pipe(debounceTime(800)).subscribe(res => {
    //       console.log(res, 333);

    //       console.log(88888888888);

    // }, () => {
    //     console.log(55);

    // });
  }
  keyupBefore() {
    this.nodeInfo(this, 'before');
}
keyupAfter() {
    console.log(44444);

    this.serve.debounceTime$.pipe(debounceTime(300)).subscribe(res => {
        console.log(11);
    });
    this.serve.debounceTime$.debounceTime(300).subscribe(res => {
        console.log(222);
    });
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
// tslint:disable-next-line:use-lifecycle-interface
ngAfterViewInit() {
    this.eleRef.nativeElement.querySelector('.input-left').focus();
}
}
