import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects:object[] = [
    {id: 1, name:'Squirrel Girl', description:'Web App that allows the user to admire quotes and images from Squirrel Girl', tech:['PSQL', 'Express.js', 'KNEX.js', 'React.js', 'Bootstrap'], img:'', github:''}, {id: 2, name:'Inbox', description:'general inbox app, CRUD app', tech:['React.js', 'Bootstrap'], img:'', github:''}, {id: 3, name:'Flashcards App', description:'Flash card app that tests the users knowledge of JS methods. The user can add, delete, and edit flashcards.', tech:['PSQL', 'Express.js', 'Knex.js', 'React.js', 'Bootstrap'], img:'', github:''}
  ]
  ngOnInit() {
  }

}
