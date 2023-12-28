import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Name1: string = "Marvellous Infosystems";
  public Name: string = "Marvellous Infosystems";

  public upper() {
    this.Name1 = this.Name1.toUpperCase();

  }

  public lower() {
    this.Name = this.Name.toLowerCase();
  }
}
