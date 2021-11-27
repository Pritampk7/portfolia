import { Component } from '@angular/core';

interface ISkills {
  primary: { name: string, value: String }[],
  secondary: { name: string, value: String }[],
}
interface IExperience {
  company: string, date: String, position: String, work: String[],
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

  experience: IExperience[] = [
    {
      company: "DOXIVA- Doctor's Intelligent Virtual Assistant",
      date: '09/2020 - Present',
      position: 'Senior Full Stack Software Engineer (Angular/Node.js)',
      work: [
        'Built design in accordance with Atomic Design methodology to boost performance.',
        'Built high performing application that steadily loads content.',
        'Added video calling feature with Opentok SDK which provides low latency and high fidelity.',
        'Improved customer experience by adding Speech to Text capability.',
        'Implemented end to end dynamic questionnaire for Patient'
      ],
    },
    {
      company: "Hashtaag™ - KGJ Software Technologies",
      date: '06/2019 - 09/2020',
      position: 'Angular Developer',
      work: [
        'Responsible for overall web project management from development to execution and maintenance',
        'Improved clients internal operating efficiency by over 40%.',
        'Design and implement web architecture of Intranet site.',
      ],
    },
    {
      company: "Mahiti Infotech",
      date: '08/2018 - 06/2019',
      position: 'Angular Developer',
      work: [
        'Developed a dynamic and user-friendly website that ensures high traffic and User experience.',
        'Integrated payment gateways for online money transfer.',
      ],
    },
    {
      company: "VebCrumbs Innovations",
      date: '04/2017 - 05/2018',
      position: 'Full Stack Developer',
      work: [
        'Composed ERP software for college management',
        'Manages different activities for students like creating student profile, adding academics, maintaining contacts.',
      ],
    },
  ]

  projects = [
    { name: 'The Artist Circle', image: 'TheArtistCircle-Artist-Listing-Page.png', area: 'Web Development' },
    { name: 'Diagnoser Tool', image: 'Awak-setup-tab.png', area: 'Desktop App Development' },
    { name: 'Dcipher Liife E-com Website', image: 'DcipherLiife-Shopping-Website-Landing-Page.png', area: 'Web Development' },
    { name: 'Weather App', image: 'DcipherLiife-Shopping-Website-Landing-Page.png', area: 'Web Development' },
  ]

  open() {
    window.open('https://en.wikipedia.org/wiki/Web_developer')
  }
}
