import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent {
  category: string = '';
  maclasse1 = 'cl1';
  maclasse2 = 'cl2';
  constructor(private ac: ActivatedRoute,private us:UserService) {
    //injecter le service activatedroute ce composant
    ac.snapshot.paramMap.get('');
    // console.log(this.ac.snapshot.paramMap.get(''));
  }
  list: User[] =[]

  //methode hook qui fait partie de cycle de vie d'un composant
  //apple automatiquement apres la creaction du composant
  ngOnInit() {
    this.list=this.us.getAllUser();
    // console.log(this.ac.snapshot.params['category']);
// this.category=this.ac.snapshot.params['category'];
    console.log( this.list);
    this.ac.paramMap.subscribe(res=>this.category=this.ac.snapshot.paramMap.get('category'))
    // this.category= this.ac.snapshot.paramMap.get('category');

  }
  green: string = 'green';


  delete(pos: number) {
    this.list.splice(pos, 1);
  }
}
