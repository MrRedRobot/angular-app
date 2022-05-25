import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public longText!: string;
  public Text!: string;

  constructor() { }

  ngOnInit(): void {
    this.Text= "Holaaaaa"
  }

}
