import { Component } from '@angular/core';

interface ISkill {
  primary: { name: string, value: string }[],
  secondary: { name: string, value: string }[],
}
interface IExperience {
  company: string, date: string, position: string, work: string[],
}
interface IProject {
  name: string, image: string, area: string
}
interface IBlog {
  title: string, subTitle: string, date: string, url: string, image: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  skills: ISkill = {
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

  projects: IProject[] = [
    { name: 'The Artist Circle', image: '2.png', area: 'Web Development' },
    { name: 'Diagnoser Tool', image: '1.png', area: 'Desktop App Development' },
    { name: 'E-commerce Website', image: '3.png', area: 'Web Development' },
  ]

  blogs: IBlog[] = [
    {
      title: 'MongoDB Client-Side Field Level Encryption (CSFLE) for Beginners',
      subTitle: 'Add an extra layer of security to your application.',
      date: 'Sep 7, 2021',
      image: 'laptop.jpeg',
      url: 'https://javascript.plainenglish.io/mongodb-client-side-field-level-encryption-csfle-for-beginners-5eed965d4ba3',
    },
    {
      title: '12 Useful VS Code Extensions to Help Make Web Development Easier',
      subTitle: 'Boost your productivity as a developer.',
      date: 'Jun 20, 2021',
      image: 'code_editor.jpeg',
      url: 'https://javascript.plainenglish.io/12-useful-vs-code-extensions-to-help-make-web-development-easier-6960680c56d4',
    },
    {
      title: 'Using the ng2-tel-input Package in Angular',
      subTitle: 'A modern, configurable international telephone input',
      date: 'Apr 4, 2021',
      image: 'phone.jpeg',
      url: 'https://javascript.plainenglish.io/using-ng2-tel-input-in-angular-aa33c3ced92f',
    },
  ];

  open(url: string) {
    window.open(url)
  }
}
