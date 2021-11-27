import { Component } from '@angular/core';

interface ISkills {
  primary: { name: string, value: String }[],
  secondary: { name: string, value: String }[],
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  skills: ISkills = {
    primary: [
      { name: 'Angular', value: '90' },
      { name: 'JavaScript', value: '75' },
      { name: 'Node.js', value: '70' },
    ],
    secondary: [
      { name: 'HTML', value: '85' },
      { name: 'Express.js', value: '70' },
      { name: 'CSS', value: '80' },
      { name: 'MongoDB', value: '60' },
      { name: 'SASS', value: '75' },
      { name: 'AWS', value: '30' },
      { name: 'Electron.js', value: '60' },
    ]
  }
}
