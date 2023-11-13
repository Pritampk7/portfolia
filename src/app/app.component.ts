import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ISkill {
  name: string;
  icon: string;
}
interface IExperience {
  company: string;
  date: string;
  position: string;
  work: string[];
}
interface IProject {
  name: string;
  image: string;
  area: string;
  link: string;
}
interface IBlog {
  title: string;
  subTitle: string;
  date: string;
  url: string;
  image: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  skills: ISkill[] = [
    { name: 'Python', icon: 'cib-python' },
    { name: 'Ansible', icon: 'cib-ansible' },
    { name: 'Tower AWX', icon: 'ansible-awx' },
    { name: 'Docker', icon: 'cib-docker' },
    { name: 'Terraform', icon: 'cib-terraform' },
    { name: 'Django', icon: 'cib-django' },
    { name: 'Mysql', icon: 'cib-mysql' },
    { name: 'Redhat', icon: 'cib-redhat' },
    { name: 'Cisco', icon: 'cib-cisco' },
    { name: 'GIT', icon: 'cib-git' },
    { name: 'VMware', icon: 'vmware' },
    { name: 'Jinja2', icon: 'jinja2' },

  
  ];

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
        'Implemented end to end dynamic questionnaire for Patient',
      ],
    },
    {
      company: 'Hashtaag™ - KGJ Software Technologies',
      date: '06/2019 - 09/2020',
      position: 'Angular Developer',
      work: [
        'Responsible for overall web project management from development to execution and maintenance',
        'Improved clients internal operating efficiency by over 40%.',
        'Design and implement web architecture of Intranet site.',
      ],
    },
    {
      company: 'Mahiti Infotech',
      date: '08/2018 - 06/2019',
      position: 'Angular Developer',
      work: [
        'Developed a dynamic and user-friendly website that ensures high traffic and User experience.',
        'Integrated payment gateways for online money transfer.',
      ],
    },
    {
      company: 'VebCrumbs Innovations',
      date: '04/2017 - 05/2018',
      position: 'Full Stack Developer',
      work: [
        'Composed ERP software for college management',
        'Manages different activities for students like creating student profile, adding academics, maintaining contacts.',
      ],
    },
  ];

  projects: IProject[] = [
    {
      name: 'Zilpanet',
      image: 'zilpanet.jpg',
      area: 'Network Automation',
      link: 'https://gifted-swartz-d42b00.netlify.app/',
    },
    {
      name: 'Ciena blueplanet NAO tool',
      image: 'bp.png',
      area: 'Network Automation',
      link: '',
    },
    {
      name: 'BMC Remdey workflow automationm',
      image: 'remedy.png',
      area: 'Workflow automation',
      link: '',
    }
  ];

  blogs: IBlog[] = [
    {
      title: 'OpenConfig: Revolutionizing Network Automation and Management',
      subTitle: 'ALl you need to know about setting up openconfig and Apply',
      date: 'June 8, 2023',
      image: 'oc.webp',
      url: 'https://python.plainenglish.io/openconfig-revolutionizing-network-automation-and-management-1675d06f98ad',
    },
    {
      title: 'Ansible setup for Network Automation',
      subTitle: 'The prerequisite you need for Ansible set up',
      date: 'Nov 28, 2021',
      image: 'ansible.webp',
      url: 'https://medium.com/@pritamofficial7/ansible-setup-for-network-automation-5f8b12838bbd',
    },
    {
      title: 'The regular expression in a nutshell',
      subTitle: 'The basics of regular expressions',
      date: 'Nov 21, 2021',
      image: 're.webp',
      url: 'https://medium.com/@pritamofficial7/the-regular-expression-in-a-nutshell-87c4f700ec17',
    },
  ];

  socialLinks: { icon: String; link: string }[] = [
    {
      icon: 'cib-linkedin',
      link: 'www.linkedin.com/in/pritam-kalagekar-6971337b',
    },
    { icon: 'cib-medium', link: 'https://medium.com/@pritamofficial7' },
  ];

  email = 'pritamofficial7@gmail.com';

  constructor(private _snackBar: MatSnackBar) {}

  open(url: string) {
    if (!url) {
      this._snackBar.open('Link Not Available', '', {
        duration: 300,
        panelClass: 'error-notification-overlay',
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }
    window.open(url);
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email);
    // this._snackBar.open('Email Copied', '', {
    //   duration: 300,
    //   panelClass: 'success-notification-overlay',
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top'
    // });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = '../assets/images/Resume.pdf';
    link.download = 'preetam"s resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
