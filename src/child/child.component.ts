import { CommonModule, NgClass } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { FormComponent } from '../form/form.component';
import { ShortenPipe } from '../shorten.pipe';
import { AppwideService } from '../appwide.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  imports: [
    FormComponent,
    NgClass,
    HighlightDirective,
    CommonModule,
    ShortenPipe,
  ],
})
export class ChildComponent implements OnInit, AfterViewInit, AfterContentInit {
  someCondition: boolean = false;
  pipeExampleArray = [
    'Manchester United',
    'Real Madrid',
    'Bayern Munich',
    'Arsenal',
    'Liverpool',
    'Tottenham Hotspur',
  ];

  @Input('dataFromParent') parentData: string;
  @Output('dataFromChild') childData = new EventEmitter<string>();

  @ViewChild('parentDataParagraph') ownElement: ElementRef;
  @ViewChild('Form') formComponent: FormComponent;

  @ContentChild('contentBetweenSelectors') contentFromParent: ElementRef;
  constructor(private appWideService: AppwideService) {}

  ngOnInit() {}

  dataToParent() {
    this.childData.emit(this.parentData);
    console.log(this.ownElement);
    this.someCondition = true;
    this.appWideService.dataTransferMethod(this.parentData);
  }
  ngAfterViewInit() {
    console.log(this.ownElement);
    console.log(this.formComponent.signUpForm);
  }

  ngAfterContentInit() {
    console.log(this.contentFromParent.nativeElement);
  }
}
