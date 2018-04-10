import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  i=0;
  cheminImage:String='assets/image1.jpg';
  choix=['assets/image1.jpg','assets/image2.jpg','assets/image3.jpg'];
  millisecondsToWait = 500;
  username='';
  affichePrenom='';
  taches=[];
  tache='';
  rouge=[];
  date=new Date();
  precedent(){
    if(this.i==0){
      this.cheminImage=this.choix[this.choix.length-1];
      this.i=this.choix.length-1;
    }
    else{
      this.i--;
      this.cheminImage=this.choix[this.i];
    }
    }
  suivant(){
    if(this.i==this.choix.length-1){
      this.cheminImage=this.choix[0];
      this.i=0;
    }
    else{
      this.i++;
      this.cheminImage=this.choix[this.i];
    }
  }
  afficherprenom(){
    this.affichePrenom=this.username;

  }

  ajouterTache(str:String){
    if (str.includes(' ') || str.length==0)
      alert('pas d\'espace autorisé')
    else{
    this.rouge.push('rouge');
    this.date=new Date();
    this.taches.push(str +' '+this.date);
    this.tache='';
    }


  }
  supprimerTache(){
    this.taches.pop();
  }
  getElement(index:number){
  alert(this.taches[index]);

  }
  test(index:number){
    if (this.rouge[index]=='rouge'){
      this.rouge[index]='bleu';
    }
    else{
      this.rouge[index]='rouge';
    }
  }
}
