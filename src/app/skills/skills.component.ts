import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

skills:{} = 
  {languages: ['JavaScript', 'Python', 'SQL', 'CSS', 'HTML'], frameworks: ['React', 'Angular', 'Django', 'Express', 'Bootstrap', 'Materialize', 'Flexbox'], other:['API-integration', 'Agile Programming']
}
  constructor() { }

  ngOnInit() {
  }

}
