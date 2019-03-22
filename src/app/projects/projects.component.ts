import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projects:object[] = [
    {id: 1, name:'Squirrel Girl', description:'Web App that allows the user to admire quotes and images from Squirrel Girl', tech:['PSQL', 'Express.js', 'KNEX.js', 'React.js', 'Bootstrap'], img:'', github:''}, {id: 2, name:'Inbox', description:'general inbox app, CRUD app', tech:['React.js', 'Bootstrap', 'Galvanize API'], img:'', github:''}, {id: 3, name:'Flashcards App', description:'Flash card app that tests the users knowledge of JS methods. The user can add, delete, and edit flashcards.', tech:['PSQL', 'Express.js', 'Knex.js', 'React.js', 'Bootstrap'], img:'', github:''}, {id: 4, name:'Galvanize Eats', description:'Restraunt website with a menu checkout.', tech:['Vanilla JavaScript', 'Bootstrap', 'Galvanize API'], img:'', github:'https://github.com/jculver1/galvanize-eats'}, {id: 5, name:'Galvanize Shopping Cart', description:'Web application that allows the user to add items to a shopping cart and submit to an API. ', tech:['React', 'Bootstrap', 'Galvanize API'], img:'', github:''}, {id: 6, name:'Farmers Mark-It', description:'Farmers markit app that allows the user to search by business owner or my product to find vendors at local farmers market. ', tech:['Vue.js', 'Flexbox', 'Express.js', 'PSQL', 'Knex.js'], img:'', github:'https://github.com/Mstapleton22/farmers-markit-frontend'}
  ]
  ngOnInit() {
  }

}
